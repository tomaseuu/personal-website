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
        role: "Software Developer",
        dates: "Dec 2025 — Present",
        location: "Remote",
        oneLiner:
          "A platform that helps local contractors get jobs and paid without bidding, ads, or added friction.",

        highlights: [
          "Built the contractor onboarding flow in Next.js + TypeScript to support new contractors joining the platform.",
          "Implemented guarded transitions and frontend validation to prevent incomplete or invalid submissions.",
          "Integrated Supabase Auth and backend APIs to prepare secure, role-based contractor onboarding.",
          "Streamlined setup by replacing fragmented steps with a single guided signup flow.",
        ],
        tech: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind",
          "Supabase",
          "REST APIs",
        ],
      },
      {
        id: "veggie",
        company: "Veggie Rescue",
        role: "Tech Lead / SWE Intern",
        dates: "Dec 2025 — Present",
        location: "Remote",
        oneLiner:
          "A nonprofit rescuing surplus fresh food from local farms and delivering it fairly to organizations serving food-insecure communities.",
        highlights: [
          "Led a 7-person engineering team to build a food distribution dashboard used by 70+ nonprofits.",
          "Delivered a priority-based delivery queue that helps staff decide which organization receives food next.",
          "Translated nonprofit needs into concrete frontend features improving visibility into deliveries and requests.",
          "Created GitHub issues and UI specs for a Jotform → Google Sheets pipeline to streamline data collection.",
        ],
        tech: ["React", "TypeScript", "REST APIs", "GitHub"],
      },
      {
        id: "spreadgoodness",
        company: "SpreadGoodness",
        role: "Software Engineering Intern",
        dates: "Dec 2025 — Present",
        location: "Remote",
        oneLiner:
          "A student-focused platform encouraging small acts of kindness through challenges and social interaction.",
        highlights: [
          "Updated frontend button styling to keep student actions clear, bold, and consistent across profile types.",
          "Ensured consistent hover and interaction behavior across desktop and mobile views.",
          "Tested changes end-to-end using a student account through the full accept-challenge flow, including confirmation states.",
        ],
        tech: ["React", "TypeScript", "CSS", "UI Testing"],
      },

      {
        id: "tesla",
        company: "Systems Optimization Club (Tesla Partner Project)",
        role: "Fullstack Developer",
        dates: "Oct 2025 — Present",
        location: "San Luis Obispo, CA",
        oneLiner:
          "A centralized commute app helping Tesla employees compare transportation options and reduce parking congestion.",
        highlights: [
          "Designed a centralized theming system in React Native to keep UI consistent and reduce styling duplication.",
          "Implemented a full-screen map view using the Google Maps API to support real-time navigation use cases.",
          "Developed reusable UI components from Figma designs to keep layouts consistent across the app.",
        ],
        tech: ["React Native", "TypeScript", "Google Maps API", "Figma"],
      },

      {
        id: "csu-ai-camp",
        company: "CSU AI Summer Camp",
        role: "AI Developer",
        dates: "Jun 2025 — Jul 2025",
        location: "San Luis Obispo, CA",
        oneLiner:
          "An academic tooling project that makes course planning easier for students and advisors through clean data and accessible interfaces.",
        highlights: [
          "Designed and deployed an ETL pipeline using Claude Sonnet to convert transcript data into structured JSON for APIs.",
          "Built backend features for a course-planning tool that helps students and advisors organize degree requirements.",
          "Set up DynamoDB tables and API endpoints to support fast, reliable data storage and retrieval.",
          "Improved accessibility for first-generation CSU students by simplifying how academic information is displayed.",
        ],
        tech: ["Python", "ETL", "LLMs (Claude)", "AWS DynamoDB", "REST APIs"],
      },
      {
        id: "bio-ra",
        company: "Bioinformatics Research Lab",
        role: "Bioinformatics Research Assistant",
        dates: "Jan 2025 — Jan 2026",
        location: "San Luis Obispo, CA",
        oneLiner:
          "A research project improving UTI testing by using patient metadata to predict likely pathogens and reduce unnecessary panels.",
        highlights: [
          "Developed and tested decision-tree models for the UTI Metadata Prediction Project using 80,000+ patient records.",
          "Cleaned and organized clinical metadata to improve model accuracy and ensure consistent results.",
          "Built multi-label learning pipelines and automated training runs using Python scripts and internal APIs.",
          "Explored bioinformatics tools (e.g., Galaxy) to support genomic analysis and strengthen prediction workflows.",
        ],
        tech: ["Python", "Decision Trees", "Data Cleaning", "APIs", "Galaxy"],
      },
      {
        id: "h4i",
        company: "Hack4Impact",
        role: "Full Stack Developer",
        dates: "Oct 2024 — Jun 2025",
        location: "San Luis Obispo, CA",
        oneLiner:
          "A nonprofit project focused on managing and preserving historic tree records for the local community.",
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
