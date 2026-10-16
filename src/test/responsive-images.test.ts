import { describe, expect, it } from "vitest";

import { responsiveImageAttributes, responsiveImageDimensions } from "@/lib/responsive-images";

describe("responsive image manifest", () => {
  it("returns only generated candidates and the caller's rendered sizes for a known source", () => {
    const attributes = responsiveImageAttributes(
      "/images/portfolio/novatech-management-dashboard.png",
      "(min-width: 1024px) 48vw, 92vw",
    );

    expect(attributes.sizes).toBe("(min-width: 1024px) 48vw, 92vw");
    expect(attributes.srcSet).toContain("novatech-management-dashboard-480w.webp 480w");
    expect(responsiveImageDimensions("/images/portfolio/novatech-management-dashboard.png")).toEqual({
      width: 1902,
      height: 949,
    });
  });

  it("omits both srcSet and sizes when no generated candidates are registered", () => {
    expect(responsiveImageAttributes("/images/portfolio/not-generated.png", "92vw")).toEqual({});
    expect(responsiveImageDimensions("/images/portfolio/not-generated.png")).toBeUndefined();
  });
});
