"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TopBar.module.css";
import ThemeToggle from "./ThemeToggle";

type LinkItem = {
  label: string;
  href: string;
  step: string;
};

export default function TopBar({
  onMenu,
  links,
  resumeHref,
}: {
  onMenu: () => void;
  links: LinkItem[];
  resumeHref: string;
}) {
  const [activeHref, setActiveHref] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const syncHash = () => setActiveHref(window.location.hash || "#home");

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;

    const syncScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);

      if (currentY <= 24) {
        setHidden(false);
      } else if (currentY > lastY + 6) {
        setHidden(true);
      } else if (currentY < lastY - 6) {
        setHidden(false);
      }

      lastY = currentY;
    };

    syncScroll();
    window.addEventListener("scroll", syncScroll, { passive: true });

    return () => window.removeEventListener("scroll", syncScroll);
  }, []);

  return (
    <header
      className={styles.wrap}
      data-scrolled={scrolled ? "true" : "false"}
      data-hidden={hidden ? "true" : "false"}
    >
      <div className={styles.inner}>
        <a href="#home" className={styles.brand} aria-label="Back to top">
          <span className={styles.brandMark} aria-hidden="true">
            <Image
              src="/me.png"
              alt="Thomas avatar"
              width={36}
              height={36}
              className={styles.brandAvatar}
            />
          </span>
        </a>

        <div className={styles.desktopNav}>
          <nav className={styles.nav} aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
                data-active={activeHref === link.href ? "true" : "false"}
                aria-current={activeHref === link.href ? "page" : undefined}
                onClick={() => setActiveHref(link.href)}
              >
                <span className={styles.navStep}>{link.step}.</span>
                <span className={styles.navLabel}>{link.label}</span>
              </a>
            ))}
          </nav>

          <ThemeToggle />

          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className={styles.resumeBtn}
          >
            Resume
          </a>
        </div>

        <button onClick={onMenu} className={styles.menuBtn} type="button">
          Menu
        </button>
      </div>
    </header>
  );
}
