import Image from "next/image";
import Link from "next/link";
import { FEATURED_EXPERIENCES } from "./experience.data";
import { COMPANY_LOGOS } from "./company-logos.data";
import { WORK_STUDIES } from "./work-studies.data";
import styles from "./ExperienceGrid.module.css";

export default function ExperienceGrid({ variant = "about" }: { variant?: "about" | "work" }) {
  return (
    <div className={styles.grid} data-layout={variant}>
      {FEATURED_EXPERIENCES.map((experience) => {
        const startYear = experience.dates.match(/\b\d{4}\b/)?.[0];
        const dateLabel = startYear
          ? `${startYear}${experience.dates.includes("Present") ? "–Present" : ""}`
          : "";
        const logo = COMPANY_LOGOS[experience.id];
        const study = WORK_STUDIES.find((item) => item.id === experience.id);
        const content = (
          <>
            <div className={styles.companyTile} data-company={experience.id}>
              <div className={styles.logo}>
                <Image
                  src={logo.src}
                  alt=""
                  width={logo.width}
                  height={logo.height}
                  sizes="(max-width: 640px) 80vw, 360px"
                />
              </div>
            </div>
            <div className={variant === "work" ? styles.details : undefined}>
              <h3 id={`${variant}-${experience.id}-role`}>{experience.role}</h3>
              <p id={`${variant}-${experience.id}-company`}>{experience.company}{dateLabel ? ` · ${dateLabel}` : ""}</p>
            </div>
          </>
        );

        return (
          <article
            key={experience.id}
            className={styles.card}
            aria-labelledby={`${variant}-${experience.id}-role ${variant}-${experience.id}-company`}
          >
            {variant === "work" && study ? (
              <Link href={`/work/${study.slug}`} className={styles.workLink} aria-labelledby={`${variant}-${experience.id}-role ${variant}-${experience.id}-company`}>
                {content}
              </Link>
            ) : content}
          </article>
        );
      })}
    </div>
  );
}
