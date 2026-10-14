"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ExperienceGrid from "./ExperienceGrid";
import PageTitle from "@/components/ui/PageTitle";
import { SIDE_QUESTS, type SideQuest, type SideQuestPhoto } from "./side-quests.data";
import { EMAIL, SOCIAL_LINKS } from "@/components/ui/site.data";
import styles from "./AboutPageContent.module.css";

const sections = [
  { id: "experience", label: "experience" },
  { id: "philosophy", label: "philosophy" },
  { id: "side-quests", label: "side quests" },
  { id: "current-thoughts", label: "current thoughts" },
];

function PhotoCarousel({ images, caption, layout = "photo", fit }: { images: NonNullable<SideQuestPhoto["images"]>; caption: string; layout?: SideQuestPhoto["layout"]; fit?: SideQuestPhoto["fit"] }) {
  const [index, setIndex] = useState(0);
  const image = images[index];

  return (
    <figure>
      <div className={styles.questPhoto} data-layout={layout} data-fit={fit}>
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 600px) 85vw, (max-width: 1200px) 35vw, 280px" />
        {images.length > 1 ? (
          <div className={styles.raceControls} role="group" aria-label={`Photo controls: ${caption}`}>
            <button type="button" onClick={() => setIndex((current) => (current + images.length - 1) % images.length)} aria-label={`Previous photo: ${caption}`}>
              <span aria-hidden="true">‹</span>
            </button>
            <span className={styles.photoStatus} aria-live="polite" aria-atomic="true">Photo {index + 1} of {images.length}</span>
            <button type="button" onClick={() => setIndex((current) => (current + 1) % images.length)} aria-label={`Next photo: ${caption}`}>
              <span aria-hidden="true">›</span>
            </button>
          </div>
        ) : null}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function QuestPhoto({ photo }: { photo: SideQuestPhoto }) {
  if (photo.images?.length) {
    return <PhotoCarousel images={photo.images} caption={photo.caption} layout={photo.layout} fit={photo.fit} />;
  }

  const media = (
    <div className={styles.questPhoto} data-layout={photo.layout} data-fit={photo.fit}>
      {photo.src ? (
        <Image src={photo.src} alt={photo.alt ?? photo.caption} fill sizes="(max-width: 600px) 85vw, (max-width: 1200px) 35vw, 280px" />
      ) : (
        <div className={styles.photoPlaceholder}>
          <SideQuestIcon kind="camera" />
          <span>Photo coming soon</span>
        </div>
      )}
      {photo.layout === "video" ? <span className={styles.videoPlay} aria-hidden="true">▶</span> : null}
    </div>
  );

  return photo.href && photo.layout === "video" ? (
    <a className={styles.questMediaLink} href={photo.href} target="_blank" rel="noreferrer">
      <figure>
        {media}
        <figcaption>{photo.caption} <span aria-hidden="true">↗</span></figcaption>
      </figure>
    </a>
  ) : <figure>{media}<figcaption>{photo.caption}</figcaption></figure>;
}

function SideQuestIcon({ kind }: { kind: SideQuest["icon"] }) {
  if (kind === "youtube") {
    return <Image src="/youtube.svg" alt="" width={32} height={32} />;
  }

  return (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === "code" ? (
        <>
          <rect x="3" y="6" width="26" height="20" rx="3" />
          <path d="m13 12-4 4 4 4m6-8 4 4-4 4" />
        </>
      ) : kind === "running" ? (
        <>
          <circle cx="21" cy="5" r="3" />
          <path d="m9 13 5-4 5 3 5 5h5M19 12l-5 8 7 4-1 6M14 20l-5 6H3" />
        </>
      ) : (
        <>
          <path d="M4 10h5l3-4h8l3 4h5v17H4Z" />
          <circle cx="16" cy="18" r="5" />
        </>
      )}
    </svg>
  );
}

export default function AboutPageContent() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const syncActive = () => {
      const currentSection = sections
        .map((section) => ({
          id: section.id,
          top: document.getElementById(section.id)?.getBoundingClientRect().top,
        }))
        .filter((section) => section.top !== undefined && section.top <= 200)
        .sort((a, b) => (b.top ?? 0) - (a.top ?? 0))[0];

      setActiveSection(currentSection?.id ?? sections[0].id);
    };

    syncActive();
    window.addEventListener("scroll", syncActive, { passive: true });
    window.addEventListener("resize", syncActive);
    return () => {
      window.removeEventListener("scroll", syncActive);
      window.removeEventListener("resize", syncActive);
    };
  }, []);

  return (
    <main id="about" className={styles.page}>
      <header className={styles.masthead}>
        <PageTitle>about me</PageTitle>
        <p className={styles.tagline}>a <em>software engineer</em>, always looking for new opportunities</p>
        <p className={styles.welcome}>the person behind the projects</p>
      </header>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <nav aria-label="About sections">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                data-active={activeSection === section.id}
                aria-current={activeSection === section.id ? "location" : undefined}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className={styles.content}>
          <section className={styles.intro} aria-labelledby="intro-title">
            <figure className={styles.portrait} tabIndex={0} aria-label="Thomas graduation portrait">
              <div className={styles.portraitImage}>
                <Image
                  src="/grad.jpg"
                  alt="Thomas graduation portrait"
                  fill
                  priority
                  sizes="(max-width: 760px) 90vw, (max-width: 1100px) 38vw, 500px"
                />
              </div>
              <figcaption className={styles.portraitCaption}>I graduated from Cal Poly SLO!</figcaption>
            </figure>
            <div className={styles.bio}>
              <h2 id="intro-title">Hey, Thomas here!</h2>
              <p>
                I get excited about new opportunities, meeting people, and
                seeing where a random idea takes me. Sometimes that idea becomes
                a whole project... this website is proof lol.
              </p>
              <p>
                I want to put that energy into something that helps people,
                which is why healthcare means so much to me. Getting care can
                already be stressful. If something I build can make that process
                easier for a patient or give someone more time to care for them,
                that is work I would be proud of.
              </p>
              <p>
                I graduated from Cal Poly SLO in June 2026 with a degree in
                Computer Science and a minor in Bioinformatics. Along the way,
                I have built with a startup and nonprofits, worked on
                bioinformatics research, and collaborated with Tesla through a
                student consulting project. Now I am at Ventura Foods. Still
                learning, still looking for the next opportunity!
              </p>
              <div className={styles.chat}>
                <span>Got an idea or an opportunity? Say hi :)</span>
                <a href={SOCIAL_LINKS[1].href} target="_blank" rel="noreferrer" aria-label="Connect with Thomas on LinkedIn">
                  <Image src="/linkedin.svg" alt="" width={22} height={22} />
                </a>
                <a href={`mailto:${EMAIL}`} aria-label="Email Thomas">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          <section id="experience" className={styles.section} aria-labelledby="experience-title">
            <h2 id="experience-title">Experience</h2>
            <ExperienceGrid />
          </section>

          <section id="philosophy" className={styles.section} aria-labelledby="philosophy-title">
            <h2 id="philosophy-title">Philosophy</h2>
            <p className={styles.sectionNote}>A few things I keep coming back to.</p>
            <div className={styles.principles}>
              <article>
                <h3>Take every opportunity. Ignore every fear.</h3>
              </article>
              <article>
                <h3>I don’t need it all figured out. If I’m learning and growing, I’m moving forward.</h3>
              </article>
              <article>
                <h3>Life is more than goals. Appreciate the people, experiences, and little moments along the way.</h3>
              </article>
            </div>
          </section>

          <section id="side-quests" className={styles.section} aria-labelledby="outside-title">
            <h2 id="outside-title">Side quests</h2>
            <p className={styles.sectionNote}>The things that keep me creative, grounded, and curious.</p>
            <div className={styles.quests}>
              {SIDE_QUESTS.map((quest) => (
                <article key={quest.id} className={styles.quest} aria-labelledby={`quest-${quest.id}`}>
                  <header className={styles.questHeader}>
                    <div className={styles.questIdentity}>
                      <span className={styles.questIcon}><SideQuestIcon kind={quest.icon} /></span>
                      <div>
                        <div className={styles.questTitleRow}>
                          <h3 id={`quest-${quest.id}`}>
                            {quest.href ? (
                              <a href={quest.href} target="_blank" rel="noreferrer">
                                {quest.title} <span aria-hidden="true">↗</span>
                              </a>
                            ) : quest.title}
                          </h3>
                          {quest.socialLinks?.length ? (
                            <div className={styles.questSocialLinks}>
                              {quest.socialLinks.map((link) => (
                                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label}>
                                  {link.icon === "linkedin" ? <Image src="/linkedin.svg" alt="" width={20} height={20} /> : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                      <rect x="3" y="3" width="18" height="18" rx="5" />
                                      <circle cx="12" cy="12" r="4" />
                                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                    </svg>
                                  )}
                                </a>
                              ))}
                            </div>
                          ) : null}
                        </div>
                        <p className={styles.questSubtitle}>{quest.subtitle}</p>
                      </div>
                    </div>
                    {quest.period ? <span className={styles.questPeriod}>{quest.period}</span> : null}
                  </header>
                  <p className={styles.questDescription}>{quest.description}</p>
                  {quest.milestones ? (
                    <dl className={styles.questMilestones}>
                      {quest.milestones.map((milestone) => (
                        <div key={milestone.label}>
                          <dt>{milestone.label}</dt>
                          <dd>{milestone.value}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                  {quest.photos.length > 0 ? <div className={styles.questGallery}>
                    {quest.photos.map((photo) => (
                      <QuestPhoto key={photo.caption} photo={photo} />
                    ))}
                  </div> : null}
                </article>
              ))}
            </div>
          </section>

          <section id="current-thoughts" className={styles.section} aria-labelledby="current-thoughts-title">
            <h2 id="current-thoughts-title">Current thoughts</h2>
            <p className={styles.sectionNote}>A reminder to myself, right now.</p>
            <div className={styles.currentThoughts}>
              <p>Sometimes I feel like I’m just floating. Waiting, a little scared of what comes next. When will that full-time job come? When will I move into the apartment I’ve dreamed of? When will I start thriving? When will I feel happy?</p>
              <p>I can’t control when everything falls into place, but I can control how I show up. When my back is against the wall, the odds are against me, and my luck feels like it’s run out, I need to remember my greatest superpower: <strong>I don’t give up.</strong> Knock me down, and I’ll get back up.</p>
              <p>People tell me, “Don’t be too hard on yourself.” I hear them. But wanting more from myself is also what pushes me to keep going. I’m scared that if I get too comfortable, I’ll stop reaching for the life I want.</p>
              <p>Sometimes life doesn’t feel fair, and I feel like I’m not getting anywhere. Maybe this season is teaching me to be patient, to notice the small things, and to be grateful for what I have while I keep working toward what’s next. I’m holding on to the thought that my time will come. I just hope it comes soon.</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
