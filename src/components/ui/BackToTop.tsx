"use client";

import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 500);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <button
      type="button"
      className={styles.button}
      data-visible={visible}
      tabIndex={visible ? 0 : -1}
      aria-label="Back to top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5m-6 6 6-6 6 6" />
      </svg>
    </button>
  );
}
