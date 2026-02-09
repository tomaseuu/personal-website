"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import styles from "./ExperienceSection.module.css";

type Experience = {
  id: string;
  company: string;
  role: string;
  dates: string;
  location?: string;
  oneLiner: string;
  highlights: string[];
  tech: string[];
};

function Tag({ text }: { text: string }) {
  return <span className={styles.tag}>{text}</span>;
}

function Chip({ text }: { text: string }) {
  return <span className={styles.chip}>{text}</span>;
}

export default function ExperienceSection() {
  const items: Experience[] = useMemo(
    () => [
      {
        id: "homigo",
        company: "Homigo (Startup)",
        role: "Software Developer (Next.js)",
        dates: "Dec 2025 — Present",
        location: "Remote",
        oneLiner:
          "Built a guided contractor onboarding flow with validation + secure auth groundwork.",
        highlights: [
          "Built the contractor onboarding flow in Next.js + TypeScript to support new contractors joining the platform.",
          "Implemented guarded transitions and frontend validation to prevent incomplete or invalid submissions.",
          "Integrated Supabase Auth and backend APIs to prepare secure, role-based contractor onboarding.",
          "Streamlined setup by replacing fragmented steps with a single guided signup flow.",
        ],
        tech: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase"],
      },
      {
        id: "veggie",
        company: "Veggie Rescue",
        role: "Tech Lead / SWE Intern",
        dates: "Dec 2025 — Present",
        location: "Remote",
        oneLiner:
          "Led a 7-person team shipping internal tools for a food distribution dashboard used by 70+ nonprofits.",
        highlights: [
          "Led a 7-person engineering team to build a food distribution dashboard used by 70+ nonprofits.",
          "Delivered a priority-based delivery queue that helps staff decide which organization receives food next.",
          "Translated nonprofit needs into concrete frontend features improving visibility into deliveries and requests.",
          "Created GitHub issues and UI specs for a Jotform → Google Sheets pipeline to streamline data collection.",
        ],
        tech: ["React", "TypeScript", "REST APIs", "GitHub"],
      },
      {
        id: "tesla",
        company: "Systems Optimization Club × Tesla (Partner Project)",
        role: "Frontend Engineer (React Native)",
        dates: "Oct 2025 — Present",
        location: "San Luis Obispo, CA",
        oneLiner:
          "Designed a theme system + reusable UI components to keep the app consistent across screens.",
        highlights: [
          "Designed a centralized theming system in React Native to keep UI consistent and reduce styling duplication.",
          "Implemented a full-screen map view using the Google Maps API to support real-time navigation use cases.",
          "Developed reusable UI components from Figma designs to keep layouts consistent across the app.",
        ],
        tech: ["React Native", "TypeScript", "Google Maps API", "Figma"],
      },
      {
        id: "h4i",
        company: "Hack4Impact",
        role: "Full Stack Developer",
        dates: "Oct 2024 — Jun 2025",
        location: "San Luis Obispo, CA",
        oneLiner:
          "Built a responsive site and inventory tooling for a nonprofit’s tree records and workflows.",
        highlights: [
          "Worked on a responsive website for the Central Coast Heritage Tree Foundation using React and Tailwind CSS.",
          "Connected a Next.js frontend with a MongoDB backend via REST APIs for tree inventory management.",
          "Added a dynamic data table with React Hooks for smooth browsing and editing of hundreds of tree records.",
          "Collaborated with developers and designers on features like interactive maps and search filters.",
        ],
        tech: ["React", "Next.js", "Tailwind", "MongoDB", "REST APIs"],
      },
    ],
    [],
  );

  const [activeId, setActiveId] = useState(items[0]?.id);
  const active = items.find((x) => x.id === activeId) ?? items[0];

  return (
    <div className={styles.grid}>
      {/* left - timeline list */}
      <div>
        <div className={styles.listCard}>
          {items.map((x, idx) => {
            const selected = x.id === activeId;
            return (
              <button
                key={x.id}
                onClick={() => setActiveId(x.id)}
                className={[
                  styles.item,
                  selected ? styles.itemActive : "",
                ].join(" ")}
              >
                <div className={styles.row}>
                  <div className={styles.timeline} aria-hidden="true">
                    <div
                      className={[
                        styles.dot,
                        selected ? styles.dotActive : "",
                      ].join(" ")}
                    />
                    {idx !== items.length - 1 ? (
                      <div className={styles.line} />
                    ) : null}
                  </div>

                  <div>
                    <div className={styles.companyRow}>
                      <div className={styles.company}>{x.company}</div>
                      <div className={styles.meta}>• {x.dates}</div>
                    </div>

                    <div className={styles.roleBlock}>
                      <div className={styles.role}>{x.role}</div>
                      <div className={styles.metaRow}>
                        {x.dates}
                        {x.location ? ` • ${x.location}` : ""}
                      </div>
                    </div>

                    <div className={styles.oneLiner}>{x.oneLiner}</div>

                    <div className={styles.previewChips}>
                      {x.tech.slice(0, 3).map((t) => (
                        <Chip key={t} text={t} />
                      ))}
                    </div>
                  </div>

                  <div className={styles.arrow} aria-hidden="true">
                    →
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className={styles.hint}>
          Tip: click an item to update the details.
        </div>
      </div>

      {/* right - spotlight detail card */}
      <motion.div
        key={active.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22 }}
        className={styles.detailCard}
      >
        <div className={styles.detailTop}>
          <div>
            <div className={styles.detailCompany}>{active.company}</div>
            <div className={styles.detailRoleBlock}>
              <div className={styles.detailRole}>{active.role}</div>
              <div className={styles.detailMetaRow}>
                {active.dates}
                {active.location ? ` • ${active.location}` : ""}
              </div>
            </div>
          </div>

          <div className={styles.tagsRow}>
            {active.tech.slice(0, 4).map((t) => (
              <Tag key={t} text={t} />
            ))}
          </div>
        </div>

        <div className={styles.callout}>{active.oneLiner}</div>

        <div className={styles.blockTitle}>Highlights</div>
        <ul className={styles.bullets}>
          {active.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <div className={styles.blockTitle}>Tech</div>
        <div className={styles.bottomChips}>
          {active.tech.map((t) => (
            <Chip key={t} text={t} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
