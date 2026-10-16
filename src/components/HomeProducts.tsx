// @ts-nocheck -- ported from the original Next.js site
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Gauge, Layers3, ShieldCheck, WalletCards } from "lucide-react";
import { useEffect, useRef } from "react";

import styles from "./HomeProducts.module.css";

const products = [
  {
    key: "mashal",
    label: "ERP تخصصی نفت و گاز",
    name: "مشعل",
    latin: "MASHAL",
    text: "عملیات قرارداد، بارگیری، حمل، تانک، فروش و حساب شرکا را در یک جریان کاری یکپارچه و قابل ردیابی جمع می‌کند.",
    points: ["قرارداد، بارگیری و حمل", "موجودی تانک و فروش", "حساب شرکا و راپور مفاد"],
    href: "/oil-and-gas-software",
    cta: "معرفی کامل مشعل",
    demoHref: "/oil-and-gas-software#mashal-demo",
    image: "/images/mashal/mashal-dashboard-overview.webp",
    imageAlt: "داشبورد واقعی نرم افزار مشعل با قراردادها، بارها، موجودی و راپورهای مالی",
    metric: "یک جریان برای تمام عملیات",
    tone: "mashal",
  },
  {
    key: "nazer",
    label: "حسابداری و مدیریت مالی",
    name: "ناظر",
    latin: "NAZER",
    text: "ثبت روزانه حسابات، پیگیری دریافت و پرداخت و دیدن وضعیت مالی کسب و کار را به تصمیم‌های روشن‌تر تبدیل می‌کند.",
    points: ["حسابات و مانده‌ها", "دریافت، پرداخت و مصارف", "راپورهای مالی برای مدیر"],
    href: "/accounting-software",
    cta: "آشنایی با ناظر",
    demoHref: "/accounting-software#order",
    imageAlt: "نمای مفهومی داشبورد حسابداری و مدیریت مالی ناظر",
    metric: "دید روشن‌تر برای تصمیم‌های روزانه",
    tone: "nazer",
  },
] as const;

const productIndexes = ["۰۱", "۰۲"] as const;

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const ease = (value: number) => 1 - Math.pow(1 - value, 3);

function NazerVisual() {
  return (
    <div className={styles.nazerVisual} aria-hidden="true">
      <div className={styles.nazerGlow} />
      <div className={styles.nazerBrand}>
        <span className={styles.nazerName}>ناظر</span>
        <span className={styles.nazerLatin}>NAZER · FINANCE</span>
      </div>
      <div className={styles.nazerDashboard}>
        <div className={styles.dashboardTop}>
          <span>خلاصه مالی</span>
          <span className={styles.dashboardDot} />
        </div>
        <div className={styles.dashboardValue}>
          ۱۲۵,۴۰۰ <small>افغانی</small>
        </div>
        <div className={styles.dashboardBars}>
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className={styles.dashboardFooter}>
          <span>
            <b /> دریافت
          </span>
          <span>
            <b /> پرداخت
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HomeProducts() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = false;

    const clearCards = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.style.transform = "";
        card.style.opacity = "";
        card.style.pointerEvents = "";
      });
    };

    const render = () => {
      frame = 0;
      if (motionQuery.matches) {
        clearCards();
        return;
      }

      const scrollable = track.offsetHeight - window.innerHeight;
      const progress =
        scrollable > 0 ? clamp01(-track.getBoundingClientRect().top / scrollable) : 0;
      const position = progress * products.length;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const distance = position - index;
        let offset = 0;
        let opacity = 1;
        let scale = 1;

        if (distance <= -1) {
          offset = 108;
          opacity = 0;
        } else if (distance < 0) {
          offset = 108 * (1 - ease(distance + 1));
          opacity = 1;
        } else {
          const depth = ease(Math.min(1, distance));
          scale = 1 - depth * 0.045;
          opacity = distance < 1.05 ? 1 : 0;
        }

        card.style.transform = `translate3d(0, ${offset.toFixed(2)}%, 0) scale(${scale.toFixed(4)})`;
        card.style.opacity = opacity.toFixed(3);
        card.style.pointerEvents = distance >= 0 && distance < 1 ? "auto" : "none";
      });
    };

    const request = () => {
      if (frame || !visible) return;
      frame = window.requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) request();
      },
      { rootMargin: "30% 0px" },
    );

    observer.observe(track);
    render();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });
    motionQuery.addEventListener("change", render);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      motionQuery.removeEventListener("change", render);
      if (frame) window.cancelAnimationFrame(frame);
      clearCards();
    };
  }, []);

  return (
    <section className={styles.section} aria-labelledby="ready-products-title">
      <div ref={trackRef} className={styles.track}>
        <div className={styles.sticky}>
          <div className={styles.header}>
            <div>
              <p className={styles.kicker}>محصولات تخصصی نواتیک</p>
              <h2 id="ready-products-title" className={styles.title}>
                ابزارهایی برای <span>کنترل بهتر</span>
              </h2>
            </div>
            <p className={styles.lead}>
              دو محصول تخصصی برای دو نقطه حساس کسب‌وکار؛ عملیات نفت و گاز و مدیریت مالی.
            </p>
          </div>

          <div className={styles.stage}>
            {products.map((product, index) => (
              <article
                key={product.key}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className={`${styles.card} ${styles[product.tone]}`}
                style={{ zIndex: index + 1 }}
              >
                <div className={styles.visual}>
                  <div className={styles.visualMeta}>
                    <span>{productIndexes[index]} / ۰۲</span>
                    <span className={styles.status}>
                      <i /> محصول نواتیک
                    </span>
                  </div>
                  {product.key === "mashal" ? (
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      width={1920}
                      height={948}
                      sizes="(min-width: 1024px) 56vw, 92vw"
                      className={styles.screen}
                    />
                  ) : (
                    <NazerVisual />
                  )}
                  <div className={styles.visualCaption}>
                    <span>{product.metric}</span>
                    <Gauge size={15} aria-hidden="true" />
                  </div>
                </div>

                <div className={styles.body}>
                  <p className={styles.eyebrow}>{product.label}</p>
                  <h3 className={styles.name}>
                    {product.name} <span dir="ltr">| {product.latin}</span>
                  </h3>
                  <p className={styles.text}>{product.text}</p>
                  <ul className={styles.points}>
                    {product.points.map((point) => (
                      <li key={point}>
                        <Check size={16} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.trustRow}>
                    <span>
                      <ShieldCheck size={15} aria-hidden="true" /> طراحی شده برای کسب‌وکار واقعی
                    </span>
                    <span>
                      <Layers3 size={15} aria-hidden="true" /> قابل توسعه
                    </span>
                  </div>
                  <div className={styles.actions}>
                    <Link href={product.href} className={styles.primary}>
                      {product.cta}
                      <ArrowLeft size={16} aria-hidden="true" />
                    </Link>
                    <Link href={product.demoHref} className={styles.secondary}>
                      <WalletCards size={15} aria-hidden="true" /> درخواست دمو
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.scrollHint} aria-hidden="true">
            <span className={styles.scrollLine}>
              <i />
            </span>
            <span>برای دیدن محصول بعدی اسکرول کنید</span>
          </div>
        </div>
      </div>
    </section>
  );
}
