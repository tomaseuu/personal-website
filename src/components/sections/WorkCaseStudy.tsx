import Image from "next/image";
import Link from "next/link";
import PageTitle from "@/components/ui/PageTitle";
import WorkCaseStudyNav, { type WorkSection } from "./WorkCaseStudyNav";
import VeggieRescueCaseStudy, { VEGGIE_RESCUE_SECTIONS, VeggieScreenshot } from "./VeggieRescueCaseStudy";
import HomigoCaseStudy, { HOMIGO_SECTIONS } from "./HomigoCaseStudy";
import SpreadGoodnessCaseStudy, { SPREAD_GOODNESS_SECTIONS } from "./SpreadGoodnessCaseStudy";
import VenturaFoodsCaseStudy, { VENTURA_FOODS_SECTIONS } from "./VenturaFoodsCaseStudy";
import { COMPANY_LOGOS } from "./company-logos.data";
import { getRelatedStudies, type WorkStudy } from "./work-studies.data";
import { WORK_STORIES, type WorkStory } from "./work-stories.data";
import styles from "./WorkCaseStudy.module.css";
import contentStyles from "./CaseStudyContent.module.css";

function Logo({ id, company }: { id: string; company: string }) {
  const logo = COMPANY_LOGOS[id];
  return <Image src={logo.src} alt={`${company} logo`} width={logo.width} height={logo.height} sizes="(max-width: 640px) 60vw, 320px" />;
}

function ProjectVisual({ study }: { study: WorkStudy }) {
  if (study.id === "ventura-foods") {
    return (
      <figure className={contentStyles.screenshot}>
        <div className={contentStyles.brandVisual}>
          <Image src="/company-logos/ventura-foods.png" alt="Ventura Foods logo" width={6051} height={834} sizes="(max-width: 760px) 60vw, 640px" priority />
        </div>
        <figcaption>More to come.</figcaption>
      </figure>
    );
  }
  if (study.id === "veggie") {
    return <VeggieScreenshot image="dashboard" caption="The delivery dashboard, shown with sample records." priority />;
  }
  if (study.id === "homigo") {
    return (
      <figure className={contentStyles.screenshot}>
        <div className={contentStyles.imageFrame}>
          <Image src="/work/homigo/public-homepage.png" alt="Homigo's current public homepage, with homeowner quote and provider registration entry points." width={1440} height={900} sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1100px) calc(100vw - 236px), 1000px" priority />
        </div>
        <figcaption>Homigo’s public website in October 2026. The current site may differ from the May MVP.</figcaption>
      </figure>
    );
  }
  if (study.id === "spreadgoodness") {
    return (
      <figure className={contentStyles.screenshot}>
        <div className={contentStyles.imageFrame}>
          <Image src="/work/spread-goodness/public-homepage.png" alt="Spread Goodness Challenge public website with its colorful heart artwork and classroom kindness mission." width={1440} height={900} sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1100px) calc(100vw - 236px), 1000px" priority />
        </div>
        <figcaption>Spread Goodness Challenge’s public website in October 2026, introducing the classroom platform.</figcaption>
      </figure>
    );
  }
  return (
    <figure className={styles.projectVisual} aria-label={`${study.company} project visual placeholder`}>
      <div className={styles.visualPlaceholder}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="6" y="8" width="36" height="32" rx="4" />
          <circle cx="17" cy="18" r="3" />
          <path d="m7 33 11-10 9 8 6-6 8 8" />
        </svg>
        <span>Project visual coming soon</span>
      </div>
      <figcaption>{study.focus}</figcaption>
    </figure>
  );
}

function EngineeringOverview({ story }: { story: WorkStory }) {
  return (
    <section id="engineering-decisions" className={styles.section} aria-labelledby="engineering-title">
      <h2 id="engineering-title">Engineering Decisions</h2>
      {story.flow ? (
        <figure className={styles.flowFigure}>
          <figcaption>{story.flow.caption}</figcaption>
          <ol className={styles.flow} data-kind={story.flow.kind}>
            {story.flow.steps.map((step, index) => (
              <li key={step.title}>
                <span className={styles.stepNumber}>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
                <span className={styles.stepTool}>{step.tool}</span>
              </li>
            ))}
          </ol>
          {story.flow.output ? <div className={styles.flowOutput}>
            <span aria-hidden="true">↓</span>
            <div className={styles.appNode}><strong>{story.flow.output.title}</strong><span>{story.flow.output.detail}</span></div>
          </div> : null}
        </figure>
      ) : null}
      {story.engineering ? <div className={`${styles.panel} ${styles.integration}`}>
        <span className={styles.eyebrow}>{story.engineering.label}</span>
        <div className={styles.appNode}>
          <strong>{story.engineering.title}</strong>
          <span>{story.engineering.detail}</span>
        </div>
        <div className={styles.connections} aria-hidden="true"><span>↓</span><span>↓</span><span>↓</span></div>
        <div className={styles.services}>
          {story.engineering.parts.map((part) => <div key={part.title}><strong>{part.title}</strong><span>{part.detail}</span></div>)}
        </div>
      </div> : null}
    </section>
  );
}

function Story({ story }: { story: WorkStory }) {
  return (
    <>
      <section id="context" className={styles.section} aria-labelledby="context-title">
        <h2 id="context-title">Context</h2>
        <div className={styles.panel}>
          {story.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      {story.challenges.length > 0 ? <section id="problem" className={styles.section} aria-labelledby="challenge-title">
        <h2 id="challenge-title">{story.challengesTitle ?? "Problem"}</h2>
        <div className={styles.twoColumns}>
          {story.challenges.map((card) => (
            <article key={card.label} className={styles.panel}>
              <span className={styles.eyebrow}>{card.label}</span>
              <h3>{card.title}</h3><p>{card.text}</p>
            </article>
          ))}
        </div>
      </section> : null}

      {story.implementation.length > 0 ? <section id="solution" className={styles.section} aria-labelledby="implementation-title">
        <h2 id="implementation-title">{story.implementationTitle ?? "Solution"}</h2>
        <div className={styles.implementation}>
          {story.implementation.map((card) => (
            <article key={card.label} className={styles.panel}>
              <span className={styles.eyebrow}>{card.label}</span>
              <h3>{card.title}</h3><p>{card.text}</p>
            </article>
          ))}
        </div>
      </section> : null}

      {story.flow || story.engineering ? <EngineeringOverview story={story} /> : null}

      {story.checks?.length ? <section id="validation" className={styles.section} aria-labelledby="checks-title">
        <h2 id="checks-title">{story.checksTitle ?? "Validation"}</h2>
        <div className={styles.twoColumns}>
          {story.checks.map((card) => (
            <article key={card.label} className={styles.panel}>
              <span className={styles.eyebrow}>{card.label}</span>
              <h3>{card.title}</h3><p>{card.text}</p>
            </article>
          ))}
        </div>
      </section> : null}

      {story.takeaways.length > 0 ? <section id="reflection" className={styles.section} aria-labelledby="takeaways-title">
        <h2 id="takeaways-title">{story.takeawaysTitle ?? "Reflection"}</h2>
        <div className={styles.panel}>
          {story.takeaways.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section> : null}
    </>
  );
}

export default function WorkCaseStudy({ study }: { study: WorkStudy }) {
  const related = getRelatedStudies(study.id);
  const story = WORK_STORIES[study.id];
  const sections: WorkSection[] = study.id === "veggie" ? VEGGIE_RESCUE_SECTIONS : study.id === "homigo" ? HOMIGO_SECTIONS : study.id === "spreadgoodness" ? SPREAD_GOODNESS_SECTIONS : study.id === "ventura-foods" ? VENTURA_FOODS_SECTIONS : [
    { id: "context", label: "Context" },
    ...(story.challenges.length ? [{ id: "problem", label: "Problem" }] : []),
    ...(story.implementation.length ? [{ id: "solution", label: "Solution" }] : []),
    ...(story.flow || story.engineering ? [{ id: "engineering-decisions", label: "Engineering Decisions" }] : []),
    ...(story.checks?.length ? [{ id: "validation", label: "Validation" }] : []),
    ...(story.takeaways.length ? [{ id: "reflection", label: "Reflection" }] : []),
  ];

  return (
    <main id="case-study-top" className={styles.page} data-study={study.id}>
      <div className={styles.layout}>
        <WorkCaseStudyNav sections={sections} />
        <div className={styles.content}>
          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <PageTitle>{study.company.toLowerCase()}</PageTitle>
              {story.status ? <p className={styles.status}>{story.status}</p> : null}
              <p className={styles.headline}>{study.id === "veggie" ? (
                <>Developing a dashboard that enables staff to<br className={styles.headlineBreak} /> <em>effortlessly</em> <span className={styles.headlineUnderline}>track deliveries</span> and plan food distribution.</>
              ) : study.id === "homigo" ? (
                <>Building a home services marketplace with<br className={styles.headlineBreak} /> <em>clear</em> <span className={styles.headlineUnderline}>onboarding</span> for consumers and providers.</>
              ) : study.id === "spreadgoodness" ? (
                <>Improving a classroom web app with<br className={styles.headlineBreak} /> <em>clearer</em> <span className={styles.headlineUnderline}>student interactions</span> and admin tools.</>
              ) : study.headline}</p>
              <a className={styles.external} href={study.href} target="_blank" rel="noreferrer">visit {study.company.toLowerCase()} <span aria-hidden="true">↗</span></a>
            </div>
            <dl className={styles.metadata}>
              <div><dt>Role</dt><dd>{study.role}</dd></div>
              <div><dt>Tools</dt><dd>{study.id === "veggie" ? "Next.js, TypeScript, Google Sheets API" : study.id === "homigo" ? "Next.js, TypeScript, Supabase" : study.id === "spreadgoodness" ? "React, JavaScript, Firebase" : study.id === "ventura-foods" ? "TBD" : study.tech.length ? study.tech.join(", ") : "To be confirmed"}</dd></div>
              <div><dt>Duration</dt><dd>{study.duration ?? study.dates}</dd></div>
              <div><dt>{study.teamSize ? "Team" : "Scope"}</dt><dd>{study.teamSize ? `${study.teamSize} members` : study.focus}</dd></div>
            </dl>
          </header>

          <ProjectVisual study={study} />
          {study.id === "veggie" ? <VeggieRescueCaseStudy /> : study.id === "homigo" ? <HomigoCaseStudy /> : study.id === "spreadgoodness" ? <SpreadGoodnessCaseStudy /> : study.id === "ventura-foods" ? <VenturaFoodsCaseStudy /> : <Story story={story} />}

          <section className={styles.keepReading} aria-labelledby="keep-reading-title">
            <h2 id="keep-reading-title">keep reading...</h2>
            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <Link key={item.id} href={`/work/${item.slug}`} className={styles.relatedCard}>
                  <div className={styles.relatedImage}><Logo id={item.id} company={item.company} /></div>
                  <h3>{item.company} <span aria-hidden="true">↗</span></h3>
                  <p>{item.headline}</p>
                  <span className={styles.relatedYear}>{item.role} · {item.dates.match(/\b\d{4}\b/)?.[0]}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
