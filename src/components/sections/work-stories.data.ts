type StoryCard = { label: string; title: string; text: string };
type FlowStep = { title: string; detail: string; tool: string };

export type WorkStory = {
  status?: string;
  challengesTitle?: string;
  implementationTitle?: string;
  checksTitle?: string;
  takeawaysTitle?: string;
  flow?: {
    caption: string;
    kind: "sequence" | "inputs";
    steps: FlowStep[];
    output?: { title: string; detail: string };
  };
  context: string[];
  challenges: StoryCard[];
  implementation: StoryCard[];
  engineering?: {
    label: string;
    title: string;
    detail: string;
    parts: { title: string; detail: string }[];
  };
  checks?: StoryCard[];
  takeaways: string[];
};

export const WORK_STORIES: Record<string, WorkStory> = {
  homigo: {
    flow: {
      caption: "From signup to ready for work",
      kind: "sequence",
      steps: [
        { title: "Verify phone", detail: "Phone verification", tool: "Twilio" },
        { title: "Set up services", detail: "20 service categories", tool: "Provider setup" },
        { title: "Define coverage", detail: "ZIP code + travel radius", tool: "Service areas" },
        { title: "Connect payouts", detail: "Payment onboarding", tool: "Stripe" },
      ],
    },
    context: [
      "Homigo connects people with local service providers. My part was helping providers get set up: verify a phone number, choose services, define where they work, and connect payouts.",
      "A signup page sounds pretty simple. This one had a few more moving parts.",
    ],
    challenges: [
      { label: "For the provider", title: "One step at a time.", text: "Phone verification, service choices, coverage, and payment setup all need to feel like one clear flow. Especially on a phone." },
      { label: "Under the hood", title: "A few systems, one signup.", text: "The app connects provider data, communication, and payout onboarding. The job was making those pieces work together while keeping the next step clear." },
    ],
    implementation: [
      { label: "01 / Onboarding", title: "A guided setup flow", text: "I worked on a mobile-first, bilingual onboarding platform with a guided flow through phone verification, service setup, and Stripe payouts. Providers could choose from 20 service categories." },
      { label: "02 / Coverage", title: "Where the work happens", text: "I automated service-area and marketplace coverage mapping using ZIP codes, travel radius, and selected services. Those choices became useful coverage data rather than just fields in a form." },
      { label: "03 / Communication", title: "Keeping providers in the loop", text: "I integrated communication and moderation workflows to support onboarding, verification, and provider-facing updates." },
    ],
    engineering: {
      label: "Engineering overview",
      title: "Provider onboarding",
      detail: "Next.js + TypeScript",
      parts: [
        { title: "Supabase", detail: "Provider data" },
        { title: "Twilio", detail: "Communication" },
        { title: "Stripe", detail: "Payout onboarding" },
      ],
    },
    takeaways: [
      "The interesting part was connecting everything. Forms, service areas, phone verification, and payouts each had their own job, but the provider still needed one clear path through all of it.",
      "That is the kind of software work I like: figuring out the messy parts so someone else has a simpler day.",
    ],
  },
  // Veggie Rescue uses its own evidence-backed sections in VeggieRescueCaseStudy.
  veggie: {
    context: [],
    challenges: [],
    implementation: [],
    takeaways: [],
  },
  // Spread Goodness uses its dedicated, contribution-focused case study.
  spreadgoodness: {
    context: [],
    challenges: [],
    implementation: [],
    takeaways: [],
  },
  "ventura-foods": {
    context: [],
    challenges: [],
    implementation: [],
    takeaways: [],
  },
};
