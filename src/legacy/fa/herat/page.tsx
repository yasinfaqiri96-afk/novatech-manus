// @ts-nocheck -- ported from the original Next.js site
import Link from "next/link";
import { ArrowLeft, Clock, Mail, MapPin, Phone } from "lucide-react";

import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import MapEmbed from "@/components/MapEmbed";
import { buildMetadata } from "@/lib/metadata";
import { caseStudies } from "@/lib/case-studies";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  localBusinessSchema,
  webPageSchema,
} from "@/lib/seo";
import { services } from "@/lib/services";
import { companyInfo } from "@/lib/site-content";

const breadcrumbs = [
  { name: "صفحه اصلی", path: "/" },
  { name: `${companyInfo.brandName} در هرات`, path: "/herat" },
];

/**
 * The Herat page is a local business page, not a second copy of the service
 * pages. It answers what someone in Herat needs before contacting a software
 * company: where the office is, how to arrange local contact, which example
 * systems NOVATECH has documented for businesses in Afghanistan, and where to
 * go next. The portfolio does not claim a Herat client where no city is recorded.
 * Service descriptions stay on the service pages and are linked, never repeated.
 */

const workingWithUs = [
  {
    title: "جلسه حضوری در دفتر هرات",
    text: "برای هماهنگی جلسه از شماره‌های رسمی همین صفحه استفاده کنید. آوردن نمونهٔ فرم‌ها، فایل‌ها یا گزارش‌های فعلی کمک می‌کند نیازهای پروژه دقیق‌تر بررسی شوند.",
  },
  {
    title: "بررسی محل کار، اگر لازم باشد",
    text: "برای انبار، رستوران، دیپو یا شرکت باربری ممکن است مشاهدهٔ جریان کار مفید باشد. نیاز به بازدید، زمان و محدودهٔ آن پیش از توافق هماهنگ می‌شود.",
  },
  {
    title: "توافق دربارهٔ آموزش کاربران",
    text: "تعداد کاربران، شیوه، محل و دامنهٔ آموزش را پیش از سفارش مشخص کنید؛ روش قابل ارائه برای پروژه در پیشنهاد و توافق نهایی درج می‌شود.",
  },
  {
    title: "شفاف‌کردن پشتیبانی",
    text: "دفتر و شماره‌های رسمی نواتیک در همین صفحه آمده‌اند. کانال، ساعت پاسخ‌گویی و محدودهٔ پشتیبانی فنی هر پروژه را پیش از سفارش مشخص کنید.",
  },
];

const industryExamples = [
  {
    title: "سوپرمارکت و فروشگاه",
    text: "فروش با بارکد، کنترل موجودی و حساب مشتریان و تامین کنندگان.",
    slug: "supermarket-management-system",
  },
  {
    title: "شرکت های باربری و ترانزیت",
    text: "بارنامه، ناوگان و پیگیری مرسوله برای شرکت هایی که مسیرهای زمینی را مدیریت می کنند.",
    slug: "logistics-management-system",
  },
  {
    title: "رستوران و کافه",
    text: "ثبت سفارش، ارتباط سالن با آشپزخانه و کنترل مصرف مواد اولیه.",
    slug: "restaurant-pos",
  },
  {
    title: "آژانس مسافرتی",
    text: "مدیریت تور و بلیط و حسابداری اختصاصی خدمات سفر.",
    slug: "travel-agency-system",
  },
  {
    title: "گدام و انبار",
    text: "ثبت ورود و خروج کالا و موجودی لحظه ای به تفکیک گدام.",
    slug: "warehouse-management-system",
  },
  {
    title: "دفاتر اداری و سازمان ها",
    text: "حضور و غیاب، شیفت و اتصال کارکرد به محاسبه حقوق.",
    slug: "attendance-system",
  },
];

const faq = [
  {
    question: "دفتر شما در هرات کجاست؟",
    answer: `${companyInfo.address}. ساعت کاری ${companyInfo.workHours} ${companyInfo.workDays} است و برای جلسه حضوری بهتر است قبلش با شماره ${companyInfo.primaryPhoneLabel} هماهنگ کنید.`,
  },
  {
    question: "آیا از ولایت‌های دیگر هم می‌توان درخواست داد؟",
    answer:
      "می‌توانید از هر ولایت درخواست مشاوره بدهید. قالب جلسه، نیاز به سفر، شیوهٔ آموزش و امکان پشتیبانی بر اساس محل پروژه بررسی می‌شود و پیش از سفارش در دامنهٔ کار روشن خواهد شد.",
  },
  {
    question: "هزینه و شرایط جلسهٔ مشاوره چگونه مشخص می‌شود؟",
    answer:
      "هنگام درخواست، موضوع جلسه و هر هزینهٔ احتمالی را پیش از رزرو با تیم هماهنگ کنید. برآورد پروژه پس از روشن‌شدن دامنهٔ مورد نیاز ارائه می‌شود.",
  },
  {
    question: "اگر برق یا اینترنت دفتر ما پایدار نباشد چه؟",
    answer:
      "وضعیت برق، اینترنت و شبکهٔ داخلی را در نیازسنجی توضیح دهید. گزینهٔ استقرار و نیاز به کار آفلاین یا همگام‌سازی باید برای پروژهٔ شما جداگانه بررسی و پیش از سفارش تأیید شود.",
  },
];

export const metadata = buildMetadata({
  fullTitle: `شرکت نرم افزاری در هرات، افغانستان | ${companyInfo.brandName}`,
  title: "نواتیک در هرات",
  description: `${companyInfo.brandName} یک شرکت نرم افزاری و تکنالوژی در هرات است؛ آدرس دفتر، شماره تماس، ساعت کاری، خدمات و نمونه پروژه‌های نرم‌افزاری تحویل‌شده در افغانستان.`,
  path: "/herat",
});

export default function HeratPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/herat",
            name: `شرکت نرم افزاری در هرات | ${companyInfo.brandName}`,
            description: metadata.description as string,
          }),
          breadcrumbSchema(breadcrumbs),
          localBusinessSchema,
          faqSchema(faq),
        )}
      />

      <div className="overflow-hidden">
        <section className="mx-auto w-full max-w-6xl px-5 pt-32 md:pt-36">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <p className="bold text-primary">هرات، افغانستان</p>
              <h1 className="fat text-2xl font-black leading-normal text-gray-900 lg:text-3xl">
                {companyInfo.brandName}؛ شرکت نرم افزاری و تکنالوژی در هرات
              </h1>
              <p className="leading-8 text-gray-700">
                دفتر {companyInfo.brandName} در {companyInfo.address} است. برای
                جلسهٔ حضوری در هرات می‌توانید با شماره‌های درج‌شده هماهنگ کنید؛
                بازدید از محل، آموزش کاربران و پشتیبانی پس از تحویل، بر اساس
                نیاز و دامنهٔ هر پروژه جداگانه بررسی و توافق می‌شود.
              </p>
              <p className="leading-8 text-gray-700">
                این صفحه برای کسانی نوشته شده که در هرات دنبال شرکت نرم افزاری،
                طراحی سایت یا سیستم مدیریتی هستند و می خواهند قبل از تماس بدانند
                با چه کسی طرف اند.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`tel:${companyInfo.primaryPhoneHref}`}
                  className="rounded-full bg-primary px-7 py-3 text-white transition-opacity duration-300 hover:opacity-90"
                >
                  تماس با دفتر هرات
                </a>
                <Link
                  href="/contact"
                  className="rounded-full border border-primary px-7 py-3 text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  فرم درخواست مشاوره
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="bold text-lg text-gray-900">اطلاعات دفتر هرات</h2>

              <div className="flex items-start gap-3 text-gray-700">
                <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="leading-8">{companyInfo.address}</p>
              </div>

              <div className="flex items-start gap-3 text-gray-700">
                <Phone className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <a dir="ltr" href={`tel:${companyInfo.primaryPhoneHref}`}>
                    {companyInfo.primaryPhoneLabel}
                  </a>
                  <a dir="ltr" href={`tel:${companyInfo.secondaryPhoneHref}`}>
                    {companyInfo.secondaryPhoneLabel}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-700">
                <Mail className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </div>

              <div className="flex items-start gap-3 text-gray-700">
                <Clock className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="leading-8">
                  {companyInfo.workHours}
                  <span className="block text-sm text-gray-500">
                    {companyInfo.workDays}
                  </span>
                </p>
              </div>

              <div className="mt-2 min-h-[220px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <MapEmbed
                  title={`موقعیت دفتر ${companyInfo.brandName} در هرات`}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=62.1851%2C34.3423%2C62.2051%2C34.3623&layer=mapnik&marker=34.3523%2C62.1952"
                  href="https://www.openstreetmap.org/?mlat=34.3523&mlon=62.1952#map=16/34.3523/62.1952"
                  minHeight={220}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16 lg:py-20">
          <h2 className="fat text-2xl leading-normal text-gray-900 md:text-3xl">
            کار با {companyInfo.brandName} در هرات چطور پیش می رود
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {workingWithUs.map((step) => (
              <div
                key={step.title}
                className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-5"
              >
                <h3 className="bold text-base text-gray-900">{step.title}</h3>
                <p className="text-sm leading-7 text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-16 lg:pb-20">
          <h2 className="fat text-2xl leading-normal text-gray-900 md:text-3xl">
            نمونه‌های سیستم‌های ساخته‌شده برای کسب‌وکارهای افغانستان
          </h2>
          <p className="mt-4 leading-8 text-gray-700">
            صفحهٔ هر پروژه مسئله، راهکار و قابلیت‌های ثبت‌شده در پروندهٔ همان
            سیستم را توضیح می‌دهد. این نمونه‌ها شواهد بخشی از کارهای نواتیک در
            افغانستان‌اند و به‌تنهایی به معنی اجرای همان پروژه در هرات نیستند.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industryExamples.map((industry) => {
              const study = caseStudies.find(
                (item) => item.slug === industry.slug,
              );

              return (
                <Link
                  key={industry.slug}
                  href={`/portfolio/${industry.slug}`}
                  className="group flex h-full flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                >
                  <h3 className="bold text-base text-gray-900 transition-colors duration-300 group-hover:text-primary">
                    {industry.title}
                  </h3>
                  <p className="text-sm leading-7 text-gray-600">
                    {industry.text}
                  </p>
                  <span className="mt-auto flex items-center gap-1 pt-3 text-xs text-primary">
                    {study ? study.title : "مشاهده نمونه"}
                    <ArrowLeft size={14} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-16 lg:pb-20">
          <h2 className="fat text-2xl leading-normal text-gray-900 md:text-3xl">
            خدماتی که در هرات ارائه می شود
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.key}
                href={service.path}
                className="group flex h-full flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <span className="bold text-base text-gray-900 transition-colors duration-300 group-hover:text-primary">
                  {service.navLabel}
                </span>
                <span className="text-sm leading-7 text-gray-600">
                  {service.teaser}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-16 lg:pb-20">
          <h2 className="fat text-2xl leading-normal text-gray-900 md:text-3xl">
            نیازهای محلی که در جلسه باید بررسی شوند
          </h2>
          <p className="mt-4 leading-8 text-gray-700">
            برای پیشنهاد دقیق، شرایط محل کار و نیازهای روزمره باید از ابتدا روشن
            باشد. موارد زیر پرسش‌هایی برای نیازسنجی‌اند، نه تضمین امکانات پیش‌فرض
            هر نرم افزار یا نسخه:
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            {[
              "نیاز به ثبت افغانی و دالر، نرخ تبدیل و گزارش چندارزی",
              "کیفیت برق، اینترنت و شبکه و گزینه‌های ممکن استقرار",
              "نیاز به رابط راست‌به‌چپ، تقویم و نمایش اعداد فارسی",
              "فرمت فاکتور، اسناد چاپی و نیازهای بازار محل کار",
              "تعداد کاربران و نیاز به استفاده در شبکهٔ داخلی دفتر",
              "تعداد کاربران آموزش‌گیرنده و شکل آموزش مورد نیاز",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-bg-light p-4 text-sm leading-7 text-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 pb-16 lg:pb-20">
          <h2 className="fat text-2xl leading-normal text-gray-900 md:text-3xl">
            سوالات متداول درباره دفتر هرات
          </h2>
          <div className="mt-8 flex flex-col gap-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-gray-200 bg-white p-5"
              >
                <summary className="bold cursor-pointer list-none text-base text-gray-900 transition-colors duration-200 group-open:text-primary">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-8 text-gray-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
