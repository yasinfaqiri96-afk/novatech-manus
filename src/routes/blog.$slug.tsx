import { createFileRoute, notFound } from "@tanstack/react-router";
import Page, { generateMetadata } from "@/legacy/fa/blog/[slug]/page";
import { metaToHead } from "@/lib/next-head";
import { getBlogArticleBySlug } from "@/lib/blog-content";

export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: ({ params }) => {
    if (!getBlogArticleBySlug(params.slug)) throw notFound();
  },
  head: ({ params }) => metaToHead(generateMetadata({ params: params as never })),
  component: RouteComponent,
});

function RouteComponent() {
  const params = Route.useParams();
  return <Page params={params as never} />;
}
