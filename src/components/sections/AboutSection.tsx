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
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <img
              className={styles.icon}
              src="/linkedin.svg"
              alt=""
              aria-hidden="true"
            />
          </a>

          <a
            className={styles.iconBtn}
            href="https://github.com/tomaseuu"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <img
              className={styles.icon}
              src="/github.svg"
              alt=""
              aria-hidden="true"
            />
          </a>

          <a
            className={styles.iconBtn}
            href="https://www.youtube.com/@tomaseuu"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            title="YouTube"
          >
            <img
              className={styles.icon}
              src="/youtube.svg"
              alt=""
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* right: story */}
      <div className={styles.right}>
        <p className={styles.p}>
          I am a senior studying Computer Science at Cal Poly San Luis Obispo,
          with a minor in Bioinformatics. Most of my time is spent building
          things, from personal projects like this personal website to random
          ideas that start as “what if” and turn into something real. I am
          especially drawn to full-stack work, with a strong interest in
          frontend where and creativity meet.
        </p>

        <p className={styles.p}>
          Outside of classes, I am involved with a few campus organizations and
          usually working on something on the side. When I am not coding, I am
          reading, watching k-dramas, editing videos, or just exploring life a
          bit. Right now, the focus is landing a first role, learning as much as
          possible, and building toward long-term independence.
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
