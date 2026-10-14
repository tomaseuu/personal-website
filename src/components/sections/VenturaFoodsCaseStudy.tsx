import type { WorkSection } from "./WorkCaseStudyNav";
import styles from "./WorkCaseStudy.module.css";
import contentStyles from "./CaseStudyContent.module.css";

export const VENTURA_FOODS_SECTIONS: WorkSection[] = [
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
];

export default function VenturaFoodsCaseStudy() {
  return (
    <div className={`${contentStyles.caseStudy} ${contentStyles.venturaFoods}`}>
      <section id="context" className={styles.section} aria-labelledby="context-title">
        <h2 id="context-title">context</h2>
        <div className={styles.panel}>
          <span className={`${styles.eyebrow} ${contentStyles.label}`}>The company</span>
          <p>Ventura Foods is a <strong>food manufacturer serving restaurants, distributors, and retailers</strong>. Its products include dressings, sauces, mayonnaise, cooking oils, and butter blends. The company also works with customers to develop custom food products and recipes.</p>
          <p>I joined as an IT Intern in September 2026. I’ll share more about my work here soon.</p>
        </div>
      </section>
      <section id="problem" className={styles.section} aria-labelledby="problem-title">
        <h2 id="problem-title">problem</h2>
        <div className={styles.panel}>
          <p>TBD.</p>
        </div>
      </section>
    </div>
  );
}
