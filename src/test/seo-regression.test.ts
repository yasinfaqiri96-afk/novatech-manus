import { describe, expect, it } from "vitest";

import { homeHead } from "@/routes/index";
import { buildMetadata } from "@/lib/metadata";
import { metaToHead } from "@/lib/next-head";
import { siteUrl } from "@/lib/site-content";
import { notFound } from "@/shims/next-navigation";
import { softwareSolutionsFaq } from "@/legacy/fa/software-solutions/faq-items";
import { redirectToCanonicalHost } from "@/server";

function contentOf(
  entries: Array<{ name?: string; property?: string; content?: string }>,
  key: string,
  value: string,
) {
  return entries.find((entry) => entry[key as "name" | "property"] === value)?.content;
}

describe("SEO metadata regressions", () => {
  it("uses one canonical URL and matching OG/Twitter metadata on the homepage", () => {
    const head = homeHead() as {
      meta: Array<{ title?: string; name?: string; property?: string; content?: string }>;
      links: Array<{ rel: string; href: string }>;
    };

    expect(head.links.filter((link) => link.rel === "canonical")).toEqual([
      { rel: "canonical", href: `${siteUrl}/` },
    ]);
    expect(contentOf(head.meta, "property", "og:url")).toBe(`${siteUrl}/`);
    expect(contentOf(head.meta, "property", "og:site_name")).toBeTruthy();
    expect(contentOf(head.meta, "property", "og:title")).toBe(
      contentOf(head.meta, "name", "twitter:title"),
    );
    expect(contentOf(head.meta, "property", "og:description")).toBe(
      contentOf(head.meta, "name", "twitter:description"),
    );
    expect(contentOf(head.meta, "property", "og:image")).toBe(
      contentOf(head.meta, "name", "twitter:image"),
    );
  });

  it("omits canonical and og:url while preserving noindex on an unknown detail page", () => {
    const head = metaToHead(
      buildMetadata({
        title: "نمونه‌کار پیدا نشد",
        description: "این نمونه‌کار وجود ندارد.",
        path: "/portfolio/unknown-regression-slug",
        noIndex: true,
      }),
    ) as {
      meta: Array<{ name?: string; property?: string; content?: string }>;
      links: Array<{ rel: string; href: string }>;
    };

    expect(head.links.some((link) => link.rel === "canonical")).toBe(false);
    expect(contentOf(head.meta, "property", "og:url")).toBeUndefined();
    expect(contentOf(head.meta, "name", "robots")).toBe("noindex, nofollow");
  });

  it("throws the router not-found signal for legacy Next notFound() calls", () => {
    let thrown: unknown;
    try {
      notFound();
    } catch (error) {
      thrown = error;
    }
    expect(thrown).toMatchObject({ isNotFound: true });
  });

  it("does not publish an unverified fixed installation-time promise", () => {
    expect(softwareSolutionsFaq[1].answer).not.toMatch(/کمتر از یک هفته|در کمتر از یک هفته/);
    expect(softwareSolutionsFaq[1].answer).toContain("نیازسنجی");
  });

  it("redirects the www host while preserving path and query parameters", () => {
    const response = redirectToCanonicalHost(
      new Request("https://www.novatechsoft.com/contact?source=campaign"),
    );

    expect(response?.status).toBe(301);
    expect(response?.headers.get("location")).toBe(
      "https://novatechsoft.com/contact?source=campaign",
    );
    expect(redirectToCanonicalHost(new Request("https://novatechsoft.com/"))).toBeNull();
  });
});
