import type { Metadata } from "next";
import VirgilCaseStudy from "@/components/sections/VirgilCaseStudy";
import ContactReveal from "@/components/sections/ContactReveal";
import BackToTop from "@/components/ui/BackToTop";
import { EMAIL, SOCIAL_LINKS } from "@/components/ui/site.data";

export const metadata: Metadata = {
  title: "Virgil | Thomas Le",
  description: "My senior-project mobile app for IBD symptom tracking, patient history, and exploratory AI insights.",
};

export default function VirgilPage() {
  return (
    <>
      <VirgilCaseStudy />
      <ContactReveal email={EMAIL} links={SOCIAL_LINKS} />
      <BackToTop />
    </>
  );
}
