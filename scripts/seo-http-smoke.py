#!/usr/bin/env python3
"""HTTP smoke checks for the built/development NOVATECH server.

Usage: python scripts/seo-http-smoke.py [base-url]
The server must already be running (for example, `npm run dev -- --port 4173`).
"""
from __future__ import annotations

import sys
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser

BASE = (sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:4173").rstrip("/")
SITE = "https://novatechsoft.com"
VALID = [
    "/",
    "/accounting-software",
    "/database-solutions",
    "/software-solutions",
    "/business-systems",
    "/erp",
    "/herat",
    "/portfolio",
    "/portfolio/logistics-management-system",
]
INVALID = [
    "/blog/seo-regression-invalid-slug",
    "/portfolio/seo-regression-invalid-slug",
    "/oil-and-gas-software/seo-regression-invalid-slug",
]
SPECIAL = ["/sitemap.xml", "/robots.txt"]


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.canonical = ""
        self.og_url = ""
        self.robots = ""
        self.ids: set[str] = set()
        self.srcsets: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr = dict(attrs)
        if tag == "link" and attr.get("rel") == "canonical":
            self.canonical = attr.get("href") or ""
        elif tag == "meta" and attr.get("property") == "og:url":
            self.og_url = attr.get("content") or ""
        elif tag == "meta" and attr.get("name") == "robots":
            self.robots = attr.get("content") or ""
        if attr.get("id"):
            self.ids.add(attr["id"] or "")
        if attr.get("srcset"):
            self.srcsets.append(attr["srcset"] or "")


def fetch(path: str) -> tuple[int, bytes, dict[str, str]]:
    request = urllib.request.Request(
        BASE + path, headers={"User-Agent": "NOVATECH-SEO-smoke/1.0"}
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            return response.status, response.read(), {
                key.lower(): value for key, value in response.headers.items()
            }
    except urllib.error.HTTPError as error:
        return error.code, error.read(), {
            key.lower(): value for key, value in error.headers.items()
        }


def main() -> int:
    failures: list[str] = []
    checks_run = 0
    paths = VALID + INVALID + SPECIAL
    with ThreadPoolExecutor(max_workers=6) as pool:
        results = dict(zip(paths, pool.map(fetch, paths)))

    for path in VALID:
        checks_run += 1
        status, _, _ = results[path]
        ok = status == 200
        print(f"{'PASS' if ok else 'FAIL'} valid {path}: HTTP {status}")
        if not ok:
            failures.append(f"{path} returned HTTP {status}, expected 200")

    parsed: dict[str, PageParser] = {}
    for path in VALID:
        status, body, _ = results[path]
        if status != 200:
            continue
        checks_run += 1
        page = PageParser()
        page.feed(body.decode("utf-8", errors="replace"))
        parsed[path] = page
        expected = SITE + (path if path != "/" else "/")
        ok = page.canonical == expected and page.og_url == expected
        print(f"{'PASS' if ok else 'FAIL'} metadata {path}: canonical={page.canonical!r}, og:url={page.og_url!r}")
        if not ok:
            failures.append(f"{path} canonical/Open Graph URL did not match {expected}")

    for path in INVALID:
        checks_run += 1
        status, body, headers = results[path]
        page = PageParser()
        page.feed(body.decode("utf-8", errors="replace"))
        status_ok = status == 404
        # Require an explicit noindex directive as well as the real 404; this
        # protects crawlers that inspect the rendered error response.
        nonindexable = "noindex" in page.robots.lower() or "noindex" in headers.get("x-robots-tag", "").lower()
        urls_absent = not page.canonical and not page.og_url
        ok = status_ok and nonindexable and urls_absent
        print(f"{'PASS' if ok else 'FAIL'} invalid {path}: HTTP {status}, nonindexable={nonindexable}, canonical={bool(page.canonical)}, og:url={bool(page.og_url)}")
        if not ok:
            failures.append(f"{path} must return 404 and no canonical/og:url")

    accounting = parsed.get("/accounting-software")
    if accounting:
        checks_run += 1
        ok = "order" in accounting.ids
        print(f"{'PASS' if ok else 'FAIL'} accounting #order target present")
        if not ok:
            failures.append("accounting page is missing id=order")

    software = parsed.get("/software-solutions")
    if software:
        checks_run += 1
        ok = any("novatech-management-dashboard-960w.webp" in srcset for srcset in software.srcsets)
        print(f"{'PASS' if ok else 'FAIL'} software responsive dashboard srcset present")
        if not ok:
            failures.append("software page is missing its generated dashboard srcset")

    sitemap_status, sitemap_body, _ = results["/sitemap.xml"]
    checks_run += 1
    try:
        root = ET.fromstring(sitemap_body)
        sitemap_ok = sitemap_status == 200 and root.tag.endswith("urlset")
        sitemap_urls = len(root)
    except ET.ParseError:
        sitemap_ok = False
        sitemap_urls = 0
    print(f"{'PASS' if sitemap_ok else 'FAIL'} sitemap: HTTP {sitemap_status}, parsed URLs={sitemap_urls}")
    if not sitemap_ok:
        failures.append("sitemap.xml did not return a valid XML urlset")

    robots_status, robots_body, _ = results["/robots.txt"]
    checks_run += 1
    robots_text = robots_body.decode("utf-8", errors="replace")
    robots_ok = robots_status == 200 and "User-agent:" in robots_text and "Sitemap:" in robots_text
    print(f"{'PASS' if robots_ok else 'FAIL'} robots.txt: HTTP {robots_status}, sitemap directive={('Sitemap:' in robots_text)}")
    if not robots_ok:
        failures.append("robots.txt is missing a user-agent or sitemap directive")

    print(f"\n{len(failures)} failure(s); {checks_run - len(failures)} of {checks_run} checks passed.")
    if failures:
        for failure in failures:
            print(f"- {failure}")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
