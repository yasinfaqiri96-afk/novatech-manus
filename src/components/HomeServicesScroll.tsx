// @ts-nocheck -- ported from the original Next.js site
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import styles from "./HomeServicesScroll.module.css";

const services = [
  {
    href: "/web-design",
    title: "طراحی سایت و وب اپلیکیشن",
    description: "سایت فروشگاهی، شرکتی و خدماتی که به فرایندها و داده های واقعی کسب و کار وصل باشد",
    image: "/images/services/web-design-avatar.webp",
    alt: "آواتار سه بعدی لپتاپ برای خدمت طراحی سایت و وب اپلیکیشن",
  },
  {
    href: "/database-solutions",
    title: "طراحی و توسعه دیتابس",
    description:
      "مدل سازی داده، انتقال اطلاعات از اکسل و ساختاری که گزارش های شما را قابل اعتماد می کند",
    image: "/images/services/database-avatar.webp",
    alt: "آواتار سه بعدی دیتابس برای خدمت طراحی و توسعه دیتابس",
  },
  {
    href: "/graphic-design",
    title: "طراحی گرافیک",
    description: "لوگو، هویت بصری و طرح های تبلیغاتی که برند شما را حرفه ای و یکدست نشان می دهد",
    image: "/images/services/graphic-design-avatar.webp",
    alt: "آواتار سه بعدی پالت طراحی برای خدمت طراحی گرافیک",
  },
] as const;

const persianNumbers = ["۰۱", "۰۲", "۰۳"] as const;
const persianProgress = ["۱ / ۳", "۲ / ۳", "۳ / ۳"] as const;

/** Stable editorial service rail: every card remains in the document flow. */
export default function HomeServicesScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (!section || !cards.length) return;

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
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    cards.forEach((card) => observer.observe(card));

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const range = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / range));
      section.style.setProperty("--services-progress", progress.toFixed(4));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home-services"
      className={styles.section}
      aria-labelledby="home-services-title"
    >
      <div className={styles.shell}>
        <header className={styles.heading}>
          <p className={styles.kicker}>NOVATECH / SELECTED SERVICES</p>
          <h2 id="home-services-title" className={styles.title}>
            <span className="heavy">خدمات</span> <span className="light">ما</span>
          </h2>
          <Image
            alt=""
            aria-hidden="true"
            width={129}
            height={19}
            className={styles.signature}
            src="/images/signature.jpg"
          />
          <p className={styles.intro}>
            هر خدمت برای یک نیاز مشخص کسب و کار ساخته شده است؛ از وب سایت و دیتابس تا هویت بصری
            برند.
          </p>
          <span className={styles.scrollCue} aria-hidden="true">
            <span /> سه راهکار، یک مسیر رشد
          </span>
        </header>

        <div className={styles.rail} aria-hidden="true">
          <span className={styles.railFill} />
        </div>

        <div className={styles.cards}>
          {services.map((service, index) => (
            <article
              key={service.href}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
            >
              <div className={styles.visual}>
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={2560}
                  height={1440}
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className={styles.artwork}
                />
              </div>

              <div className={styles.content}>
                <p className={styles.indexRow} aria-hidden="true">
                  <span className={styles.index}>{persianNumbers[index]}</span>
                  <span className={styles.progress}>{persianProgress[index]}</span>
                </p>
                <p className={styles.eyebrow}>راهکارهای نواتیک</p>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <Link className={styles.action} href={service.href}>
                  <span>مشاهده خدمت</span>
                  <span className={styles.arrow} aria-hidden="true">
                    ←
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
