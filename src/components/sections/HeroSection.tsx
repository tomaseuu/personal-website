"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TopBar from "@/components/ui/TopBar";
import MenuOverlay from "@/components/ui/MenuOverlay";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const [showAnimatedHeadshot, setShowAnimatedHeadshot] = useState(false);

  const links = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#connect" },
    ],
    [],
  );

  const topBarLinks = useMemo(
    () => [
      { label: "About", href: "#about", step: "01" },
      { label: "Experience", href: "#experience", step: "02" },
      { label: "Work", href: "#projects", step: "03" },
      { label: "Skills", href: "#skills", step: "04" },
      { label: "Contact", href: "#connect", step: "05" },
    ],
    [],
  );

  return (
    <section id="home" className={styles.wrap}>
      <TopBar
        onMenu={() => setOpen(true)}
        links={topBarLinks}
        resumeHref="/resume.pdf"
      />
      <MenuOverlay open={open} onClose={() => setOpen(false)} links={links} />

      <div className={styles.bg}>
        <div
          className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full"
          style={{ background: "rgba(60, 181, 199, 0.08)" }}
        />
        <div
          className="absolute -right-40 top-10 h-[560px] w-[560px] rounded-full"
          style={{ background: "rgba(225, 153, 179, 0.08)" }}
        />
      </div>

      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
          className={styles.photoStack}
        >
          <button
            type="button"
            className={styles.photoToggle}
            onClick={() => setShowAnimatedHeadshot((value) => !value)}
            aria-label="Toggle hero headshot"
            aria-pressed={showAnimatedHeadshot}
          >
            <div className={[styles.polaroid, styles.polaroidMain].join(" ")}>
              <div className={styles.polaroidImg}>
                <Image
                  src={
                    showAnimatedHeadshot
                      ? "/animate-headshot.png"
                      : "/thomas-headshot.png"
                  }
                  alt="Thomas portrait"
                  fill
                  priority
                  className={styles.polaroidPhoto}
                />
              </div>
              <div className={styles.polaroidCaption}>
                {showAnimatedHeadshot ? "click to switch back" : "Hi, I am Thomas!"}
              </div>
            </div>
          </button>
        </motion.div>

        <div className={styles.text}>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.03 }}
            className={styles.eyebrow}
          >
            Computer Science @ Cal Poly SLO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className={styles.title}
          >
            Thomas Le
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.09 }}
            className={styles.meta}
          >
            Software engineer building full-stack and AI-powered products
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className={styles.subtitle}
          >
            I am a software engineer focused on building thoughtful,
            human-centered digital products across onboarding, healthcare, and
            nonprofit systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className={styles.actions}
          >
            <button
              type="button"
              className={styles.btn}
              onClick={() => {
                const el = document.querySelector("#about");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Discover More
            </button>

            <a
              className={[styles.btn, styles.btnGhost].join(" ")}
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className={styles.tag}
          >
            Los Angeles Metropolitan Area • Open to 2026 new-grad roles
          </motion.div>
        </div>
      </div>

    </section>
  );
}
