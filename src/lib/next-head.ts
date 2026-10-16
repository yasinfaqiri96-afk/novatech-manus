// Converts the original Next.js `metadata` objects into TanStack route head() output.
const SITE = "https://novatechsoft.com";
const abs = (url?: string) => (!url ? url : url.startsWith("http") ? url : SITE + url);
const asList = <T,>(value?: T | T[]) => (value == null ? [] : Array.isArray(value) ? value : [value]);
type Any = any; // eslint-disable-line @typescript-eslint/no-explicit-any

export function metaToHead(metadata: Any) {
  if (!metadata) return {};

  const rawTitle = metadata.title;
  const title = typeof rawTitle === "string" ? `${rawTitle} | نواتیک` : rawTitle?.absolute ?? "نواتیک";
  const openGraph = metadata.openGraph ?? {};
  const openGraphImage = asList(openGraph.images)[0];
  const imageUrl = abs(typeof openGraphImage === "string" ? openGraphImage : openGraphImage?.url);
  const twitter = metadata.twitter ?? {};
  const twitterImage = asList(twitter.images)[0];
  const twitterImageUrl = abs(typeof twitterImage === "string" ? twitterImage : twitterImage?.url) ?? imageUrl;
  const meta: Any[] = [{ title }];

  if (metadata.description) meta.push({ name: "description", content: metadata.description });
  meta.push({ property: "og:title", content: openGraph.title ?? title });
  meta.push({ property: "og:description", content: openGraph.description ?? metadata.description ?? "" });
  meta.push({ property: "og:type", content: openGraph.type ?? "website" });
  if (openGraph.locale) meta.push({ property: "og:locale", content: openGraph.locale });
  if (openGraph.siteName) meta.push({ property: "og:site_name", content: openGraph.siteName });
  if (imageUrl) {
    meta.push({ property: "og:image", content: imageUrl });
    if (openGraphImage && typeof openGraphImage === "object") {
      if (openGraphImage.width) meta.push({ property: "og:image:width", content: String(openGraphImage.width) });
      if (openGraphImage.height) meta.push({ property: "og:image:height", content: String(openGraphImage.height) });
      if (openGraphImage.alt) meta.push({ property: "og:image:alt", content: openGraphImage.alt });
    }
  }

  const twitterTitle = twitter.title ?? openGraph.title ?? title;
  const twitterDescription = twitter.description ?? openGraph.description ?? metadata.description;
  meta.push({ name: "twitter:card", content: twitter.card ?? "summary_large_image" });
  if (twitterTitle) meta.push({ name: "twitter:title", content: twitterTitle });
  if (twitterDescription) meta.push({ name: "twitter:description", content: twitterDescription });
  if (twitterImageUrl) meta.push({ name: "twitter:image", content: twitterImageUrl });
  if (metadata.robots?.index === false) meta.push({ name: "robots", content: "noindex, nofollow" });

  const links: Any[] = [];
  const canonical = metadata.alternates?.canonical;
  if (canonical) {
    links.push({ rel: "canonical", href: abs(canonical) });
    meta.push({ property: "og:url", content: abs(canonical) });
  }
  for (const [language, href] of Object.entries(metadata.alternates?.languages ?? {})) {
    links.push({ rel: "alternate", hrefLang: language, href: abs(href as string) });
  }
  return { meta, links };
}
