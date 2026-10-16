// @ts-nocheck -- ported from the original Next.js site
import Image from "next/image";
import Link from "next/link";
import { BarChart3, Check, ChevronDown, Truck, Users, Warehouse } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { companyInfo } from "@/lib/site-content";
import ServiceFaq from "@/components/ServiceFaq";
import { softwareSolutionsFaq } from "./faq-items";
import LeadForm from "@/components/LeadForm";

const heroServices = [
  {
    title: "لجستیک و باربری",
    description: "نمونهٔ مدیریت بارنامه، ناوگان و مسیر مرسوله.",
    icon: Truck,
  },
  {
    title: "فروش رستوران",
    description: "نمونهٔ ثبت سفارش، آشپزخانه و گزارش شیفتی.",
    icon: BarChart3,
  },
  {
    title: "مدیریت گدام",
    description: "نمونهٔ ثبت ورود و خروج و موجودی به تفکیک گدام.",
    icon: Warehouse,
  },
  {
    title: "حضور و غیاب",
    description: "نمونهٔ ثبت کارکرد، شیفت و مرخصی.",
    icon: Users,
  },
];



const serviceOptions = [
  "سیستم مدیریت لجستیک و باربری",
  "نرم‌افزار فروش رستوران (POS)",
  "نرم‌افزار سوپرمارکت و فروشگاه",
  "سیستم مدیریت گدام و انبار",
  "نرم‌افزار کارگاه خیاطی",
  "مدیریت یکپارچه آژانس مسافرتی",
  "سیستم هوشمند حضور و غیاب",
  "نرم‌افزار اختصاصی دیگر"
];

const detailedServices = [
  {
    title: "سیستم مدیریت لجستیک و باربری",
    slug: "logistics-management-system",
    image: "/images/portfolio/novatech-logistics-management-system.webp",
    description: "رهگیری کالاها از مبدأ تا مقصد، مدیریت ناوگان حمل‌ونقل و کنترل دقیق بارنامه‌ها به ساده‌ترین شکل.",
    items: [
      "صدور سریع و خودکار بارنامه",
      "مدیریت ناوگان و رانندگان",
      "پیگیری وضعیت لحظه‌ای مرسولات",
      "گزارش‌گیری دقیق هزینه‌ها و درآمدها"
    ]
  },
  {
    title: "نرم‌افزار فروش رستوران (POS)",
    slug: "restaurant-pos",
    image: "/images/portfolio/novatech-restaurant-pos-system.webp",
    description: "ثبت سریع سفارشات، مدیریت میزها، کنترل موجودی آشپزخانه و حسابداری روزانه با رابط کاربری بسیار نرم.",
    items: [
      "ثبت سفارش سریع با رابط لمسی",
      "ارتباط مستقیم سالن با آشپزخانه",
      "مدیریت موجودی مواد اولیه",
      "گزارش‌گیری فروش روزانه و شیفتی"
    ]
  },
  {
    title: "نرم‌افزار سوپرمارکت و فروشگاه",
    slug: "supermarket-management-system",
    image: "/images/portfolio/novatech-supermarket-management-system.webp",
    description: "فروش با بارکد، کنترل موجودی و تاریخ انقضا و حساب مشتریان و تامین‌کنندگان در یک سیستم واحد.",
    items: [
      "فروش سریع با بارکد و صندوق فروش",
      "کنترل موجودی و هشدار کسری",
      "قیمت‌گذاری و محاسبه سود هر قلم",
      "گزارش فروش روزانه و شیفتی"
    ]
  },
  {
    title: "سیستم مدیریت گدام و انبار",
    slug: "warehouse-management-system",
    image: "/images/portfolio/novatech-warehouse-management-system.webp",
    description: "ثبت ورود و خروج کالا، موجودی به تفکیک گدام و حواله انبار با گزارش لحظه‌ای موجودی.",
    items: [
      "ثبت حواله ورود و خروج کالا",
      "موجودی به تفکیک گدام و کالا",
      "انتقال کالا بین گدام‌ها",
      "حداقل موجودی و هشدار کسری"
    ]
  },
  {
    title: "نرم‌افزار کارگاه خیاطی",
    slug: "tailoring-management-system",
    image: "/images/portfolio/novatech-tailoring-management-system.webp",
    description: "ثبت سفارش و اندازه مشتری، پیگیری مراحل دوخت و محاسبه کارکرد خیاط در یک سیستم.",
    items: [
      "ثبت سفارش و اندازه‌های مشتری",
      "پیگیری مراحل دوخت و تاریخ تحویل",
      "محاسبه کارکرد و دستمزد خیاط",
      "حساب مشتری، بیعانه و باقی‌مانده"
    ]
  },
  {
    title: "مدیریت یکپارچه آژانس مسافرتی",
    slug: "travel-agency-system",
    image: "/images/portfolio/novatech-travel-agency-system.webp",
    description: "نمونهٔ مدیریت تور، بلیت، اطلاعات مسافران و حسابداری متناسب با فرایند آژانس.",
    items: [
      "ثبت و مدیریت اطلاعات تور و پرواز",
      "بایگانی دقیق اطلاعات مسافران",
      "حسابداری اختصاصی خدمات مسافرتی",
      "صدور فاکتور و پیگیری اقساط"
    ]
  },
  {
    title: "سیستم هوشمند حضور و غیاب",
    slug: "attendance-system",
    image: "/images/portfolio/novatech-attendance-system.webp",
    description: "ثبت دقیق ورود و خروج پرسنل، محاسبه کارکرد، مدیریت مرخصی‌ها و اتصال مستقیم به سیستم حقوق و دستمزد.",
    items: [
      "ثبت خودکار ترددها و شیفت‌ها",
      "مدیریت مرخصی‌ها و اضافه‌کاری",
      "محاسبه سریع حقوق پایان ماه",
      "گزارش‌گیری دقیق برای مدیر منابع انسانی"
    ]
  }
];

const trustHighlights = [
  {
    image: "/images/design-landings/box-04.png",
    title: "نیازسنجی و دامنهٔ روشن",
    description: "فرایندها و نیازهای پروژه پیش از سفارش بررسی و ثبت می‌شوند.",
  },
  {
    image: "/images/design-landings/box-03.png",
    title: "طراحی متناسب با دامنه",
    description: "معماری و توسعه بر مبنای فرایندها و نیازهای تأییدشده تعریف می‌شود.",
  },
  {
    image: "/images/design-landings/box-02.png",
    title: "نمونه‌کارهای مستند",
    description: "صفحهٔ هر پروژه، راهکار و قابلیت‌های ثبت‌شدهٔ همان نمونه‌کار را شرح می‌دهد.",
  },
  {
    image: "/images/design-landings/box-01.png",
    title: "شرایط پشتیبانی روشن",
    description: "کانال، مدت و محدودهٔ پشتیبانی پس از تحویل باید در پیشنهاد و قرارداد مشخص شوند.",
  },
];

const deliveryProcess = [
  ["۱. نیازسنجی", "فرایند، کاربران، ابزارها و گزارش‌های فعلی بررسی می‌شوند تا مسئله و دامنهٔ پیشنهادی روشن شود."],
  ["۲. طراحی", "گردش کار، ساختار داده و نیازهای رابط یا اتصال‌ها برای بخش‌های تأییدشده مشخص می‌شوند."],
  ["۳. توسعه", "مواردی که در دامنه و پیشنهاد تأیید شده‌اند ساخته می‌شوند؛ تغییر دامنه نیازمند بازبینی توافق است."],
  ["۴. آزمون", "سناریوهای واقعی و معیارهای پذیرشِ توافق‌شده پیش از تحویل بررسی می‌شوند."],
  ["۵. استقرار", "محیط اجرا، داده‌های مشمول انتقال، دسترسی‌ها و آموزش بر اساس طرح تأییدشده آماده می‌شوند."],
  ["۶. پشتیبانی", "کانال، مدت و محدودهٔ پشتیبانی و تغییرات پس از تحویل در قرارداد هر پروژه روشن می‌شود."],
];


function TextField({
  name,
  placeholder,
  type = "text",
  dir = "rtl",
}: {
  name: string;
  placeholder: string;
  type?: string;
  dir?: "rtl" | "ltr";
}) {
  return (
    <div className="flex flex-col gap-2 transition-all w-full">
      <div className="relative w-full">
        <input
          className={`w-full py-3 px-6 rounded-xl border border-gray-100 bg-gray-50 transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none text-right placeholder:text-gray-400 ${dir === "ltr" ? "text-left" : "text-right"}`}
          id={`software-solutions-${name}`}
          name={name}
          type={type}
          inputMode={type === "tel" ? "tel" : undefined}
          autoComplete={type === "tel" ? "tel" : "name"}
          required
          aria-label={placeholder}
          placeholder={placeholder}
          dir={dir}
        />
      </div>
    </div>
  );
}

function SelectField({ name, placeholder, options }: { name: string; placeholder: string; options: string[] }) {
  return (
    <div className="w-full relative group select-none">
      <select id={`software-solutions-${name}`} name={name} aria-label={placeholder} className="w-full flex justify-between items-center bg-gray-50 px-6 py-3 rounded-xl border border-gray-100 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none transition-all appearance-none font-medium text-gray-700">
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 size-[18px] text-gray-400 group-focus-within:text-primary transition-colors" />
    </div>
  );
}

export default function SoftwareSolutionsClient() {
  return (
    <div className="legacy-service-page min-h-screen relative mx-auto w-full bg-white overflow-x-hidden" dir="rtl">
      <section
        id="order"
        className="max-w-6xl m-auto px-5 md:px-0 pt-28 md:pt-20 mt-0 md:mt-12"
      >
        <div className="mb-10">
          <Breadcrumbs
            items={[
              { name: "صفحه اصلی", path: "/" },
              { name: "توسعه نرم افزار اختصاصی", path: "/software-solutions" },
            ]}
          />
        </div>
        <div className="flex flex-col items-center text-center gap-6">
          <span className="text-gray-500 font-bold text-sm">
            توسعه نرم افزار و دیتابس در هرات
          </span>
          <h1 className="text-primary font-bold fat text-3xl md:text-5xl lg:text-6xl leading-normal w-full max-w-4xl">
            نرم افزار اختصاصی برای
            <b className="text-[#0F0F0F] leading-normal">
              {" "}
              مدیریت مالی، عملیاتی و داده های کسب و کار در افغانستان
            </b>
          </h1>
          <p className="text-gray-700 font-bold leading-8 text-center max-w-3xl">
            برای فرایندهایی مانند مالی، انبار، فروش، لجستیک یا حضور و غیاب، ابتدا
            مسئله و دامنهٔ پروژه بررسی می‌شود. ساختار داده، امکانات و برنامهٔ
            تحویل هر راهکار پس از نیازسنجی و توافق مشخص خواهد شد.
          </p>

          <div className="flex flex-col sm:flex-row w-full justify-center gap-3 mt-2">
            <a
              href="#consultation"
              className="py-4 px-8 bg-primary hover:opacity-90 transition-all duration-300 text-white font-bold rounded-xl text-center"
            >
              درخواست مشاوره
            </a>
            <a
              href="#services"
              className="py-4 px-8 border border-gray-200 text-gray-700 hover:text-primary hover:border-primary transition-all duration-300 rounded-xl text-center font-bold"
            >
              مشاهده نرم افزارها
            </a>
          </div>

          <div className="relative w-full max-w-5xl mt-3">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-[40px]"></div>
            <div className="relative rounded-[32px] border border-gray-200 bg-white p-3 md:p-4 shadow-[0_25px_80px_rgba(15,15,15,0.08)]">
              <div className="relative aspect-[10/6] overflow-hidden rounded-[24px] bg-[#f4f8f7]">
                <Image
                  src="/images/portfolio/novatech-management-dashboard.png"
                  alt="اسکرین‌شات داشبورد مدیریتی با شاخص‌ها و نمودارهای فروش و موجودی"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full mt-4">
            {heroServices.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-gray-200/80 bg-white/95 backdrop-blur-sm p-4 md:p-5 shadow-[0_10px_30px_rgba(15,15,15,0.05)] flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,15,15,0.08)] hover:border-primary/20"
              >
                <div className="relative size-14 shrink-0 rounded-[18px] overflow-hidden bg-primary/5 ring-1 ring-primary/10 flex items-center justify-center text-primary">
                  <item.icon className="size-6" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <span className="bold text-gray-900 text-sm md:text-base">{item.title}</span>
                  <span className="text-sm text-gray-500 leading-6">{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why-trust"
        className="max-w-5xl m-auto mt-16 md:mt-20 px-5 xl:px-0"
      >
        <div className="flex flex-col justify-center items-start md:items-center gap-2 md:gap-5 w-full">
          <span className="text-gray-500 font-bold text-sm">
            دلایل انتخاب {companyInfo.brandName}
          </span>
          <h2 className="text-primary font-bold fat text-3xl mb-3 leading-normal">
            فرایند توسعهٔ نرم‌افزار اختصاصی چگونه با نیاز پروژه هماهنگ می‌شود؟
          </h2>
          <p className="text-gray-700 font-bold leading-7 text-justify">
            فرایند و ساختار داده پیش از تعیین دامنهٔ توسعه بررسی می‌شوند. تغییرات
            آینده، مانند افزودن شعبه، ماژول یا گزارش، باید از نظر اثر فنی و هزینه
            جداگانه ارزیابی شوند و بدون بازبینی دامنه تضمین‌شده نیستند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 md:mt-10 gap-4 xl:gap-10">
          <div className="col-span-2 md:pl-10 relative h-auto flex justify-center items-center">
            <Image
              alt="نمونه‌ای از سامانهٔ تبادل مالی نواتیک"
              loading="lazy"
              width={800}
              height={800}
              sizes="(max-width: 768px) 100vw, 66vw"
              className="rounded-xl w-full h-auto cursor-pointer z-10"
              src="/images/portfolio/novatech-financial-exchange-system.png"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-4 py-2">
            {trustHighlights.map((item) => (
              <div key={item.title} className="flex justify-center items-start gap-3">
                <Image
                  alt=""
                  loading="lazy"
                  width={60}
                  height={60}
                  src={item.image}
                />
                <p className="flex flex-col justify-center items-start text-right">
                  <span className="font-bold text-lg text-gray-900">{item.title}</span>
                  <span className="text-gray-600 text-sm leading-6">
                    {item.description}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="development-process" className="max-w-6xl mx-auto mt-20 px-5" aria-labelledby="development-process-title">
        <div className="mb-8">
          <span className="text-gray-500 font-bold text-sm">از مسئله تا تحویل</span>
          <h2 id="development-process-title" className="fat mt-2 text-3xl font-black leading-normal">مراحل توسعه که در هر پروژه باید روشن شوند</h2>
          <p className="mt-3 max-w-4xl text-gray-600 leading-8">مراحل زیر چارچوب گفت‌وگو و برنامه‌ریزی‌اند؛ جزئیات، معیار پذیرش و موارد تحویل پس از نیازسنجی در پیشنهاد همان پروژه تأیید می‌شوند.</p>
        </div>
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliveryProcess.map(([title, text]) => (
            <li key={title} className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="bold text-base text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-gray-600">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="services" className="max-w-6xl mx-auto mt-24 px-5">
        <div className="w-full flex-col justify-center items-start gap-4 flex mb-10">
          <span className="text-gray-500 font-bold text-sm">
            نمونه نرم افزارهای اجرا شده
          </span>
          <h2 className="fat text-3xl font-black leading-normal">
            راهکارهای دیتابیس و نرم افزارهای
            <strong className="text-primary"> اختصاصی </strong>
            ما
          </h2>
          <span className="text-gray-600 text-sm bold leading-8">
            کارت‌ها به نمونه‌کارهای ثبت‌شده پیوند دارند. قابلیت‌های هر مورد به
            همان پروژه مربوط است؛ مناسب‌بودن آن برای کار شما پس از نیازسنجی بررسی
            می‌شود و برای نسخهٔ جدید باید جداگانه در پیشنهاد تأیید شود.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {detailedServices.map((service) => (
            <Link
              href={`/portfolio/${service.slug}`}
              aria-label={`مشاهدهٔ نمونه‌کار: ${service.title}`}
              key={service.slug}
              className="group relative overflow-hidden bg-white rounded-[28px] border border-gray-200/80 shadow-[0_20px_55px_rgba(15,15,15,0.06)] p-4 md:p-5 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(15,15,15,0.1)] hover:border-primary/20"
            >
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden bg-background">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="pointer-events-none select-none object-contain object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70"></div>
              </div>
              <div className="flex items-start justify-between gap-4 text-right">
                <div className="flex flex-col gap-2">
                  <h3 className="fat !text-lg text-foreground">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-7">{service.description}</p>
                </div>
                <span className="shrink-0 bg-primary/10 text-primary rounded-2xl p-2.5 ring-1 ring-primary/10">
                  <Check className="size-4" aria-hidden="true" />
                </span>
              </div>
              <ul className="flex flex-col gap-3 pt-1 border-t border-gray-100">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-sm leading-7">
                    <span className="bg-gray-100 text-primary rounded-full p-1 mt-1 ring-1 ring-gray-200">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section - World Class Logic */}
      <section id="consultation" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#45505F] rounded-[4rem] p-12 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16 shadow-2xl shadow-gray-900/20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
            <div className="flex-1 flex flex-col gap-8 text-center lg:text-right relative z-10">
              <h2 className="fat text-4xl md:text-5xl text-white leading-[1.3]">
                آماده هوشمندسازی <br />
                <span className="text-primary">مدیریت داده‌هایتان</span> هستید؟
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed">
                درخواست را ثبت کنید تا موضوع و شرایط مشاوره با شما هماهنگ شود. دامنه، زمان‌بندی و هزینهٔ احتمالی پیش از شروع کار روشن می‌شوند.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-white/60">
                <Check className="text-primary" aria-hidden="true" />
                <span>دامنه و شرایط همکاری پیش از سفارش روشن می‌شود</span>
              </div>
            </div>

            <div className="flex-1 w-full max-w-md relative z-10">
              <LeadForm source="software-solutions" className="bg-white p-10 rounded-[3rem] shadow-2xl flex flex-col gap-5 border border-white/20">
                <div className="text-center mb-4">
                  <h3 className="fat text-2xl text-gray-900 mb-2">ثبت درخواست مشاوره</h3>
                  <p className="text-gray-500 text-sm">اطلاعات خود را وارد کنید</p>
                </div>
                <TextField name="name" placeholder="نام و نام خانوادگی" />
                <TextField name="phone" type="tel" placeholder="شماره تماس (مثلاً 07...)" dir="ltr" />
                <SelectField name="service" placeholder="نوع خدمت مورد نظر" options={serviceOptions} />
                <button type="submit" className="w-full py-5 bg-primary text-white fat text-lg rounded-2xl hover:brightness-110 hover:shadow-2xl hover:shadow-primary/30 transition-all transform active:scale-95 mt-2">
                  ارسال درخواست و تماس
                </button>
              </LeadForm>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ServiceFaq items={softwareSolutionsFaq} heading="سوالات متداول درباره نرم افزار اختصاصی" />
        </div>
      </section>
    </div>
  );
}
