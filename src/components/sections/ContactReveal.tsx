"use client";

import Image from "next/image";
import Link from "next/link";
import { scrollHomeToTop } from "@/components/ui/home-navigation";
import styles from "./ContactReveal.module.css";
import { PRIMARY_NAVIGATION } from "@/components/ui/site.data";

type Props = {
  id?: string;
  email: string;
  links: { label: string; href: string }[];
};

const socialIcons: Record<string, string> = {
  GitHub: "/github.svg",
  LinkedIn: "/linkedin.svg",
  YouTube: "/youtube.svg",
};

export default function ContactReveal({ id = "connect", email, links }: Props) {
  return (
    <footer id={id} className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <Link className={styles.name} href="/" onClick={scrollHomeToTop}>
            thomas le
          </Link>
          <nav className={styles.nav} aria-label="Footer">
            {PRIMARY_NAVIGATION.map((link) => (
              <Link key={link.href} href={link.href} onClick={link.href === "/" ? scrollHomeToTop : undefined}>{link.label}</Link>
            ))}
          </nav>
        </div>

        <div
          className={styles.signature}
          tabIndex={0}
          role="img"
          aria-label="thanks for stopping by @ 2026"
        >
          <span className={styles.coffee} aria-hidden="true">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M11 21.5C16 20.7 25 20.9 32 21.4L30.7 32.3C30.3 36 27.5 38 22 38C16.6 38 13.5 35.9 13 32.4L11 21.5Z" />
              <path d="M32 23.2C40.8 21.8 40.7 31.7 31.4 32.4" />
              <path d="M9 40.6C17 42 29 42.2 36 40.4" />
              <path d="M18 16.7C14.5 13.4 21 11.4 18 7.6" />
              <path d="M25.8 16.5C22.3 12.9 29.1 11 26 6" />
            </svg>
          </span>
          <span className={styles.thanks} aria-hidden="true">
            thanks for stopping by @ 2026
          </span>
        </div>

        <div className={styles.contact}>
          <p className={styles.prompt}>Let’s stay in touch</p>
          <a className={styles.email} href={`mailto:${email}`}>
            {email}
          </a>
          <div className={styles.links} aria-label="Social links">
            {links.map((link) => (
              <a
                key={link.href}
                className={styles.link}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                {socialIcons[link.label] ? (
                  <Image src={socialIcons[link.label]} alt="" width={22} height={22} />
                ) : (
                  link.label
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className={styles.credit}>
        Inspired by <a href="https://michfeng.com/" target="_blank" rel="noreferrer">Michelle Feng</a>
      </p>
    </footer>
  );
}
