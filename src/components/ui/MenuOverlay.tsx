"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./MenuOverlay.module.css";

type LinkItem = { label: string; href: string };

export default function MenuOverlay({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: LinkItem[];
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  function handleNavClick(href: string) {
    if (href.startsWith("#")) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        onClose();
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }
    }

    onClose();
    window.location.href = href;
  }

  const menuLinks: LinkItem[] = [
    ...links,
    ...(links.some((l) => l.href === "#connect")
      ? []
      : [{ label: "Let’s connect", href: "#connect" }]),
  ];

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className={styles.panelInner}>
              <div className={styles.header}>
                <div className={styles.brand}>TL</div>

                <button
                  onClick={onClose}
                  className={styles.closeBtn}
                  type="button"
                >
                  Close
                </button>
              </div>

              <div className={styles.divider} />

              <div className={styles.body}>
                <nav className={styles.nav} aria-label="Menu links">
                  {menuLinks.map((l) => (
                    <button
                      key={l.href}
                      type="button"
                      className={styles.linkBtn}
                      onClick={() => handleNavClick(l.href)}
                    >
                      <span className={styles.linkLabel}>{l.label}</span>
                    </button>
                  ))}
                </nav>

                <aside className={styles.meta} aria-label="Menu details">
                  <div>
                    <div className={styles.smallTitle}>
                      Quick Inspirational Quotes
                    </div>
                    <div className={styles.smallText}>
                      - Take Every Opportunity, Ignore Every Fear
                    </div>
                    <div className={styles.smallText}>
                      - How Badly Do You Want It?
                    </div>
                    <div className={styles.smallText}>- Trust the Process</div>
                    <div className={styles.smallText}>- Breathe.</div>
                    <div className={styles.smallText}>- Step by Step</div>
                  </div>

                  <div>
                    <div className={styles.smallTitle}>Links</div>
                    <div className={styles.socials}>
                      <a
                        className={styles.socialLink}
                        href="https://github.com/tomaseuu"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                      <a
                        className={styles.socialLink}
                        href="https://www.linkedin.com/in/thomasle998/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                      <a
                        className={styles.socialLink}
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Resume
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
