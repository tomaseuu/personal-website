import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./ProjectDetails.module.css";

export default function HeritageTreeProjectDetails({ preview }: { preview: ReactNode }) {
  return (
    <div className={styles.heritage}>
      <figure className={styles.photo}>
        {preview}
        <figcaption>The foundation’s public website, followed by the inventory application’s dashboard and tree-health form.</figcaption>
      </figure>

      <details className={styles.details}>
        <summary>Read project details</summary>
        <div className={styles.body}>
          <section aria-labelledby="heritage-context-title">
            <h3 id="heritage-context-title">context</h3>
            <div className={styles.panel}>
              <div className={styles.organization}>
                <Image src="/projects/heritage-trees/foundation-logo.png" alt="Central Coast Heritage Tree Foundation logo" width={512} height={512} />
                <p>The Central Coast Heritage Tree Foundation works to preserve and restore heritage oaks around Templeton. Its volunteer inventory work gives the project a concrete purpose: recording observations about trees that the community wants to care for.</p>
              </div>
              <p>Through Hack4Impact Cal Poly, my team and I extended an existing application with tree-entry interfaces, inventory views, geographic exploration, and volunteer announcements. The documented project team included 14 students across development, design, and project leadership.</p>
              <p>My main engineering story was connecting announcements all the way through: selecting an audience, saving a message, retrieving it, and opening its details in the application.</p>
            </div>
          </section>

          <section aria-labelledby="heritage-role-title">
            <h3 id="heritage-role-title">my role</h3>
            <div className={styles.panel}>
              <p>As a <strong>full stack developer</strong>, my responsibility covered early tree interfaces and several iterations of the announcement workflow:</p>
              <ul>
                <li><strong>Tree-entry prototype:</strong> Built form controls, React state, photo selection, and a submitted-data view.</li>
                <li><strong>Inventory interface:</strong> Implemented the Figma-based table layout, styling, pagination, and inventory navigation.</li>
                <li><strong>Announcement persistence:</strong> Connected the composer to a Next.js POST endpoint and updated the MongoDB announcement schema.</li>
                <li><strong>Database-backed inbox:</strong> Replaced demonstration rows with stored messages, sender and subject details, message previews, and a dynamic count.</li>
                <li><strong>Recipient selection:</strong> Implemented directory-based checkboxes, all-user and administrator shortcuts, and submission of selected recipient email arrays.</li>
                <li><strong>Interface tests:</strong> Updated announcement tests alongside the recipient-selection changes.</li>
              </ul>
              <p className={styles.note}>The complete tree-storage pipeline, map, authentication, and later persistent read/deletion behavior were wider team contributions. The recipient UI used an existing user-directory endpoint.</p>
            </div>
          </section>

          <section aria-labelledby="heritage-announcements-title">
            <h3 id="heritage-announcements-title">the announcement workflow</h3>
            <div className={styles.panel}>
              <h4>Choose the audience before sending</h4>
              <p>I replaced manually typed recipients with a selectable list from the application’s user directory. Administrators could choose individuals, select all users, or select administrators. The group shortcut normalized role values so capitalization did not change who was included.</p>
              <p>The composer collected a subject and message, then submitted the selected email addresses as recipients. Those addresses identified who the in-app announcement was intended for; this was an application inbox rather than an email-delivery integration.</p>
              <figure className={styles.workflow}>
                <ol className={styles.flow} aria-label="Announcement data flow">
                  <li><strong>Select recipients</strong><p>Directory checkboxes and group shortcuts</p></li>
                  <li><strong>Submit to API</strong><p>Sender, recipients, subject, and message</p></li>
                  <li><strong>Save in MongoDB</strong><p>A stored announcement document</p></li>
                  <li><strong>Retrieve in inbox</strong><p>Recipient view and message details</p></li>
                </ol>
                <figcaption>The frontend, API, and database connection behind the announcement feature.</figcaption>
              </figure>
              <h4>Bring stored messages back into the interface</h4>
              <p>I connected message retrieval to the inbox and replaced hardcoded content with the stored records. Opening a message displayed that announcement’s details, and the interface calculated its count from the retrieved data.</p>
              <p>The inbox filtered messages in the browser using the signed-in person’s email. That describes the implemented display behavior; server-side recipient authorization is a separate concern.</p>
            </div>
          </section>

          <section aria-labelledby="heritage-engineering-title">
            <h3 id="heritage-engineering-title">engineering decisions</h3>
            <div className={styles.panel}>
              <h4>Build the workflow in separate iterations</h4>
              <p>The first message table used demonstration data for a presentation. Later changes added announcement persistence, retrieval, and directory-based recipients. Each iteration connected another part of the feature instead of treating a finished-looking table as the finished system.</p>
              <p>That progression is what I value most about this work: taking a frontend interaction and carrying it through the API and database, then returning the saved information to the person using the app.</p>
              <h4>Keep targeted announcements focused</h4>
              <p>The three recipient options covered broadcasts, administrator updates, and selected volunteers without introducing a full chat platform or custom-group system. The directory control made the available recipients visible and removed the need to type their addresses into the form.</p>
              <h4>Next.js routes and a document model</h4>
              <p>The Next.js application kept React pages and API routes in the same project. I connected the interface to those routes and used the announcement schema to carry sender, recipients, subject, and content into MongoDB.</p>
              <p>An announcement naturally groups related information into one document, including recipient and read-status arrays. MongoDB and Mongoose fit that structure while allowing the models to evolve with the application’s requirements.</p>
              <p>The broader platform also used Clerk for identity, S3 for files, and Leaflet with OpenStreetMap for geographic views. Those services explain the application’s setting; the announcement integration and earlier tree interfaces were my contribution.</p>
            </div>
          </section>

          <section aria-labelledby="heritage-results-title">
            <h3 id="heritage-results-title">results</h3>
            <div className={styles.panel}>
              <p>I delivered <strong>merged announcement creation, stored-message retrieval, and selectable recipients</strong>, alongside the earlier tree-entry and inventory interfaces. The announcement feature progressed from demonstration content to a database-backed workflow.</p>
              <p>For administrators, that meant choosing the intended audience from the directory and submitting a stored update. For volunteers, it meant an inbox view for announcements addressed to them. For the development team, the merged work provided a foundation for later message-state and interface improvements.</p>
              <p>My team and I contributed to a platform that brings tree information and volunteer communication together. The foundation now links to the hosted inventory application from its public website. The public sign-in page was reachable in October 2026; authenticated use and adoption figures were not verified here.</p>
            </div>
          </section>

          <section aria-labelledby="heritage-reflection-title">
            <h3 id="heritage-reflection-title">what I took away</h3>
            <div className={styles.panel}>
              <p>This project gave me experience following a feature through the full stack. A form needed somewhere to save its data, and the inbox needed to show the saved message back to the right person. Getting those pieces connected was the part I’m proudest of.</p>
              <p>Building through issues and pull-request reviews also taught me to keep the next iteration in mind. My team and I were developing for a nonprofit, and the work needed to be understandable enough for other developers to review and continue. Seeing the software connected to local conservation work made that responsibility meaningful to me.</p>
            </div>
          </section>
        </div>
      </details>
    </div>
  );
}
