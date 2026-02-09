"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TopBar from "@/components/ui/TopBar";
import MenuOverlay from "@/components/ui/MenuOverlay";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
    ],
    [],
  );

  return (
    <section id="home" className={styles.wrap}>
      <TopBar onMenu={() => setOpen(true)} />
      <MenuOverlay open={open} onClose={() => setOpen(false)} links={links} />

      <div className={styles.bg}>
        <div className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-black/[0.04]" />
        <div className="absolute -right-40 top-10 h-[560px] w-[560px] rounded-full bg-black/[0.03]" />
      </div>

      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
          className={styles.photo}
        >
          <Image
            src="/thomas-headshot.png"
            alt="Thomas portrait"
            fill
            priority
            className="heroImg"
          />
        </motion.div>

        <div className={styles.text}>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className={styles.title}
          >
            Thomas Le
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className={styles.subtitle}
          >
            Rising senior in Computer Science at Cal Poly San Luis Obispo who
            loves learning, creating, and bringing ideas to life through code. I
            am driven by curiosity and a desire to build things that feel
            thoughtful, personal, and fun!
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
              Discover more
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.35 }}
        className={styles.scroll}
      >
        SCROLL
        <span className={styles.dot} />
      </motion.div>
    </section>
  );
}
