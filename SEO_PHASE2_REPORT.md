# گزارش مرحلهٔ دوم سئو و بهبود محتوای NOVATECH

**وضعیت اجرا:** تغییرها در پوشهٔ محلی `F:\novatech update seo\نواتیک ریکت\site-sync-master-main` اعمال و بررسی شدند. هیچ تغییری push یا deploy نشده است.

## خلاصهٔ اجرا

- پنج صفحهٔ عمومیِ شرکت‌های نرم‌افزاری افغانستان بررسی شد و فرصت‌های محتوایی بر پایهٔ شواهد قابل مشاهده استخراج شد؛ هیچ رتبه، حجم جست‌وجو، ترافیک یا backlink تخمین زده نشده است.
- صفحات حسابداری/ناظر، دیتابیس، نرم‌افزار اختصاصی، سیستم‌های مدیریتی، ERP و هرات به‌روزرسانی شدند تا فرایند، دامنهٔ خدمت، شواهد واقعی و گام بعدی روشن‌تر باشد؛ ادعاهای فنی یا زمان‌بندیِ تأییدنشده به وعدهٔ قطعی تبدیل نشدند.
- برای هشت تصویر raster واقعاً استفاده‌شده، نسخه‌های WebP واکنش‌گرا ساخته شد. اصل تصویرها حفظ شده‌اند و `srcSet` فقط برای مسیرهایی فعال است که مشتق واقعی در manifest دارند.
- رفتار 404 سمت سرور برای slugهای نامعتبر اصلاح شد؛ پاسخ‌های خطا `noindex` می‌گیرند و canonical/`og:url` ندارند.
- Vitest: **۷ از ۷**؛ production build: **موفق**؛ آزمون HTTP/SSR محلی: **۲۵ از ۲۵**.

## تحقیق صفحات رقیب

مشاهدات زیر از محتوای قابل‌مشاهدهٔ صفحه‌های رسمی‌اند، نه تأیید مستقل ادعاهای هر شرکت.

| شرکت و صفحهٔ بررسی‌شده | تفاوت/الگوی قابل مشاهده | پاسخ محتوایی NOVATECH |
|---|---|---|
| [Daftarak — هرات](https://www.daftarak.af/herat) | صفحهٔ حسابداری محلی را به بازارها و جریان‌هایی مانند حواله/صرافی، واردات، خرده‌فروشی و قالین/صنایع‌دستی پیوند می‌دهد؛ FAQ و مسیر ثبت‌نام/تماس دارد. در صفحهٔ بررسی‌شده screenshot محصول، case study یا مشتری نام‌برده دیده نشد؛ نقل‌قول‌های «Voices of Herat» به‌عنوان شخصیت‌های نمونه معرفی شده بودند، نه testimonial. | صفحهٔ هرات نواتیک به اطلاعات تماس واقعی و خدمات قابل ارائه متکی است و محل پروژه‌هایی را که شهرشان ثبت نشده به هرات نسبت نمی‌دهد. |
| [Fida Technologies — توسعهٔ نرم‌افزار اختصاصی](https://fida.af/fa/custom-software-development-afghanistan) | محتوای تجاریِ مرحله‌بندی‌شده، فرایند پنج‌مرحله‌ای، ورودی‌های برآورد پروژه، FAQ و CTA پیشنهاد دارد؛ در همان صفحه case study جزئی یا نتیجهٔ عددی مشاهده نشد. | صفحهٔ نرم‌افزار اختصاصی نواتیک discovery تا طراحی، توسعه، آزمون، استقرار و پشتیبانی را به‌صورت روند توضیح می‌دهد و کارت‌ها را به case studyهای موجود پیوند می‌دهد. |
| [Bedel Tech — دیتابیس](https://tech.bedelgroup.com/databases.html) | grid گستردهٔ دامنه‌ها، illustration داشبورد و CTA تماسی دارد؛ در صفحهٔ بررسی‌شده فرایند روشن انتقال/آزمون، FAQ، شواهد case study یا نشانی محلی دیده نشد. تصویر و قابلیت‌های صفحه صرفاً ادعاهای خود شرکت‌اند. | صفحهٔ دیتابیس نواتیک نیازسنجی، مدل‌سازی داده، آزمون، دسترسی، گزارش، انتقال داده در صورت پشتیبانی و نگهداریِ وابسته به توافق را scannable می‌کند. |
| [Alkharazmi — صفحهٔ اصلی دری](https://www.alkharazmi.com/fa) | چیدمان محصول‌محور با کارت‌های چند محصول، demo/simulator، چرخهٔ خدمت، نمونه‌کار، testimonial، تیم/وبلاگ، FAQ و تماس محلی دارد. | نواتیک از الگوهای ساختاری مفید استفاده می‌کند، اما testimonial، مشتری، نتیجه یا قابلیت تأییدنشده اضافه نمی‌کند؛ به‌جای آن به نمونه‌کارهای ثبت‌شده و scope قابل تأیید متکی است. |
| [Etimad Software — توسعهٔ نرم‌افزار اختصاصی](https://etimadsoftware.com/services/custom-software-development) | صفحهٔ خدمات کوتاه با workflow سفارشی، فهرست دامنه، فناوری‌ها، لینک خدمات مرتبط و فرم تماس از پیش‌آماده دارد؛ روند high-level است و در صفحهٔ بررسی‌شده FAQ یا screenshot/case detail مشاهده نشد. | توضیح روند و ارتباط با شواهد واقعی پروژه‌ها در صفحهٔ نرم‌افزار نواتیک تقویت شد؛ فناوری یا زمان تحویلِ تضمین‌شده اضافه نشد. |

**دسترسی به دادهٔ جست‌وجو:** Google Search Console در connectorهای فعال موجود نبود و اتصال‌های Ahrefs خاموش بودند؛ بنابراین گزارش شامل query volume، ranking یا ترافیک واقعی نیست.

## تغییرهای محتوایی مهم

- **صفحهٔ خانه:** canonical و metadata اجتماعی با builder مشترک هماهنگ شد. پیام‌های مزیت صفحه بازنویسی شدند تا وعدهٔ «مشاورهٔ رایگان»، «بدون هزینهٔ پنهان»، «عدم نیاز به بازنویسی» یا پشتیبانی قطعی ندهند؛ لینک‌های زمینه‌ای به خدمات هدف حفظ شدند.
- **`/accounting-software`:** ناظر به‌عنوان محصولی معرفی می‌شود که نسخهٔ قابل ارائه و تناسب آن باید در demo بررسی شود. FAQ دربارهٔ چندارزی، انتقال داده، استقرار، گزارش و پشتیبانی مشروط و قابل تأیید است. کارت‌های پلن از اعداد و زمان‌های نامشخص (مانند تعداد کاربر یا «۷/۱۰/۱۵») و قابلیت‌های قطعی به محورها و پرسش‌های نیازسنجی تبدیل شدند. بخش نیازهای حسابداری به‌صراحت به‌عنوان نمونهٔ راهکار سفارشی در کنار محصول از امکانات تضمین‌شدهٔ هر نسخه جدا شده است. `#order` در SSR به بخش حاوی فرم واقعی می‌رسد.
- **`/database-solutions`:** فرایند و پرسش‌های آماده‌سازی نیاز، دسترسی، آزمون، انتقال/استقرار و نگهداری روشن‌تر شده؛ انتقال یا گزارش‌دهی به‌صورت تضمین عمومی بیان نمی‌شود.
- **`/software-solutions`:** مسیر اجرایی، FAQ، شواهد نمونه‌کار و لینک case studyها تقویت شده‌اند؛ وعدهٔ استقرار زیر یک هفته حذف شده است. تصویرهای نامرتبط با screenshot واقعی جایگزین شدند و capabilityهای پروژه به‌جای ادعای عمومی، به case study مربوط وصل‌اند.
- **`/business-systems` و `/erp`:** نیازِ مدیریت عملیات روزانه از نیازِ برنامه‌ریزی/پیاده‌سازی ERP جدا شد؛ لینک‌های دوطرفه و محتوا/structured data با این تمایز هماهنگ شدند. ERP به‌عنوان محصول آمادهٔ دارای قابلیت‌های ثابت معرفی نمی‌شود.
- **`/herat`:** اطلاعات تماس و نشانی رسمی حفظ شد؛ نسبت‌دادن پروژه‌های ملی به مشتری محلی یا وعدهٔ بازدید/پشتیبانیِ تأییدنشده حذف یا مشروط شد.
- **صفحهٔ طراحی وب و پوستهٔ سرویس‌ها:** screenshot واقعی نمونه‌کار آریانا، alt متناسب با خود تصویر، ابعاد ذاتی تصویر و لینک‌های زمینه‌ای به‌کار رفته‌اند.

## تصویرهای واکنش‌گرا و اندازهٔ فایل

اسکریپت `scripts/generate-responsive-images.py` با WebP کیفیت 88 نسخه‌های کوچک‌تر می‌سازد، نسبت تصویر را حفظ می‌کند و اصل را overwrite نمی‌کند. manifest فقط کاندیدهای موجود را وارد `srcSet` می‌کند؛ ویژگی `sizes` برای مسیرهای بدون مشتق افزوده نمی‌شود. اعداد زیر اندازهٔ واقعی فایل source و بزرگ‌ترین مشتق WebP هر source هستند؛ انتخاب واقعی مرورگر به viewport، DPR و `sizes` بستگی دارد.

| تصویر | اصل (بایت) | مشتق اندازه‌گیری‌شده | بایت مشتق | کاهش فایل |
|---|---:|---:|---:|---:|
| داشبورد مدیریت | 116,602 | 1440w | 52,876 | 54.7% |
| تصویر تیم | 132,978 | 1324w | 51,092 | 61.6% |
| screenshot دسکتاپ آریانا | 731,771 | 1440w | 417,422 | 43.0% |
| screenshot موبایل آریانا | 300,998 | 320w | 219,228 | 27.2% |
| screenshot دسکتاپ نور | 644,069 | 1440w | 390,212 | 39.4% |
| screenshot موبایل نور | 434,346 | 320w | 248,994 | 42.7% |
| screenshot دسکتاپ Le Petit | 613,693 | 1440w | 378,656 | 38.3% |
| screenshot موبایل Le Petit | 245,772 | 320w | 128,664 | 47.6% |

Widthهای ساخته‌شده: داشبورد `480/960/1440`؛ تیم `320/640/960/1324`؛ screenshotهای دسکتاپ `480/960/1440`؛ screenshotهای موبایل `320`. خروجی‌ها WebP هستند؛ تصویر اصلی و ابعاد اصلی حفظ می‌شوند. این اندازه‌گیری‌ها مقایسهٔ فایل‌هاست، نه سنجش زمان بارگذاری صفحه یا Lighthouse.

## SEO فنی و QA

- routeهای dynamic برای مقاله، نمونه‌کار و topicهای مشعل قبل از رندر اعتبارسنجی می‌شوند و slug نامعتبر **HTTP 404 واقعی** می‌گیرد.
- shim مربوط به `next/navigation` اکنون `notFound()` را به‌صورت signal قابل پرتاب پیاده‌سازی می‌کند؛ root not-found هم `<meta name="robots" content="noindex, nofollow">` دارد.
- صفحه‌های fallback canonical و `og:url` گمراه‌کننده ندارند. تست metadata مشترک نیز این رفتار noindex را پوشش می‌دهد.
- پاسخ‌های HTTP معتبر برای صفحهٔ اصلی، شش صفحهٔ خدمات هدف و صفحهٔ portfolio بررسی شدند: **200** و canonical/`og:url` متناظر.
- سه URL نامعتبر آزمایش شدند: `/blog/seo-regression-invalid-slug`، `/portfolio/seo-regression-invalid-slug` و `/oil-and-gas-software/seo-regression-invalid-slug`؛ هر سه **404، noindex و بدون canonical/`og:url`**.
- `#order`، وجود `srcSet` داشبورد واقعی در HTML نرم‌افزار، `sitemap.xml` (۵۸ URL قابل parse) و directive نقشه در `robots.txt` بررسی شدند.
- `npm run test`: **۷/۷ تست در ۳ فایل؛ exit code 0**.
- `npm run build`: **exit code 0**؛ artifact در `.output/server` برای Nitro/Cloudflare ساخته شد.
- smoke test با Vite dev SSR محلی: **۲۵/۲۵ check؛ صفر شکست**.

### محدودیت preview و سنجش عملکرد

`vite preview` در محیط محلی با خروجی Cloudflare/Nitro پروژه سازگار نبود و به مسیر `dist/server/server.js` اشاره کرد، درحالی‌که build در `.output/server` تولید شد. خود production build موفق است؛ آزمون HTTP بالا از dev SSR انجام شد، نه از preview artifact. آزمون Lighthouse/Core Web Vitals، browser visual/accessibility و دادهٔ Search Console اجرا نشده‌اند؛ در این گزارش ادعای performance صفحه یا ranking ارائه نمی‌شود.

## فایل‌های تغییرکرده

### کد و آزمون‌ها

- `package.json`
- `scripts/generate-responsive-images.py`
- `scripts/seo-http-smoke.py`
- `src/components/HomeClient.tsx`
- `src/components/NazerOverview.tsx`
- `src/components/PortfolioGallery.tsx`
- `src/components/PortfolioPreviewModal.tsx`
- `src/components/ServicePageShell.tsx`
- `src/legacy/fa/accounting-software/page.tsx`
- `src/legacy/fa/business-systems/page.tsx`
- `src/legacy/fa/database-solutions/page.tsx`
- `src/legacy/fa/erp/page.tsx`
- `src/legacy/fa/herat/page.tsx`
- `src/legacy/fa/software-solutions/faq-items.ts`
- `src/legacy/fa/software-solutions/SoftwareSolutionsClient.tsx`
- `src/legacy/fa/web-design/page.tsx`
- `src/lib/metadata.ts`
- `src/lib/next-head.ts`
- `src/lib/responsive-images.generated.json`
- `src/lib/responsive-images.ts`
- `src/lib/services.ts`
- `src/routes/blog.$slug.tsx`
- `src/routes/index.tsx`
- `src/routes/oil-and-gas-software.$topic.tsx`
- `src/routes/portfolio.$slug.tsx`
- `src/routes/__root.tsx`
- `src/shims/next-image.tsx`
- `src/shims/next-navigation.ts`
- `src/test/responsive-images.test.ts`
- `src/test/seo-regression.test.ts`

### دارایی‌های تولیدشده

- `public/images/portfolio/novatech-management-dashboard-{480,960,1440}w.webp`
- `public/images/portfolio/novatech-team-{320,640,960,1324}w.webp`
- `public/images/portfolio/ariana-desktop-{480,960,1440}w.webp`
- `public/images/portfolio/ariana-mobile-320w.webp`
- `public/images/portfolio/noor-desktop-{480,960,1440}w.webp`
- `public/images/portfolio/noor-mobile-320w.webp`
- `public/images/portfolio/lepetit-desktop-{480,960,1440}w.webp`
- `public/images/portfolio/lepetit-mobile-320w.webp`

این گزارش در `SEO_PHASE2_REPORT.md` ذخیره شده است.

## وضعیت Git و انتشار

- هیچ commit، stage، push یا deploy انجام نشده است.
- `git -C` گزارش داد ریشهٔ Git در پوشهٔ والد `F:\novatech update seo` است و پروژهٔ سایت در وضعیت untracked (`?? ../`) دیده می‌شود؛ بنابراین پیش از stage/commit باید ریشهٔ مخزن بررسی شود تا فقط پروژهٔ مورد نظر ثبت شود.
- اتصال Google Search Console و داده‌های عملکرد/جست‌وجو همچنان برای مرحلهٔ بعد لازم است.


## نقشهٔ طبیعی کلیدواژه به صفحه

| intent / عبارت‌های نمونه | صفحهٔ اصلی هدف |
|---|---|
| نرم‌افزار حسابداری افغانستان/هرات، سیستم حسابداری، accounting software Afghanistan | `/accounting-software` |
| طراحی دیتابیس اختصاصی، طراحی دیتابیس شرکت‌ها، custom database development Afghanistan | `/database-solutions` |
| ساخت نرم‌افزار اختصاصی، شرکت توسعه نرم‌افزار افغانستان/هرات، custom software development Afghanistan | `/software-solutions` |
| سیستم مدیریت کسب‌وکار و هماهنگی عملیات | `/business-systems` |
| برنامه‌ریزی و پیاده‌سازی ERP | `/erp` |
| خدمات شرکت نرم‌افزاری در هرات و تماس محلی | `/herat` |

این نگاشت، تقسیم موضوعی پیشنهادی بر پایهٔ intent است؛ به‌دلیل نبود Google Search Console یا ابزار keyword فعال، نشان‌دهندهٔ volume، رتبه یا تقاضای اندازه‌گیری‌شده نیست.
