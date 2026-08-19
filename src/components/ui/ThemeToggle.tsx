"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "theme-preference";
const MODE_ORDER: ThemeMode[] = ["light", "dark"];

function readThemeMode(): ThemeMode {
  if (typeof document === "undefined") return "light";

  const mode = document.documentElement.dataset.themeMode;
  if (mode === "light" || mode === "dark") return mode;
  return "light";
}

function applyThemeMode(mode: ThemeMode) {
  const root = document.documentElement;

  root.dataset.themeMode = mode;
  root.dataset.theme = mode;

  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {}

  window.dispatchEvent(new CustomEvent("themechange"));
}

function nextThemeMode(mode: ThemeMode): ThemeMode {
  const index = MODE_ORDER.indexOf(mode);
  return MODE_ORDER[(index + 1) % MODE_ORDER.length] ?? "light";
}

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const syncMode = () => setMode(readThemeMode());

    syncMode();
    window.addEventListener("themechange", syncMode);
    window.addEventListener("storage", syncMode);

    return () => {
      window.removeEventListener("themechange", syncMode);
      window.removeEventListener("storage", syncMode);
    };
  }, []);

  const label = mode === "dark" ? "Dark" : "Light";
  const icon = mode === "dark" ? "D" : "L";

  return (
    <button
      type="button"
      className={[styles.toggle, className].join(" ").trim()}
      onClick={() => {
        const nextMode = nextThemeMode(mode);
        applyThemeMode(nextMode);
        setMode(nextMode);
      }}
      aria-label={`Theme mode: ${label}. Click to switch theme mode.`}
      title={`Theme: ${label}`}
    >
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
