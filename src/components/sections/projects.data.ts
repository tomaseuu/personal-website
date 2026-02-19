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
    id: "online-photobooth",
    title: "Luma Leaf - Online Photobooth",
    subtitle:
      "Browser-based photobooth with camera capture, live previews, and shareable photo-strip output.",
    tags: ["Next.js", "React", "TypeScript", "UX"],
    bullets: [
      "React, Next.js, TypeScript Photo Booth with real-time camera capture, session storage, and photo-strip rendering.",
      "Secure time-limited QR sharing with performance optimizations for smooth cross-device media handling.",
    ],
    tech: ["React", "TypeScript", "Next.js", "CSS"],
    metrics: ["Client-side media", "QR sharing", "Performance tuned"],
    image: { src: "/luma-leaf.png", alt: "photobooth" },
    links: [
      { label: "Website", href: "https://luma-leaf-photobooth.vercel.app/" },
    ],
  },
  {
    id: "pomodoro-productivity",
    title: "FocusFruit: Pomodoro Productivity App",
    subtitle:
      "Web-based Pomodoro timer with task tracking, persistence, and automated deployment.",
    tags: ["React", "JavaScript", "APIs", "PostgreSQL", "Tailwind CSS"],
    bullets: [
      "React, Express.js, and PostgreSQL focus tracker supporting task persistence, session APIs, and SQL analytics.",
      "Real-time timer sync with active session recovery and parallel API loading to maintain consistent state across refreshes.",
    ],
    tech: ["React", "JavaScript", "REST APIs", "Tailwind CSS"],
    metrics: ["Persistent sessions", "Automated deploys", "Responsive UI"],
    image: { src: "/pomodoro.png", alt: "pomodoro" },
    links: [
      {
        label: "Github",
        href: "https://focus-fruit.vercel.app/",
      },
    ],
  },
  {
    id: "cancer-network-analysis",
    title: "Cancer Network Analysis",
    subtitle:
      "Graph analysis pipeline to rank influential genes in protein interaction networks using diffusion methods.",
    tags: ["Python", "NetworkX", "Simulation", "Statistics"],
    bullets: [
      "Python (NetworkX, NumPy, SciPy) graph analysis of protein interaction networks with Random Walk and diffusion.",
      "Ran 1000+ of simulations for statistical validation, identifying 30 candidate genes via network scoring.",
    ],
    tech: ["Python", "NetworkX", "NumPy", "SciPy"],
    metrics: ["30 candidate genes", "Thousands of sims", "Graph diffusion"],
    image: { src: "/ghibli2.png", alt: "cancer" },
    links: [
      {
        label: "Github",
        href: "https://github.com/tomaseuu/cancer-graph-theory?tab=readme-ov-file",
      },
    ],
  },
  {
    id: "babesia-hmm",
    title: "Modeling Babesia Life Cycles",
    subtitle:
      "Probabilistic modeling of parasite life-cycle stages using Hidden Markov Models.",
    tags: ["Python", "HMM", "Bioinformatics", "Statistics"],
    bullets: [
      "Built Hidden Markov Models to predict parasite life-cycle stages from gene expression data.",
      "Applied probabilistic modeling to interpret pathogen regulation and disease progression.",
    ],
    tech: ["Python", "NumPy", "pandas", "Statistical Modeling"],
    metrics: ["HMMs", "Viterbi decoding", "Biological inference"],
    image: { src: "/ghibli5.jpg", alt: "babesia" },
    links: [
      {
        label: "Github",
        href: "https://github.com/tomaseuu/babesia-hmm-life-cycle?tab=readme-ov-file",
      },
    ],
  },
  {
    id: "repnote",
    title: "RepNote - Gym Tracker",
    subtitle:
      "Mobile-only workout planner designed for fast daily logging without accounts or setup.",
    tags: ["React Native", "Expo", "TypeScript", "Mobile UX"],
    bullets: [
      "Shipped a mobile workout planner in React Native (Expo) optimized for quick, daily use.",
      "Implemented weekly workout planning (Mon–Sun) with exercises tracking sets, reps, weights, and notes.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Local Storage"],
    metrics: ["Offline-first", "Mobile-only UX", "Instant load"],
    image: { src: "/ghibli4.jpg", alt: "gym" },
    links: [
      {
        label: "Github",
        href: "https://github.com/tomaseuu/repnote",
      },
    ],
  },
];
