"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageTitle from "@/components/ui/PageTitle";
import { PROJECTS, type Project } from "./projects.data";
import { PROJECT_GROUPS } from "./project-groups.data";
import SocProjectDetails from "./SocProjectDetails";
import HeritageTreeProjectDetails from "./HeritageTreeProjectDetails";
import TaskLoggerProjectDetails from "./TaskLoggerProjectDetails";
import LumaLeafProjectDetails from "./LumaLeafProjectDetails";
import pageStyles from "./AboutPageContent.module.css";
import styles from "./ProjectsPageContent.module.css";

const groups = PROJECT_GROUPS.map((group) => ({
  ...group,
  projects: group.projectIds
    .map((id) => PROJECTS.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project)),
}));

function ProjectLinks({ project }: { project: Project }) {
  if (!project.caseStudyHref && !project.links?.length) return null;

  return (
    <div className={styles.links}>
      {project.caseStudyHref ? (
        <Link href={project.caseStudyHref} aria-label={"Read " + project.title + " case study"}>
          Read case study <span aria-hidden="true">→</span>
        </Link>
      ) : null}
      {project.links?.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer" aria-label={`${link.label} for ${project.title}`}>
          {link.label.toLowerCase() === "github" ? "GitHub" : link.label === "Website" ? "live site" : link.label}
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}

function CompactProject({ project, standalone = false }: { project: Project; standalone?: boolean }) {
  return (
    <article id={project.id} className={`${styles.experiment}${standalone ? ` ${styles.compactProject}` : ""}`} aria-labelledby={`${project.id}-title`}>
      <h2 id={`${project.id}-title`}>{project.title}</h2>
      <p>{project.subtitle}</p>
      <ProjectLinks project={project} />
    </article>
  );
}

function ProjectGallery({ project }: { project: Project }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [firstVisible, setFirstVisible] = useState(0);
  const photoCount = project.gallery?.length ?? 0;
  const isCarousel = photoCount > 3;
  const lastStart = Math.max(0, photoCount - 3);
  const viewportId = `${project.id}-gallery`;
  const sizes = project.image?.variant === "phoneShot"
    ? "(max-width: 760px) 44vw, (max-width: 1100px) 30vw, 360px"
    : "(max-width: 760px) 28vw, (max-width: 1100px) 22vw, 320px";

  function getStride(viewport: HTMLDivElement) {
    const photo = viewport.firstElementChild;
    return (photo?.getBoundingClientRect().width ?? 0) + parseFloat(getComputedStyle(viewport).columnGap);
  }

  function slide(direction: number) {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const next = Math.max(0, Math.min(lastStart, firstVisible + direction));
    viewport.scrollTo({
      left: next * getStride(viewport),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  const photos = project.gallery?.map((photo) => {
    const image = <Image src={photo.src} alt={photo.alt} fill sizes={sizes} />;
    return photo.href ? (
      <a key={photo.src} className={styles.galleryPhoto} href={photo.href} target="_blank" rel="noreferrer" aria-label={`Play ${project.title} on Roblox`}>
        {image}
      </a>
    ) : (
      <div key={photo.src} className={styles.galleryPhoto}>{image}</div>
    );
  });

  return (
    <div className={styles.projectGallery} data-variant={project.image?.variant} data-carousel={isCarousel || undefined} role="group" aria-label={`${project.title} photos`}>
      {isCarousel ? (
        <>
          <div
            id={viewportId}
            ref={viewportRef}
            className={styles.carouselViewport}
            tabIndex={0}
            aria-label={`${project.title} images; use the arrow keys or buttons to slide`}
            onScroll={(event) => {
              const viewport = event.currentTarget;
              const stride = getStride(viewport);
              if (stride > 0) setFirstVisible(Math.max(0, Math.min(lastStart, Math.round(viewport.scrollLeft / stride))));
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                event.preventDefault();
                slide(event.key === "ArrowLeft" ? -1 : 1);
              }
            }}
          >
            {photos}
          </div>
          <button type="button" className={styles.carouselButton} data-direction="previous" aria-label={`Show previous ${project.title} image`} aria-controls={viewportId} disabled={firstVisible === 0} onClick={() => slide(-1)}>
            <span aria-hidden="true">‹</span>
          </button>
          <button type="button" className={styles.carouselButton} data-direction="next" aria-label={`Show next ${project.title} image`} aria-controls={viewportId} disabled={firstVisible === lastStart} onClick={() => slide(1)}>
            <span aria-hidden="true">›</span>
          </button>
          <span className={styles.galleryStatus} aria-live="polite" aria-atomic="true">Images {firstVisible + 1}–{firstVisible + 3} of {photoCount}</span>
        </>
      ) : photos}
    </div>
  );
}

export default function ProjectsPageContent() {
  const [activeGroup, setActiveGroup] = useState(groups[0].id);

  useEffect(() => {
    const syncActive = () => {
      const current = groups
        .map((group) => ({ id: group.id, top: document.getElementById(group.id)?.getBoundingClientRect().top }))
        .filter((group) => group.top !== undefined && group.top <= 200)
        .sort((a, b) => (b.top ?? 0) - (a.top ?? 0))[0];

      setActiveGroup(current?.id ?? groups[0].id);
    };

    syncActive();
    window.addEventListener("scroll", syncActive, { passive: true });
    window.addEventListener("resize", syncActive);
    return () => {
      window.removeEventListener("scroll", syncActive);
      window.removeEventListener("resize", syncActive);
    };
  }, []);

  return (
    <main id="projects" className={pageStyles.page}>
      <header className={pageStyles.masthead}>
        <PageTitle>my projects</PageTitle>
        <p className={pageStyles.tagline}>ideas that got a little <em>out of hand</em></p>
        <p className={pageStyles.welcome}>my digital wall of creations</p>
      </header>

      <div className={pageStyles.layout}>
        <aside className={pageStyles.sidebar}>
          <nav aria-label="Project sections">
            {groups.map((group) => (
              <a key={group.id} href={`#${group.id}`} data-active={activeGroup === group.id} aria-current={activeGroup === group.id ? "location" : undefined} onClick={() => setActiveGroup(group.id)}>
                {group.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className={`${pageStyles.content} ${styles.groups}`}>
          {groups.map((group) => (
            <section key={group.id} id={group.id} className={styles.group} aria-label={group.title}>
              {group.id === "ai-ml" ? (
                <div className={styles.experiments}>
                  {group.projects.map((project) => (
                    <CompactProject key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                <div className={styles.projectList}>
                  {group.projects.map((project) => project.compact ? (
                    <CompactProject key={project.id} project={project} standalone />
                  ) : (
                    <article key={project.id} id={project.id} className={styles.project} aria-labelledby={`${project.id}-title`}>
                      {project.logo || project.id === "systems-optimization-club" || project.id === "hack4impact" ? (
                        <div className={styles.projectIdentity}>
                          <Image src={project.logo?.src ?? (project.id === "systems-optimization-club" ? "/projects/soc/logo.png" : "/projects/heritage-trees/hack4impact-logo.png")} alt={project.logo?.alt ?? (project.id === "systems-optimization-club" ? "Systems Optimization Club logo" : "Hack4Impact logo")} width={44} height={project.id === "systems-optimization-club" ? 45 : 44} />
                          <h2 id={`${project.id}-title`}>{project.title}</h2>
                        </div>
                      ) : <h2 id={`${project.id}-title`}>{project.title}</h2>}
                      <div className={styles.projectDetails}>
                        <div className={styles.projectMeta}>
                          <p className={styles.context}>{project.context}</p>
                          <ProjectLinks project={project} />
                        </div>
                        <div>
                          <p className={styles.description}>{project.subtitle}</p>
                          <ul className={styles.tech} aria-label={`Tools used for ${project.title}`}>
                            {project.tech.map((tool) => <li key={tool}>{tool}</li>)}
                          </ul>
                        </div>
                      </div>
                      {project.id === "systems-optimization-club" ? <SocProjectDetails /> : project.id === "hack4impact" ? <HeritageTreeProjectDetails preview={<ProjectGallery project={project} />} /> : project.gallery?.length ? <ProjectGallery project={project} /> : <div className={styles.projectMedia} data-variant={project.image?.variant} data-compact={project.id === "cancer-network-analysis" || undefined} data-empty={!project.image}>
                        {project.image ? (
                          <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 760px) 90vw, (max-width: 1100px) 75vw, 1100px" />
                        ) : (
                          <div className={styles.previewPlaceholder}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                              <rect x="3" y="5" width="26" height="19" rx="3" />
                              <path d="M10 29h12M16 24v5m-4-18-4 4 4 4m8-8 4 4-4 4" />
                            </svg>
                            <span>Screenshot coming soon</span>
                          </div>
                        )}
                      </div>}
                      {project.id === "task-logger" ? <TaskLoggerProjectDetails /> : null}
                      {project.id === "online-photobooth" ? <LumaLeafProjectDetails /> : null}
                    </article>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
