"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import IntroSplash from "@/components/IntroSplash";
import AboutSection from "@/components/sections/AboutSection";
import ContactReveal from "@/components/sections/ContactReveal";
import SkillsSection from "@/components/sections/SkillsSection";
import SideRails from "@/components/ui/SideRails";

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
          <SideRails
            email="lethomas998@gmail.com"
            socialLinks={[
              {
                label: "GitHub",
                href: "https://github.com/tomaseuu",
                iconSrc: "/github.svg",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/thomasle998/",
                iconSrc: "/linkedin.svg",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@tomaseuu",
                iconSrc: "/youtube.svg",
              },
            ]}
          />
          <HeroSection />

          <Section
            id="about"
            number="01"
            title="About"
            subtitle="A little context."
          >
            <AboutSection />
          </Section>

          <Section
            id="experience"
            number="02"
            title="Experience"
            subtitle="Scroll for More and Click to Expand"
          >
            <ExperienceSection />
          </Section>

          <Section
            id="projects"
            number="03"
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
            number="04"
            title="Skills"
          >
            <SkillsSection />
          </Section>

          <ContactReveal
            id="connect"
            email="lethomas998@gmail.com"
            links={[
              { label: "GitHub", href: "https://github.com/tomaseuu" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/thomasle998/",
              },
              { label: "YouTube", href: "https://www.youtube.com/@tomaseuu" },
            ]}
          />
        </>
      )}
    </main>
  );
}
