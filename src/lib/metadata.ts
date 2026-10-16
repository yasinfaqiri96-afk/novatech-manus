// @ts-nocheck -- ported from the original Next.js site
import type { Metadata } from "next";
import { companyInfo, siteUrl } from "@/lib/site-content";

const DEFAULT_OG_IMAGE = {
  url: "/images/novatech-logo-social-v2.webp",
  width: 1200,
  height: 630,
  alt: `لوگوی ${companyInfo.brandName}`,
};

/**
 * Builds page metadata from one description of the page. Indexable routes get a
 * canonical URL; noindex fallbacks intentionally omit canonical/og:url so they
 * do not advertise a nonexistent page as its own search/social destination.
 *
 * `title` is the page-specific part; the brand suffix comes from the template in
 * the root layout, except when `fullTitle` is passed for a page whose title must
 * read differently from `%s | نواتیک`.
 */
export function buildMetadata({
  title,
  fullTitle,
  description,
  path,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  languages,
  locale = "fa_AF",
  noIndex,
  type = "website",
}: {
  title: string;
  fullTitle?: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  languages?: Record<string, string>;
  locale?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}): Metadata {
  const url = `${siteUrl}${path}`;
  const socialTitle = fullTitle ?? `${title} | ${companyInfo.brandName}`;
  const ogImage = image
    ? {
        url: image,
        alt: imageAlt ?? title,
        ...(imageWidth ? { width: imageWidth } : {}),
        ...(imageHeight ? { height: imageHeight } : {}),
      }
    : DEFAULT_OG_IMAGE;

  return {
    ...(fullTitle ? { title: { absolute: fullTitle } } : { title }),
    description,
    ...(!noIndex
      ? {
          alternates: {
            canonical: url,
            ...(languages
              ? {
                  languages: Object.fromEntries(
                    Object.entries(languages).map(([language, languagePath]) => [
                      language,
                      `${siteUrl}${languagePath}`,
                    ]),
                  ),
                }
              : {}),
          },
        }
      : {}),
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type,
      locale,
      siteName: companyInfo.legalName,
      title: socialTitle,
      description,
      ...(!noIndex ? { url } : {}),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage.url],
    },
  };
}
