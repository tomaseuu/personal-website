"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./SectionRail.module.css";

type Item = { id: string; label: string };

export default function SectionRail() {
  const items: Item[] = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "hobbies", label: "Hobbies" },
    ],
    [],
  );

  const [active, setActive] = useState("home");
  const listRef = useRef<HTMLDivElement | null>(null);

  const [pill, setPill] = useState<{ top: number; height: number }>({
    top: 0,
    height: 0,
  });

  const [open, setOpen] = useState(false);
  const shellRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ids = items.map((i) => i.id);
    const HEADER_OFFSET = 90;

    function computeActive() {
      const candidates = ids
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const r = el.getBoundingClientRect();
          const dist = Math.abs(r.top - HEADER_OFFSET);
          return { id, dist, top: r.top };
        })
        .filter(Boolean) as { id: string; dist: number; top: number }[];

      if (!candidates.length) return;

      const above = candidates
        .filter((c) => c.top - HEADER_OFFSET <= 40)
        .sort((a, b) => b.top - a.top)[0];

      const best = above ?? candidates.sort((a, b) => a.dist - b.dist)[0];
      setActive(best.id);
    }

    computeActive();
    window.addEventListener("scroll", computeActive, { passive: true });
    window.addEventListener("resize", computeActive);

    return () => {
      window.removeEventListener("scroll", computeActive);
      window.removeEventListener("resize", computeActive);
    };
  }, [items]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const btn = list.querySelector<HTMLButtonElement>(
      `button[data-id="${active}"]`,
    );
    if (!btn) return;

    const listRect = list.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    setPill({
      top: btnRect.top - listRect.top,
      height: btnRect.height,
    });
  }, [active]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    function onDown(e: MouseEvent) {
      if (!open) return;
      const shell = shellRef.current;
      if (!shell) return;
      if (!shell.contains(e.target as Node)) setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onDown);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  function go(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false); // optional: auto-close after jump
  }

  return (
    <nav
      ref={shellRef}
      className={[styles.shell, open ? "" : styles.closed].join(" ")}
      aria-label="Section quick jump"
    >
      <button
        className={styles.toggle}
        type="button"
        aria-label={open ? "Close quick jump" : "Open quick jump"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "‹" : "›"}
      </button>

      <div className={styles.panel}>
        <div className={styles.card}>
          <div className={styles.title}>Quick Jump</div>

          <div className={styles.list} ref={listRef}>
            <div
              className={styles.pill}
              style={{
                transform: `translateY(${pill.top}px)`,
                height: pill.height,
              }}
              aria-hidden="true"
            />
            {items.map((it) => (
              <button
                key={it.id}
                data-id={it.id}
                className={[
                  styles.item,
                  active === it.id ? styles.active : "",
                ].join(" ")}
                onClick={() => go(it.id)}
                type="button"
              >
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.label}>{it.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
