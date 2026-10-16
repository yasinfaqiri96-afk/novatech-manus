#!/usr/bin/env python3
"""Create size-qualified WebP variants for selected existing site images.

Original assets are never modified. A variant is kept only when it is smaller
than its source; the generated manifest therefore never advertises a missing or
worse-than-source candidate. Requires Pillow (PIL).
"""

from __future__ import annotations

import json
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "images"
MANIFEST = ROOT / "src" / "lib" / "responsive-images.generated.json"

# These images are rendered in page content, cards, or the interactive portfolio
# preview. Widths reflect their real use; files not listed here remain untouched.
SOURCES: dict[str, tuple[int, ...]] = {
    "portfolio/novatech-management-dashboard.png": (480, 960, 1440),
    "portfolio/novatech-team.webp": (320, 640, 960, 1324),
    "portfolio/ariana-desktop.jpg": (480, 960, 1440),
    "portfolio/ariana-mobile.jpg": (320, 375),
    "portfolio/noor-desktop.jpg": (480, 960, 1440),
    "portfolio/noor-mobile.jpg": (320, 390),
    "portfolio/lepetit-desktop.jpg": (480, 960, 1440),
    "portfolio/lepetit-mobile.jpg": (320, 390),
}


def make_variant(source: Path, output: Path, target_width: int) -> tuple[bool, str]:
    source_bytes = source.stat().st_size
    with Image.open(source) as original:
        original.load()
        source_width, source_height = original.size
        if target_width >= source_width:
            return False, f"skipped {target_width}w (source is {source_width}w)"

        target_height = max(1, round(source_height * target_width / source_width))
        has_alpha = (
            original.mode in {"RGBA", "LA"}
            or (original.mode == "P" and "transparency" in original.info)
        )
        image = original.convert("RGBA" if has_alpha else "RGB")
        resized = image.resize((target_width, target_height), Image.Resampling.LANCZOS)
        save_options = {
            "format": "WEBP",
            "quality": 88,
            "method": 6,
            "exact": True,
            "alpha_quality": 100,
        }
        icc_profile = original.info.get("icc_profile")
        if icc_profile:
            save_options["icc_profile"] = icc_profile
        output.parent.mkdir(parents=True, exist_ok=True)
        resized.save(output, **save_options)

    if output.stat().st_size >= source_bytes:
        output.unlink()
        return False, f"discarded {target_width}w (not smaller than source)"
    return True, f"created {output.name} ({output.stat().st_size:,} bytes)"


def main() -> None:
    manifest: dict[str, dict[str, object]] = {}
    for relative_name, widths in SOURCES.items():
        source = PUBLIC / relative_name
        if not source.is_file():
            print(f"missing source; skipped: {relative_name}")
            continue

        with Image.open(source) as image:
            source_width, source_height = image.size

        candidates: list[tuple[int, str]] = []
        for width in widths:
            output = source.with_name(f"{source.stem}-{width}w.webp")
            kept, message = make_variant(source, output, width)
            print(f"{relative_name}: {message}")
            if kept:
                output_url = "/images/" + output.relative_to(PUBLIC).as_posix()
                candidates.append((width, output_url))

        # Preserve a high-resolution original as the top candidate unless a
        # full-source-width derivative was generated (none is requested here).
        candidates.append((source_width, "/images/" + Path(relative_name).as_posix()))
        candidates.sort(key=lambda item: item[0])

        # Emit a srcset only when at least one useful derivative exists.
        if len(candidates) > 1:
            source_url = "/images/" + Path(relative_name).as_posix()
            manifest[source_url] = {
                "width": source_width,
                "height": source_height,
                "srcSet": ", ".join(f"{url} {width}w" for width, url in candidates),
            }

    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"\nWrote {len(manifest)} responsive entries to {MANIFEST.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
