import Image from "next/image";
import type { WorkSection } from "./WorkCaseStudyNav";
import styles from "./WorkCaseStudy.module.css";
import contentStyles from "./CaseStudyContent.module.css";

export const HOMIGO_SECTIONS: WorkSection[] = [
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "my-role", label: "My Role" },
  { id: "solution", label: "Solution" },
  { id: "engineering-decisions", label: "Engineering Decisions" },
  { id: "reflection", label: "Results & Reflection" },
];

export default function HomigoCaseStudy() {
  const labelClass = `${styles.eyebrow} ${contentStyles.label}`;
  return (
    <div className={`${contentStyles.caseStudy} ${contentStyles.homigo}`}>
      <section id="context" className={styles.section} aria-labelledby="context-title">
        <h2 id="context-title">context</h2>
        <div className={`${styles.panel} ${contentStyles.contextSummary}`}>
          <strong>Why a home services marketplace?</strong>
          <span className={contentStyles.summaryArrow} aria-hidden="true">→</span>
          <p>A home services marketplace where <strong>consumers can request a service</strong> and providers can register their business, services, and coverage area.</p>
        </div>
        <div className={styles.panel}>
          <span className={labelClass}>From initial designs to an MVP</span>
          <p>Homigo was being built to bring both sides of home services together. Consumers would describe the job they needed, share its location, and choose scheduling preferences. Providers would enter their business details, select the services they offered, and define where they could work.</p>
          <p>When I joined as a founding software engineer, the product was still an idea and a set of designs. My team and I turned that direction into a working MVP. I built <strong>onboarding for both consumers and providers</strong>, with responsive English/Spanish interfaces connected to the application’s data and backend services.</p>
        </div>
      </section>

      <section id="problem" className={styles.section} aria-labelledby="challenge-title">
        <h2 id="challenge-title">problem</h2>
        <div className={styles.panel}>
          <span className={labelClass}>Two journeys, one marketplace</span>
          <p>Homeowners needed to describe a job, share its location, choose scheduling options, and submit a request. Providers needed to enter business information, select services, define their coverage area, and complete account setup.</p>
          <p>Both journeys involved <strong>multiple forms, validation, and external services.</strong> I built interfaces that organized those steps for mobile use and connected the information collected in each journey to the backend.</p>
        </div>
      </section>

      <section id="my-role" className={styles.section} aria-labelledby="role-title">
        <h2 id="role-title">my role</h2>
        <div className={styles.panel}>
          <span className={labelClass}>Founding Software Engineer</span>
          <p>I led frontend development for the MVP using React, Next.js, and TypeScript. My role initially focused on the interface, but expanded into <strong>full-stack development and feature integration.</strong></p>
          <p>I built <strong>onboarding for both consumers and providers</strong>, including consumer service-request forms, provider registration, portal UI, navigation, and responsive layouts. I implemented form validation, controlled progression between steps, built English/Spanish interfaces, and connected both journeys to Supabase and backend APIs.</p>
          <p>My full-stack work included <strong>a contact-form API connected to SendGrid</strong>, uploaded-image moderation using Google Cloud Vision, and profanity filtering for user-entered text. I connected user-facing interactions to backend services, extending my responsibility beyond the frontend.</p>
        </div>
      </section>

      <section id="solution" className={styles.section} aria-labelledby="solution-title">
        <h2 id="solution-title">solution</h2>
        <div className={contentStyles.feature}>
          <h3>Consumer onboarding and service requests</h3>
          <div className={styles.panel}>
            <span className={labelClass}>From a ZIP code to a submitted request</span>
            <p>I built the consumer request experience from the initial ZIP-code entry through service selection, job details, location, and scheduling. I organized these inputs into <strong>separate, focused screens</strong>, followed by an account step, submission, and confirmation.</p>
            <p>I implemented validation and controlled navigation between steps so required information was collected before users continued. I also built a dedicated screen for ZIP codes outside the service area, making that limitation visible during the request journey.</p>
            <p>This structure gave homeowners a clear sequence for describing a job. Each screen focused on the information needed at that point, while the confirmation screen marked the end of the submission process.</p>
          </div>
        </div>
        <div className={contentStyles.feature}>
          <h3>Provider onboarding and portal</h3>
          <div className={styles.panel}>
            <span className={labelClass}>Getting a business set up</span>
            <p>I built provider registration, guided business-information forms, service selection, and provider portal UI. The forms collected <strong>what a provider offers and where they work</strong>, using service categories, ZIP codes, and travel radius to describe their coverage.</p>
            <p>I connected the frontend steps to backend APIs for account, verification, and payout services. I built English/Spanish interfaces for the onboarding experience, which included 20 service categories.</p>
            <p>These forms established the provider information a local marketplace needs: the business, the services available, and the area it serves. My work connected that setup process to the provider’s account experience.</p>
          </div>
        </div>
        <div className={contentStyles.feature}>
          <h3>Contact-form email delivery with SendGrid</h3>
          <div className={styles.panel}>
            <span className={labelClass}>From a submitted message to an email</span>
            <p>I implemented the <strong>backend contact-form API and its SendGrid email integration</strong>. Visitors could enter their contact details and message on the website, and my integration connected that submission to email delivery.</p>
            <p>The form sent the submitted information to the backend. The contact-form API processed the request and passed the message to SendGrid for delivery. I built the connection between the user-facing form and the email service, carrying the inquiry through the application beyond the submit button.</p>
            <p>This gave visitors a direct way to ask questions or raise an issue through the website. Their contact information and message provided the context needed for a response, making the contact page a functioning communication channel for the marketplace.</p>
          </div>
        </div>
        <div className={contentStyles.feature}>
          <h3>Uploaded-image moderation</h3>
          <div className={styles.panel}>
            <span className={labelClass}>Screening photos shared through the marketplace</span>
            <p>I implemented <strong>uploaded-image moderation using Google Cloud Vision</strong>. I connected the image-handling workflow to content analysis so the application could identify potentially inappropriate imagery in user uploads.</p>
            <p>Photos are useful in a home-services request: a homeowner can show the condition of a space, an item that needs repair, or the scope of a job. A provider can use that visual context to understand the request. That makes uploaded images part of the interaction between consumers and providers.</p>
            <p>My integration introduced a content-screening step into that workflow. An uploaded image could be analyzed through Google Cloud Vision, and the resulting assessment provided information for moderation. This gave the application a way to identify content concerns as part of handling an upload.</p>
            <p>The goal was to <strong>prevent inappropriate imagery from reaching other users</strong> while retaining the value of job-related photos. For a marketplace connecting people who may not know each other, screening shared content is part of maintaining a professional environment and trust in the service.</p>
          </div>
        </div>
        <div className={contentStyles.feature}>
          <h3>Profanity filtering for user-entered text</h3>
          <div className={styles.panel}>
            <span className={labelClass}>Screening the language users submit</span>
            <p>I also implemented <strong>a profanity filter to screen user-entered text for offensive language</strong>. This addressed the written content users submitted alongside the image-moderation functionality.</p>
            <p>Written information needs to communicate a service need clearly and respectfully. The filter added a check for inappropriate wording, with the goal of keeping offensive language out of the content shared through the marketplace. Together, text filtering and image moderation addressed both forms of user-submitted content.</p>
          </div>
        </div>
        <div className={contentStyles.feature}>
          <h3>Responsive English/Spanish interfaces</h3>
          <div className={styles.panel}>
            <span className={labelClass}>Completing the same tasks across screens</span>
            <p>I built responsive layouts and English/Spanish interfaces across consumer requests and provider onboarding. My work covered the forms, navigation, and page layouts users interacted with while setting up an account or describing a service request.</p>
            <p>These workflows required users to enter several kinds of information. I organized the layouts around those tasks so the steps remained readable and usable on phones, tablets, and desktops.</p>
          </div>
        </div>
      </section>

      <section id="engineering-decisions" className={styles.section} aria-labelledby="engineering-title">
        <h2 id="engineering-title">engineering decisions</h2>
        <div className={styles.panel}>
          <span className={labelClass}>Breaking the request into steps</span>
          <p>I organized the consumer request experience into <strong>focused step components</strong> rather than one large form. That made it easier to manage validation and the transition from one part of the request to the next.</p>
          <ol className={contentStyles.pipeline} aria-label="Consumer service request flow">
            <li>ZIP code</li><li>Service</li><li>Job details</li><li>Place & date</li><li>Account</li><li>Submit</li>
          </ol>
          <p>The same principle guided provider onboarding: collect one set of information at a time, then connect it with the account and service-area data the platform needs.</p>
        </div>
        <div className={styles.panel}>
          <span className={labelClass}>Connecting the interface to services</span>
          <dl className={contentStyles.scoreFactors}>
            <div><dt>Next.js & TypeScript</dt><dd>Frontend application</dd></div>
            <div><dt>Supabase</dt><dd>Application data & authentication</dd></div>
            <div><dt>SendGrid</dt><dd>Contact emails</dd></div>
            <div><dt>Google Cloud Vision</dt><dd>Image moderation</dd></div>
            <div><dt>Twilio & Stripe Connect</dt><dd>Verification & payout services</dd></div>
          </dl>
          <p>I implemented the frontend connections to account, verification, and payout APIs and coordinated backend integration with my team. My work covered how users entered information and moved through the interface; the backend services handled account verification and payment processing.</p>
        </div>
      </section>

      <section id="reflection" className={styles.section} aria-labelledby="reflection-title">
        <h2 id="reflection-title">results & reflection</h2>
        <div className={styles.panel}>
          <span className={labelClass}>A released MVP and its first users</span>
          <p>By May 2026, my team and I had <strong>completed and released the MVP</strong>, with onboarding for both consumers and providers. By the end of my engagement, <strong>25+ users had been onboarded</strong>. The product had moved from initial designs to a live application people were signing up to use.</p>
        </div>
        <div className={styles.panel}>
          <span className={labelClass}>LinkedIn recommendation</span>
          <figure className={contentStyles.screenshot}>
            <Image
              className={contentStyles.recommendationImage}
              src="/work/homigo/linkedin-recommendation.png"
              alt="LinkedIn recommendation for Thomas highlighting frontend development, communication, reliability, and improvements to mobile responsiveness at Homigo."
              width={1548}
              height={566}
              sizes="(max-width: 760px) calc(100vw - 96px), (max-width: 1100px) calc(100vw - 360px), 780px"
            />
          </figure>
        </div>
        <div className={styles.panel}>
          <span className={labelClass}>What I took away</span>
          <p>Homigo gave me a real feel for startup life. Things moved quickly, and I was learning as I built. I joined to focus on frontend, but ended up taking on backend features too. There was a lot to figure out, and seeing the MVP come together made the effort worth it.</p>
          <p>Working closely with the engineer and CEO taught me so much about taking an idea and turning it into a working product. I got more comfortable asking questions, tackling unfamiliar problems, and taking responsibility for what I built. Those six months pushed me, and I’m proud of how much I grew.</p>
        </div>
      </section>
    </div>
  );
}
