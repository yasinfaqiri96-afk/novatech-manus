// @ts-nocheck -- ported from the original Next.js site
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, MoveLeft } from "lucide-react";
import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.shell}>
        <div className={styles.frame}>
          <Image
            src="/images/novatech-hero-editorial.webp"
            alt="تصویر مفهومی از فناوری، داده و راهکارهای دیجیتال نواتیک"
            fill
            priority
            sizes="(max-width: 700px) calc(100vw - 28px), 1280px"
            className={styles.image}
          />
          <div className={styles.tint} aria-hidden="true" />
          <div className={styles.copy}>
            <span className={styles.kicker}>استودیو نرم‌افزار و تکنالوژی نواتیک</span>
            <h1 id="home-hero-title">
              راهکارهای دیجیتال برای <strong>رشد واقعی</strong> کسب‌وکار.
            </h1>
            <p>
              از طراحی وب‌سایت و دیتابیس تا ساخت نرم‌افزارهای تخصصی؛ یک مسیر روشن برای تبدیل ایده به
              سیستم قابل استفاده.
            </p>
            <div className={styles.actions}>
              <Link href="/contact" className={styles.primary}>
                درخواست مشاوره <ArrowUpLeft size={17} aria-hidden="true" />
              </Link>
              <Link href="/portfolio" className={styles.secondary}>
                نمونه‌کارها <MoveLeft size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className={styles.signature} aria-hidden="true">
            NOVATECH / DIGITAL SYSTEMS
          </div>
        </div>
        <div className={styles.underHero}>
          <span>مشکل پیچیده را به راهکار ساده تبدیل می‌کنیم.</span>
          <Link href="/software-solutions">
            مشاهده راهکارها <MoveLeft size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
