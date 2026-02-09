"use client";

import { useState } from "react";
import { PROJECTS } from "./projects.data";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const project = PROJECTS[index];
  const primaryHref = project.links?.[0]?.href;

  function prev() {
    setIndex((i) => (i === 0 ? PROJECTS.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === PROJECTS.length - 1 ? 0 : i + 1));
  }

  const tilt = index % 2 === 0 ? "-1.6deg" : "1.4deg";

  const card = (
    <div className={styles.polaroid}>
      <div className={styles.polaroidInner}>
        {/* photo */}
        <div className={styles.photo}>
          {project.image ? (
            <img
              src={project.image.src}
              alt={project.image.alt}
              className={styles.photoImg}
            />
          ) : (
            <div className={styles.cover}>
              <div className={styles.coverTop}>
                <div className={styles.coverKicker}>PROJECT</div>
                <div className={styles.coverTitle}>{project.title}</div>
                <div className={styles.coverSub}>
                  {project.tags?.slice(0, 3).join(" • ")}
                </div>
              </div>

              <div className={styles.coverBottom}>
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className={styles.coverChip}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
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
      {primaryHref ? (
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.polaroidLink}
          aria-label={`Open ${project.title}`}
        >
          {card}
        </a>
      ) : (
        card
      )}
    </div>
  );
}
