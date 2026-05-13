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
    variant?: "cover" | "phoneShot" | "browserShot";
  };
};

export const PROJECTS: Project[] = [
  {
    id: "virgil-mobile-app",
    title: "IBD Clinical Decision Support System",
    subtitle:
      "Mobile-first health journaling and clinical review workflow for tracking IBD symptoms, medications, and patient context over time.",
    tags: ["React Native", "TypeScript", "Supabase", "PostgreSQL", "Flask"],
    bullets: [
      "Built a React Native workflow that organizes patient symptoms, medication history, and genetics inputs through Supabase, PostgreSQL, and a Flask recommendation backend.",
      "Prototyped LLM-powered insight features that summarize symptom trends, explain recommendation outputs, and generate doctor-facing questions from structured patient context.",
    ],
    tech: ["React Native", "TypeScript", "Supabase", "PostgreSQL", "Flask"],
    metrics: ["Mobile-first UX", "Health journaling", "AI insights"],
    image: {
      src: "/ibd.png",
      alt: "IBD mobile app screenshot",
      variant: "phoneShot",
    },
    links: [
      {
        label: "Github",
        href: "https://github.com/tomaseuu/virgil-mobile-app",
      },
    ],
  },
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
    image: {
      src: "/luma-leaf.png",
      alt: "Luma Leaf photobooth screenshot",
      variant: "browserShot",
    },
    links: [
      { label: "Website", href: "https://luma-leaf-photobooth.vercel.app/" },
      {
        label: "Github",
        href: "https://github.com/tomaseuu/project-photobooth",
      },
    ],
  },
  {
    id: "online-scam-awareness-obby",
    title: "Online Scam Awareness Obby",
    subtitle:
      "Story-driven Roblox game that teaches players how to spot scams, create stronger passwords, and recognize impersonators through interactive gameplay.",
    tags: ["Roblox Studio", "Lua", "Game Design", "Cybersecurity"],
    bullets: [
      "Built a first-time Roblox project in 24 hours for LA Hacks, creating scenario-based mechanics where players learn online safety by making choices inside the game.",
      "Designed interactive lessons around fake links, password strength, and impersonation attempts so players experience digital safety concepts instead of only reading about them.",
    ],
    tech: ["Roblox Studio", "Lua", "UI Scripting", "Gameplay Systems"],
    metrics: ["24-hour build", "Interactive learning", "Hackathon project"],
    links: [
      {
        label: "DevPost",
        href: "https://devpost.com/software/don-t-get-scammed",
      },
      {
        label: "Video",
        href: "https://lnkd.in/g8zZbRvb",
      },
      {
        label: "Game",
        href: "https://lnkd.in/gKyTnG9J",
      },
    ],
  },
  {
    id: "task-logger",
    title: "Task Logger",
    subtitle:
      "AI-powered group project planner that turns messy requirements into fair task delegation, timelines, and progress tracking for student teams.",
    tags: ["AI", "Team Collaboration", "Student Productivity", "Web App"],
    bullets: [
      "Analyzes project requirements, asks clarifying questions, and breaks work into structured tasks with difficulty, skill requirements, and dependencies.",
      "Fairly assigns tasks, builds personalized timelines and dashboards, and helps college teams avoid uneven workload, missed deadlines, and poor accountability.",
    ],
    tech: ["AI", "Task Planning", "Dashboards", "Team Workflows"],
    metrics: ["Skill-based delegation", "Timeline generation", "College teams"],
    links: [
      {
        label: "Github",
        href: "https://github.com/PolyPrompt/ProjectBeacon",
      },
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
        label: "Website",
        href: "https://focus-fruit.vercel.app/",
      },
    ],
  },
  {
    id: "cancer-network-analysis",
    title: "OncoGraph: Cancer Gene Discovery Pipeline",
    subtitle:
      "Backend-focused bioinformatics pipeline for prioritizing candidate cancer genes with graph diffusion, validation, and optional ML ranking.",
    tags: ["Python", "FastAPI", "Bioinformatics", "ML", "PostgreSQL"],
    bullets: [
      "Turned a graph theory research prototype into a reproducible FastAPI pipeline using Random Walk with Restart, p-value simulations, and PostgreSQL-backed persistence.",
      "Built a production-style workflow with background runs, optional scikit-learn ranking, Docker Compose, and a Next.js dashboard for exploring results.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "NetworkX",
      "Scikit-learn",
      "PostgreSQL",
      "Docker",
      "Next.js",
    ],
    metrics: ["RWR pipeline", "ML ranking", "Dockerized backend"],
    image: {
      src: "/cancer3.png",
      alt: "OncoGraph dashboard screenshot",
      variant: "browserShot",
    },
    links: [
      {
        label: "Website",
        href: "https://cancer-graph-theory.vercel.app/",
      },
      {
        label: "Github",
        href: "https://github.com/tomaseuu/cancer-graph-theory",
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
    id: "yeast-diauxic-shift",
    title: "Yeast Diauxic Shift Gene Expression Analysis",
    subtitle:
      "Gene expression analysis of metabolic transition in baker's yeast using clustering, enrichment, and statistical validation.",
    tags: ["Python", "Bioinformatics", "Clustering", "Statistics"],
    bullets: [
      "Analyzed Saccharomyces cerevisiae gene expression across seven time points to study the diauxic shift from glucose fermentation to ethanol respiration.",
      "Used K-Means clustering, variability filtering, GO enrichment analysis, and binomial significance testing to identify biologically meaningful gene patterns.",
    ],
    tech: ["Python", "pandas", "scikit-learn", "SciPy", "matplotlib"],
    metrics: ["7 time points", "GO enrichment", "Statistical validation"],
    links: [
      {
        label: "Github",
        href: "https://github.com/tomaseuu/yeast-diauxic-shift-analysis",
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
  {
    id: "vacuum-robot-planner",
    title: "Vacuum Robot Planner",
    subtitle:
      "Grid-based planning project that generates action sequences for cleaning dirty cells while avoiding blocked spaces.",
    tags: ["Python", "Search", "UCS", "DFS"],
    bullets: [
      "Built a planner for the Vacuum World environment where a robot navigates a grid, vacuums dirty cells, and avoids walls.",
      "Implemented Uniform-Cost Search and Depth-First Search to compare shortest-path planning against faster but non-optimal traversal.",
    ],
    tech: ["Python", "Uniform-Cost Search", "Depth-First Search", "Planning"],
    metrics: ["Grid world", "Action planning", "Search algorithms"],
    links: [
      {
        label: "Github",
        href: "https://github.com/tomaseuu/vacuum-robot-planner",
      },
    ],
  },
  {
    id: "poker-mcts",
    title: "Poker Win Estimator with Monte Carlo Tree Search",
    subtitle:
      "Pre-flop Texas Hold'em win estimator that simulates thousands of hands using Monte Carlo Tree Search and UCB1.",
    tags: ["Python", "MCTS", "Algorithms", "Simulation"],
    bullets: [
      "Built a poker probability estimator that deals random opponent and community cards, simulates full showdowns, and estimates pre-flop win rate.",
      "Implemented Monte Carlo Tree Search with UCB1 selection plus custom hand evaluation logic for comparing 7-card poker outcomes.",
    ],
    tech: ["Python", "MCTS", "UCB1", "Simulation"],
    metrics: ["Thousands of sims", "Pre-flop odds", "Custom evaluator"],
    links: [
      {
        label: "Github",
        href: "https://github.com/tomaseuu/poker-mcts",
      },
    ],
  },
  {
    id: "into-the-mind",
    title: "Into the Mind",
    subtitle:
      "A 2D pixel world game where chaotic systems, healing, and self-reflection play out through character interactions.",
    tags: ["Java", "Processing", "Game Design", "Pixel Art"],
    bullets: [
      "Built a Java 2D pixel world with custom entities, click-to-spawn interactions, and evolving map transformations using Processing and object-oriented game logic.",
      "Turned a class project into a personal storytelling piece about burnout, chaos, and growth through hand-made pixel art and symbolic gameplay systems.",
    ],
    tech: ["Java", "Processing", "PApplet", "Pixel Art"],
    metrics: ["2D game world", "Custom entities", "Interactive story"],
    image: { src: "/into-the-mind.png", alt: "Into the Mind pixel world" },
    links: [
      {
        label: "Github",
        href: "https://github.com/tomaseuu/into-the-mind-pixelworld",
      },
    ],
  },
];
