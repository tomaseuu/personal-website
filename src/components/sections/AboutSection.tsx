"use client";

import styles from "./AboutSection.module.css";

type Row = { label: string; value: string };

export default function AboutSection() {
  const rows: Row[] = [
    { label: "NAME", value: "Thomas Le" },
    { label: "PRONOUNS", value: "He/Him/His" },
    { label: "SCHOOL", value: "Cal Poly San Luis Obispo" },
    { label: "Age", value: "21" },
    { label: "MAJOR", value: "Computer Science (B.S.) • Bioinformatics minor" },
    { label: "HOMETOWN", value: "West Covina, CA" },
  ];

  return (
    <div className={styles.wrap}>
      {/* LEFT: facts */}
      <div className={styles.left}>
        <div className={styles.table}>
          {rows.map((r) => (
            <div key={r.label} className={styles.row}>
              <div className={styles.k}>{r.label}:</div>
              <div className={styles.v}>{r.value}</div>
            </div>
          ))}
        </div>

        <div className={styles.socials} aria-label="Social links">
          <a
            className={styles.iconBtn}
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
          <a
            className={styles.iconBtn}
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className={styles.iconBtn}
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </div>
      </div>

      {/* RIGHT: story */}
      <div className={styles.right}>
        <p className={styles.p}>
          I am a rising CS senior at Cal Poly SLO. I love learning, creating,
          and bringing ideas to life through code — especially when engineering
          meets product polish.
        </p>

        <p className={styles.p}>
          Recently I have been building across web + mobile: shipping UI from
          Figma, tightening onboarding flows, and designing reusable systems
          that help teams move faster without getting messy. Outside of code, I
          am into video editing + YouTube — creativity keeps my work
          intentional.
        </p>

        <div className={styles.actions}>
          <a
            className={styles.resumeBtn}
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </div>
  );
}
