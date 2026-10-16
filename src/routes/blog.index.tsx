import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/fa/blog/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/blog/")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
