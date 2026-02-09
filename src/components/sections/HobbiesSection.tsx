"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HobbiesSection.module.css";

type Hobby = {
  id: string;
  title: string;
  subtitle: string;
  note: string;
  tag: string;
  image?: { src: string; alt: string };
};

function randomTilt(id: string) {
  const n = id.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const tilt = ((n % 7) - 3) * 0.6;
  return tilt;
}

export default function HobbiesSection() {
  const hobbies = useMemo<Hobby[]>(
    () => [
      {
        id: "pickleball",
        title: "Pickleball",
        subtitle: "court time + friends",
        tag: "movement",
        note: "It’s my favorite way to get competitive without taking life too seriously. Fast rallies, good laughs, instant reset.",
      },
      {
        id: "running",
        title: "Running",
        subtitle: "head clear / heart steady",
        tag: "reset",
        note: "When I run, my brain organizes itself. I come back calmer, more focused, and weirdly more creative.",
      },
      {
        id: "kdrama",
        title: "K-dramas",
        subtitle: "cozy stories at night",
        tag: "comfort",
        note: "I love good storytelling and character growth. It’s honestly how I recharge after long days.",
      },
      {
        id: "youtube",
        title: "YouTube / Editing",
        subtitle: "turn moments into memories",
        tag: "creative",
        note: "I like shaping a vibe — music, pacing, little details. It feels like building a product, but emotional.",
      },
      {
        id: "reading",
        title: "Reading",
        subtitle: "slow dopamine",
        tag: "curiosity",
        note: "It’s the quiet version of learning. A small habit that stacks over time and changes how I think.",
      },
    ],
    [],
  );

  const [openId, setOpenId] = useState<string>("");

  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <div>
          <div className={styles.kicker}>Postcards</div>
          <h3 className={styles.title}>From my life lately</h3>
          <p className={styles.sub}>
            Little things I keep coming back to. Tap a postcard to read the
            note.
          </p>
        </div>

        <div className={styles.legend}>
          <span className={styles.legendDot} />
          <span className={styles.legendText}>collected & saved</span>
        </div>
      </div>

      <div className={styles.grid}>
        {hobbies.map((h, i) => {
          const tilt = randomTilt(h.id);

          const isOpen = openId === h.id;

          return (
            <motion.article
              key={h.id}
              className={[
                styles.card,
                isOpen ? styles.cardOpen : "",
                i % 2 === 0 ? styles.tall : styles.short,
              ].join(" ")}
              style={{ rotate: tilt }}
              whileHover={{ y: -4, rotate: tilt * 0.35 }}
              transition={{ duration: 0.18 }}
              onClick={() => setOpenId(isOpen ? "" : h.id)}
              role="button"
              tabIndex={0}
            >
              {/* photo / placeholder */}
              <div className={styles.photo}>
                {h.image?.src ? (
                  <img
                    className={styles.img}
                    src={h.image.src}
                    alt={h.image.alt}
                  />
                ) : (
                  <div className={styles.photoPlaceholder}>
                    <div className={styles.phTop}>Add photo</div>
                    <div className={styles.phHint}>
                      {h.title.toLowerCase()}.png
                    </div>
                  </div>
                )}

                <div className={styles.stamp}>
                  <div className={styles.stampInner}>
                    <div className={styles.stampTop}>TL</div>
                    <div className={styles.stampMid}>{h.tag}</div>
                    <div className={styles.stampBot}>✦</div>
                  </div>
                </div>
              </div>

              <div className={styles.body}>
                <div className={styles.header}>
                  <div>
                    <div className={styles.hTitle}>{h.title}</div>
                    <div className={styles.hSub}>{h.subtitle}</div>
                  </div>

                  <div className={styles.tap}>
                    <span>{isOpen ? "close" : "tap"}</span>
                    <span className={styles.tapDot} />
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className={styles.noteWrap}>
                        <div className={styles.noteTitle}>Note</div>
                        <div className={styles.note}>{h.note}</div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0.9 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.9 }}
                      className={styles.preview}
                    >
                      <div className={styles.previewLine} />
                      <div className={styles.previewLine} />
                      <div className={styles.previewLineShort} />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className={styles.footer}>
                  <span className={styles.footerLeft}>Postcard</span>
                  <span className={styles.footerRight}>2026</span>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
      <div className={styles.scrollCue} aria-hidden="true">
        <div className={styles.scrollText}>Scroll down to connect</div>
        <div className={styles.scrollArrow}>↓</div>
      </div>
    </div>
  );
}
