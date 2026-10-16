// @ts-nocheck -- ported from the original Next.js site
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ArrowUpLeft } from "lucide-react";
import { companyInfo } from "@/lib/site-content";
import styles from "./Header.module.css";

const primaryLinks = [
  { href: "/portfolio", label: "نمونه‌کارها" },
  { href: "/about", label: "درباره ما" },
  { href: "/blog", label: "بینش و راهنما" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
    root.current?.querySelectorAll<HTMLDetailsElement>("details[open]").forEach((item) => {
      item.open = false;
    });
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        trigger.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (root.current && !root.current.contains(event.target as Node)) close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <header ref={root} id="header" className={styles.header}>
      <div className={styles.shell}>
        <div className={styles.headerSide}>
          <details className={styles.menuGroup}>
            <summary className={styles.menuTrigger}>
              <span>خدمات و محصولات</span>
              <ChevronDown size={15} aria-hidden="true" />
            </summary>
            <div className={styles.dropdown}>
              <Link href="/software-solutions" onClick={close}>
                نرم‌افزار اختصاصی
              </Link>
              <Link href="/database-solutions" onClick={close}>
                طراحی دیتابیس
              </Link>
              <Link href="/web-design" onClick={close}>
                طراحی وب‌سایت
              </Link>
              <Link href="/oil-and-gas-software" onClick={close}>
                مشعل؛ مدیریت نفت و گاز
              </Link>
              <Link href="/accounting-software" onClick={close}>
                ناظر؛ مدیریت مالی
              </Link>
            </div>
          </details>
        </div>

        <Link href="/" className={styles.brand} aria-label="صفحه اصلی نواتیک">
          <Image
            src="/images/novatech-logo-v2.webp"
            alt={`لوگوی ${companyInfo.brandName}`}
            width={1796}
            height={496}
            sizes="136px"
            priority
            className={styles.logo}
          />
        </Link>

        <div className={styles.leftGroup}>
          <nav
            className={`${styles.nav} ${open ? styles.open : ""}`}
            aria-label="منوی اصلی"
            id="main-navigation"
          >
            <div className={styles.mobileBrand}>منوی نواتیک</div>
            {primaryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                aria-current={path === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={close} className={styles.mobileContact}>
              درخواست مشاوره
            </Link>
          </nav>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.cta} onClick={close}>
              <span>درخواست مشاوره</span>
              <ArrowUpLeft size={16} aria-hidden="true" />
            </Link>
            <button
              ref={trigger}
              type="button"
              className={styles.toggle}
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "بستن منو" : "باز کردن منو"}
              aria-expanded={open}
              aria-controls="main-navigation"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
