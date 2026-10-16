import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/fa/oil-and-gas-software/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/oil-and-gas-software/")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
