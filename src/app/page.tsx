import TopBar from "@/components/ui/TopBar";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ContactReveal from "@/components/sections/ContactReveal";
import { EMAIL, SOCIAL_LINKS } from "@/components/ui/site.data";

export default function Page() {
  return (
    <>
      <TopBar activePage="/" />
      <main>
        <HeroSection />
        <ExperienceSection />
      </main>
      <ContactReveal email={EMAIL} links={SOCIAL_LINKS} />
    </>
  );
}
