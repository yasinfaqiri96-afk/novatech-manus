import { createFileRoute } from "@tanstack/react-router";
import sitemap from "@/lib/legacy-sitemap";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const entries = (sitemap() as Array<{ url: string; alternates?: { languages?: Record<string, string> }; lastModified?: string | Date; changeFrequency?: string; priority?: number }>).map((e) => {
          const alts = Object.entries(e.alternates?.languages ?? {})
            .map(([l, h]) => `<xhtml:link rel="alternate" hreflang="${l}" href="${esc(String(h))}"/>`).join("");
          const lm = e.lastModified ? `<lastmod>${new Date(e.lastModified).toISOString()}</lastmod>` : "";
          const cf = e.changeFrequency ? `<changefreq>${e.changeFrequency}</changefreq>` : "";
          const pr = e.priority != null ? `<priority>${e.priority}</priority>` : "";
          return `<url><loc>${esc(e.url)}</loc>${alts}${lm}${cf}${pr}</url>`;
        }).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
      },
    },
  },
});
