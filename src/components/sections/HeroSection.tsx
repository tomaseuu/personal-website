import styles from "./HeroSection.module.css";
import PageTitle from "@/components/ui/PageTitle";
import Image from "next/image";
import type { CSSProperties } from "react";

const characterGroups = {
  left: [
    { id: "kodama-sitting", src: "/hero/kodama-sitting-watercolor.png", bounds: [142, 161, 927, 1410] },
    { id: "kodama-upside-down", src: "/hero/kodama-upside-down-watercolor.png", bounds: [96, 48, 938, 1460] },
    { id: "kodama-jumping", src: "/hero/kodama-jumping-watercolor.png", bounds: [104, 109, 920, 1429] },
  ],
  right: [
    { id: "kodama", src: "/hero/kodama-watercolor.png", bounds: [278, 244, 783, 1398] },
    { id: "kodama-waving", src: "/hero/kodama-waving-watercolor.png", bounds: [142, 76, 890, 1482] },
    { id: "kodama-peeking", src: "/hero/kodama-peeking-watercolor.png", bounds: [89, 142, 967, 1459] },
  ],
};

function Characters({ side }: { side: keyof typeof characterGroups }) {
  return (
    <div className={styles.characters} aria-hidden="true">
      {characterGroups[side].map((character) => {
        // Normalize the visible artwork, rather than the transparent image canvas.
        const [left, top, right, bottom] = character.bounds;
        const artworkHeight = bottom - top;
        const artworkStyle = {
          "--artwork-height": `${1536 / artworkHeight * 100}%`,
          "--artwork-bottom": `${-(1536 - bottom) / artworkHeight * 100}%`,
          "--artwork-center": `${-(left + right) / 2 / 1024 * 100}%`,
        } as CSSProperties;

        return (
          <span key={character.id} className={styles.character} data-character={character.id} style={artworkStyle}>
            <Image src={character.src} alt="" width={1024} height={1536} sizes="(max-width: 900px) 80px, 100px" />
          </span>
        );
      })}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="home-title">
      <Characters side="left" />
      <div className={styles.copy}>
        <PageTitle id="home-title">thomas le</PageTitle>
        <p className={styles.tagline}>a <em>software engineer</em> and opportunity chaser</p>
        <p className={styles.current}>currently at <span>ventura foods</span></p>
      </div>
      <Characters side="right" />
    </section>
  );
}
