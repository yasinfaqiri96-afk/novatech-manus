import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/ps/oil-and-gas-erp-afghanistan/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/ps/oil-and-gas-erp-afghanistan")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
