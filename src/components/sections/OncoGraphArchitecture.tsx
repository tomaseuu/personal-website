import styles from "./OncoGraphCaseStudy.module.css";

function Node({ x, y, width = 230, title, detail, accent = false }: { x: number; y: number; width?: number; title: string; detail: string; accent?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={width} height="64" rx="6" className={accent ? styles.accentNode : styles.diagramNode} />
      <text x={x + width / 2} y={y + 27} textAnchor="middle">{title}</text>
      <text x={x + width / 2} y={y + 47} textAnchor="middle" className={styles.detail}>{detail}</text>
    </g>
  );
}

export default function OncoGraphArchitecture() {
  return (
    <figure className={styles.figure}>
      <div className={styles.diagramFrame}>
        <svg className={styles.diagram} viewBox="0 0 760 480" role="img" aria-labelledby="onco-architecture-title onco-architecture-desc">
          <title id="onco-architecture-title">OncoGraph architecture in plain English</title>
          <desc id="onco-architecture-desc">The dashboard submits settings to FastAPI. A background task runs the shared Python graph analysis, reading local gene and interaction files. The command-line tool can use the same analysis modules. Results are stored in memory by default or in PostgreSQL when configured, then read by the API for the dashboard.</desc>
          <defs><marker id="onco-architecture-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 1L8 5L0 9" fill="none" stroke="#879b8d" strokeWidth="1.5" /></marker></defs>
          <Node x={265} y={15} title="Browser dashboard" detail="Next.js · settings and charts" accent />
          <Node x={265} y={125} title="FastAPI" detail="Validate inputs · issue a run ID" />
          <Node x={265} y={245} title="Python analysis" detail="Shared graph-analysis core" accent />
          <Node x={15} y={125} width={210} title="Command-line tool" detail="Another way to run the core" />
          <Node x={15} y={245} width={210} title="Local data files" detail="Seeds + protein interactions" />
          {["M380 79V125", "M380 189V245", "M225 157H245V264H265", "M225 277H265"].map((d) => <path key={d} d={d} className={styles.diagramLine} markerEnd="url(#onco-architecture-arrow)" />)}
          <rect x="175" y="353" width="410" height="100" rx="6" fill="#fafcfb" stroke="#d3dfd7" />
          <text x="195" y="378" className={styles.detail}>STORE THE RESULT IN ONE CONFIGURED PLACE</text>
          <Node x={190} y={385} width={180} title="Memory" detail="Default · clears on restart" />
          <Node x={390} y={385} width={180} title="PostgreSQL" detail="Optional saved runs" />
          <path d="M380 309V330H280V385" className={styles.diagramLine} markerEnd="url(#onco-architecture-arrow)" />
          <path d="M380 330H480V385" className={`${styles.diagramLine} ${styles.optional}`} markerEnd="url(#onco-architecture-arrow)" />
          <path d="M585 409H715V157H495" className={styles.diagramLine} markerEnd="url(#onco-architecture-arrow)" />
          <text x="548" y="215" className={styles.detail}>Read status + results</text>
          <path d="M495 157H660V47H495" className={styles.diagramLine} markerEnd="url(#onco-architecture-arrow)" />
          <text x="527" y="101" className={styles.detail}>Send results to the screen</text>
        </svg>
        <ol className={styles.mobileArchitecture}>
          <li><strong>Dashboard:</strong> Choose settings and send an analysis request.</li>
          <li><strong>FastAPI:</strong> Check the inputs and return a run ID.</li>
          <li><strong>Python core:</strong> Load the interaction files, run graph walks, and rank candidates in a background task.</li>
          <li><strong>Storage:</strong> Keep results in memory by default, or save them in PostgreSQL when configured.</li>
          <li><strong>Dashboard:</strong> Ask the API for status and show the finished results.</li>
          <li><strong>Command line:</strong> Reuse the same analysis modules without the dashboard.</li>
        </ol>
      </div>
      <figcaption>One analysis core, two ways to use it. Dashed storage is optional. Background tasks currently run inside the API process; this diagram shows the implemented code, not a production hosting setup.</figcaption>
    </figure>
  );
}
