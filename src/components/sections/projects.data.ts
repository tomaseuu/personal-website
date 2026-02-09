export type Project = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  bullets: string[];
  tech: string[];
  metrics?: string[];
  links?: { label: string; href: string }[];
  image?: {
    src: string;
    alt: string;
  };
};

export const PROJECTS: Project[] = [
  {
    id: "decision-ledger",
    title: "Decision Ledger",
    subtitle:
      "Full-stack decision log that stores context, options, and append-only revision history for teams.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    bullets: [
      "Built a FastAPI backend in Python with a Postgres schema to store decisions and change history.",
      "Designed a relational data model (workspaces, decisions, options, revisions) based on real engineering workflows.",
      "Enforced workspace-based access control and ownership rules using Supabase Auth.",
      "Implemented append-only decision revisions to preserve historical context instead of overwriting changes.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Supabase Auth",
    ],
    metrics: ["Relational schema", "Access control", "Append-only history"],
    // image: { src: "/projects/decision-ledger.png", alt: "Decision Ledger UI" },
    // links: [{ label: "Live Demo", href: "" }, { label: "GitHub", href: "" }],
  },
  {
    id: "online-photobooth",
    title: "Online Photobooth",
    subtitle:
      "Browser-based photobooth with camera capture, live previews, and shareable photo-strip output.",
    tags: ["Next.js", "React", "Camera", "UX"],
    bullets: [
      "Created a browser-based photobooth in React and Next.js with camera capture and live previews.",
      "Handled in-browser photo workflows with session-based storage and photo-strip generation.",
      "Enabled time-limited QR share links for secure cross-device access without accounts.",
      "Improved client-side performance by reducing re-renders and managing media streams.",
    ],
    tech: ["React", "TypeScript", "Next.js", "CSS"],
    metrics: ["Client-side media", "QR sharing", "Performance tuned"],
    // image: { src: "/projects/photobooth.png", alt: "Online Photobooth preview" },
    // links: [{ label: "Live Demo", href: "" }, { label: "GitHub", href: "" }],
  },
  {
    id: "cancer-network-analysis",
    title: "Cancer Network Analysis",
    subtitle:
      "Graph analysis pipeline to rank influential genes in protein interaction networks using diffusion methods.",
    tags: ["Python", "NetworkX", "Simulation", "Statistics"],
    bullets: [
      "Developed a Python-based graph analysis pipeline to process protein interaction networks.",
      "Implemented Random Walk with Restart and graph diffusion to rank influential nodes in the network.",
      "Ran thousands of randomized simulations to validate results and measure statistical significance.",
      "Identified 30 candidate genes based on network proximity and diffusion scores.",
    ],
    tech: ["Python", "NetworkX", "NumPy", "SciPy"],
    metrics: ["30 candidate genes", "Thousands of sims", "Graph diffusion"],
    // image: { src: "/projects/cancer-network.png", alt: "Graph analysis visualization" },
    // links: [{ label: "GitHub", href: "" }, { label: "Write-up", href: "" }],
  },
];
