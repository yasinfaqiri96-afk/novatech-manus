// @ts-nocheck -- ported from the original Next.js site
import Link from "next/link";
import styles from "./NazerOverview.module.css";

const review = [
  ["حسابات", "ساختار حساب‌ها، اسناد و مانده‌ها را با نیاز روزانهٔ خود در دمو مقایسه کنید."],
  ["دریافت و پرداخت", "برای نمونه، ثبت و پیگیری دریافت‌ها، پرداخت‌ها و تسویه‌ها را در نسخهٔ نمایش‌داده‌شده بررسی کنید."],
  ["مصارف", "دسته‌بندی مصارف مورد نیاز خود را با آنچه در دمو قابل مشاهده است بسنجید."],
  ["راپورهای مالی", "نام گزارش‌هایی را که مدیر و حسابدار لازم دارند یادداشت کنید و امکان‌شان را در نسخهٔ پیشنهادی تأیید بگیرید."],
  ["نیازهای اختصاصی", "کاربران، استقرار، انتقال داده و اتصال به سیستم‌های دیگر را پیش از سفارش روشن کنید."],
];

/** These are buyer questions to verify, not blanket claims about every version. */
const fit = [
  ["افغانی و دالر", "اگر معاملهٔ چندارزی دارید، ثبت نمونه، نرخ تبدیل و گزارش مورد نیاز را در دموی همین نسخه بسنجید و پشتیبانی نسخهٔ مورد سفارش را تأیید کنید."],
  ["فایل‌های فعلی", "یک نمونه از اکسل یا سیستم پیشین بیاورید؛ امکان و دامنهٔ پاک‌سازی، انتقال و تطبیق داده پیش از قرارداد مشخص شود."],
  ["محل استقرار", "نیاز برق، اینترنت و دسترسی بیرونی را توضیح دهید؛ روش قابل ارائه برای نسخهٔ انتخابی در پیشنهاد تأیید شود."],
  ["آموزش و پشتیبانی", "نوع آموزش، کاربران مشمول، کانال و مدت پشتیبانی را پیش از سفارش در قرارداد روشن کنید."],
];

export default function NazerOverview() {
  return <div className={styles.root}>
    <nav className={styles.nav} aria-label="راهنمای صفحه ناظر">
      <a href="#nazer-review">بررسی امکانات در دمو</a><a href="#nazer-demo-preview">دیدن نرم افزار</a><a href="#order">درخواست دمو</a><a href="#accounting-solutions">راهکارهای اختصاصی</a>
    </nav>
    <section className={styles.section} aria-labelledby="nazer-problems">
      <header className={styles.head}><p>از نیاز واقعی شروع کنید</p><h2 id="nazer-problems">وقتی حسابات در چند جای مختلف است</h2><p>ثبت دوبارهٔ معلومات، پیگیری دشوار طلب و بدهی، و راپورهای پراکنده وقت تیم مالی را می‌گیرد. در انتخاب نرم افزار، جریان واقعی کارتان را معیار قرار دهید.</p></header>
      <div className={styles.cards}>{[["حسابدار", "ثبت روزانه و تطبیق حسابات"],["مدیر", "دید روشن از دریافت، پرداخت و مصارف"],["صاحب تجارت", "بررسی وضعیت مالی پیش از تصمیم"]].map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section className={`${styles.section} ${styles.band}`} aria-labelledby="nazer-fit-title">
      <header className={styles.head}><p>چک‌لیست پیش از انتخاب</p><h2 id="nazer-fit-title">در دمو و پیشنهاد ناظر چه چیزهایی را تأیید کنید؟</h2><p>این‌ها نیازهایی برای گفت‌وگو هستند، نه تضمین اینکه همهٔ امکانات در هر نسخهٔ آماده وجود دارند. نسخه و دامنهٔ مورد سفارش را پیش از توافق بررسی کنید.</p></header>
      <div className={`${styles.cards} ${styles.four}`}>{fit.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section id="nazer-review" className={styles.section} aria-labelledby="nazer-review-title">
      <header className={styles.head}><p>انتخاب آگاهانه</p><h2 id="nazer-review-title">چه چیز را در دموی ناظر بررسی کنیم؟</h2><p>امکانات همین نسخه را با جریان کار واقعی‌تان مقایسه کنید؛ هر کار اختصاصی یا موردی که در دمو دیده نمی‌شود باید جداگانه در دامنه و پیشنهاد بیاید.</p></header>
      <div className={styles.cards}>{review.map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section id="nazer-demo-preview" className={styles.section} aria-labelledby="nazer-preview-title">
      <header className={styles.head}><p>نرم افزار حسابداری نواتیک</p><h2 id="nazer-preview-title">محیط ناظر را در دمو ببینید</h2><p>نوع تجارت و نیازهای مالی‌تان را بگویید تا نسخهٔ مورد سفارش را با تیم نواتیک بررسی کنید. برای فروشگاه، شرکت خدماتی یا تجارت عمده، نیازهای ثبت و راپور یکسان نیست.</p></header>
      <div className={styles.actions}><a href="#order">درخواست دموی ناظر</a><Link href="/contact">گفت‌وگو با نواتیک</Link></div>
    </section>
    <section className={styles.section} aria-labelledby="nazer-start-title">
      <header className={styles.head}><h2 id="nazer-start-title">سه قدم تا انتخاب نسخه مناسب</h2></header>
      <ol className={styles.steps}><li><h3>نیازتان را مشخص کنید</h3><p>نوع تجارت، کارهای مالی و راپورهای مورد نیاز را توضیح دهید.</p></li><li><h3>نسخه را در دمو ببینید</h3><p>جریان کارتان را با محیط نرم افزار مقایسه کنید.</p></li><li><h3>دامنه کار را روشن کنید</h3><p>کاربرها، استقرار، آموزش و پشتیبانی را پیش از سفارش با شرکت توافق کنید.</p></li></ol>
    </section>
  </div>;
}
