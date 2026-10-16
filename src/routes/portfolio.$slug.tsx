import { createFileRoute, notFound } from "@tanstack/react-router";
import Page, { generateMetadata } from "@/legacy/fa/portfolio/[slug]/page";
import { metaToHead } from "@/lib/next-head";
import { getCaseStudy } from "@/lib/case-studies";

export const Route = createFileRoute("/portfolio/$slug")({
  beforeLoad: ({ params }) => {
    if (!getCaseStudy(params.slug)) throw notFound();
  },
  head: ({ params }) => metaToHead(generateMetadata({ params: params as never })),
  component: RouteComponent,
});

function RouteComponent() {
  const params = Route.useParams();
  return <Page params={params as never} />;
}
