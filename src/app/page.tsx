"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import SectionRail from "@/components/ui/SectionRail";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import IntroSplash from "@/components/IntroSplash";
import AboutSection from "@/components/sections/AboutSection";
import HobbiesSection from "@/components/sections/HobbiesSection";
import ContactReveal from "@/components/sections/ContactReveal";

export default function Page() {
  const [ready, setReady] = useState(false);

  return (
    <main id="top">
      {!ready && (
        <IntroSplash
          loadingMs={2200}
          welcomeMs={1400}
          onDone={() => setReady(true)}
        />
      )}

      {ready && (
        <>
          <SectionRail />
          <HeroSection />

          <Section id="about" title="About" subtitle="A little context.">
            <AboutSection />
          </Section>

          <Section
            id="experience"
            title="Experience"
            subtitle="Scroll for More and Click to Expand"
          >
            <ExperienceSection />
          </Section>

          <Section
            id="projects"
            title="Projects"
            subtitle={
              "Use the arrows to browse. Click a project to view its GitHub or live site."
            }
            tone="tint"
          >
            <ProjectsSection />
          </Section>

          <Section
            id="skills"
            title="Skills"
            subtitle="The skills I have been cooking with"
            tone="tint"
          >
            <SkillsSection />
          </Section>

          <Section
            id="hobbies"
            title="Hobbies"
            subtitle="Postcards about my passions! Here are things I enjoy besides
            Computer Science. "
            tone="tint"
          >
            <HobbiesSection />
          </Section>

          <div id="connect" style={{ height: 1 }} />
          <ContactReveal
            email="lethomas998@gmail.com"
            links={[
              { label: "GitHub", href: "https://github.com/tomaseuu" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/thomasle998/",
              },
            ]}
          />
        </>
      )}
    </main>
  );
}
