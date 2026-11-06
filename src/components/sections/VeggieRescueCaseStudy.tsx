import Image from "next/image";
import type { WorkSection } from "./WorkCaseStudyNav";
import styles from "./WorkCaseStudy.module.css";
import veggieStyles from "./CaseStudyContent.module.css";

export const VEGGIE_RESCUE_SECTIONS: WorkSection[] = [
  { id: "context", label: "Context" },
  { id: "my-role", label: "My Role" },
  { id: "solution", label: "Priority Queue" },
  { id: "engineering-decisions", label: "Decisions" },
  { id: "reflection", label: "What I Learned" },
];

const screenshots = {
  dashboard: { width: 3016, height: 1498, alt: "Veggie Rescue dashboard with six sample recipients, last delivery dates, delivery counts, and pounds received." },
  "staff-access": { width: 3022, height: 1636, alt: "Veggie Rescue staff access page with a password field and submit button." },
  "delivery-queue": { width: 3024, height: 1340, alt: "Delivery queue prototype showing five sample organizations, need scores, locations, and days since their last delivery." },
  recipients: { width: 3024, height: 1304, alt: "Recipient table showing six sample organizations, accepted foods, locations, priorities, and available delivery days." },
};

export function VeggieScreenshot({ image, caption, priority = false }: {
  image: keyof typeof screenshots;
  caption: string;
  priority?: boolean;
}) {
  const screenshot = screenshots[image];
  const src = `/work/veggie-rescue/${image}.png`;
  return (
    <figure className={veggieStyles.screenshot}>
      <div className={veggieStyles.imageFrame}>
        <Image src={src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1100px) calc(100vw - 236px), 1000px" priority={priority} />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function VeggieRescueCaseStudy() {
  return (
    <div className={veggieStyles.caseStudy}>
      <section id="context" className={styles.section} aria-labelledby="context-title">
        <h2 id="context-title">context</h2>
        <div className={`${styles.panel} ${veggieStyles.contextSummary}`}>
          <strong>What were we trying to solve?</strong>
          <span className={veggieStyles.summaryArrow} aria-hidden="true">→</span>
          <p>Help staff use delivery history to <strong>decide who might need food next.</strong></p>
        </div>
        <div className={styles.panel}>
          <span className={`${styles.eyebrow} ${veggieStyles.label}`}>The problem behind the project</span>
          <p>Veggie Rescue collects surplus food and delivers it to nonprofits serving people facing food insecurity. Drivers recorded deliveries through Jotform and Google Sheets, but staff still had to manually compare those records to plan deliveries.</p>
          <p>Our team worked on a dashboard to make that history easier to read. The question I focused on was: <strong>how could we help staff find organizations that might be due for a delivery?</strong></p>
        </div>
      </section>

      <section id="my-role" className={styles.section} aria-labelledby="role-title">
        <h2 id="role-title">my role</h2>
        <div className={styles.panel}>
          <span className={`${styles.eyebrow} ${veggieStyles.label}`}>Tech lead on a six-person team</span>
          <p>My role was mainly <strong>turning stakeholder needs into tasks, proposing ideas, and helping guide the team’s work.</strong> I wrote requirements for the dashboard table, assigned work, and gave feedback on teammates’ pull requests.</p>
          <p>I also contributed frontend improvements, including styling, table search and sorting, responsive layouts, and loading, error, and empty states. Most of my focus was on coordinating the work and deciding what would be useful to staff.</p>
        </div>
      </section>

      <section id="solution" className={styles.section} aria-labelledby="solution-title">
        <h2 id="solution-title">why I proposed a priority queue</h2>
        <div className={styles.panel}>
          <span className={`${styles.eyebrow} ${veggieStyles.label}`}>Give staff a place to start</span>
          <p>A table made the records easier to find, but staff still had to decide where to look first. I proposed a short queue of <strong>up to five organizations that might need a delivery</strong> so they had a starting point for that decision.</p>
          <p>When I discussed it with David, our nonprofit stakeholder, he asked for a way to dismiss suggestions. That mattered because delivery history cannot tell us everything about an organization’s storage, schedule, or food needs. I translated that feedback into requirements so staff would stay in control.</p>
        </div>
        <div className={veggieStyles.feature}>
          <div className={styles.panel}>
            <span className={`${styles.eyebrow} ${veggieStyles.label}`}>How I helped guide it</span>
            <p>Teammates implemented the scoring algorithm and queue interface. I gave feedback that location should not affect the need score, and asked that the queue use our shared table component for consistency. My contribution was <strong>the idea, requirements, and implementation feedback.</strong></p>
          </div>
          <VeggieScreenshot image="delivery-queue" caption="Team-built queue prototype with sample data. In the reviewed version, this interface was not connected to the scoring API." />
        </div>
      </section>

      <section id="engineering-decisions" className={styles.section} aria-labelledby="engineering-title">
        <h2 id="engineering-title">why this approach made sense</h2>
        <div className={styles.panel}>
          <span className={`${styles.eyebrow} ${veggieStyles.label}`}>Working with the existing workflow</span>
          <p>The biggest reason the approach made sense to me was that <strong>Veggie Rescue already used Google Sheets.</strong> Our team built around those records so the dashboard could fit into the existing workflow. Teammates implemented the Sheets integration.</p>
          <ol className={veggieStyles.pipeline} aria-label="Delivery data flow">
            <li>Jotform</li><li>Google Sheets</li><li>Express API</li><li>Next.js dashboard</li>
          </ol>
          <p>The team used Next.js and React for the interactive pages, TypeScript to help keep data and component inputs consistent, and SCSS for styling. Node.js and Express handled the backend API and data processing. I wasn’t solely responsible for choosing the stack; those are the reasons I see it as a practical fit for this dashboard.</p>
        </div>
        <div className={styles.panel}>
          <span className={`${styles.eyebrow} ${veggieStyles.label}`}>Keeping the recommendation useful</span>
          <p>I wanted the queue to help staff identify who might need food. Location still matters when planning a route, but I felt it should be separate from the need score. The recommendation was a starting point for staff to assess using what they knew about each organization.</p>
        </div>
      </section>

      <section id="reflection" className={styles.section} aria-labelledby="reflection-title">
        <h2 id="reflection-title">what I learned</h2>
        <div className={styles.panel}>
          <span className={`${styles.eyebrow} ${veggieStyles.label}`}>Making an idea clear enough to build</span>
          <p>My biggest takeaway was that being a tech lead meant helping the team understand <strong>what to build and why it mattered.</strong> The queue was a good example: I proposed the idea, listened to feedback, and helped turn it into work teammates could implement.</p>
          <p>My involvement ended before the later next steps. I can speak to the planning, feedback, and frontend work I contributed during my time on the project.</p>
        </div>
        <p className={veggieStyles.scopeNote}>Screenshots show sample data from the team’s dashboard and queue prototype.</p>
      </section>
    </div>
  );
}
