import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/fa/portfolio/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/portfolio/")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
