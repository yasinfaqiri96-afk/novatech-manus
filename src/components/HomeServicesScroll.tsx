// @ts-nocheck -- ported from the original Next.js site
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import styles from "./HomeServicesScroll.module.css";

const services = [
  {
    href: "/web-design",
    number: "۰۱",
    title: "طراحی سایت و وب اپلیکیشن",
    shortTitle: "حضور دیجیتال",
    description: "سایت فروشگاهی، شرکتی و خدماتی که به فرایندها و داده های واقعی کسب و کار وصل باشد",
    image: "/images/services/web-design-avatar.webp",
    alt: "آواتار سه بعدی لپتاپ برای خدمت طراحی سایت و وب اپلیکیشن",
  },
  {
    href: "/database-solutions",
    number: "۰۲",
    title: "طراحی و توسعه دیتابس",
    shortTitle: "داده قابل اعتماد",
    description:
      "مدل سازی داده، انتقال اطلاعات از اکسل و ساختاری که گزارش های شما را قابل اعتماد می کند",
    image: "/images/services/database-avatar.webp",
    alt: "آواتار سه بعدی دیتابس برای خدمت طراحی و توسعه دیتابس",
  },
  {
    href: "/graphic-design",
    number: "۰۳",
    title: "طراحی گرافیک",
    shortTitle: "هویت ماندگار",
    description: "لوگو، هویت بصری و طرح های تبلیغاتی که برند شما را حرفه ای و یکدست نشان می دهد",
    image: "/images/services/graphic-design-avatar.webp",
    alt: "آواتار سه بعدی پالت طراحی برای خدمت طراحی گرافیک",
  },
] as const;

export default function HomeServicesScroll() {
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (!cards.length) return;

    cards.forEach((card) => card.classList.add(styles.revealReady));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home-services" className={styles.section} aria-labelledby="home-services-title">
      <div className={styles.shell}>
        <header className={styles.heading}>
          <div className={styles.headingMeta}>
            <span className={styles.kicker}>CAPABILITIES / ۰۱—۰۳</span>
            <span className={styles.headingLine} aria-hidden="true" />
            <span className={styles.kicker}>NOVATECH</span>
          </div>
          <h2 id="home-services-title" className={styles.title}>
            <span>راهکارهایی برای</span>
            <strong>رشد واقعی</strong>
          </h2>
          <div className={styles.headingBottom}>
            <Image
              alt=""
              aria-hidden="true"
              width={129}
              height={19}
              className={styles.signature}
              src="/images/signature.jpg"
            />
            <p className={styles.intro}>
              از اولین ایده تا اجرای دقیق، ابزارهای دیجیتال شما باید ساده، قابل اعتماد و آماده رشد
              باشند.
            </p>
          </div>
        </header>

        <div className={styles.cards}>
          {services.map((service, index) => (
            <article
              key={service.href}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className={`${styles.card} ${index === 0 ? styles.featured : ""}`}
              style={{ "--delay": `${index * 110}ms` }}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>{service.number}</span>
                <span className={styles.cardArrow} aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className={styles.visual}>
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={2560}
                  height={1440}
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className={styles.artwork}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.eyebrow}>{service.shortTitle}</p>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <Link className={styles.action} href={service.href}>
                  <span>مشاهده خدمت</span>
                  <span aria-hidden="true">←</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <footer className={styles.footerNote}>
          <span>یک تیم، چند تخصص، یک استاندارد</span>
          <span className={styles.footerDot} aria-hidden="true" />
          <span>ساخته‌شده برای کسب‌وکار شما</span>
        </footer>
      </div>
    </section>
  );
}
