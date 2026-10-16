import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/fa/software-solutions/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/software-solutions")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
