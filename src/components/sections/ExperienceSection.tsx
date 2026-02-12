"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// function Tag({ text }: { text: string }) {
//   return <span className={styles.tag}>{text}</span>;
// }

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
          "Built contractor onboarding in Next.js and TypeScript to support new platform users.",
          "Implemented guarded transitions and validation to prevent incomplete submissions.",
          "Integrated Supabase Auth and backend APIs for secure role based onboarding.",
          "Replaced fragmented steps with a single guided signup experience.",
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
          "Led 7 engineers to build a food distribution dashboard for 70 plus nonprofits.",
          "Directed implementation of a priority system to optimize nonprofit food allocation.",
          "Architected and delivered a priority based queue for smarter food distribution.",
          "Oversaw development of a priority queue used to determine next food deliveries.",
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
          "Updated button styles to keep student actions clear and consistent across profiles.",
          "Standardized hover and interaction behavior across desktop and mobile.",
          "Tested the full accept challenge flow end to end using a student account.",
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
          "Designed a centralized theming system in React Native for consistent UI.",
          "Implemented a full screen Google Maps view for real time navigation.",
          "Developed reusable components from Figma to keep layouts consistent.",
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
          "Designed and deployed an ETL pipeline with Claude Sonnet for transcript JSON.",
          "Built backend features for a course planning tool.",
          "Set up DynamoDB tables and APIs for fast, reliable data access.",
          "Improved accessibility by simplifying academic information display.",
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
          "Developed and tested decision tree models on 80,000 plus patient records.",
          "Cleaned and organized clinical metadata to improve model accuracy.",
          "Built multi label pipelines and automated training with Python.",
          "Explored bioinformatics tools like Galaxy to support genomic analysis.",
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
          "Worked on a responsive React and Tailwind site for a heritage tree foundation.",
          "Connected Next.js to MongoDB via REST APIs for tree management.",
          "Added dynamic tables for browsing and editing tree records.",
          "Collaborated on interactive maps and search features.",
        ],
        tech: ["React", "Next.js", "Tailwind", "MongoDB", "REST APIs"],
      },
    ],
    [],
  );

  // allow collapsing by clicking active item again
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const active = items.find((x) => x.id === activeId) ?? items[0];

  return (
    <div className={styles.grid}>
      {/* left - timeline list */}
      <div>
        <div className={styles.listCard}>
          {items.map((x, idx) => {
            const selected = x.id === activeId;
            const panelId = `${x.id}-panel`;

            return (
              <div key={x.id} className={styles.itemWrap}>
                <button
                  onClick={() => setActiveId(selected ? "" : x.id)}
                  className={[
                    styles.item,
                    selected ? styles.itemActive : "",
                  ].join(" ")}
                  aria-expanded={selected}
                  aria-controls={panelId}
                  type="button"
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

                {/* inline expand panel */}
                <AnimatePresence initial={false}>
                  {selected && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className={styles.expandPanel}
                    >
                      <div className={styles.expandInner}>
                        <div className={styles.blockTitle}>Highlights</div>
                        <ul className={styles.bullets}>
                          {x.highlights.map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>

                        <div className={styles.blockTitle}>Tech</div>
                        <div className={styles.bottomChips}>
                          {x.tech.map((t) => (
                            <Chip key={t} text={t} />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* right - spotlight detail card (kept as-is, but hidden via CSS) */}
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

          {/* <div className={styles.tagsRow}>
            {active.tech.slice(0, 4).map((t) => (
              <Tag key={t} text={t} />
            ))}
          </div> */}
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
