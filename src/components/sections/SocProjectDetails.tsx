import Image from "next/image";
import styles from "./ProjectDetails.module.css";

export default function SocProjectDetails() {
  return (
    <>
      <figure className={styles.photo}>
        <div className={`${styles.photoFrame} ${styles.singlePhotoFrame}`}>
          <Image src="/projects/soc/team.png" alt="Members of the Systems Optimization Club team for the Tesla commute-planning collaboration." width={1200} height={706} sizes="(max-width: 760px) 28vw, (max-width: 1100px) 22vw, 320px" />
        </div>
        <figcaption>The SOC team behind the Tesla commute-planning collaboration.</figcaption>
      </figure>

      <details className={styles.details}>
        <summary>Read project details</summary>
        <div className={styles.body}>
          <section aria-labelledby="soc-context-title">
            <h3 id="soc-context-title">context</h3>
            <div className={styles.panel}>
              <p>Through Cal Poly’s Systems Optimization Club, my team and I collaborated with Tesla stakeholders on a centralized commuting application for Bay Area employees. The project brought together a student development team, designers, and industry stakeholders.</p>
              <p>The problem was fragmented transportation information and pressure on employee parking. The intended experience gave employees one place to compare driving, biking, public transit, and company shuttle options, with parking information available alongside those choices.</p>
            </div>
          </section>

          <section aria-labelledby="soc-role-title">
            <h3 id="soc-role-title">my role</h3>
            <div className={styles.panel}>
              <p>As a <strong>React Native frontend developer and student consultant</strong>, my responsibility was to turn the designs into usable mobile interfaces and build shared foundations that the development team could extend. Over six months, that work covered:</p>
              <ul>
                <li><strong>Centralized theming:</strong> Built shared color, spacing, and typography values using theme objects, React Context, and a custom theme hook.</li>
                <li><strong>Map interface:</strong> Built a full-screen map, connected it to navigation, and added temporary floating controls for incremental development.</li>
                <li><strong>Reusable components:</strong> Implemented transportation icons, mode tabs, search controls, favorite icons, parking warnings, and parking details from Figma designs.</li>
                <li><strong>Search interactions:</strong> Built the expanding destination interface, Home and Work shortcuts, office selection, and alphabetically ordered favorites UI.</li>
                <li><strong>Parking details:</strong> Refined occupancy percentages, spacing, and navigation interactions, with Figma comparisons and iOS simulator checks.</li>
                <li><strong>Appearance preferences:</strong> Implemented infrastructure for light, dark, and system settings, using MMKV for local preference storage.</li>
              </ul>
            </div>
          </section>

          <section aria-labelledby="soc-engineering-title">
            <h3 id="soc-engineering-title">engineering decisions</h3>
            <div className={styles.panel}>
              <h4>A shared theme instead of repeated styles</h4>
              <p>Colors, spacing, and typography were repeated across screens. I researched styling approaches and chose a lightweight theme-object and Context structure that fit the existing app. Components could read from the same values, so a visual change had a shared place to start.</p>
              <p>The work involved gradually replacing duplicated styling while preserving the existing interactions. That mattered in a team project: the frontend needed to stay usable as other developers continued building.</p>

              <h4>Reusable UI with explicit inputs</h4>
              <p>The Figma designs repeated patterns across transportation modes, destinations, and parking. I turned those patterns into components with props for their configuration and actions, giving the team common building blocks for new screens.</p>
              <p>The search and favorites work covered frontend interactions and sorting. Backend persistence for favorites was a separate integration concern. The map controls also began as temporary UI while the associated state logic was still being developed.</p>

              <h4>Clear parking information in the prototype</h4>
              <p>I refined the parking interface and percentage calculations so the values and interactions matched the intended design more closely. This used simple arithmetic and prototype data. The work also involved checking navigation targets and testing the interface in the iOS simulator.</p>
              <p className={styles.note}>The appearance-preference work established infrastructure; adoption across every screen and the final merge state were not independently verified in the supplied report.</p>
            </div>
          </section>

          <section aria-labelledby="soc-architecture-title">
            <h3 id="soc-architecture-title">team architecture</h3>
            <figure className={styles.architecture}>
              <div className={styles.architectureFrame} tabIndex={0} role="group" aria-label="Team architecture image; scroll horizontally on smaller screens">
                <Image src="/projects/soc/architecture.png" alt="Team methodology diagram connecting the React Native mobile UI to a Node.js Express backend, Microsoft SQL Server, Redis, Google Maps, and TripShot." width={1170} height={694} sizes="(max-width: 760px) 620px, 780px" />
              </div>
              <figcaption>The architecture image supplied from the team presentation. It shows the wider system design, including data and API integrations; it is not a verified production-deployment diagram.</figcaption>
            </figure>
            <div className={styles.panel}>
              <p>My work focused on the React Native frontend. The broader team architecture connected that client to Node.js and Express services, Google Maps and TripShot data, and an MSSQL/Redis data layer. Those backend and infrastructure responsibilities belonged to the wider project team.</p>
            </div>
          </section>

          <section aria-labelledby="soc-results-title">
            <h3 id="soc-results-title">results</h3>
            <div className={styles.panel}>
              <p>My team and I developed a centralized commuting platform and prepared it for handoff. The club’s public announcement describes routes, schedules, commute alternatives, favorites, and administrative capabilities, with <strong>future integration into Tesla One</strong> as the continuation path.</p>
              <p>My contribution gave the frontend a shared theme, reusable components, and map, search, and parking interfaces that the team could build on. That made visual consistency and future changes easier to manage through shared code.</p>
              <p>The platform was intended to improve access to commute resources and support alternatives to driving. A production rollout, employee adoption, and measured reductions in parking congestion or commute times were not established in the supplied evidence.</p>
            </div>
          </section>

          <section aria-labelledby="soc-reflection-title">
            <h3 id="soc-reflection-title">what I took away</h3>
            <div className={styles.panel}>
              <p>This project made me think about the people who would build on my code. A theme or component needed to make sense to the next developer as well as the screen I was working on.</p>
              <p>Working with designers, other developers, and Tesla stakeholders taught me how much coordination goes into bringing a mobile application together. I’m proud of the interfaces I built, and of the shared foundation that made the frontend easier for the team to continue developing.</p>
            </div>
          </section>
        </div>
      </details>
    </>
  );
}
