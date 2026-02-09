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
  image?: {
    src: string;
    alt: string;
    zoom?: number;
    pos?: string;
  };
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
        subtitle: "a fun new sport I just got into",
        tag: "PICKLE",
        note: "Pickleball has been my stress reliever lately. I have so much fun playing and it lowkey brings out my competitive side. I am not that good yet since this is literally my first racket sport and I still am learning the ropes, but i wanna keep getting better. ",
        image: {
          src: "/pickleball.gif",
          alt: "Playing pickleball",
          zoom: 1.0,
          pos: "45% 35%",
        },
      },
      {
        id: "running",
        title: "Running",
        subtitle: "I really can not believe i enjoy running now",
        tag: "5k!",
        note: "Not really sure how I got into running, but ever since I signed up for a couple 5ks, I have just been training. I had to start somewhere, and it is kind of crazy seeing myself hit new PRs and slowly build real endurance.",
        image: {
          src: "/running.gif",
          alt: "Running outdoors",
          fit: "contain",
          zoom: 1.0,
          pos: "45% 35%",
        },
      },
      {
        id: "kdrama",
        title: "K-dramas | Studio Ghibli | Anime",
        subtitle: "an escape from reality does hit different sometimes",
        tag: "<3",
        note: "Something about k-dramas, anime, and studio ghibli just hits. The visuals, the storytelling, the peaceful moemnts (and yes, the dramas). I love the slice of life parts and the little messages that stick with you after.",
        image: {
          src: "/tv.gif",
          alt: "Watching TV",
          zoom: 1.0,
          pos: "45% 35%",
        },
      },

      {
        id: "youtube",
        title: "YouTube / Editing",
        subtitle: "my creative passion",
        tag: "new vid",
        note: "Shaping moments through a lens and turning them into something worth rewatching. Music, pacing, and little details all come together. Posting on youtube lets my friends see it too, and it is kind of like journaling life in a creative way.",
        image: {
          src: "/video-edit.gif",
          alt: "Video editing timeline",
        },
      },
      {
        id: "reading",
        title: "Reading",
        subtitle: "def getting lost in these pages",
        tag: "flow",
        note: "Reading has always been a thing since I was young. I love picking up a book and getting lost in a new world, whether it is learning something new or going on an adventure. It is a calm escape from everything else in life :)",
        image: {
          src: "/read.gif",
          alt: "Reading a book",
        },
      },
      {
        id: "exploring",
        title: "Exploring",
        subtitle: "seeing more of life",
        tag: "open",
        note: "Love exploring, whether it is with frineds or on my own. There is so much out there and being young means trying new places, doing fun things, and just seeing where life goes.",
        image: {
          src: "/explore.gif",
          alt: "exploring the world",
        },
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
                    style={{
                      objectPosition: h.image.pos ?? "50% 50%",
                      transform: `scale(${h.image.zoom ?? 1})`,
                    }}
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
