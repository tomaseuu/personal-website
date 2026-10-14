import type { Metadata } from "next";
import TopBar from "@/components/ui/TopBar";
import ContactReveal from "@/components/sections/ContactReveal";
import AboutPageContent from "@/components/sections/AboutPageContent";
import { EMAIL, SOCIAL_LINKS } from "@/components/ui/site.data";

export const metadata: Metadata = {
  title: "About | Thomas Le",
  description: "A little about Thomas Le: software engineering, bioinformatics, creative projects, and life outside of code.",
};

export default function AboutPage() {
  return (
    <>
      <TopBar activePage="/about" />
      <AboutPageContent />
      <ContactReveal email={EMAIL} links={SOCIAL_LINKS} />
    </>
  );
}
