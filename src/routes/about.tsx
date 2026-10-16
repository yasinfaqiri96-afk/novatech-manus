import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/fa/about/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/about")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
