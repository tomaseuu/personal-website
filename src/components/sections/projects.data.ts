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
    image: { src: "/ghibli1.jpg", alt: "decision-ledger" },
    links: [
      { label: "GitHub", href: "https://github.com/tomaseuu/decision-ledger" },
    ],
  },
  {
    id: "online-photobooth",
    title: "Luma Leaf - Online Photobooth",
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
    image: { src: "/luma-leaf.png", alt: "photobooth" },
    links: [
      { label: "Website", href: "https://luma-leaf-photobooth.vercel.app/" },
    ],
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
    image: { src: "/ghibli2.png", alt: "cancer" },
    links: [
      {
        label: "Github",
        href: "https://github.com/tomaseuu/cancer-graph-theory?tab=readme-ov-file",
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
      "Persisted workout data locally on-device to enable instant load times and offline access.",
      "Auto-detected the current day to surface today’s workout with fast in-place edits.",
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

  {
    id: "babesia-hmm",
    title: "Modeling Babesia Life Cycles",
    subtitle:
      "Probabilistic modeling of parasite life-cycle stages using Hidden Markov Models.",
    tags: ["Python", "HMM", "Bioinformatics", "Statistics"],
    bullets: [
      "Built Hidden Markov Models to predict parasite life-cycle stages from gene expression data.",
      "Implemented the Viterbi algorithm to infer the most probable sequence of biological states.",
      "Constructed transition and emission matrices linking observations to hidden stages.",
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
    id: "pomodoro-productivity",
    title: "FocusFruit: Pomodoro Productivity App",
    subtitle:
      "Web-based Pomodoro timer with task tracking, persistence, and automated deployment.",
    tags: ["React", "JavaScript", "APIs", "CI/CD"],
    bullets: [
      "Built a Pomodoro productivity web app with task tracking and timer-based workflows.",
      "Designed interactive React components to support smooth task and session transitions.",
      "Integrated APIs to persist user sessions and task state across refreshes.",
      "Set up Azure CI/CD pipelines with GitHub workflows for automated testing and deployment.",
    ],
    tech: ["React", "JavaScript", "REST APIs", "Azure CI/CD", "GitHub Actions"],
    metrics: ["Persistent sessions", "Automated deploys", "Responsive UI"],
    image: { src: "/pomodoro.png", alt: "pomodoro" },
    links: [
      {
        label: "Github",
        href: "https://github.com/tomaseuu/project-pomodoro",
      },
    ],
  },
  {
    id: "table-checkin-sensor",
    title: "Table Check-In Sensor System",
    subtitle:
      "Embedded system for real-time seat occupancy detection using motion and light sensors.",
    tags: ["Java", "Sensors", "Embedded Systems"],
    bullets: [
      "Built a real-time seat occupancy system using Adafruit light and motion sensors.",
      "Designed a noise-filtering algorithm to reduce false positives from environmental interference.",
      "Tuned sensor parameters to improve stability and detection accuracy in dynamic settings.",
      "Implemented a timer-based filter to ignore brief movements and prevent false detections.",
    ],
    tech: ["Java", "Adafruit Sensors", "Signal Filtering"],
    metrics: ["Noise reduction", "Real-time sensing", "Improved accuracy"],
    image: { src: "/ghibli6.png", alt: "table" },
  },
];
