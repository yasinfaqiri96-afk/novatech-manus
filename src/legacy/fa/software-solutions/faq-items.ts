// @ts-nocheck -- ported from the original Next.js site
/**
 * The questions shown on /software-solutions. They live here rather than inside
 * the client component so the server page can build the FAQPage JSON-LD from the
 * exact same array the visitor reads — the schema can never drift from the
 * visible answers, which is what Google requires of FAQ markup.
 */
export type SoftwareSolutionsFaqItem = {
  question: string;
  answer: string;
};

export const softwareSolutionsFaq: SoftwareSolutionsFaqItem[] = [
  {
    question: "۱. آیا این نرم‌افزارها برای کسب‌وکار من قابل شخصی‌سازی هستند؟",
    answer:
      "بعد از نیازسنجی مشخص می‌شود کدام بخش از فرایند در دامنهٔ راهکار پیشنهادی قرار می‌گیرد و چه تغییر اختصاصی لازم است. دامنه و برآورد پیش از سفارش با شما روشن می‌شود.",
  },
  {
    question: "۲. استقرار و راه‌اندازی نرم‌افزار چقدر زمان می‌برد؟",
    answer:
      "پس از بررسی نوع سیستم، دامنهٔ کار، انتقال داده و آموزش، زمان‌بندی پیشنهاد می‌شود. برای پروژه‌ای که هنوز نیازسنجی نشده است زمان قطعی یا تضمین‌شده اعلام نمی‌کنیم.",
  },
  {
    question: "۳. آیا امکان انتقال اطلاعات از سیستم‌های قبلی وجود دارد؟",
    answer:
      "فایل‌ها و سیستم فعلی ابتدا از نظر ساختار و کیفیت داده بررسی می‌شوند؛ سپس دامنهٔ پاک‌سازی، انتقال و تطبیق اطلاعات در پیشنهاد پروژه مشخص می‌شود.",
  },
  {
    question: "۴. هزینه خرید نرم‌افزارها چگونه محاسبه می‌شود؟",
    answer:
      "هزینه بسته به نوع نرم‌افزار، تعداد کاربران و نیاز به ماژول‌های اختصاصی متفاوت است. بعد از مشاوره و نیازسنجی، برآورد دقیق و شفاف خدمت شما اعلام می‌شود.",
  },
  {
    question: "۵. آیا این سیستم‌ها با وب‌سایت یا فروشگاه آنلاین من هماهنگ می‌شوند؟",
    answer:
      "اگر اتصال لازم باشد، ابتدا سامانهٔ فعلی و شکل داده بررسی می‌شود. بعد از بررسی فنی مشخص می‌شود API، تبادل فایل یا روش دیگری مناسب است و دامنهٔ آن در پیشنهاد کار می‌آید.",
  },
];
