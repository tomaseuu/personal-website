"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ContactReveal.module.css";

type Props = {
  id?: string;
  email: string;
  links: { label: string; href: string }[];
};

export default function ContactReveal({ id = "connect", email, links }: Props) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries[0]?.isIntersecting ?? false;
        setOpen(hit);
      },
      {
        root: null,
        // trigger a bit before the bottom so it feels intentional
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.01,
      },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* put this near the bottom of your page layout */}
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />

      <section
        id={id}
        className={[styles.wrap, open ? styles.open : ""].join(" ")}
        aria-hidden={!open}
      >
        <div className={styles.grain} aria-hidden="true" />

        <div className={styles.inner}>
          <div className={styles.left}>
            <h2 className={styles.h1}>Let's connect</h2>
            <p className={styles.p}>
              I am always down to talk about new ideas, side projects, or
              anything creative. Especially the kind of things that feel
              exciting and impactful.
            </p>
            <div className={styles.smallNote}>Looking forward to connect!</div>
          </div>

          <div className={styles.right}>
            <div className={styles.block}>
              <div className={styles.label}>Email</div>
              <a className={styles.bigLink} href={`mailto:${email}`}>
                {email}
              </a>
            </div>

            <div className={styles.block}>
              <div className={styles.label}>Links</div>
              <div className={styles.links}>
                {links.map((l) => (
                  <a
                    key={l.href}
                    className={styles.link}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.rule} />
          <div className={styles.footRow}>
            <span>
              © {new Date().getFullYear()} Thomas Le. All Rights Reserved
            </span>
            <span className={styles.mini}>My personal portfolio</span>
          </div>
        </div>
      </section>
    </>
  );
}
