"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import styles from "./PageTitle.module.css";

export default function PageTitle({ children, id }: { children: ReactNode; id?: string }) {
  const pathname = usePathname();

  return <h1 key={pathname} id={id} className={styles.title}>{children}</h1>;
}
