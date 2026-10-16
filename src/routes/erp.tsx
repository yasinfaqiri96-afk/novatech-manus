import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/fa/erp/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/erp")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
