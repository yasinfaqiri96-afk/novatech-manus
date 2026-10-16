import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/fa/privacy/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/privacy")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
