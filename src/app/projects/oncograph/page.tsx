import type { Metadata } from "next";
import OncoGraphCaseStudy from "@/components/sections/OncoGraphCaseStudy";
import ContactReveal from "@/components/sections/ContactReveal";
import BackToTop from "@/components/ui/BackToTop";
import { EMAIL, SOCIAL_LINKS } from "@/components/ui/site.data";

export const metadata: Metadata = {
  title: "OncoGraph | Thomas Le",
  description: "How I grew a bioinformatics class project into a visual gene-network analysis app with Python, FastAPI, graph algorithms, and exploratory machine learning.",
};

export default function OncoGraphPage() {
  return <><OncoGraphCaseStudy /><ContactReveal email={EMAIL} links={SOCIAL_LINKS} /><BackToTop /></>;
}
