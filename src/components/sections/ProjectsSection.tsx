"use client";

import { useEffect, useMemo, useState } from "react";
import { PROJECTS } from "./projects.data";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const project = PROJECTS[index];

  const href = useMemo(() => project.links?.[0]?.href ?? "", [project]);

  function prev() {
    setIndex((i) => (i === 0 ? PROJECTS.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === PROJECTS.length - 1 ? 0 : i + 1));
  }

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          (target as any).isContentEditable);

      if (isTyping) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };

    window.addEventListener("keydown", onKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", onKeyDown as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.stage}>
      <div className={styles.topline} aria-hidden="true">
        <span className={styles.line} />
        <img
          src="/totoro.gif"
          alt=""
          className={styles.totoro}
          draggable={false}
        />
      </div>

      <div className={styles.frame}>
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={prev}
          aria-label="Previous project"
          type="button"
        >
          <svg className={styles.chev} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M14.5 5.5L8 12l6.5 6.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={next}
          aria-label="Next project"
          type="button"
        >
          <svg className={styles.chev} viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M9.5 5.5L16 12l-6.5 6.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* ALWAYS the same wrapper so layout never shifts */}
        <a
          href={href || undefined}
          onClick={(e) => {
            if (!href) e.preventDefault();
          }}
          target={href ? "_blank" : undefined}
          rel={href ? "noopener noreferrer" : undefined}
          className={styles.polaroidLink}
          aria-label={href ? `Open ${project.title}` : project.title}
        >
          <div className={styles.polaroid}>
            <div className={styles.polaroidInner}>
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
        </a>
      </div>
    </div>
  );
}
