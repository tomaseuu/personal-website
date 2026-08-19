"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import styles from "./ExperienceSection.module.css";

type Experience = {
  id: string;
  company: string;
  companyHref: string;
  role: string;
  dates: string;
  location?: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

function Chip({ text }: { text: string }) {
  return <span className={styles.chip}>{text}</span>;
}

export default function ExperienceSection() {
  const items: Experience[] = useMemo(
    () => [
      {
        id: "homigo",
        company: "Homigo",
        companyHref: "https://homigoapp.io/",
        role: "Software Engineer",
        dates: "Dec 2025 — May 2026",
        location: "Remote",
        summary:
          "Building a bilingual onboarding platform for local service providers.",
        highlights: [
          "Built a mobile-first signup flow across phone verification, service setup, and Stripe payout onboarding for 20 service categories.",
          "Created a guided multi-step onboarding experience that keeps contractor signup clear, structured, and easier to complete.",
          "Automated service-area and marketplace coverage mapping from ZIP codes, travel radius, and selected services.",
          "Integrated communication and moderation workflows to support onboarding, verification, and provider-facing updates.",
        ],
        tech: [
          "Next.js",
          "TypeScript",
          "Supabase",
          "Stripe",
          "Twilio",
        ],
      },
      {
        id: "veggie",
        company: "Veggie Rescue",
        companyHref: "https://veggierescue.org/",
        role: "Software Engineer / Tech Lead",
        dates: "Dec 2025 — Jun 2026",
        location: "San Luis Obispo, CA",
        summary:
          "Helping build food distribution tooling for 70+ nonprofit organizations.",
        highlights: [
          "Leading development of a dashboard that replaces fragmented spreadsheet tracking with a centralized workflow.",
          "Designed a priority-based delivery queue using history, pounds received, recipient priority, and urgency data.",
          "Built tools that help staff move faster when coordinating deliveries across partner organizations.",
          "Focused on making allocation decisions more transparent, fair, and operationally manageable.",
        ],
        tech: ["React", "TypeScript", "Express", "Google Sheets API"],
      },
      {
        id: "tesla",
        company: "Tesla Collaboration",
        companyHref: "https://www.tesla.com/",
        role: "Software Developer Student Consultant",
        dates: "Oct 2025 — Mar 2026",
        location: "San Luis Obispo, CA",
        summary:
          "Worked on a commute-planning mobile prototype through Systems Optimization Club.",
        highlights: [
          "Built a React Native prototype for comparing driving, biking, transit, and shuttle routes in one experience.",
          "Refactored hardcoded styles into a reusable theming system and maintainable map-based components.",
          "Improved UI consistency by moving the app toward reusable patterns instead of isolated one-off screens.",
          "Worked on product decisions that made route comparison feel clearer and more practical for employees.",
        ],
        tech: ["React Native", "TypeScript", "Google Maps API", "Figma"],
      },
      {
        id: "spreadgoodness",
        company: "Spread Goodness",
        companyHref: "https://www.spreadgoodness.love/",
        role: "Software Engineering Intern",
        dates: "Dec 2025 — May 2026",
        location: "Remote",
        summary:
          "Improving UI clarity for a student-centered platform built around kindness and challenges.",
        highlights: [
          "Refined student-facing UI flows and button states across profile and challenge actions.",
          "Standardized desktop and mobile interactions to keep the accept-challenge flow clear and consistent.",
          "Tested challenge interactions end-to-end to catch confusing states before they reached users.",
          "Focused on product polish that made student actions feel more obvious and consistent.",
        ],
        tech: ["React", "TypeScript", "CSS", "UI Testing"],
      },
      {
        id: "bio-ra",
        company: "Bioinformatics Research Lab",
        companyHref: "https://bioinfo.calpoly.edu/research",
        role: "Bioinformatics Research Assistant",
        dates: "Jan 2025 — Jan 2026",
        location: "San Luis Obispo, CA",
        summary:
          "Applied data-driven modeling to support pathogen prediction and clinical testing workflows.",
        highlights: [
          "Trained decision-tree and multi-label pipelines on 80k+ patient records to support UTI pathogen prediction.",
          "Cleaned and structured clinical metadata to improve modeling reliability and downstream genomic analysis.",
          "Automated parts of the modeling workflow to make experiments easier to rerun and compare.",
          "Used bioinformatics tooling to connect machine learning work with broader research questions.",
        ],
        tech: ["Python", "Decision Trees", "Data Science", "Galaxy"],
      },
      {
        id: "h4i",
        company: "Hack4Impact",
        companyHref: "https://calpoly.hack4impact.org/",
        role: "Full Stack Developer",
        dates: "Oct 2024 — Jun 2025",
        location: "San Luis Obispo, CA",
        summary:
          "Built nonprofit tooling for heritage tree inventory and volunteer communication.",
        highlights: [
          "Shipped messaging and announcement workflows using Next.js, MongoDB, and REST API routes.",
          "Built tree entry, inventory, and mobile-responsive volunteer interfaces for managing heritage tree records.",
          "Connected frontend workflows to backend routes that helped admins manage updates at different user levels.",
          "Worked on practical nonprofit-facing features that improved day-to-day record management.",
        ],
        tech: ["Next.js", "MongoDB", "REST APIs", "Chakra UI"],
      },
    ],
    [],
  );

  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const active = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <div className={styles.grid}>
      <div className={styles.listCard}>
        <div className={styles.listRail} aria-hidden="true" />
        {items.map((item) => {
          const selected = item.id === activeId;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={[styles.item, selected ? styles.itemActive : ""].join(
                " ",
              )}
              aria-pressed={selected}
            >
              {selected ? (
                <>
                  <motion.span
                    layoutId="experience-active-bg"
                    className={styles.activeBg}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 26,
                    }}
                    aria-hidden="true"
                  />
                  <motion.span
                    layoutId="experience-active-bar"
                    className={styles.activeBar}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 28,
                    }}
                    aria-hidden="true"
                  />
                </>
              ) : null}

              <span className={styles.itemContent}>
                <span className={styles.itemCompany}>{item.company}</span>
                <span className={styles.itemRole}>{item.role}</span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.article
        key={active.id}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={styles.detailCard}
      >
        <div className={styles.detailHeader}>
          <div className={styles.detailTitleRow}>
            <h3 className={styles.detailRole}>{active.role}</h3>
            <a
              className={styles.detailCompany}
              href={active.companyHref}
              target="_blank"
              rel="noreferrer"
            >
              @ {active.company}
            </a>
          </div>
          <div className={styles.detailMeta}>
            {active.dates}
            {active.location ? ` • ${active.location}` : ""}
          </div>
        </div>

        <p className={styles.summary}>{active.summary}</p>

        <ul className={styles.bullets}>
          {active.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className={styles.techRow}>
          {active.tech.map((tech) => (
            <Chip key={tech} text={tech} />
          ))}
        </div>
      </motion.article>
    </div>
  );
}
