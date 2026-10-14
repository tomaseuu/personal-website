"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./WorkCaseStudy.module.css";

export type WorkSection = { id: string; label: string };

export default function WorkCaseStudyNav({ sections, backHref = "/", backLabel = "Back to all work", navLabel = "Experience sections" }: { sections: WorkSection[]; backHref?: string; backLabel?: string; navLabel?: string }) {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const syncActive = () => {
      const current = sections
        .map((section) => ({ id: section.id, top: document.getElementById(section.id)?.getBoundingClientRect().top }))
        .filter((section) => section.top !== undefined && section.top <= 160)
        .sort((a, b) => (b.top ?? 0) - (a.top ?? 0))[0];
      setActiveSection(current?.id ?? sections[0].id);
    };

    syncActive();
    window.addEventListener("scroll", syncActive, { passive: true });
    window.addEventListener("resize", syncActive);
    return () => {
      window.removeEventListener("scroll", syncActive);
      window.removeEventListener("resize", syncActive);
    };
  }, [sections]);

  return (
    <aside className={styles.sidebar}>
      <Link href={backHref} className={styles.back} aria-label={backLabel}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="14" cy="14" r="11" />
          <path d="m14 10-4 4 4 4m-4-4h8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
      <nav className={styles.sectionNav} aria-label={navLabel}>
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} data-active={activeSection === section.id} aria-current={activeSection === section.id ? "location" : undefined} onClick={() => setActiveSection(section.id)}>
            {section.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
