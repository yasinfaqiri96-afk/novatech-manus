import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/fa/graphic-design/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/graphic-design")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
