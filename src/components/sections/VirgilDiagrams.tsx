import styles from "./VirgilDiagrams.module.css";

function Node({ x, y, width = 180, title, detail, accent = false }: { x: number; y: number; width?: number; title: string; detail?: string; accent?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={detail ? 62 : 46} rx="5" className={accent ? styles.highlight : styles.node} />
      <text x={x + width / 2} y={y + (detail ? 26 : 28)} textAnchor="middle">{title}</text>
      {detail ? <text x={x + width / 2} y={y + 46} textAnchor="middle" className={styles.detail}>{detail}</text> : null}
    </g>
  );
}

function Arrow({ d, marker, optional = false, both = false }: { d: string; marker: string; optional?: boolean; both?: boolean }) {
  return <path d={d} className={styles.line + (optional ? " " + styles.optional : "")} markerEnd={"url(#" + marker + ")"} markerStart={both ? "url(#" + marker + ")" : undefined} />;
}

function Marker({ id }: { id: string }) {
  return <defs><marker id={id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 8 5 L 0 9" fill="none" stroke="#8b8b8b" strokeWidth="1.5" /></marker></defs>;
}

export function VirgilUserFlow() {
  return (
    <figure className={styles.figure}>
      <div className={styles.canvas}>
        <svg className={styles.diagram + " " + styles.desktop} viewBox="0 0 760 590" role="img" aria-labelledby="flow-wide-title flow-wide-desc">
          <title id="flow-wide-title">Virgil patient user flow</title>
          <desc id="flow-wide-desc">Open the app and restore a session. Signed-out users onboard and sign in. Users without a profile complete setup. Home leads to daily check-ins and history, document upload and a separate recommendation run, or optional AI Insights.</desc>
          <Marker id="flow-wide-arrow" />
          <Node x={10} y={24} width={140} title="Open app" />
          <Node x={210} y={24} width={200} title="Restore session" detail="Supabase Auth" />
          <Node x={490} y={24} width={250} title="Onboard · sign in / sign up" detail="When signed out" />
          <Arrow d="M150 47H210" marker="flow-wide-arrow" />
          <Arrow d="M410 47H490" marker="flow-wide-arrow" />
          <Node x={210} y={142} width={200} title="Resolve patient profile" detail="Look up the account’s profile" />
          <Arrow d="M310 86V142" marker="flow-wide-arrow" />
          <Arrow d="M615 86V118H390V142" marker="flow-wide-arrow" />
          <Node x={490} y={142} width={250} title="Complete profile setup" detail="When the profile is missing" />
          <Arrow d="M410 173H490" marker="flow-wide-arrow" />
          <Node x={270} y={252} width={220} title="Home" detail="Summaries and saved results" accent />
          <Arrow d="M310 204V230H380V252" marker="flow-wide-arrow" />
          <Arrow d="M615 204V283H490" marker="flow-wide-arrow" />
          <Arrow d="M380 314V342H125V370" marker="flow-wide-arrow" />
          <Arrow d="M380 314V370" marker="flow-wide-arrow" />
          <Arrow d="M380 342H635V370" marker="flow-wide-arrow" />
          <Node x={10} y={370} width={230} title="Daily check-in" detail="Wellness · symptoms · medication" />
          <Node x={265} y={370} width={230} title="Upload genetics document" detail="Select an active file" />
          <Node x={520} y={370} width={230} title="Ask in Insights" detail="Question + saved patient context" />
          <Arrow d="M125 432V492" marker="flow-wide-arrow" />
          <Arrow d="M380 432V492" marker="flow-wide-arrow" />
          <Arrow d="M635 432V492" marker="flow-wide-arrow" optional />
          <Node x={10} y={492} width={230} title="Saved history" detail="Review timeline and summaries" />
          <Node x={265} y={492} width={230} title="Separate backend run" detail="Ready inputs → saved result" />
          <Node x={520} y={492} width={230} title="AI response or fallback" detail="Depends on service configuration" />
        </svg>
        <svg className={styles.diagram + " " + styles.mobile} viewBox="0 0 300 920" role="img" aria-labelledby="flow-small-title flow-small-desc">
          <title id="flow-small-title">Virgil patient user flow</title>
          <desc id="flow-small-desc">Restore a session or sign in, resolve or create a patient profile, then open Home. From Home the patient can log check-ins and review history, upload an active genetics file for a separate backend run, or ask questions in optional Insights.</desc>
          <Marker id="flow-small-arrow" />
          <Node x={25} y={12} width={250} title="Open app · restore session" detail="Signed out? Onboard and sign in" />
          <Arrow d="M150 74V108" marker="flow-small-arrow" />
          <Node x={25} y={108} width={250} title="Resolve patient profile" detail="Missing profile? Complete setup" />
          <Arrow d="M150 170V204" marker="flow-small-arrow" />
          <Node x={25} y={204} width={250} title="Home" detail="Choose a workflow below" accent />
          <Arrow d="M25 235H10V365H25" marker="flow-small-arrow" />
          <Arrow d="M10 365V569H25" marker="flow-small-arrow" />
          <Arrow d="M10 569V773H25" marker="flow-small-arrow" optional />
          <text x={30} y={316} className={styles.heading}>DAILY TRACKING</text>
          <Node x={25} y={334} width={250} title="Complete a daily check-in" detail="Wellness · symptoms · medication" />
          <Arrow d="M150 396V424" marker="flow-small-arrow" />
          <Node x={25} y={424} width={250} title="Save and review history" detail="Timeline and home summaries" />
          <text x={30} y={520} className={styles.heading}>GENETICS WORKFLOW</text>
          <Node x={25} y={538} width={250} title="Upload and select active file" detail="Profile + check-in + ready file" />
          <Arrow d="M150 600V628" marker="flow-small-arrow" />
          <Node x={25} y={628} width={250} title="Request a separate run" detail="View the saved result when available" />
          <text x={30} y={724} className={styles.heading}>OPTIONAL INSIGHTS</text>
          <Node x={25} y={742} width={250} title="Ask with saved context" detail="Profile · recent entries · latest result" />
          <Arrow d="M150 804V832" marker="flow-small-arrow" optional />
          <Node x={25} y={832} width={250} title="AI response or fallback" detail="Requires a configured service" />
        </svg>
      </div>
      <figcaption>A saved check-in becomes part of the history. Recommendation generation is a separate workflow that also needs an active genetics file.</figcaption>
    </figure>
  );
}

export function VirgilArchitecture() {
  return (
    <figure className={styles.figure}>
      <div className={styles.canvas}>
        <svg className={styles.diagram + " " + styles.desktop} viewBox="0 0 760 690" role="img" aria-labelledby="arch-wide-title arch-wide-desc">
          <title id="arch-wide-title">Virgil system architecture</title>
          <desc id="arch-wide-desc">The mobile repository contains the React Native Expo app and an optional Node AI service. The second repository contains the older React web client and Flask genetics backend. Both generations share Supabase Auth, PostgreSQL records, and Storage. Flask reads patient context and files, uses curated rules and openFDA, and saves results. The app sends questions and saved context to the optional Node service, which calls OpenAI.</desc>
          <Marker id="arch-wide-arrow" />
          <rect x={10} y={10} width={330} height={188} rx="6" className={styles.group} />
          <rect x={420} y={10} width={330} height={188} rx="6" className={styles.group} />
          <text x={30} y={38} className={styles.heading}>MOBILE REPOSITORY</text>
          <text x={440} y={38} className={styles.heading}>INHERITED WEB / BACKEND REPOSITORY</text>
          <Node x={30} y={58} width={290} title="React Native · Expo · TypeScript" detail="Patient screens and navigation" accent />
          <Node x={450} y={58} width={270} title="React web interface" detail="Legacy genetics-upload experience" />
          <Node x={450} y={140} width={270} title="Python · Flask" />
          <Arrow d="M585 120V140" marker="arch-wide-arrow" />
          <Node x={30} y={300} width={290} title="Shared Supabase layer" detail="Auth · PostgreSQL · file Storage" accent />
          <Arrow d="M140 120V300" marker="arch-wide-arrow" both />
          <Arrow d="M320 331H395V163H450" marker="arch-wide-arrow" both />
          <Arrow d="M175 120V163H450" marker="arch-wide-arrow" optional />
          <text x={208} y={152} className={styles.detail}>Configured run request</text>
          <Arrow d="M720 89H738V260H255V300" marker="arch-wide-arrow" both />
          <text x={447} y={248} className={styles.detail}>Shared account and record access</text>
          <Node x={450} y={300} width={270} title="Curated genetics / drug rules" detail="SNP matching and context filters" />
          <Arrow d="M585 186V300" marker="arch-wide-arrow" />
          <Node x={450} y={408} width={270} title="openFDA" detail="Drug-information lookup" />
          <Arrow d="M720 163H732V439H720" marker="arch-wide-arrow" />
          <text x={33} y={405} className={styles.detail}>Flask reads inputs and saves results;</text>
          <text x={33} y={425} className={styles.detail}>the app reads saved recommendations.</text>
          <Node x={30} y={510} width={290} title="Optional Node Insights service" detail="Packaged in the mobile repository" />
          <Arrow d="M30 89H18V541H30" marker="arch-wide-arrow" optional both />
          <text x={33} y={493} className={styles.detail}>Question + saved context / answer</text>
          <Node x={450} y={510} width={270} title="OpenAI Responses API" detail="Structured informational response" />
          <Arrow d="M320 541H450" marker="arch-wide-arrow" optional both />
          <text x={30} y={637} className={styles.detail}>Solid lines: data and processing paths. Dashed lines: configured, optional service calls.</text>
        </svg>
        <svg className={styles.diagram + " " + styles.mobile} viewBox="0 0 300 1170" role="img" aria-labelledby="arch-small-title arch-small-desc">
          <title id="arch-small-title">Virgil system architecture</title>
          <desc id="arch-small-desc">The mobile app and inherited web Flask system share Supabase accounts, patient records, and documents. Flask processes patient context and genetics through curated rules and openFDA, then saves a result for the app to display. Optional Insights sends the question and saved context to a Node service in the mobile repository and then to OpenAI.</desc>
          <Marker id="arch-small-arrow" />
          <text x={25} y={28} className={styles.heading}>MOBILE REPOSITORY</text>
          <Node x={25} y={46} width={250} title="React Native · Expo" detail="TypeScript mobile interface" accent />
          <Arrow d="M150 108V146" marker="arch-small-arrow" both />
          <Node x={25} y={146} width={250} title="Shared Supabase layer" detail="Auth · PostgreSQL · Storage" accent />
          <Arrow d="M150 208V262" marker="arch-small-arrow" both />
          <text x={25} y={248} className={styles.heading}>WEB / BACKEND REPOSITORY</text>
          <Node x={25} y={262} width={250} title="Python · Flask backend" detail="Reads inputs · saves results" />
          <Node x={25} y={372} width={250} title="React web interface" detail="Legacy upload client" />
          <Arrow d="M275 403H289V293H275" marker="arch-small-arrow" />
          <Arrow d="M289 293V177H275" marker="arch-small-arrow" both />
          <Arrow d="M25 77H10V293H25" marker="arch-small-arrow" optional />
          <text x={25} y={470} className={styles.detail}>Flask processing path</text>
          <Arrow d="M25 293H10V523H25" marker="arch-small-arrow" />
          <Node x={25} y={492} width={250} title="Curated genetics / drug rules" detail="SNP matching · context filters" />
          <Arrow d="M25 293H10V623H25" marker="arch-small-arrow" />
          <Node x={25} y={592} width={250} title="openFDA" detail="Drug-information lookup" />
          <text x={25} y={700} className={styles.detail}>Results return through shared records.</text>
          <text x={25} y={752} className={styles.heading}>OPTIONAL INSIGHTS PATH</text>
          <Node x={25} y={776} width={250} title="Mobile Insights screen" detail="Question + saved patient context" />
          <Arrow d="M150 838V876" marker="arch-small-arrow" optional both />
          <Node x={25} y={876} width={250} title="Node Insights service" detail="In the mobile repository" />
          <Arrow d="M150 938V976" marker="arch-small-arrow" optional both />
          <Node x={25} y={976} width={250} title="OpenAI Responses API" detail="Structured informational response" />
          <text x={25} y={1092} className={styles.detail}>Dashed paths require configured services.</text>
          <text x={25} y={1112} className={styles.detail}>Shows code relationships, not hosting.</text>
        </svg>
      </div>
      <figcaption>Shared records connect the newer patient app to the inherited genetics system. This shows the prototype’s code relationships; production hosting is not established.</figcaption>
    </figure>
  );
}

export function VirgilRuleScope() {
  const rows = [
    { label: "SNP entries in active pathway", count: 21 },
    { label: "Gene–medication mappings", count: 9 },
    { label: "Medication metadata rules", count: 15 },
  ];
  return (
    <figure className={styles.figure}>
      <div className={styles.scopeChart} aria-label="Inherited rule-data scope: 21 SNP entries, 9 gene-medication mappings, and 15 medication metadata rules">
        {rows.map(row => (
          <div className={styles.barRow} key={row.label}>
            <span>{row.label}</span>
            <div className={styles.track} aria-hidden="true"><span className={styles.bar} style={{ width: (row.count / 25 * 100) + "%" }} /></div>
            <strong>{row.count}</strong>
          </div>
        ))}
        <div className={styles.axis} aria-hidden="true"><span>0</span><span>5</span><span>10</span><span>15</span><span>20</span><span>25</span></div>
      </div>
      <figcaption>Counts from the inherited rule data inspected on October 13, 2026. These describe dataset scope, rather than patient outcomes or recommendation accuracy.</figcaption>
    </figure>
  );
}
