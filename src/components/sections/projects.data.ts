export type Project = {
  id: string;
  title: string;
  subtitle: string;
  context?: string;
  caseStudyHref?: string;
  compact?: boolean;
  tags: string[];
  bullets: string[];
  tech: string[];
  metrics?: string[];
  links?: { label: string; href: string }[];
  logo?: { src: string; alt: string };
  gallery?: { src: string; alt: string; href?: string }[];
  image?: {
    src: string;
    alt: string;
    variant?: "cover" | "phoneShot" | "browserShot";
  };
};

export const PROJECTS: Project[] = [
  {
    id: "systems-optimization-club",
    title: "Systems Optimization Club × Tesla",
    context: "Student consulting · Mobile full stack",
    subtitle:
      "Built map, search, and parking interfaces for a React Native commute-planning prototype. My team and I collaborated with Tesla stakeholders through Cal Poly’s Systems Optimization Club to bring commuting resources into one experience.",
    tags: ["Club", "Mobile App", "Student Consulting"],
    bullets: [
      "Built a centralized theme system and reusable React Native components from Figma designs.",
      "Developed the map interface, destination-search interactions, and parking-details UI with occupancy percentage logic.",
    ],
    tech: ["React Native", "TypeScript", "Google Maps API", "Figma"],
    image: { src: "/projects/soc/team.png", alt: "SOC team for the Tesla commute-planning collaboration", variant: "cover" },
    links: [{ label: "Club on LinkedIn", href: "https://www.linkedin.com/company/systemsoptimizationclubcalpoly/posts" }],
  },
  {
    id: "hack4impact",
    title: "Hack4Impact · Heritage Tree Foundation",
    context: "Nonprofit collaboration · Full stack web app",
    subtitle:
      "Built announcement creation, inbox retrieval, and recipient selection for a nonprofit’s heritage-tree inventory application. My team and I developed the platform through Hack4Impact Cal Poly.",
    tags: ["Club", "Nonprofit", "Full Stack"],
    bullets: [
      "Connected announcement submission and inbox retrieval through Next.js API routes and MongoDB.",
      "Implemented individual, administrator, and all-user recipient selection, plus early tree-entry and inventory interfaces.",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Chakra UI"],
    image: { src: "/projects/heritage-trees/foundation-homepage.png", alt: "Central Coast Heritage Tree Foundation public website", variant: "browserShot" },
    gallery: [
      { src: "/projects/heritage-trees/foundation-homepage.png", alt: "Central Coast Heritage Tree Foundation public website" },
      { src: "/projects/heritage-trees/Screenshot 2026-10-14 at 9.01.31 AM.png", alt: "Heritage Tree inventory app dashboard with tree counts, announcements, and a map" },
      { src: "/projects/heritage-trees/Screenshot 2026-10-14 at 9.02.19 AM.png", alt: "Heritage Tree inventory app tree-health form with a rating scale and illustrated issue selections" },
    ],
    links: [
      { label: "Hack4Impact", href: "https://calpoly.hack4impact.org/" },
      { label: "Foundation", href: "https://centralcoastheritagetreefoundation.org/" },
      { label: "Inventory app", href: "https://cc-heritage-tree-foundation-two.vercel.app/login" },
      { label: "GitHub", href: "https://github.com/hack4impact-calpoly/cc-heritage-tree-foundation" },
    ],
  },
  {
    id: "virgil-mobile-app",
    title: "Virgil",
    logo: { src: "/projects/virgil/logo.png", alt: "Virgil logo" },
    caseStudyHref: "/projects/virgil",
    context: "Senior project · Healthcare",
    subtitle:
      "A mobile app for tracking IBD symptoms, medication, and patient history. My team and I built a senior-project prototype to bring daily check-ins and health history into one place. This is my favorite project I’ve built.",
    tags: ["React Native", "TypeScript", "Supabase", "PostgreSQL", "Flask"],
    bullets: [
      "Built a React Native workflow that organizes patient symptoms, medication history, and genetics inputs through Supabase, PostgreSQL, and a Flask recommendation backend.",
      "Prototyped LLM-powered insight features that summarize symptom trends, explain recommendation outputs, and generate doctor-facing questions from structured patient context.",
    ],
    tech: ["React Native", "TypeScript", "Supabase", "PostgreSQL", "Flask"],
    metrics: ["Mobile-first UX", "Health journaling", "AI insights"],
    image: {
      src: "/projects/virgil/01-mobile-home.png",
      alt: "Virgil mobile dashboard from the prototype recording",
      variant: "phoneShot",
    },
    gallery: [
      { src: "/projects/virgil/01-mobile-home.png", alt: "Virgil mobile dashboard from the prototype recording" },
      { src: "/projects/virgil/Screenshot 2026-10-14 at 8.59.31 AM.png", alt: "Virgil team with the research poster at Cal Poly" },
      { src: "/projects/virgil/Screenshot 2026-10-14 at 8.59.43 AM.png", alt: "Virgil team presenting the capstone project" },
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/tomaseuu/virgil-mobile-app",
      },
    ],
  },
  {
    id: "online-photobooth",
    title: "Luma Leaf",
    logo: { src: "/projects/luma-leaf/logo.png", alt: "Luma Leaf logo" },
    context: "Personal project · Photobooth",
    subtitle:
      "A photobooth that lives in your browser. Take photos, make a strip, and share it with a QR code. A little project that became one of my favorites.",
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
    title: "Roblox Scam Awareness",
    context: "LA Hacks 2026 · Hackathon",
    subtitle:
      "My first Roblox game, built with my team in 24 hours at LA Hacks 2026. In Don’t Get Scammed, players set out to rescue Grandma through an obstacle course full of fake links, suspicious Robux offers, password puzzles, impersonators, and AI-generated art. Every wrong turn comes with feedback explaining what made the choice unsafe, helping kids build online-safety instincts as they play. A crash course in Roblox Studio, Lua, and just how much debugging one door can need.",
    tags: ["Roblox Studio", "Lua", "Game Design", "Cybersecurity"],
    bullets: [
      "Built a story-driven Roblox obstacle course in 24 hours at LA Hacks 2026, turning online safety lessons into platforming, dialogue, and object puzzles for younger players.",
      "Connected fake-link, password, impersonation, and AI-art challenges with checkpoints, respawns, and feedback explaining why each unsafe choice was a red flag.",
    ],
    tech: ["Roblox Studio", "Lua", "UI Scripting", "Gameplay Systems"],
    metrics: ["24-hour build", "Interactive learning", "Hackathon project"],
    logo: { src: "/projects/roblox/la-hacks.svg", alt: "LA Hacks logo" },
    gallery: [
      { src: "/projects/roblox/team.png", alt: "Our team at LA Hacks 2026" },
      { src: "/projects/roblox/badges-generated.png", alt: "AI recreation of our LA Hacks 2026 badges for Brandon, Thomas, Kasey, and Emi" },
      { src: "/projects/roblox/thumbnail.jpg", alt: "Don’t Get Scammed Roblox game thumbnail", href: "https://www.roblox.com/games/86000630399340/DONT-GET-SCAMMED" },
    ],
    links: [
      {
        label: "DevPost",
        href: "https://devpost.com/software/don-t-get-scammed",
      },
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=HuOEGMBPJPU",
      },
      {
        label: "Game",
        href: "https://www.roblox.com/games/86000630399340/DONT-GET-SCAMMED",
      },
    ],
  },
  {
    id: "task-logger",
    title: "Task Logger",
    logo: { src: "/projects/task-logger/logo.png", alt: "Task Logger beaver logo" },
    context: "PolyPrompt · Hackathon",
    subtitle:
      "My team and I built Task Logger at the PolyPrompt hackathon to help students divide up group projects. An LLM breaks requirements into tasks, asks clarifying questions, and helps assign work based on skills. We used AI coding agents throughout development, too—a hands-on lesson in agent orchestration, context engineering, and reviewing AI-generated code.",
    tags: ["AI", "Team Collaboration", "Student Productivity", "Web App"],
    bullets: [
      "Analyzes project requirements, asks clarifying questions, and breaks work into structured tasks with difficulty, skill requirements, and dependencies.",
      "Fairly assigns tasks, builds personalized timelines and dashboards, and helps college teams avoid uneven workload, missed deadlines, and poor accountability.",
    ],
    tech: ["AI", "Task Planning", "Dashboards", "Team Workflows"],
    metrics: ["Skill-based delegation", "Timeline generation", "College teams"],
    gallery: [
      { src: "/projects/task-logger/Screenshot 2026-10-14 at 9.05.33 AM.png", alt: "Our Task Logger team at PolyPrompt" },
      { src: "/projects/task-logger/dashboard-clean.png", alt: "Task Logger dashboard with milestones, delegated tasks, and the project backlog" },
      { src: "/projects/task-logger/solution-clean.png", alt: "Task Logger presentation introducing the AI-powered group project task delegator" },
      { src: "/projects/task-logger/board-clean.png", alt: "Task Logger team task board with assignments, statuses, and deadlines" },
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/PolyPrompt/ProjectBeacon",
      },
    ],
  },
  {
    id: "pomodoro-productivity",
    title: "FocusFruit",
    logo: { src: "/projects/focus-fruit/logo.svg", alt: "FocusFruit logo" },
    context: "Personal project · Productivity Pomodoro timer",
    subtitle:
      "A Pomodoro timer that keeps your tasks and focus sessions in one place. I built FocusFruit to make it easier to settle into a task, take a break, and come back to your progress. Your sessions stay saved, so a refresh doesn’t mean starting over.",
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
    title: "OncoGraph",
    logo: { src: "/projects/oncograph/logo.svg", alt: "OncoGraph logo" },
    caseStudyHref: "/projects/oncograph",
    context: "Bioinformatics · Full stack",
    subtitle:
      "I took a cancer gene research project and built a pipeline and dashboard around it. It uses gene networks to find candidates worth exploring, then lets you dig into the results.",
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
    title: "Babesia Life Cycles",
    subtitle:
      "Using Hidden Markov Models to explore parasite life-cycle stages through gene expression data.",
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
    title: "Yeast Gene Expression",
    subtitle:
      "Looking at how yeast changes its metabolism through gene expression, clustering, and a lot of Python.",
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
    title: "RepNote",
    compact: true,
    context: "Personal project · Mobile app",
    subtitle:
      "A mobile workout planner for logging sets, reps, weights, and notes. Open it and start tracking.",
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
      "Teaching a robot to find its way around a grid and clean it, while comparing different search algorithms.",
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
    title: "Poker Odds Estimator",
    subtitle:
      "Simulating thousands of poker hands to estimate pre-flop odds. A small excuse to play with search, probability, and Python.",
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
    compact: true,
    context: "Class project · Pixel game",
    subtitle:
      "A small pixel world built with Java and Processing, with hand-made art and characters that change as you interact.",
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
