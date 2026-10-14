import ExperienceGrid from "./ExperienceGrid";
import styles from "./ExperienceSection.module.css";

export default function ExperienceSection() {
  return (
    <section id="experience" className={styles.work} aria-label="Work experience">
      <ExperienceGrid variant="work" />
    </section>
  );
}
