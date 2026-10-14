import WorkCaseStudyNav, { type WorkSection } from "./WorkCaseStudyNav";
import VirgilTechnicalSections, { VirgilNextSteps } from "./VirgilTechnicalSections";
import VirgilScreenshots from "./VirgilScreenshots";
import styles from "./WorkCaseStudy.module.css";
import contentStyles from "./CaseStudyContent.module.css";

const SECTIONS: WorkSection[] = [
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "my-role", label: "My Role" },
  { id: "user-flow", label: "User Flow" },
  { id: "architecture", label: "Architecture" },
  { id: "engineering-decisions", label: "Key Decisions" },
  { id: "dataset-scope", label: "Dataset Scope" },
  { id: "results", label: "Results" },
  { id: "next-steps", label: "Next Steps" },
  { id: "reflection", label: "Reflection" },
];

export default function VirgilCaseStudy() {
  const labelClass = styles.eyebrow + " " + contentStyles.label;

  return (
    <main className={styles.page} data-study="virgil">
      <div className={styles.layout}>
        <WorkCaseStudyNav sections={SECTIONS} backHref="/projects#virgil-mobile-app" backLabel="Back to all projects" navLabel="Virgil case study sections" />
        <div className={styles.content}>
          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <h1>Virgil</h1>
              <p className={styles.headline}>Building a mobile app that brings <em>daily experiences</em> into a <span className={styles.headlineUnderline}>clearer health history</span>.</p>
              <a className={styles.external} href="https://github.com/tomaseuu/virgil-mobile-app" target="_blank" rel="noreferrer">View GitHub repository ↗</a>
            </div>
            <dl className={styles.metadata}>
              <div><dt>Role</dt><dd>Lead Software Developer</dd></div>
              <div><dt>Tools</dt><dd>React Native, Supabase, Flask</dd></div>
              <div><dt>Project</dt><dd>Cal Poly capstone · 2026</dd></div>
              <div><dt>Team</dt><dd>4 members</dd></div>
            </dl>
          </header>

          <VirgilScreenshots screens={["home", "timeline", "checkin"]} caption="Actual mobile screens from the prototype recordings: reviewing progress, returning to past entries, and starting a daily check-in." hero />

          <div className={contentStyles.caseStudy + " " + contentStyles.virgil}>
            <section id="context" className={styles.section} aria-labelledby="context-title">
              <h2 id="context-title">context</h2>
              <div className={styles.panel + " " + contentStyles.contextSummary}>
                <strong>Why an IBD tracking app?</strong>
                <span className={contentStyles.summaryArrow} aria-hidden="true">→</span>
                <p>Bring daily symptoms, medication records, and patient history together so there is <strong>more context to review over time</strong>.</p>
              </div>
              <div className={styles.panel}>
                <span className={labelClass}>The project</span>
                <p>Virgil is a Cal Poly bioinformatics capstone prototype focused on inflammatory bowel disease, or IBD. The earlier system accepted genetics files and health information. My team and I expanded that concept into a mobile experience for recording daily check-ins, reviewing history, managing genetics documents, and viewing saved results.</p>
                <p>I worked directly with physicians to bring their vision for Virgil to life. That collaboration gave me a chance to learn from doctors while building something for people living with IBD.</p>
              </div>
            </section>

            <section id="problem" className={styles.section} aria-labelledby="problem-title">
              <h2 id="problem-title">problem</h2>
              <div className={styles.panel}>
                <span className={labelClass}>Connecting the daily record to the bigger picture</span>
                <p>The team’s clinician discussions identified a gap between appointments: symptoms, medication changes, treatment responses, and how someone felt over several weeks can be difficult to reconstruct later. Virgil’s goal was to collect dated, structured entries that a patient could return to before a visit.</p>
                <p>The application also needed to connect that history with a separate recommendation workflow. The challenge was to make <strong>entering information, reviewing past check-ins, and viewing saved results</strong> feel like parts of the same mobile experience.</p>
              </div>
            </section>

            <section id="my-role" className={styles.section} aria-labelledby="role-title">
              <h2 id="role-title">my role</h2>
              <div className={styles.panel}>
                <span className={labelClass}>Lead Software Developer</span>
                <p>As the lead software developer, my job was to turn the clinical vision into a working mobile experience and connect it to the existing genetics system. That responsibility covered:</p>
                <ul className={contentStyles.roleList}>
                  <li><strong>Mobile development:</strong> Built the navigation, onboarding, home dashboard, daily check-in, and timeline workflows.</li>
                  <li><strong>Accounts and patient records:</strong> Integrated Supabase authentication, session persistence, patient profiles, and saved health data.</li>
                  <li><strong>Backend integration:</strong> Extended the inherited Flask backend with a patient-context adapter and connected storage-backed recommendation runs to the mobile app.</li>
                  <li><strong>AI Insights:</strong> Implemented an optional service that uses saved patient context to explain recorded information and prepare questions for a doctor.</li>
                  <li><strong>Technical handoff:</strong> Documented setup, architecture, app flows, and remaining limitations so future student developers could continue the project.</li>
                </ul>
                <p>My team and I worked across engineering and clinical research, building on the genetics engine and clinical mappings inherited from earlier contributors.</p>
              </div>
            </section>

            <VirgilTechnicalSections />

            <section id="results" className={styles.section} aria-labelledby="results-title">
              <h2 id="results-title">results</h2>
              <div className={styles.panel}>
                <span className={labelClass}>Built for patients, tested by physicians</span>
                <p>I delivered a <strong>mobile prototype with accounts, patient profiles, daily check-ins, a history timeline, document management, and saved-result screens</strong>. The backend integration connected that newer experience to the inherited genetics system, and the optional Insights service added a way to ask questions using saved patient context.</p>
                <p>Those pieces addressed the gap that motivated Virgil: keeping track of what happens between appointments. The prototype gives patients a place to record symptoms and medication use as they happen, with a dated history intended to support conversations with their clinicians. It turns information that could be difficult to remember later into records that can be revisited.</p>
                <p><strong>Physicians tested the prototype.</strong> That brought the work beyond implementation and into the hands of the people whose clinical perspective shaped the project. They had something concrete to try, and the next team has an implemented experience to continue testing and improving.</p>
                <p>My team and I prepared Virgil for continuation, and I wrote the technical handoff covering setup, architecture, workflows, and remaining work. <strong>Deployment is the next step for the new team.</strong> The result so far is a prototype tested by physicians and a documented foundation for future developers; broader patient use is still ahead. I’m proud that the work can continue toward the people it was built for.</p>
              </div>
            </section>

            <VirgilNextSteps />

            <section id="reflection" className={styles.section} aria-labelledby="reflection-title">
              <h2 id="reflection-title">reflection</h2>
              <div className={styles.panel}>
                <span className={labelClass}>Why this project matters to me</span>
                <p>Virgil is my favorite project because it brought together two things I care about: <strong>healthcare and computer science</strong>. I worked with physicians to turn their vision into something people could use, and I learned so much from that experience.</p>
                <p>That collaboration made me care about how information moved through every part of the app. A field in a form could become a saved record, an input to the older system, and something a patient would review later. Connecting those pieces taught me how much thought goes into making one workflow work across different systems.</p>
                <p>Seeing how the work could support people living with IBD made this project mean more to me. I got to connect what I was building with the people it was meant for. That is what made me so passionate about Virgil, and why I want to keep putting time and energy into it.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
