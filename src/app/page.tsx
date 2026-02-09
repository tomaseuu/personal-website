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
  return (
    <main id="top">
      <IntroSplash loadingMs={2200} welcomeMs={1400} />
      {/* hero */}
      <SectionRail />
      <HeroSection />

      <Section id="about" title="About" subtitle="A little context.">
        <AboutSection />
      </Section>

      {/* experience */}
      <Section
        id="experience"
        title="Experience"
        subtitle="Floating cards — click to expand."
      >
        <ExperienceSection />
      </Section>

      {/* projects */}
      <Section
        id="projects"
        title="Projects"
        subtitle="Case studies — click to expand."
        tone="tint"
      >
        <ProjectsSection />
      </Section>

      {/* skills */}
      <Section
        id="skills"
        title="Skills"
        subtitle="A calm toolbox — what I ship with."
        tone="tint"
      >
        <SkillsSection />
      </Section>

      {/* hobbies */}
      <Section
        id="hobbies"
        title="Hobbies"
        subtitle="Postcards from my life lately."
        tone="tint"
      >
        <HobbiesSection />
      </Section>

      <div id="connect" style={{ height: 1 }} />
      <ContactReveal
        email="thomasle@example.com"
        links={[
          { label: "GitHub", href: "https://github.com/yourname" },
          { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
          { label: "Resume", href: "/resume.pdf" },
        ]}
      />
    </main>
  );
}
