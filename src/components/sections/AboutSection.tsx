"use client";

import Image from "next/image";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Supabase",
    "SQL",
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.copy}>
        <p className={styles.p}>
          Hello! My name is Thomas and I enjoy building things that live on the
          internet. I am currently a senior studying Computer Science at Cal
          Poly San Luis Obispo with a minor in Bioinformatics. A lot of my
          projects start as a harmless “what if” and somehow turn into a full
          build, which is probably how this website happened too.
        </p>

        <p className={styles.p}>
          Fast-forward a bit, and I have had the chance to collaborate with a{" "}
          <a
            className={styles.inlineLink}
            href="https://www.tesla.com/"
            target="_blank"
            rel="noreferrer"
          >
            huge corporation
          </a>
          , build with a{" "}
          <a
            className={styles.inlineLink}
            href="https://homigoapp.io/"
            target="_blank"
            rel="noreferrer"
          >
            startup
          </a>
          , support a{" "}
          <a
            className={styles.inlineLink}
            href="https://centralcoastheritagetreefoundation.org/"
            target="_blank"
            rel="noreferrer"
          >
            nonprofit organization
          </a>
          , and most recently throw myself into the fast-paced energy of a{" "}
          <a
            className={styles.inlineLink}
            href="https://lahacks.com/"
            target="_blank"
            rel="noreferrer"
          >
            hackathon
          </a>
          . I was also featured in{" "}
          <a
            className={styles.inlineLink}
            href="https://www.nytimes.com/2025/10/26/technology/cal-state-ai-amazon-openai.html"
            target="_blank"
            rel="noreferrer"
          >
            The New York Times
          </a>{" "}
          for a recent article on A.I. education. Those experiences have pushed
          me toward software that feels useful, thoughtful, and genuinely worth
          building well.
        </p>

        <div className={styles.techBlock}>
          <div className={styles.techTitle}>
            Technologies I keep reaching for lately
          </div>
          <div className={styles.techGrid}>
            {technologies.map((tech) => (
              <div key={tech} className={styles.techItem}>
                <span className={styles.techMarker} aria-hidden="true">
                  ▹
                </span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.media}>
        <div className={styles.photoFrame} aria-hidden="true" />
        <div className={styles.photoCard}>
          <div className={styles.photoWrap}>
            <Image
              src="/study-thomas-3.png"
              alt="Thomas studying"
              fill
              className={[styles.photo, styles.photoLight].join(" ")}
            />
            <Image
              src="/dark-mode3.png"
              alt="Thomas studying in dark mode"
              fill
              className={[styles.photo, styles.photoDark].join(" ")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
