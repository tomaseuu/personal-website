"use client";

import styles from "./AboutSection.module.css";

type Row = { label: string; value: string };

export default function AboutSection() {
  const rows: Row[] = [
    { label: "NAME", value: "Thomas Le" },
    { label: "PRONOUNS", value: "He/Him/His" },
    { label: "SCHOOL", value: "Cal Poly San Luis Obispo" },
    { label: "Age", value: "21" },
    { label: "MAJOR", value: "Computer Science (B.S.) Bioinformatics minor" },
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
            href="https://www.linkedin.com/in/thomasle998/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            className={styles.iconBtn}
            href="https://github.com/tomaseuu"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className={styles.iconBtn}
            href="https://www.youtube.com/@tomaseuu"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </div>
      </div>

      {/* right: story */}
      <div className={styles.right}>
        <p className={styles.p}>
          I am a CS senior at Cal Poly SLO who enjoys building things and seeing
          them actually work. I like taking ideas from rough sketches to real,
          usable products.
        </p>

        <p className={styles.p}>
          These days, I work full-stack - wiring up backends, databases, and
          frontends, and making sure everything feels smooth end to end. Outside
          of code, I am into video editing and YouTube, which keeps me thinking
          about creativity and user experience.
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
        <div className={styles.animWrap}>
          <div className={styles.crop}>
            <img src="/coffee.gif" alt="coffee" className={styles.anim} />
          </div>
        </div>
      </div>
    </div>
  );
}
