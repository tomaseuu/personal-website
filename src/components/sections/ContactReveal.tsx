"use client";

import styles from "./ContactReveal.module.css";

type Props = {
  id?: string;
  email: string;
  links: { label: string; href: string }[];
};

export default function ContactReveal({ id = "connect", email, links }: Props) {
  return (
    <section id={id} className={styles.wrap}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Get in touch</h2>

        <p className={styles.copy}>
          I am currently looking for full-time software engineering roles for
          2026. If you would like to connect, I would love to hear from you.
        </p>

        <a className={styles.button} href={`mailto:${email}`}>
          Say Hello
        </a>

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
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
