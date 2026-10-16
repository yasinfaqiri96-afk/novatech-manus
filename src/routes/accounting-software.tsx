import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/fa/accounting-software/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/accounting-software")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
