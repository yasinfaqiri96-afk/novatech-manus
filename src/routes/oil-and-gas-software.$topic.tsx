import { createFileRoute, notFound } from "@tanstack/react-router";
import Page, { generateMetadata } from "@/legacy/fa/oil-and-gas-software/[topic]/page";
import { metaToHead } from "@/lib/next-head";
import { mashalIntentPageBySlug } from "@/lib/mashal";

export const Route = createFileRoute("/oil-and-gas-software/$topic")({
  beforeLoad: ({ params }) => {
    if (!mashalIntentPageBySlug[params.topic]) throw notFound();
  },
  head: ({ params }) => metaToHead(generateMetadata({ params: params as never })),
  component: RouteComponent,
});

function RouteComponent() {
  const params = Route.useParams();
  return <Page params={params as never} />;
}
