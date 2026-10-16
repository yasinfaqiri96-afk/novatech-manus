import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/fa/oil-and-gas-software/features/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/oil-and-gas-software/features")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
