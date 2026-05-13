"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { PROJECTS } from "./projects.data";
import styles from "./ProjectsSection.module.css";

const FEATURED_IDS = [
  "virgil-mobile-app",
  "cancer-network-analysis",
  "online-photobooth",
];

function LinkIcon({ label }: { label: string }) {
  if (label.toLowerCase() === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={styles.linkIcon}
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.89-.01-1.75-2.78.62-3.37-1.38-3.37-1.38-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={styles.linkIcon}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 4h6v6" />
      <path d="M10 14 20 4" />
      <path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

export default function ProjectsSection() {
  const [showAllArchive, setShowAllArchive] = useState(false);

  const featuredProjects = FEATURED_IDS.map((id) =>
    PROJECTS.find((project) => project.id === id),
  ).filter((project) => Boolean(project));

  const otherProjects = PROJECTS.filter(
    (project) => !FEATURED_IDS.includes(project.id),
  );

  const visibleArchiveProjects = useMemo(() => {
    if (showAllArchive) return otherProjects;
    return otherProjects.slice(0, 6);
  }, [otherProjects, showAllArchive]);

  const hasExpandableArchive = otherProjects.length > 6;

  return (
    <div className={styles.wrap}>
      <div className={styles.featuredList}>
        {featuredProjects.map((project, index) => {
          if (!project) return null;

          const primaryLink = project.links?.[0];
          const reverse = index % 2 === 1;
          const isPhoneShot = project.image?.variant === "phoneShot";
          const isBrowserShot = project.image?.variant === "browserShot";

          return (
            <article
              key={project.id}
              className={[
                styles.featuredCard,
                reverse ? styles.reverse : "",
              ].join(" ")}
            >
              <a
                href={primaryLink?.href}
                target={primaryLink?.href ? "_blank" : undefined}
                rel={primaryLink?.href ? "noreferrer" : undefined}
                className={[
                  styles.featuredMedia,
                  isPhoneShot ? styles.phoneShotMedia : "",
                  isBrowserShot ? styles.browserShotMedia : "",
                ].join(" ")}
                aria-label={
                  primaryLink?.href ? `Open ${project.title}` : project.title
                }
              >
                {project.image ? (
                  <div
                    className={[
                      styles.imageFrame,
                      isPhoneShot ? styles.phoneShotFrame : "",
                      isBrowserShot ? styles.browserShotFrame : "",
                    ].join(" ")}
                  >
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      className={[
                        styles.featuredImage,
                        isPhoneShot ? styles.phoneShotImage : "",
                        isBrowserShot ? styles.browserShotImage : "",
                      ].join(" ")}
                    />
                  </div>
                ) : (
                  <div className={styles.fallbackMedia}>
                    <div className={styles.fallbackKicker}>
                      {project.tags.slice(0, 2).join(" • ")}
                    </div>
                    <div className={styles.fallbackTitle}>{project.title}</div>
                    <div className={styles.fallbackSubtitle}>
                      {project.tech.slice(0, 4).join(" • ")}
                    </div>
                  </div>
                )}
              </a>

              <div className={styles.featuredContent}>
                <div className={styles.featuredLabel}>Featured Build</div>
                <h3 className={styles.featuredTitle}>{project.title}</h3>
                <p className={styles.featuredSubtitle}>{project.subtitle}</p>

                <ul className={styles.featuredBullets}>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className={styles.featuredTech}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.techChip}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.featuredLinks}>
                  {project.links?.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.projectLink}
                      aria-label={`${link.label} for ${project.title}`}
                      title={link.label}
                    >
                      <LinkIcon label={link.label} />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className={styles.archiveHeader}>
        <h3 className={styles.archiveTitle}>More Builds</h3>
        <p className={styles.archiveSubtitle}>
          A few more things I have explored across bioinformatics, mobile, and
          experimentation.
        </p>
      </div>

      <div className={styles.archiveGrid}>
        {visibleArchiveProjects.map((project) => {
          const primaryLink = project.links?.[0];

          return (
            <article key={project.id} className={styles.archiveCard}>
              <div className={styles.archiveTop}>
                <div className={styles.archiveText}>
                  <h4 className={styles.archiveCardTitle}>{project.title}</h4>
                  <p className={styles.archiveCardSubtitle}>
                    {project.subtitle}
                  </p>
                </div>

                {primaryLink ? (
                  <a
                    href={primaryLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.archiveAction}
                    aria-label={`Open ${project.title}`}
                  >
                    ↗
                  </a>
                ) : null}
              </div>

              <div className={styles.archiveMetrics}>
                {project.metrics?.map((metric) => (
                  <span key={metric} className={styles.metricChip}>
                    {metric}
                  </span>
                ))}
              </div>

              <div className={styles.archiveTech}>
                {project.tech.map((tech) => (
                  <span key={tech} className={styles.archiveTechItem}>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      {hasExpandableArchive ? (
        <div className={styles.archiveActions}>
          <button
            type="button"
            className={styles.archiveToggle}
            onClick={() => setShowAllArchive((value) => !value)}
          >
            {showAllArchive ? "Show Less" : "Show More"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
