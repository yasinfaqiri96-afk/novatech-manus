import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/fa/database-solutions/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/database-solutions")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
