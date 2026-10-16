import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/fa/herat/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/herat")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
