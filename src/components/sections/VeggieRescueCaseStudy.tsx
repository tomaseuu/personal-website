import Image from "next/image";
import type { WorkSection } from "./WorkCaseStudyNav";
import styles from "./WorkCaseStudy.module.css";
import veggieStyles from "./CaseStudyContent.module.css";

export const VEGGIE_RESCUE_SECTIONS: WorkSection[] = [
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "my-role", label: "My Role" },
  { id: "solution", label: "Solution" },
  { id: "engineering-decisions", label: "Engineering Decisions" },
  { id: "results", label: "Results & Next Steps" },
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

const scoreFactors = [
  { label: "Days since last delivery", weight: 35 },
  { label: "Recipient priority", weight: 25 },
  { label: "Pounds received this month", weight: 20 },
  { label: "Deliveries this month", weight: 15 },
  { label: "Delivery frequency", weight: 5 },
];

export default function VeggieRescueCaseStudy() {
  return (
    <div className={veggieStyles.caseStudy}>
      <section id="context" className={styles.section} aria-labelledby="context-title">
        <h2 id="context-title">context</h2>
        <div className={`${styles.panel} ${veggieStyles.contextSummary}`}>
          <strong>Why a dashboard?</strong>
          <span className={veggieStyles.summaryArrow} aria-hidden="true">→</span>
          <p>Bring delivery records into one place so staff can <strong>see who has received food</strong> and plan what comes next.</p>
        </div>
        <div className={styles.panel}>
          <span className={`${styles.eyebrow} ${veggieStyles.label}`}>The organization</span>
          <p>Veggie Rescue collects surplus food from local farms and businesses and delivers it to nonprofits serving people facing food insecurity. They coordinate with approximately <strong>55 farms and suppliers and 70 nonprofit organizations.</strong></p>
          <p>My team and I developed a web dashboard connected to their existing Google Sheets records. I implemented the dashboard, Sheets integration, and delivery recommendation features, and coordinated requirements and development.</p>
        </div>
      </section>

      <section id="problem" className={styles.section} aria-labelledby="challenge-title">
        <h2 id="challenge-title">problem</h2>
        <div className={styles.panel}>
          <span className={`${styles.eyebrow} ${veggieStyles.label}`}>Planning the next delivery</span>
          <p>Drivers recorded deliveries through Jotform and Google Sheets, but staff still had to <strong>manually organize records and compare what each nonprofit needed.</strong> Seeing who had been waiting, how much food they had received, and how often they received deliveries took extra work.</p>
          <p>Delivery history was only part of the decision. Staff also had to account for storage, food types, schedules, and location. The dashboard needed to make the records easier to use while leaving those decisions with the people who know the community.</p>
        </div>
      </section>

      <section id="my-role" className={styles.section} aria-labelledby="role-title">
        <h2 id="role-title">my role</h2>
        <div className={styles.panel}>
          <span className={`${styles.eyebrow} ${veggieStyles.label}`}>Software engineering & team coordination</span>
          <p>I improved the dashboard and staff access page, adding <strong>search, column sorting, mobile table scrolling, and loading, error, and empty states.</strong> If a refresh fails while saved records are available, the interface can keep showing those records with a warning.</p>
          <p>After speaking with David, the nonprofit stakeholder, I proposed a queue of five organizations that might need a delivery. He asked for a way to dismiss suggestions. I translated that feedback into frontend requirements and coordinated the work.</p>
          <p>I built the scoring algorithm, connected the dashboard to Google Sheets, developed the queue interface, and refactored the table components.</p>
        </div>
      </section>

      <section id="solution" className={styles.section} aria-labelledby="solution-title">
        <h2 id="solution-title">solution</h2>
        <div className={veggieStyles.feature}>
          <h3>Searchable delivery and recipient records</h3>
          <div className={styles.panel}>
            <span className={`${styles.eyebrow} ${veggieStyles.label}`}>Find and compare</span>
            <p>The dashboard brings together last delivery dates, delivery counts, pounds received, and priority. Staff can <strong>search for an organization or sort a column</strong> to compare records. Recipient details include accepted foods, location, and available delivery days. Tables scroll horizontally on smaller screens.</p>
          </div>
          <VeggieScreenshot image="recipients" caption="Recipient information and delivery availability, shown with sample data." />
        </div>
        <div className={veggieStyles.feature}>
          <h3>Staff access</h3>
          <div className={styles.panel}>
            <span className={`${styles.eyebrow} ${veggieStyles.label}`}>A simple entry point</span>
            <p>Staff enter an access code to open the dashboard. I worked on the access page styling and the interface states that explain when records are loading, unavailable, or unable to refresh.</p>
          </div>
          <VeggieScreenshot image="staff-access" caption="The staff access page." />
        </div>
        <div className={veggieStyles.feature}>
          <h3>Delivery recommendations</h3>
          <div className={styles.panel}>
            <span className={`${styles.eyebrow} ${veggieStyles.label}`}>A starting point for staff</span>
            <p>The backend uses a weighted need score to suggest up to five nonprofits. <strong>Staff make the final delivery decision.</strong> The queue interface shown below is a prototype with sample organizations; connecting it to the scoring API is still a next step.</p>
          </div>
          <VeggieScreenshot image="delivery-queue" caption="Delivery queue prototype with five sample organizations and illustrative need scores." />
        </div>
      </section>

      <section id="engineering-decisions" className={styles.section} aria-labelledby="engineering-title">
        <h2 id="engineering-title">engineering decisions</h2>
        <div className={styles.panel}>
          <span className={`${styles.eyebrow} ${veggieStyles.label}`}>Working with the existing workflow</span>
          <p>Google Sheets was already part of the daily routine. I implemented the Sheets integration through an Express API that reads and organizes records for the Next.js dashboard, so drivers can <strong>keep using Jotform and Sheets</strong> while staff get a clearer view of the information.</p>
          <ol className={veggieStyles.pipeline} aria-label="Delivery data flow">
            <li>Jotform</li><li>Google Sheets</li><li>Express API</li><li>Next.js dashboard</li>
          </ol>
          <p>I added search, sorting, and status messages to the initial table, then refactored the table components to bring those behaviors together. I also implemented the recommendation backend and queue interface; connecting the queue to live recommendations is still a next step.</p>
        </div>
        <div className={styles.panel}>
          <span className={`${styles.eyebrow} ${veggieStyles.label}`}>How the need score is weighted</span>
          <dl className={veggieStyles.scoreFactors}>
            {scoreFactors.map(factor => <div key={factor.label}><dt>{factor.label}</dt><dd>{factor.weight}%</dd></div>)}
          </dl>
          <p>The algorithm uses the median and standard deviation to compare values, treating missing fields as neutral. These weights describe the calculation, not measured impact. Capacity, food types, opening hours, and routes still need staff judgment.</p>
        </div>
      </section>

      <section id="results" className={styles.section} aria-labelledby="results-title">
        <h2 id="results-title">results & next steps</h2>
        <div className={styles.panel}>
          <span className={`${styles.eyebrow} ${veggieStyles.label}`}>What I built</span>
          <p>I built a <strong>dashboard connected to Google Sheets, searchable and sortable delivery records, and the delivery recommendation backend and queue interface.</strong> My team and I turned the staff’s needs into a tool they could use alongside their existing Jotform and Sheets workflow.</p>
          <p>Staff could look up a nonprofit, compare delivery history, and see how much food it had received in one place. The dashboard gave them a clearer view of the records they were already collecting, without changing how drivers logged deliveries.</p>
        </div>
        <div className={styles.panel}>
          <span className={`${styles.eyebrow} ${veggieStyles.label}`}>Tested by staff and still in use</span>
          <p><strong>Veggie Rescue staff tested the dashboard and are still using it today.</strong> For the employee coordinating deliveries, this meant having a place to search and compare records instead of manually organizing spreadsheet rows to find the same information. They could see who had received food and who had been waiting, then use their knowledge of each organization to plan the next delivery.</p>
          <p>That is the result I’m most proud of. I built something for the people doing this work every day, and they continue to use it. Seeing the dashboard become part of their routine made the project feel worthwhile.</p>
        </div>
        <div className={styles.panel}>
          <span className={`${styles.eyebrow} ${veggieStyles.label}`}>Leaving something the next developers can build on</span>
          <p>My team and I left <strong>notes on the MVP and the work still ahead</strong> for the next developers. I want them to be able to pick up the project, understand what has been built, and keep improving it as the staff’s needs change.</p>
          <p>Next steps include connecting the recommendation queue to live data and expanding reporting. My team and I explored flexible date ranges, donation trends, funder reports, and a report archive. I hope the next developers use the notes and the existing dashboard as a starting point to take those ideas further.</p>
        </div>
        <p className={veggieStyles.scopeNote}>Screenshots show sample data. Staff testing and continued use confirmed in October 2026; technical details reflect the April 28, 2026 code review.</p>
      </section>
    </div>
  );
}
