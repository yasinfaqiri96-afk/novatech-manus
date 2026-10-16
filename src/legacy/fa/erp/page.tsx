// @ts-nocheck -- ported from the original Next.js site
import ServicePageShell from "@/components/ServicePageShell";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";
import { serviceByKey } from "@/lib/services";
import { companyInfo } from "@/lib/site-content";

/*
 * TODO (business input required before publishing product-level claims):
 * Novatech's packaged ERP product has not been recorded anywhere in this
 * project, so this page describes the ERP capability and implementation service
 * only. Once the following are confirmed, a `SoftwareApplication` node can be
 * added here and the copy can name the product:
 *   - product name and current version
 *   - the exact module list shipped in the package
 *   - licensing / pricing model (per user, per branch, one-off)
 *   - operating requirements (on-premise server, cloud, or both)
 * Until then nothing on this page names or rates a product, because none of
 * that can be verified from the repository.
 */

const service = serviceByKey.erp;

const breadcrumbs = [
  { name: "صفحه اصلی", path: "/" },
  { name: "نرم افزار ERP", path: service.path },
];

const faq = [
  {
    question: "ERP دقیقاً چه چیزی را حل می کند؟",
    answer:
      "ERP رویکردی برای هماهنگ‌کردن فرایندها و داده‌های چند بخش سازمانی است. این مفهوم به‌تنهایی نوع پایگاه‌داده یا امکانات یک محصول مشخص را تعیین نمی‌کند؛ ماژول‌ها، ارتباطات و گزارش‌های لازم باید با توجه به فرایند شرکت بررسی شوند.",
  },
  {
    question: "شرکت ما چند نفر است؛ ERP برای ما زود نیست؟",
    answer:
      "تعداد کارکنان به‌تنهایی برای تصمیم کافی نیست. شمار فرایندها و سامانه‌های جدا، دشواری تطبیق دستی اطلاعات و نوع گزارش مورد نیاز را بررسی کنید؛ پس از این ارزیابی می‌توان تشخیص داد ERP، یک سیستم مدیریتی محدودتر یا راهکار دیگری مناسب‌تر است.",
  },
  {
    question: "کار با ارزهای مختلف پشتیبانی می شود؟",
    answer:
      "اگر چندارزی برای شرکت شما لازم است، ارزها، نرخ تبدیل، زمان ثبت نرخ و گزارش‌های مورد نیاز را در نیازسنجی مطرح کنید. پشتیبانی و روش محاسبه باید برای نسخه یا پروژهٔ پیشنهادی تأیید شود.",
  },
  {
    question: "استقرار ERP چقدر طول می کشد؟",
    answer:
      "زمان‌بندی به دامنه، داده‌های موجود و وابستگی بخش‌ها بستگی دارد و پس از نیازسنجی برآورد می‌شود. امکان و ترتیب اجرای مرحله‌ای نیز باید برای همان پروژه برنامه‌ریزی شود؛ زمان ثابت یا روش یکسانی برای همهٔ شرکت‌ها فرض نمی‌کنیم.",
  },
  {
    question: "اطلاعات سیستم فعلی ما چه می شود؟",
    answer:
      "فایل‌ها و ساختار سیستم فعلی ابتدا ارزیابی می‌شوند. امکان، دامنهٔ پاک‌سازی و انتقال و روش تطبیق داده در پیشنهاد مشخص می‌شود؛ انتقال همهٔ سوابق پیش از بررسی تضمین نمی‌شود.",
  },
];

export const metadata = buildMetadata({
  fullTitle: `نرم افزار ERP و سیستم یکپارچه سازمانی در افغانستان | ${companyInfo.brandName}`,
  title: "نرم افزار ERP",
  description:
    "نیازسنجی و طراحی ERP برای شرکت‌های افغانستان: بررسی ماژول‌های مالی، انبار، خرید، فروش و منابع بشری، معماری داده و دامنهٔ انتقال و آموزش در هر پروژه.",
  path: service.path,
  image: "/images/portfolio/novatech-custom-software-service.webp",
  imageAlt: "تصویر مفهومی تحلیل مالی؛ نه اسکرین‌شات رابط یک محصول ERP",
});

export default function ErpPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: service.path,
            name: `نرم افزار ERP و سیستم یکپارچه سازمانی در افغانستان | ${companyInfo.brandName}`,
            description: metadata.description as string,
          }),
          breadcrumbSchema(breadcrumbs),
          serviceSchema({
            path: service.path,
            name: "پیاده سازی نرم افزار ERP",
            description: metadata.description as string,
            serviceType: service.serviceType,
            offerCatalog: [
              "نیازسنجی فرایندها و دامنهٔ ERP",
              "طراحی معماری و ارتباط میان بخش‌ها",
              "ارزیابی دامنهٔ انتقال داده",
              "برنامه‌ریزی استقرار و آموزش بر اساس توافق",
            ],
          }),
          faqSchema(faq),
        )}
      />

      <ServicePageShell
        breadcrumbs={breadcrumbs}
        eyebrow="ERP و سیستم یکپارچه سازمانی"
        title="نرم افزار ERP برای شرکت ها و سازمان های افغانستان"
        intro={[
          "ERP زمانی مطرح می‌شود که هماهنگی و گزارش‌گیری میان چند بخش سازمانی به یک مسئلهٔ طراحی تبدیل شده باشد. این صفحه خدمات نیازسنجی و پیاده‌سازی را توضیح می‌دهد؛ معرفی یا تضمین یک بستهٔ آمادهٔ ERP نیست.",
          `در پروژهٔ پیشنهادی ${companyInfo.brandName}، ماژول‌ها، ارتباط داده‌ها، انتقال اطلاعات و ترتیب اجرا باید بر اساس فرایند شرکت بررسی و پیش از سفارش تأیید شوند. تصویر همراه این صفحه مفهومی است و از رابط یک محصول ERP گرفته نشده است.`,
        ]}
        heroImage="/images/portfolio/novatech-custom-software-service.webp"
        heroImageAlt="تصویر مفهومی تحلیل مالی؛ نه اسکرین‌شات رابط یک محصول ERP"
        highlights={[
          "بررسی معماری و پیوند ماژول‌ها بر اساس فرایند شرکت",
          "ثبت نیازهای شعبه، انبار و ارز در مرحلهٔ نیازسنجی",
          "ارزیابی امکان اجرای مرحله‌ای و اثر آن بر کار روزانه",
          "تعیین امکان و دامنهٔ انتقال داده پس از بررسی فایل‌ها",
        ]}
        blocks={[
          {
            heading: "حوزه‌هایی که در نیازسنجی ERP بررسی می‌شوند",
            paragraphs: [
              "این فهرست موضوع‌های ارزیابی در خدمات ERP است، نه فهرست قابلیت‌های تضمین‌شدهٔ یک محصول آماده. ماژول‌ها، یکپارچگی و موارد تحویل باید در پیشنهاد پروژه تأیید شوند.",
            ],
            groups: [
              {
                heading: "مالی و حسابداری",
                text: "نیاز به ساختار حساب‌ها، خزانه، دریافت و پرداخت و گزارش‌های مالی؛ دامنه و پیوند با عملیات در پروژه بررسی می‌شود.",
              },
              {
                heading: "انبار و کنترل موجودی",
                text: "نیاز به یک یا چند انبار، حواله، انبارگردانی و گزارش اختلاف؛ قواعد و تعداد محل‌ها باید مشخص شوند.",
              },
              {
                heading: "خرید و تامین",
                text: "در صورت قرارگرفتن خرید در دامنه، گردش درخواست، سفارش، رسید و تطبیق سند ارزیابی می‌شود.",
              },
              {
                heading: "فروش و توزیع",
                text: "نیاز به سفارش، قیمت‌گذاری، تخفیف، فاکتور یا توزیع در نیازسنجی بررسی می‌شود.",
              },
              {
                heading: "منابع بشری",
                text: "در صورت نیاز، اطلاعات پرسنل، حضور، مرخصی و رابطهٔ آن‌ها با محاسبهٔ حقوق بررسی می‌شود.",
              },
              {
                heading: "گزارش و داشبورد",
                text: "شاخص‌ها، منابع داده و نیازهای گزارش‌دهی بر اساس پرسش‌های مدیریتی شرکت تعریف می‌شوند.",
              },
            ],
          },
          {
            heading: "ERP آماده یا سیستم اختصاصی؟",
            paragraphs: [
              "پاسخ یکسانی برای همهٔ شرکت‌ها وجود ندارد. در مقایسهٔ راهکار آماده و توسعهٔ اختصاصی، سازگاری با فرایندها، امکانات واقعاً موجود، نیازهای یکپارچگی، هزینه و پشتیبانی باید جداگانه ارزیابی شوند.",
              "در نیازسنجی می‌توان مشخص کرد کدام نیازها با راهکار موجود پوشش داده می‌شوند و کدام بخش‌ها نیازمند تغییر یا توسعه‌اند؛ این صفحه وجود بستهٔ آمادهٔ نواتیک را ادعا نمی‌کند.",
            ],
            link: {
              href: "/business-systems",
              label: "اگر به‌دنبال معرفی سیستم مدیریت کسب‌وکار هستید، این صفحه را ببینید",
            },
          },
          {
            heading: "ریسک‌هایی که پیش از برنامه‌ریزی ERP باید روشن شوند",
            paragraphs: [
              "پیش از انتخاب ترتیب اجرا، این ریسک‌ها را با تیم پروژه مرور کنید؛ اولویت هر مورد به داده‌ها و فرایندهای سازمان شما بستگی دارد.",
            ],
            bullets: [
              "راه اندازی هم زمان همه ماژول ها به جای استقرار مرحله ای",
              "بی توجهی به انتقال داده تا هفته آخر پروژه",
              "نبود آموزش کاربر برای همان کاری که هر روز انجام می دهد",
              "نبود یک تصمیم گیرنده مشخص از طرف کارفرما",
              "تغییر دامنه کار در میانه اجرا بدون بازنگری زمان بندی",
              "نداشتن برنامه پشتیبان گیری و بازیابی از روز اول",
            ],
          },
        ]}
        serviceKey={service.key}
        caseStudySlugs={service.caseStudies}
        faq={faq}
      />
    </>
  );
}
