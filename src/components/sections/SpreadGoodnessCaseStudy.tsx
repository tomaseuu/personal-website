import type { WorkSection } from "./WorkCaseStudyNav";
import styles from "./WorkCaseStudy.module.css";
import contentStyles from "./CaseStudyContent.module.css";

export const SPREAD_GOODNESS_SECTIONS: WorkSection[] = [
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "my-role", label: "My Role" },
  { id: "solution", label: "Solution" },
  { id: "engineering-decisions", label: "Engineering Decisions" },
  { id: "reflection", label: "Results & Reflection" },
];

export default function SpreadGoodnessCaseStudy() {
  const labelClass = `${styles.eyebrow} ${contentStyles.label}`;

  return (
    <div className={`${contentStyles.caseStudy} ${contentStyles.spreadGoodness}`}>
      <section id="context" className={styles.section} aria-labelledby="context-title">
        <h2 id="context-title">context</h2>
        <div className={`${styles.panel} ${contentStyles.contextSummary}`}>
          <strong>Why a classroom kindness platform?</strong>
          <span className={contentStyles.summaryArrow} aria-hidden="true">→</span>
          <p>Give students a place to <strong>practice kindness, share their experiences, and encourage each other</strong> as part of everyday school life.</p>
        </div>
        <div className={styles.panel}>
          <span className={labelClass}>The platform</span>
          <p>Spread Goodness Challenge is an educational web application where students participate in kindness challenges and reflect on their experiences. The wider product includes classroom tools for teachers and administrative workflows for managing the platform.</p>
          <p>I joined an existing React and Firebase application as a software engineering intern. I built an administrator account-creation interface, refined student-facing challenge actions, and reviewed how the analytics dashboard retrieved and organized its data.</p>
        </div>
      </section>

      <section id="problem" className={styles.section} aria-labelledby="challenge-title">
        <h2 id="challenge-title">problem</h2>
        <div className={styles.panel}>
          <span className={labelClass}>Clear interactions for different users</span>
          <p>The platform had different permissions for students and other users. Some student actions were intentionally restricted, but their buttons appeared faded before any interaction. I needed to make those controls <strong>readable and consistent while preserving the existing restrictions</strong>, including the actions shown after accepting a challenge.</p>
          <p>The separate admin portal also needed an interface for creating platform-admin accounts. The authentication and backend foundation already existed; the dashboard needed input fields, a submission flow, and clear feedback for the person creating the account.</p>
        </div>
      </section>

      <section id="my-role" className={styles.section} aria-labelledby="role-title">
        <h2 id="role-title">my role</h2>
        <div className={styles.panel}>
          <span className={labelClass}>Software Engineering Intern</span>
          <p>I built the <strong>React admin-creation form</strong>, including required-field checks, submission handling, a pending state, success and error messages, and clearing the fields after a successful request. I connected the interface to the team’s existing Firebase account-creation utilities.</p>
          <p>I updated restricted challenge-button styling across student interactions and the congratulations screen, then corrected a remaining desktop-specific hover inconsistency. I manually tested the challenge-acceptance flow with a student account and checked the desktop and mobile layouts.</p>
          <p>I also reviewed Firestore analytics queries and recommended changes to counting queries and the organization of data fetching and calculations. My team and I worked within the existing application, with teammates responsible for the admin authentication, provisioning backend, and later integration of the portal into the shared pilot branch.</p>
        </div>
      </section>

      <section id="solution" className={styles.section} aria-labelledby="solution-title">
        <h2 id="solution-title">solution</h2>
        <div className={contentStyles.feature}>
          <h3>Readable student challenge actions</h3>
          <div className={styles.panel}>
            <span className={labelClass}>Keeping the appearance consistent</span>
            <p>I changed restricted challenge actions to retain their <strong>full-color appearance by default</strong> and apply fading on hover where appropriate. I kept the existing lock cues and permission behavior, so the visual update preserved what students were allowed to do.</p>
            <p>The change also covered the restricted Nominate action in the congratulations screen after challenge acceptance. I checked that part of the journey because the same action needed a consistent presentation across the initial screen and the completion state.</p>
            <p>I followed the initial update with a correction to the remaining desktop Start action’s opacity rule. That brought the desktop treatment into line with the intended hover behavior and addressed an inconsistency across responsive versions of the interface.</p>
          </div>
        </div>
        <div className={contentStyles.feature}>
          <h3>Platform-admin account creation</h3>
          <div className={styles.panel}>
            <span className={labelClass}>From account details to submission feedback</span>
            <p>I built a form with <strong>first name, last name, email, and password</strong> fields for an authorized platform administrator to create another admin account. The interface checked that required values were present before sending the request through the existing authenticated helper.</p>
            <p>While the request was pending, I disabled the creation button to prevent another submission. On success, the interface displayed confirmation and cleared the fields. On failure, it displayed the error and allowed the operator to try again.</p>
            <p>These states made the operation understandable to the person using it: they could see when the request was in progress, whether it succeeded, and when something needed correcting. My form provided an application interface for a task that the earlier documentation described as manual setup across Firebase tools.</p>
          </div>
        </div>
        <div className={contentStyles.feature}>
          <h3>Firestore analytics review</h3>
          <div className={styles.panel}>
            <span className={labelClass}>Examining how metrics were retrieved</span>
            <p>I reviewed the analytics dashboard’s <strong>count calculations, date-range logic, and Firestore document retrieval</strong>. I examined where aggregate queries could provide a count without retrieving every full document, and recommended separating data fetching and calculations from the rendering code.</p>
            <p>The purpose was to make the query structure easier to maintain and identify opportunities to avoid unnecessary reads. This work was a technical review and set of recommendations; implementing and measuring those changes remains further work.</p>
          </div>
        </div>
      </section>

      <section id="engineering-decisions" className={styles.section} aria-labelledby="engineering-title">
        <h2 id="engineering-title">engineering decisions</h2>
        <div className={styles.panel}>
          <span className={labelClass}>Following the full student interaction</span>
          <p>I checked the challenge-acceptance journey with a student account, including the confirmation screen and its restricted actions. I checked both desktop and mobile layouts, because the same interaction appeared in different responsive branches.</p>
          <p>That work required looking beyond the first button I changed. I had to follow where the action appeared, preserve its permission behavior, and correct the remaining desktop styling so the update was consistent across the flow.</p>
        </div>
        <div className={styles.panel}>
          <span className={labelClass}>Making an API request clear in the interface</span>
          <p>I organized the admin form around the request lifecycle: <strong>collect the details, check required fields, show progress, and display the outcome.</strong> Each state gave the operator feedback about what the application was doing.</p>
          <ol className={contentStyles.pipeline} aria-label="Admin-creation interface flow">
            <li>Account details</li><li>Required-field check</li><li>Pending request</li><li>Success or error</li>
          </ol>
          <p>I implemented the form and its submission behavior against the existing backend. My team and I coordinated the handoff between the interface I built and the account-creation operation maintained by the backend engineer.</p>
        </div>
      </section>

      <section id="reflection" className={styles.section} aria-labelledby="reflection-title">
        <h2 id="reflection-title">results & reflection</h2>
        <div className={styles.panel}>
          <span className={labelClass}>What I delivered</span>
          <p>I delivered a <strong>complete admin-creation interface with input checks and submission feedback</strong>. My form implementation was later integrated into the shared pilot branch, giving platform administrators an interface for entering account details and seeing the outcome of a creation request.</p>
          <p>I also delivered the restricted challenge-action updates and the desktop follow-up correction. I manually checked the student acceptance journey, including the congratulations screen. The changes made the presentation of restricted actions more consistent while preserving the existing permissions.</p>
          <p>These were practical improvements to two parts of the product: the controls students encountered during challenges and the account-creation workflow used by platform administrators. My work made the interface communicate those actions and their states more clearly.</p>
        </div>
        <div className={styles.panel}>
          <span className={labelClass}>Why I loved this internship</span>
          <p>I loved working on a product built for students. The goal was to make kindness something they could practice and share during their school day, and that gave the work a purpose I cared about. I wanted the experience to feel clear and welcoming for the people using it.</p>
          <p>What excited me was seeing how software could fit into education. The platform created space for students to recognize each other and reflect on what they did. I’m proud that my work became part of a product with that goal, and I want to keep building things that make a positive difference for students.</p>
        </div>
        <div className={styles.panel}>
          <span className={labelClass}>What I took away</span>
          <p>Working closely with the engineers and being part of the team meetings was one of my favorite parts of the internship. I learned a lot from discussing the work, asking questions, and figuring out how my changes fit into an application that other people were building too.</p>
          <p>I learned to follow a change through the whole experience. A button update meant checking permissions, different screen sizes, and what happened after a student accepted a challenge. Building the admin form meant thinking through what someone should see while a request was running or when it failed. Those details made me more thoughtful about what I build, especially when the people using it are students and educators.</p>
        </div>
      </section>
    </div>
  );
}
