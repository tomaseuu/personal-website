"use client";

import styles from "./TopBar.module.css";

export default function TopBar({ onMenu }: { onMenu: () => void }) {
  return (
    <header className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.brand}>TL</div>

        <button onClick={onMenu} className={styles.menuBtn}>
          Menu
        </button>
      </div>
    </header>
  );
}
