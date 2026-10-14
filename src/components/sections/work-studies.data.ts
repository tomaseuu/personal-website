import { EXPERIENCES, FEATURED_EXPERIENCES } from "./experience.data";

export type WorkStudy = {
  id: string;
  slug: string;
  company: string;
  role: string;
  dates: string;
  duration?: string;
  teamSize?: number;
  tech: string[];
  href: string;
  headline: string;
  focus: string;
  summary: string;
  contributions: string[];
};

const studyDetails: Record<string, Pick<WorkStudy, "slug" | "headline" | "focus" | "href" | "duration" | "teamSize">> = {
  "ventura-foods": {
    slug: "ventura-foods",
    duration: "Ongoing",
    headline: "Will share more soon.",
    focus: "TBD",
    href: "https://www.venturafoods.com/",
  },
  veggie: {
    slug: "veggie-rescue",
    duration: "6 months",
    teamSize: 6,
    headline: "Developing a dashboard that enables staff to effortlessly track deliveries and plan food distribution.",
    focus: "Delivery dashboard & recommendations",
    href: "https://veggierescue.org/",
  },
  homigo: {
    slug: "homigo",
    duration: "6 months",
    headline: "Building a home services marketplace with clear onboarding for consumers and providers.",
    focus: "Consumer and Provider Onboarding",
    href: "https://homigoinc.com/",
  },
  spreadgoodness: {
    slug: "spread-goodness",
    duration: "6 months",
    headline: "Improving a classroom web app with clearer student interactions and admin tools.",
    focus: "Student interactions and admin tools",
    href: "https://www.spreadgoodness.love/",
  },
};

export const WORK_STUDIES: WorkStudy[] = FEATURED_EXPERIENCES.map((featured) => {
  const experience = EXPERIENCES.find((item) => item.id === featured.id);
  return {
    ...featured,
    ...studyDetails[featured.id],
    tech: experience?.tech ?? [],
    summary: experience?.summary ?? "I joined Ventura Foods as an IT Intern in September 2026. This is my current role, and I will share more from this chapter as it unfolds.",
    contributions: experience?.highlights ?? [],
  };
});

export function getRelatedStudies(currentId: string) {
  // Keep recommendations stable while reading, and always exclude the current page.
  const others = WORK_STUDIES.filter((study) => study.id !== currentId);
  const start = WORK_STUDIES.findIndex((study) => study.id === currentId);
  return start < 0 ? others.slice(0, 2) : [
    WORK_STUDIES[(start + 1) % WORK_STUDIES.length],
    WORK_STUDIES[(start + 2) % WORK_STUDIES.length],
  ];
}
