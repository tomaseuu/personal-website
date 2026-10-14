import type { Metadata } from "next";
import TopBar from "@/components/ui/TopBar";
import ContactReveal from "@/components/sections/ContactReveal";
import ProjectsPageContent from "@/components/sections/ProjectsPageContent";
import { EMAIL, SOCIAL_LINKS } from "@/components/ui/site.data";

export const metadata: Metadata = {
  title: "Projects | Thomas Le",
  description: "Things Thomas Le has built: healthcare tools, hackathon projects, games, and a few experiments along the way.",
};

export default function ProjectsPage() {
  return (
    <>
      <TopBar activePage="/projects" />
      <ProjectsPageContent />
      <ContactReveal email={EMAIL} links={SOCIAL_LINKS} />
    </>
  );
}
