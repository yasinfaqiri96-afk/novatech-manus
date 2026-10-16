import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/en/oil-and-gas-erp-afghanistan/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/en/oil-and-gas-erp-afghanistan")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
