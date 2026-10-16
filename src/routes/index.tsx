import { createFileRoute } from "@tanstack/react-router";
import HomeClient from "@/components/HomeClient";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/seo";
import { buildMetadata } from "@/lib/metadata";
import { metaToHead } from "@/lib/next-head";
import { companyInfo } from "@/lib/site-content";

const homeTitle = `${companyInfo.brandName} | شرکت نرم افزاری و تکنالوژی در هرات، افغانستان`;
const homeDescription =
  "نواتیک، شرکت نرم افزاری در هرات افغانستان: توسعه نرم افزار اختصاصی، طراحی سایت، دیتابس، نرم افزار حسابداری ناظر، ERP نفت و گاز مشعل و سیستم مدیریتی.";

/** Keep the home page on the same canonical/social metadata path as service pages. */
export const homeMetadata = buildMetadata({
  fullTitle: homeTitle,
  title: homeTitle,
  description: homeDescription,
  path: "/",
  image: "/images/novatech-logo-social-v2.webp",
  imageAlt: `لوگوی ${companyInfo.brandName}`,
  imageWidth: 1200,
  imageHeight: 630,
});

export const homeHead = () => metaToHead(homeMetadata);

export const Route = createFileRoute("/")({
  head: homeHead,
  component: Home,
});

function Home() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/", name: homeTitle, description: homeDescription }),
          breadcrumbSchema([{ name: "صفحه اصلی", path: "/" }]),
        )}
      />
      <HomeClient />
    </>
  );
}
