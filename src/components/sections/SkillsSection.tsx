"use client";

import { motion } from "framer-motion";
import styles from "./SkillsSection.module.css";

type Group = {
  title: string;
  subtitle: string;
  items: string[];
  accent: "matcha" | "coffee" | "ink" | "latte";
  imageSrc: string;
  imageSize?: number;
  imageX?: number;
  imageY?: number;
};

function Chip({ text }: { text: string }) {
  return (
    <motion.span
      className={styles.chip}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
    >
      {text}
    </motion.span>
  );
}

export default function SkillsSection() {
  const groups: Group[] = [
    {
      title: "Languages",
      subtitle: "Foundations I reach for daily",
      items: [
        "Python",
        "TypeScript",
        "JavaScript",
        "Java",
        "SQL",
        "C",
        "HTML5",
      ],
      accent: "ink",
      imageSrc: "/coffee.png",
      imageSize: 120,
      imageX: -20,
      imageY: 10,
    },
    {
      title: "Frameworks & Libraries",
      subtitle: "Where I build UI + product systems",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "pandas",
        "scikit-learn",
        "React Native",
      ],
      accent: "matcha",
      imageSrc: "/matcha.png",
      imageSize: 120,
      imageX: -20,
      imageY: -4,
    },
    {
      title: "Tools & Databases",
      subtitle: "Shipping + data plumbing",
      items: [
        "PostgreSQL",
        "MongoDB",
        "GitHub",
        "Kaggle",
        "Google Colab",
        "Supabase",
        "Firebase",
        "Git",
        "AWS",
        "Figma",
        "CI/CD",
      ],
      accent: "coffee",
      imageSrc: "/latte.png",
      imageSize: 80,
      imageX: -20,
      imageY: 20,
    },
    {
      title: "Product / Systems",
      subtitle: "How I think when I ship",
      items: [
        "UX polish",
        "Product design",
        "Usability testing",
        "API design",
        "Sprint planning",
        "Roadmapping",
        "Systems thinking",
        "User flows",
      ],
      accent: "latte",
      imageSrc: "/pastry.png",
      imageSize: 115,
      imageX: -15,
      imageY: 20,
    },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.menuTop}>
        <div>
          <div className={styles.kicker}>Today’s</div>
          <div className={styles.menuTitle}>Skills Menu</div>
          <div className={styles.menuSub}>
            A calm toolbox — served warm. Hover over the ingredients.
          </div>
        </div>

        <div className={styles.stamp}>
          <div className={styles.stampTop}>HOUSE</div>
          <div className={styles.stampMid}>SPECIAL</div>
          <div className={styles.stampBot}>✦</div>
        </div>
      </div>

      <div className={styles.rule} />

      <div className={styles.grid}>
        {groups.map((g, gi) => (
          <motion.article
            key={g.title}
            className={`${styles.card} ${styles[g.accent]}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: gi * 0.05 }}
          >
            <div className={styles.left}>
              <div className={styles.rowTop}>
                <div className={styles.groupTitle}>{g.title}</div>
                <div className={styles.dots} aria-hidden="true" />
                <div className={styles.price}>{g.items.length} items</div>
              </div>

              <div className={styles.groupSub}>{g.subtitle}</div>

              <div className={styles.ingredients}>
                {g.items.map((t) => (
                  <Chip key={t} text={t} />
                ))}
              </div>
            </div>

            <div className={styles.media}>
              <img
                src={g.imageSrc}
                alt={`${g.title} illustration`}
                className={styles.mediaImg}
                style={{
                  width: g.imageSize ? `${g.imageSize}px` : "110px",
                  transform: `translate(${g.imageX ?? 0}px, ${g.imageY ?? 0}px)`,
                }}
              />
            </div>
          </motion.article>
        ))}
      </div>

      <div className={styles.footerNote}>
        Tip: keep this menu tight — fewer items, higher signal.
      </div>
    </div>
  );
}
