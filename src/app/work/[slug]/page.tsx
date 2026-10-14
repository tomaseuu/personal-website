import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackToTop from "@/components/ui/BackToTop";
import ContactReveal from "@/components/sections/ContactReveal";
import WorkCaseStudy from "@/components/sections/WorkCaseStudy";
import { WORK_STUDIES } from "@/components/sections/work-studies.data";
import { EMAIL, SOCIAL_LINKS } from "@/components/ui/site.data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return WORK_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = WORK_STUDIES.find((item) => item.slug === slug);
  return { title: `${study?.company ?? "Work"} | Thomas Le`, description: study?.headline };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const study = WORK_STUDIES.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <>
      <WorkCaseStudy study={study} />
      <ContactReveal email={EMAIL} links={SOCIAL_LINKS} />
      <BackToTop />
    </>
  );
}
