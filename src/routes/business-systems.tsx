import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/fa/business-systems/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/business-systems")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
