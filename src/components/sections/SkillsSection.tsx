"use client";

import { motion } from "framer-motion";
import styles from "./SkillsSection.module.css";

type Skill = {
  name: string;
  x: number;
  y: number;
  tone: "matcha" | "ink" | "coffee" | "latte";
  drift: "floatA" | "floatB" | "floatC";
};

const skills: Skill[] = [
  { name: "React", x: 13, y: 16, tone: "matcha", drift: "floatA" },
  { name: "Next.js", x: 37, y: 20, tone: "matcha", drift: "floatB" },
  { name: "TypeScript", x: 61, y: 16, tone: "ink", drift: "floatC" },
  { name: "JavaScript", x: 84, y: 20, tone: "ink", drift: "floatA" },
  { name: "Python", x: 16, y: 34, tone: "coffee", drift: "floatB" },
  { name: "Java", x: 39, y: 38, tone: "ink", drift: "floatC" },
  { name: "SQL", x: 61, y: 34, tone: "latte", drift: "floatA" },
  { name: "PostgreSQL", x: 84, y: 38, tone: "latte", drift: "floatB" },
  { name: "Node.js", x: 13, y: 52, tone: "matcha", drift: "floatC" },
  { name: "FastAPI", x: 36, y: 56, tone: "coffee", drift: "floatA" },
  { name: "Flask", x: 58, y: 52, tone: "coffee", drift: "floatB" },
  { name: "MongoDB", x: 83, y: 56, tone: "latte", drift: "floatC" },
  { name: "React Native", x: 18, y: 72, tone: "matcha", drift: "floatA" },
  { name: "Supabase", x: 42, y: 68, tone: "matcha", drift: "floatB" },
  { name: "Firebase", x: 64, y: 72, tone: "latte", drift: "floatC" },
  { name: "Git", x: 84, y: 68, tone: "ink", drift: "floatA" },
  { name: "Docker", x: 18, y: 88, tone: "coffee", drift: "floatB" },
  { name: "AWS", x: 42, y: 84, tone: "latte", drift: "floatC" },
  { name: "Vercel", x: 64, y: 88, tone: "latte", drift: "floatA" },
  { name: "HTML/CSS", x: 84, y: 84, tone: "ink", drift: "floatB" },
];

export default function SkillsSection() {
  return (
    <div className={styles.wrap}>
      <div className={styles.copy}>
        <div className={styles.kicker}>Core Stack</div>
        <h3 className={styles.title}>A few tools I keep in motion.</h3>
        <p className={styles.subtitle}>
          Pulled from my resume and spread out like a small floating field instead
          of a giant skills dump.
        </p>
      </div>

      <div className={styles.board}>
        <div className={styles.glowA} aria-hidden="true" />
        <div className={styles.glowB} aria-hidden="true" />
        <div className={styles.grid} aria-hidden="true" />

        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={`${styles.skill} ${styles[skill.tone]} ${styles[skill.drift]}`}
            style={{
              left: `${skill.x}%`,
              top: `${skill.y}%`,
            }}
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.32, delay: index * 0.03 }}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
