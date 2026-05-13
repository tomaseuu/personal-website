"use client";

import { useMemo } from "react";
import styles from "./HobbiesSection.module.css";

type Hobby = {
  id: string;
  title: string;
  note: string;
  tag: string;
};

export default function HobbiesSection() {
  const hobbies = useMemo<Hobby[]>(
    () => [
      {
        id: "pickleball",
        title: "Pickleball",
        tag: "active",
        note: "A newer hobby that quickly became one of my favorite ways to reset, compete a little, and keep improving.",
      },
      {
        id: "running",
        title: "Running",
        tag: "discipline",
        note: "What started with signing up for a few 5Ks turned into something I actually look forward to now.",
      },
      {
        id: "editing",
        title: "Video Editing",
        tag: "creative",
        note: "I love shaping small moments into something worth rewatching through pacing, music, and storytelling.",
      },
      {
        id: "reading",
        title: "Reading",
        tag: "quiet",
        note: "Books are still one of my favorite ways to slow down, learn something new, or disappear into another world.",
      },
      {
        id: "ghibli",
        title: "K-dramas, Ghibli, and Anime",
        tag: "comfort",
        note: "I keep coming back to stories with heart, strong visuals, and the kind of small moments that stick with you.",
      },
      {
        id: "exploring",
        title: "Trying New Things",
        tag: "curious",
        note: "A lot of my best memories come from saying yes to a new place, activity, or plan with friends.",
      },
    ],
    [],
  );

  return (
    <div className={styles.wrap}>
      <p className={styles.intro}>
        Outside of software, these are a few things I keep coming back to.
        They help me stay creative, grounded, and curious.
      </p>

      <div className={styles.grid}>
        {hobbies.map((hobby) => (
          <article key={hobby.id} className={styles.card}>
            <div className={styles.cardTop}>
              <h3 className={styles.title}>{hobby.title}</h3>
              <span className={styles.tag}>{hobby.tag}</span>
            </div>
            <p className={styles.note}>{hobby.note}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
