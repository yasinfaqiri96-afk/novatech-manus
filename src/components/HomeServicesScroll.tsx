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
const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

/** A resilient scroll-driven service rail for desktop, tablet and mobile. */
export default function HomeServicesScroll() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const render = () => {
      frame = 0;

      if (motionQuery.matches) {
        cardRefs.current.forEach((card, index) => {
          if (!card) return;
          card.style.transform = "none";
          card.style.opacity = index === 0 ? "1" : "1";
          card.style.pointerEvents = "auto";
          card.style.zIndex = String(services.length - index);
        });
        return;
      }

      const scrollable = Math.max(track.offsetHeight - window.innerHeight, 1);
      const progress = clamp01(-track.getBoundingClientRect().top / scrollable);
      const position = progress * (services.length - 1);
      const travel = Math.max(stage.clientWidth * 0.94, 280);

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const distance = index - position;
        const absoluteDistance = Math.abs(distance);
        const settled = clamp01(absoluteDistance);
        const x = (position - index) * travel;
        const y = settled * 8;
        const scale = 1 - settled * 0.065;
        const rotate = distance * -4.5;
        const opacity =
          absoluteDistance <= 1 ? 1 - absoluteDistance * 0.72 : absoluteDistance <= 1.75 ? 0.12 : 0;

        card.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(4)}) rotateY(${rotate.toFixed(2)}deg)`;
        card.style.opacity = opacity.toFixed(4);
        card.style.zIndex = String(100 - Math.round(absoluteDistance * 10));
        card.style.pointerEvents = absoluteDistance < 0.55 ? "auto" : "none";
        card.style.setProperty("--service-image-scale", (1 + (1 - settled) * 0.035).toFixed(4));
      });
    };

    const request = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });
    motionQuery.addEventListener("change", render);

    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      motionQuery.removeEventListener("change", render);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="home-services" className={styles.section} aria-labelledby="home-services-title">
      <div ref={trackRef} className={styles.track}>
        <div className={styles.sticky}>
          <div className={styles.heading}>
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
              <span /> برای دیدن راهکارها اسکرول کنید
            </span>
          </div>

          <div ref={stageRef} className={styles.stage}>
            {services.map((service, index) => (
              <article
                key={service.href}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className={`${styles.card} ${styles[`card${index + 1}`]}`}
                style={{
                  zIndex: services.length - index,
                  opacity: index === 0 ? 1 : 0,
                  transform: index === 0 ? "none" : "translate3d(-100%, 0, 0)",
                }}
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
                  <span className={styles.visualEdge} aria-hidden="true" />
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
      </div>
    </section>
  );
}
