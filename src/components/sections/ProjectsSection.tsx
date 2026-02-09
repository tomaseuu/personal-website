"use client";

import { useState } from "react";
import { PROJECTS } from "./projects.data";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const project = PROJECTS[index];

  function prev() {
    setIndex((i) => (i === 0 ? PROJECTS.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === PROJECTS.length - 1 ? 0 : i + 1));
  }

  return (
    <div className={styles.stage}>
      {/* arrows */}
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={prev}
        aria-label="Previous project"
      >
        ←
      </button>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={next}
        aria-label="Next project"
      >
        →
      </button>

      {/* polaroid */}
      <div
        className={styles.polaroid}
        style={{
          transform: `rotate(${index % 2 === 0 ? "-1.6deg" : "1.4deg"})`,
        }}
      >
        {/* image placeholder */}
        <div className={styles.photo}>
          <div className={styles.photoInner}>
            <div className={styles.photoTitle}>Project snapshot</div>
            <div className={styles.photoHint}>Image coming soon</div>
          </div>
        </div>

        {/* content */}
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.subtitle}>{project.subtitle}</p>

          <ul className={styles.bullets}>
            {project.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <div className={styles.tech}>
            {project.tech.map((t) => (
              <span key={t} className={styles.techChip}>
                {t}
              </span>
            ))}
          </div>

          {project.metrics?.length ? (
            <div className={styles.metrics}>
              {project.metrics.map((m) => (
                <span key={m} className={styles.metric}>
                  {m}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className={styles.footer}>
          {index + 1} / {PROJECTS.length}
        </div>
      </div>
    </div>
  );
}
