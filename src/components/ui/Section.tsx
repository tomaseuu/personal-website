import React from "react";
import styles from "./Section.module.css";
import Reveal from "@/components/ui/Reveal";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  tone?: "default" | "tint";
  kicker?: string;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  tone = "default",
  kicker,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[styles.section, tone === "tint" ? styles.tint : ""].join(" ")}
    >
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.header}>
            {kicker ? <div className={styles.kicker}>{kicker}</div> : null}

            <div className={styles.headerRow}>
              <h2 className={styles.title}>{title}</h2>

              {title === "Experience" ? (
                <div className={styles.headerAnim}>
                  <div className={styles.crop}>
                    <img src="/cat.gif" alt="cat" className={styles.anim} />
                  </div>
                </div>
              ) : null}
            </div>

            {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
            <div className={styles.rule} />
          </header>
        </Reveal>

        <Reveal delay={0.08}>
          <div className={styles.body}>{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
