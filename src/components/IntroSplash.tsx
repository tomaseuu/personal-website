"use client";

import { useEffect, useState } from "react";

type Props = {
  oncePerSession?: boolean;
  loadingMs?: number;
  welcomeMs?: number;
  onDone?: () => void;
};

export default function IntroSplash({
  oncePerSession = true,
  loadingMs = 1200,
  welcomeMs = 800,
  onDone,
}: Props) {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"loading" | "welcome" | "leaving">(
    "loading",
  );

  useEffect(() => {
    if (oncePerSession) {
      const already = sessionStorage.getItem("intro_seen");
      if (already === "1") {
        setVisible(false);
        onDone?.();
        return;
      }
      sessionStorage.setItem("intro_seen", "1");
    }

    const t1 = window.setTimeout(() => setPhase("welcome"), loadingMs);

    const t2 = window.setTimeout(
      () => setPhase("leaving"),
      loadingMs + welcomeMs,
    );

    const slideMs = 1300;
    const t3 = window.setTimeout(
      () => {
        setVisible(false);
        onDone?.();
      },
      loadingMs + welcomeMs + slideMs,
    );

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [loadingMs, welcomeMs, oncePerSession, onDone]);

  if (!visible) return null;

  return (
    <div className={`intro2 ${phase === "leaving" ? "intro2Leave" : ""}`}>
      <div className="intro2Center">
        {phase === "loading" ? (
          <>
            <div className="intro2Coffee" aria-hidden="true">
              <div className="intro2Steam">
                <span className="intro2SteamLine" />
                <span className="intro2SteamLine" />
                <span className="intro2SteamLine" />
              </div>

              <div className="intro2Cup">
                <div className="intro2CupBody" />
                <div className="intro2CupHandle" />
              </div>
            </div>

            <div className="intro2Line">
              <span className="intro2Text">loading</span>
              <span className="intro2Dots" aria-hidden="true">
                <span className="intro2Dot" />
                <span className="intro2Dot" />
                <span className="intro2Dot" />
              </span>
            </div>
          </>
        ) : (
          <div className="intro2Welcome">welcome in!</div>
        )}
      </div>
    </div>
  );
}
