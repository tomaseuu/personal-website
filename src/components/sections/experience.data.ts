export type Experience = {
  id: string;
  company: string;
  companyHref: string;
  role: string;
  dates: string;
  location?: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const EXPERIENCES: Experience[] = [
      {
        id: "homigo",
        company: "Homigo",
        companyHref: "https://homigoinc.com/",
        role: "Founding Software Engineer",
        dates: "Dec 2025 — May 2026",
        location: "Remote",
        summary:
          "Led frontend development for a bilingual home-services MVP, building consumer and provider onboarding and expanding into backend integrations.",
        highlights: [
          "Built onboarding for both consumers and providers, including service requests and registration, with validation, guided steps, and English/Spanish interfaces.",
          "Developed provider portal UI and connected frontend features to Supabase and backend APIs for account and service-area information.",
          "Implemented a backend contact-form API with SendGrid email delivery, Google Cloud Vision image moderation, and profanity filtering for user-entered text.",
          "My team and I completed and released the MVP with consumer and provider onboarding; 25+ users had been onboarded by the end of my engagement in May 2026.",
        ],
        tech: [
          "Next.js",
          "TypeScript",
          "Supabase",
          "SendGrid",
          "Google Cloud Vision",
          "Stripe",
          "Twilio",
        ],
      },
      {
        id: "veggie",
        company: "Veggie Rescue",
        companyHref: "https://veggierescue.org/",
        role: "Software Engineer / Tech Lead",
        dates: "Dec 2025 — Jun 2026",
        location: "San Luis Obispo, CA",
        summary:
          "Making delivery records easier to use for the people helping good food reach approximately 70 nonprofits.",
        highlights: [
          "Worked with the nonprofit stakeholder to understand delivery planning, proposed a list of five organizations that might need food next, and built the recommendation backend and queue interface.",
          "Added table search, sorting, and clearer loading, error, and empty states across screen sizes.",
          "Built the Google Sheets integration, improved the dashboard and access page, and refactored the table components.",
          "Turned stakeholder feedback into frontend requirements and coordinated development with my team.",
        ],
        tech: ["Next.js", "React", "TypeScript", "SCSS", "Express", "Google Sheets API"],
      },
      {
        id: "tesla",
        company: "Tesla Collaboration",
        companyHref: "https://www.tesla.com/",
        role: "Software Developer Student Consultant",
        dates: "Oct 2025 — Mar 2026",
        location: "San Luis Obispo, CA",
        summary:
          "Worked on a commute-planning mobile prototype through Systems Optimization Club.",
        highlights: [
          "Built a React Native prototype for comparing driving, biking, transit, and shuttle routes in one experience.",
          "Refactored hardcoded styles into a reusable theming system and maintainable map-based components.",
          "Improved UI consistency by moving the app toward reusable patterns instead of isolated one-off screens.",
          "Worked on product decisions that made route comparison feel clearer and more practical for employees.",
        ],
        tech: ["React Native", "TypeScript", "Google Maps API", "Figma"],
      },
      {
        id: "spreadgoodness",
        company: "SpreadGoodness",
        companyHref: "https://www.spreadgoodness.love/",
        role: "Software Engineering Intern",
        dates: "Dec 2025 — May 2026",
        location: "Remote",
        summary:
          "Built an admin-creation interface and refined student challenge interactions in a React and Firebase educational platform.",
        highlights: [
          "Built a platform-admin creation form with required-field checks, pending states, success and error feedback, and form reset after success.",
          "Updated restricted student challenge actions and confirmation-screen styling while preserving existing permission behavior, then corrected a desktop hover inconsistency.",
          "Manually tested the student challenge-acceptance flow and checked desktop and mobile layouts.",
          "Reviewed Firestore analytics queries and recommended aggregate counting and clearer separation of data fetching and calculations.",
        ],
        tech: ["React", "JavaScript", "Tailwind CSS", "Firebase", "Firestore"],
      },
      {
        id: "bio-ra",
        company: "Bioinformatics Research Lab",
        companyHref: "https://bioinfo.calpoly.edu/research",
        role: "Bioinformatics Research Assistant",
        dates: "Jan 2025 — Jan 2026",
        location: "San Luis Obispo, CA",
        summary:
          "Applied data-driven modeling to support pathogen prediction and clinical testing workflows.",
        highlights: [
          "Trained decision-tree and multi-label pipelines on 80k+ patient records to support UTI pathogen prediction.",
          "Cleaned and structured clinical metadata to improve modeling reliability and downstream genomic analysis.",
          "Automated parts of the modeling workflow to make experiments easier to rerun and compare.",
          "Used bioinformatics tooling to connect machine learning work with broader research questions.",
        ],
        tech: ["Python", "Decision Trees", "Data Science", "Galaxy"],
      },
      {
        id: "h4i",
        company: "Hack4Impact",
        companyHref: "https://calpoly.hack4impact.org/",
        role: "Full Stack Developer",
        dates: "Oct 2024 — Jun 2025",
        location: "San Luis Obispo, CA",
        summary:
          "Built nonprofit tooling for heritage tree inventory and volunteer communication.",
        highlights: [
          "Shipped messaging and announcement workflows using Next.js, MongoDB, and REST API routes.",
          "Built tree entry, inventory, and mobile-responsive volunteer interfaces for managing heritage tree records.",
          "Connected frontend workflows to backend routes that helped admins manage updates at different user levels.",
          "Worked on practical nonprofit-facing features that improved day-to-day record management.",
        ],
        tech: ["Next.js", "MongoDB", "REST APIs", "Chakra UI"],
      },
    ];

export const FEATURED_EXPERIENCES: Pick<Experience, "id" | "company" | "role" | "dates">[] = [
  {
    id: "ventura-foods",
    company: "Ventura Foods",
    role: "IT Intern",
    dates: "September 2026 – Present",
  },
  ...["veggie", "homigo", "spreadgoodness"].flatMap((id) =>
    EXPERIENCES.filter((experience) => experience.id === id),
  ),
];
