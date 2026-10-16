// @ts-nocheck -- ported from the original Next.js site
"use client";

import Link from "next/link";
import { ArrowUpLeft, Check, MoveLeft } from "lucide-react";
import { companyInfo } from "@/lib/site-content";
import styles from "./HomeHero.module.css";

const highlights = ["تحلیل دقیق نیاز", "توسعه اختصاصی", "پشتیبانی قابل اتکا"];

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.gridGlow} aria-hidden="true" />
      <div className={styles.shell}>
        <div className={styles.eyebrow}>
          <span /> استودیو نرم‌افزار و تجربه دیجیتال نواتیک
        </div>
        <div className={styles.content}>
          <div className={styles.copy}>
            <h1 id="home-hero-title">
              برای رشد کسب‌وکار، <strong>فناوری درست</strong> می‌سازیم.
            </h1>
            <p>
              از طراحی وب‌سایت و دیتابیس تا نرم‌افزارهای تخصصی؛ نواتیک راهکارهایی روشن، قابل توسعه و
              متناسب با واقعیت کسب‌وکار شما می‌سازد.
            </p>
            <div className={styles.actions}>
              <Link href="/contact" className={styles.primary}>
                شروع یک گفت‌وگو <ArrowUpLeft size={18} aria-hidden="true" />
              </Link>
              <Link href="/portfolio" className={styles.secondary}>
                مشاهده نمونه‌کارها <MoveLeft size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.highlights}>
              {highlights.map((item) => (
                <span key={item}>
                  <Check size={14} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.visual} aria-label="راهکارهای دیجیتال نواتیک">
            <div className={styles.visualOrb} aria-hidden="true" />
            <div className={`${styles.card} ${styles.cardTop}`}>
              <span>01 / محصول</span>
              <b>مشعل</b>
              <small>مدیریت تجارت نفت و گاز</small>
            </div>
            <div className={`${styles.card} ${styles.cardMain}`}>
              <span>راهکارهای دیجیتال</span>
              <b>داده، طراحی، توسعه</b>
              <div className={styles.line}>
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className={`${styles.card} ${styles.cardBottom}`}>
              <span>02 / محصول</span>
              <b>ناظر</b>
              <small>حسابداری و مدیریت مالی</small>
            </div>
            <div className={styles.verticalLabel}>NOVATECH / 2026</div>
          </div>
        </div>
        <div className={styles.footerLine}>
          <span>{companyInfo.brandName}؛ از ایده تا سیستم قابل استفاده</span>
          <Link href="/software-solutions">
            راهکارهای ما <MoveLeft size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
