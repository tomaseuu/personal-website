import { VirgilArchitecture, VirgilRuleScope, VirgilUserFlow } from "./VirgilDiagrams";
import VirgilScreenshots from "./VirgilScreenshots";
import styles from "./WorkCaseStudy.module.css";
import contentStyles from "./CaseStudyContent.module.css";
import technicalStyles from "./VirgilDiagrams.module.css";

const labelClass = styles.eyebrow + " " + contentStyles.label;

export default function VirgilTechnicalSections() {
  return (
    <>
      <section id="user-flow" className={styles.section} aria-labelledby="user-flow-title">
        <h2 id="user-flow-title">user flow</h2>
        <div className={styles.panel}>
          <span className={labelClass}>From opening the app to reviewing a history</span>
          <p>I built the navigation around a simple question: <strong>what does this person need to do next?</strong> The opening screen restores the session, sends signed-out users through onboarding, and checks whether a signed-in user has a patient profile. A valid login alone is not enough to start saving health records.</p>
          <VirgilUserFlow />
        </div>
        <div className={contentStyles.feature}>
          <h3>A check-in becomes a dated record</h3>
          <div className={styles.panel}>
            <p>I built the check-in flow around wellness and stress scales, symptom selections, severity, medication use, and optional notes. The clinician discussions called for structured answers that the system could use directly, while notes left room for details the selections did not capture.</p>
            <p>Saving creates a main check-in row, then related symptom and medication rows. I connected those records to the timeline so a patient could review earlier entries, and to the home screen for basic summaries. <strong>The same entry has a life beyond the form.</strong></p>
            <p>The current saves are separate operations, so a later failure can leave an incomplete entry. The form also requires a symptom selection; supporting a symptom-free day is an important product decision for the next iteration.</p>
          </div>
          <VirgilScreenshots screens={["checkin", "medications", "notes"]} caption="Three scroll positions from the recorded check-in form: wellness and symptoms, medication tracking, then stress and optional notes." />
        </div>
        <div className={contentStyles.feature}>
          <h3>A genetics run has its own prerequisites</h3>
          <div className={styles.panel}>
            <p>I connected document upload and active-file selection to the recommendation workflow. The app checks for a patient profile, a selected or latest check-in, and an active genetics file marked ready. Missing inputs appear as blockers before a run is requested.</p>
            <p>With a backend configured, the mobile request identifies the profile, document, storage path, and optionally a selected check-in. The Flask backend checks the record relationships, retrieves the file, adapts the patient context, applies the inherited genetics and medication rules, and saves a result for the app to display.</p>
            <p><strong>Saving a check-in does not automatically generate a recommendation.</strong> I changed the mobile flow to save the entry and show pending output while keeping generation in the separate backend workflow.</p>
          </div>
          <VirgilScreenshots screens={["documents"]} caption="Document management in the recorded prototype. This frame shows the option to mark a genetics file active, with no active file selected yet." />
        </div>
      </section>

      <section id="architecture" className={styles.section} aria-labelledby="architecture-title">
        <h2 id="architecture-title">architecture</h2>
        <div className={styles.panel}>
          <span className={labelClass}>Connecting the new experience to existing work</span>
          <p>The engineering challenge was bringing a newer patient app together with an inherited genetics system. I integrated <strong>a shared Supabase data layer</strong> and extended the backend connection so the two generations could work with the same patient context.</p>
          <VirgilArchitecture />
        </div>
        <div className={styles.panel}>
          <span className={labelClass}>The adapter between two data models</span>
          <p>The older engine expected patient information in its own format. I extended the backend with an adapter that translated the newer shared records into that format, rather than rebuilding the original genetics engine.</p>
          <p>That let the mobile app focus on collecting and presenting information while reusing the project’s existing Python processing. The integration still needed agreement on <strong>identifiers, field meanings, and result structure</strong>. A shared database does not make those differences disappear.</p>
          <p>The legacy web upload remains a separate path: it sends an upload to Flask and displays returned results. That ordinary upload does not, by itself, establish that a result was saved into a mobile patient’s history.</p>
        </div>
        <div className={contentStyles.feature}>
          <h3>The existing web workflow</h3>
          <VirgilScreenshots screens={["upload", "webMedications", "consent", "results", "treatment"]} kind="web" caption="Actual browser frames from the local prototype recording. The inherited web experience collects context and an upload, presents consent, and displays the genetics-processing output." />
        </div>
      </section>

      <section id="engineering-decisions" className={styles.section} aria-labelledby="engineering-title">
        <h2 id="engineering-title">engineering decisions</h2>
        <div className={contentStyles.feature}>
          <h3>Why this stack fit Virgil</h3>
          <div className={styles.panel}>
            <span className={labelClass}>React Native, Expo, and TypeScript</span>
            <p>Virgil needed a phone experience that someone could return to for short, regular check-ins. <strong>React Native gave me a shared mobile interface for the iOS and Android goal</strong>, and Expo provided the development environment and device-file tools for document uploads.</p>
            <p>I used Expo Router to organize onboarding, the main tabs, profile setup, and recommendation screens as routes. That made the navigation structure visible in the code: a future student could find the screen they needed to change without first tracing a custom navigation system.</p>
            <p>TypeScript was useful at the boundaries between screens and services. A check-in, a genetics-run request, and an Insights response each need a clear shape. Types make missing or mismatched fields easier to catch during development, although they cannot prove that a backend response is correct at runtime.</p>
            <p>What mattered to me was connecting the experience all the way through: the fields a patient enters, the records I save, and the information I bring back onto the screen.</p>
            <p className={technicalStyles.sources}><a href="https://docs.expo.dev/router/introduction/" target="_blank" rel="noreferrer">Expo Router documentation ↗</a></p>
          </div>
        </div>
        <div className={contentStyles.feature}>
          <h3>Why PostgreSQL through Supabase</h3>
          <div className={styles.panel}>
            <span className={labelClass}>The data is connected, not isolated</span>
            <p>A patient profile has many check-ins. Each check-in has symptom and medication records, and saved recommendations need to connect back to patient context. <strong>A relational model fits that structure</strong>: the records can stay separate while being connected through identifiers.</p>
            <p>Supabase combined PostgreSQL with account handling and file storage. I integrated those pieces so the app could restore a session, resolve the patient profile, save entries, and manage genetics documents through the same shared platform.</p>
            <p>A document database such as Firestore or MongoDB could also support this product. For Virgil, the useful tradeoff was having explicit relationships between records that multiple screens and the inherited backend needed to understand. A document model would still need a deliberate strategy for references, embedded data, and keeping repeated information consistent.</p>
            <div className={technicalStyles.tableWrap}>
              <table className={technicalStyles.table}>
                <caption className={styles.eyebrow}>How I organized the shared data</caption>
                <thead><tr><th scope="col">Information</th><th scope="col">Place in the workflow</th></tr></thead>
                <tbody>
                  <tr><td>Account → patient profile</td><td>The Auth user is resolved to a separate profile record.</td></tr>
                  <tr><td>Check-ins → symptoms and medications</td><td>Dated entries connect to their individual selections.</td></tr>
                  <tr><td>Document metadata → file Storage</td><td>The database describes the document; Storage holds the file.</td></tr>
                  <tr><td>Saved recommendations</td><td>The mobile app reads output made available by the backend.</td></tr>
                </tbody>
              </table>
            </div>
            <p className={technicalStyles.sources}><a href="https://supabase.com/docs/guides/database/joins-and-nesting" target="_blank" rel="noreferrer">Supabase relational-query documentation ↗</a></p>
          </div>
        </div>
        <div className={contentStyles.feature}>
          <h3>Why keeping two repositories made sense</h3>
          <div className={styles.panel}>
            <span className={labelClass}>A new mobile client alongside an inherited system</span>
            <p>The mobile repository contains the React Native app. The other repository contains the older React web interface and Python/Flask backend. Keeping that split preserved the existing genetics work while I built the patient-facing mobile experience.</p>
            <p>The useful boundary was responsibility: <strong>the mobile app collects and displays information; the backend processes the genetics workflow</strong>. A mobile screen change could stay with the mobile code, and a backend change could stay with the inherited processing code. The split also gives future developers a clearer starting point for either part.</p>
            <p>Two repositories come with coordination work. Changes to patient fields or API responses need to be reflected on both sides, and the complete workflow needs integration testing across them. I prepared setup, architecture, flow, and limitation documents so that handoff included the connection between the repositories.</p>
            <p>A monorepo could organize the same system. The benefit here came from keeping the existing system usable and defining how the new app connected to it.</p>
          </div>
        </div>
        <div className={contentStyles.feature}>
          <h3>Moving generation out of the check-in screen</h3>
          <div className={styles.panel}>
            <span className={labelClass}>A concrete iteration in the mobile workflow</span>
            <p>Earlier mobile code scored symptoms locally and saved a recommendation. I removed that execution path and connected the app to the separate genetics-backed workflow. The updated check-in saves patient data; the recommendation screen checks readiness and displays saved backend output.</p>
            <div className={technicalStyles.beforeAfter} aria-label="Before and after recommendation generation">
              <div><h4>Earlier prototype</h4><ol className={technicalStyles.steps}><li>Enter symptoms</li><li>Run local symptom scoring</li><li>Save a local recommendation</li></ol></div>
              <div><h4>Updated workflow</h4><ol className={technicalStyles.steps}><li>Save structured patient records</li><li>Prepare check-in + active genetics file</li><li>Request the separate backend run</li><li>Read the saved result in the app</li></ol></div>
            </div>
            <p className={contentStyles.scopeNote}>The updated flow depends on a reachable, configured backend. The original genetics engine was inherited from earlier contributors.</p>
          </div>
        </div>
        <div className={contentStyles.feature}>
          <h3>Patient identity needed an explicit connection</h3>
          <div className={styles.panel}>
            <p>The login account ID and patient-profile ID are different. I resolved the Auth user to its profile before saving health records. In this implementation, the check-in’s user reference contains the <strong>profile ID</strong>.</p>
            <p>That detail mattered across the app and backend. A login could succeed while the profile was still missing, and a run needed the selected check-in to match the intended patient. I built the workflow around those relationships and the states where the required information was not available.</p>
          </div>
        </div>
        <div className={contentStyles.feature}>
          <h3>Keeping AI behind a separate service</h3>
          <div className={styles.panel}>
            <span className={labelClass}>Saved context first, then a question</span>
            <p>I implemented an optional Node service for Insights. The app loads the patient profile, the ten newest check-ins, the latest saved recommendation, and active-genetics-file status, then sends that context with the question.</p>
            <p>The service calls OpenAI and requests a structured response for the interface. Keeping that call on the server keeps the model credential outside the phone app and separates the AI request from the screen rendering. This service lives in the mobile repository; a separate service does not mean a third repository.</p>
            <p>I wanted the assistant to work from what the patient had actually recorded. The prototype instructions discourage diagnosis and invented treatment plans, and the interface handles missing service configuration with fallback messaging. This uses saved context; it does not train a model or retrieve uploaded document contents into the prompt.</p>
          </div>
          <VirgilScreenshots screens={["insights", "response"]} caption="The recorded Insights conversation and a later scroll position showing the response and suggested follow-up questions." />
        </div>
      </section>

      <section id="dataset-scope" className={styles.section} aria-labelledby="dataset-scope-title">
        <h2 id="dataset-scope-title">dataset scope</h2>
        <div className={styles.panel}>
          <span className={labelClass}>The scope of the inherited rule data</span>
          <p>The inspected backend used a limited curated dataset. These counts describe the rules I was integrating with, rather than a dataset I independently created.</p>
          <VirgilRuleScope />
        </div>
      </section>
    </>
  );
}

export function VirgilNextSteps() {
  return (
    <section id="next-steps" className={styles.section} aria-labelledby="next-title">
      <h2 id="next-title">next steps</h2>
      <div className={styles.panel}>
        <span className={labelClass}>Making the connected workflow more dependable</span>
        <p>The next iteration needs to correct medication interpretation: the backend currently ignores the daily taken flag and can treat unchecked medications as already taken. Check-in saving also needs an all-or-nothing operation or recovery path so a failed related save does not leave an incomplete record.</p>
        <p>Backend requests need caller authentication and ownership checks. The inspected recommendation trigger does not send a caller token, and the Flask routes do not verify one. Matching a document and check-in to the same profile is useful validation, but it does not establish that the caller owns that profile.</p>
        <p>Finally, I want the full upload → active file → check-in → backend run → saved-result journey to be easy for the next developer to demonstrate. The schema, access policies, summary calculations, and service setup need to be documented and verified alongside that flow.</p>
      </div>
    </section>
  );
}
