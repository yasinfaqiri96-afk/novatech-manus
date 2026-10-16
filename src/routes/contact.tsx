import { createFileRoute } from "@tanstack/react-router";
import Page, { metadata } from "@/legacy/fa/contact/page";
import { metaToHead } from "@/lib/next-head";

export const Route = createFileRoute("/contact")({
  head: () => metaToHead(metadata),
  component: RouteComponent,
});

function RouteComponent() {
  return <Page />;
}
