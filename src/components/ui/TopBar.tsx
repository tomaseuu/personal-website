"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./TopBar.module.css";
import { PRIMARY_NAVIGATION } from "./site.data";
import { scrollHomeToTop } from "./home-navigation";

type LinkItem = { label: string; href: string };

export default function TopBar({
  links = PRIMARY_NAVIGATION,
  activePage,
}: {
  links?: LinkItem[];
  activePage?: string;
}) {
  const [activeSectionHref, setActiveHref] = useState(links[0]?.href ?? "");
  const activeHref = activePage ?? activeSectionHref;

  useEffect(() => {
    if (activePage) return;

    const syncActive = () => {
      const currentSection = links
        .filter((link) => link.href.startsWith("/#") || link.href.startsWith("#"))
        .map((link) => ({
          href: link.href,
          top: document
            .getElementById(link.href.split("#")[1])
            ?.getBoundingClientRect().top,
        }))
        .filter((section) => section.top !== undefined && section.top <= 160)
        .sort((a, b) => (b.top ?? 0) - (a.top ?? 0))[0];

      setActiveHref(currentSection?.href ?? links[0]?.href ?? "");
    };

    syncActive();
    window.addEventListener("scroll", syncActive, { passive: true });
    window.addEventListener("resize", syncActive);
    return () => {
      window.removeEventListener("scroll", syncActive);
      window.removeEventListener("resize", syncActive);
    };
  }, [links, activePage]);

  return (
    <header className={styles.wrap}>
      <div className={styles.inner}>
        <Link href="/" onClick={scrollHomeToTop} className={styles.brand} aria-label="Thomas Le — home (work)">
          <span className={styles.brandMark} aria-hidden="true">
            <svg className={styles.monogram} viewBox="0 0 40 40" fill="none">
              <path
                d="M8 12.5C14 10.3 23 9.8 32 10.8"
                stroke="currentColor"
                strokeWidth="4.2"
                strokeLinecap="round"
              />
              <path
                d="M22 11.5C20.9 17.4 20 23.3 20.2 29.5C20.3 31 21 31.6 22.6 30.8"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              data-active={activeHref === link.href ? "true" : "false"}
              aria-current={activeHref === link.href ? (activePage ? "page" : "location") : undefined}
              onClick={(event) => {
                setActiveHref(link.href);
                if (link.href === "/") scrollHomeToTop(event);
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
