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
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries[0]?.isIntersecting ?? false;
        setShow(hit);
      },
      {
        root: null,
        rootMargin: "0px 0px -25% 0px",
        threshold: 0.01,
      },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />

      <section
        id={id}
        className={[styles.wrap, show ? styles.show : ""].join(" ")}
        aria-hidden={!show}
      >
        <div className={styles.grain} aria-hidden="true" />

        <div className={styles.inner}>
          <div className={styles.left}>
            <h2 className={styles.h1}>Let's connect</h2>
            <p className={styles.p}>
              I am always open to new projects, creative ideas, and building
              things that feel thoughtful and human.
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
              <div className={styles.label}>Connections</div>
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
            <span className={styles.mini}>My personal Portfolio</span>
          </div>
        </div>
      </section>
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden="true" />
    </>
  );
}
