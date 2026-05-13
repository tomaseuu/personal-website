"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.css";

type ThemeMode = "auto" | "light" | "dark";

const STORAGE_KEY = "theme-preference";
const MODE_ORDER: ThemeMode[] = ["auto", "dark", "light"];

function getAutoTheme(): "light" | "dark" {
  const hour = new Date().getHours();
  return hour >= 18 || hour < 6 ? "dark" : "light";
}

function readThemeMode(): ThemeMode {
  if (typeof document === "undefined") return "auto";

  const mode = document.documentElement.dataset.themeMode;
  if (mode === "light" || mode === "dark" || mode === "auto") return mode;
  return "auto";
}

function applyThemeMode(mode: ThemeMode) {
  const root = document.documentElement;
  const resolvedTheme = mode === "auto" ? getAutoTheme() : mode;

  root.dataset.themeMode = mode;
  root.dataset.theme = resolvedTheme;

  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {}

  window.dispatchEvent(new CustomEvent("themechange"));
}

function nextThemeMode(mode: ThemeMode): ThemeMode {
  const index = MODE_ORDER.indexOf(mode);
  return MODE_ORDER[(index + 1) % MODE_ORDER.length] ?? "auto";
}

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const [mode, setMode] = useState<ThemeMode>("auto");

  useEffect(() => {
    const syncMode = () => setMode(readThemeMode());

    syncMode();
    window.addEventListener("themechange", syncMode);
    window.addEventListener("storage", syncMode);

    const intervalId = window.setInterval(() => {
      if (readThemeMode() === "auto") {
        applyThemeMode("auto");
        syncMode();
      }
    }, 60_000);

    return () => {
      window.removeEventListener("themechange", syncMode);
      window.removeEventListener("storage", syncMode);
      window.clearInterval(intervalId);
    };
  }, []);

  const label =
    mode === "auto" ? "Auto" : mode === "dark" ? "Dark" : "Light";

  const icon = mode === "auto" ? "A" : mode === "dark" ? "D" : "L";

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
