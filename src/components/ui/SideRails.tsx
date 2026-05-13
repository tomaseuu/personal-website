"use client";

import Image from "next/image";
import styles from "./SideRails.module.css";

type SocialLink = {
  label: string;
  href: string;
  iconSrc: string;
};

type Props = {
  email: string;
  socialLinks: SocialLink[];
};

export default function SideRails({ email, socialLinks }: Props) {
  return (
    <div className={styles.shell} aria-hidden="false">
      <aside className={`${styles.rail} ${styles.left}`} aria-label="Social links">
        <div className={styles.socials}>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={styles.iconLink}
              aria-label={link.label}
              title={link.label}
            >
              <Image
                src={link.iconSrc}
                alt=""
                width={18}
                height={18}
                className={styles.icon}
              />
            </a>
          ))}
        </div>
        <div className={styles.line} aria-hidden="true" />
      </aside>

      <aside className={`${styles.rail} ${styles.right}`} aria-label="Email">
        <a className={styles.email} href={`mailto:${email}`}>
          {email}
        </a>
        <div className={styles.line} aria-hidden="true" />
      </aside>
    </div>
  );
}
