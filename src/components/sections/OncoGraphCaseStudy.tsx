import Image from "next/image";
import WorkCaseStudyNav, { type WorkSection } from "./WorkCaseStudyNav";
import OncoGraphArchitecture from "./OncoGraphArchitecture";
import OncoGraphWalkDemo from "./OncoGraphWalkDemo";
import styles from "./WorkCaseStudy.module.css";
import contentStyles from "./CaseStudyContent.module.css";
import visuals from "./OncoGraphCaseStudy.module.css";

const SECTIONS: WorkSection[] = [
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "how-it-works", label: "How it works" },
  { id: "architecture", label: "Architecture" },
  { id: "engineering-decisions", label: "Why these choices" },
  { id: "results", label: "Results" },
  { id: "benefit", label: "How it helps" },
  { id: "reflection", label: "What I learned" },
];

const STACK = [
  ["Python + NetworkX", "Build and explore the gene-interaction map.", "Keep the graph algorithms in reusable analysis modules."],
  ["NumPy + pandas", "Organize numerical scores and feature tables.", "Give the calculations and ML model consistent inputs."],
  ["scikit-learn", "Train the optional logistic-regression ranker.", "Try a small, inspectable model alongside the graph score."],
  ["FastAPI + Pydantic", "Accept settings, validate them, and return run status/results.", "Let the browser use the Python analysis through a clear API."],
  ["Next.js + React + TypeScript", "Build the settings, presets, and results screens.", "Make an experiment usable without editing Python files."],
  ["Tailwind + Recharts", "Style the dashboard and draw its result charts.", "Put the settings and candidate scores into a readable interface."],
  ["PostgreSQL + SQLAlchemy", "Save runs and candidates when a database is configured.", "Keep storage optional for lightweight local exploration."],
  ["Docker Compose", "Start the API and database with a shared setup.", "Make the development environment easier to reproduce."],
];

function Figure({ file, alt, caption, width, height, plot = false, hero = false }: { file: string; alt: string; caption: string; width: number; height: number; plot?: boolean; hero?: boolean }) {
  const src = `/projects/oncograph/${file}`;
  return (
    <figure className={`${visuals.figure}${hero ? ` ${visuals.heroFigure}` : ""}`}>
      <div className={plot ? visuals.plotFrame : visuals.imageFrame} tabIndex={plot ? 0 : undefined} role={plot ? "group" : undefined} aria-label={plot ? `${alt}; scroll horizontally on smaller screens` : undefined}>
        <a href={src} target="_blank" rel="noreferrer" className={visuals.imageLink} aria-label={`Open full-size image: ${alt}`}>
          <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 760px) 90vw, 900px" priority={hero} />
        </a>
      </div>
      <figcaption>{caption}<a href={src} target="_blank" rel="noreferrer">Open full size ↗</a></figcaption>
    </figure>
  );
}

export default function OncoGraphCaseStudy() {
  const labelClass = `${styles.eyebrow} ${contentStyles.label}`;

  return (
    <main className={styles.page} data-study="oncograph">
      <div className={styles.layout}>
        <WorkCaseStudyNav sections={SECTIONS} backHref="/projects#cancer-network-analysis" backLabel="Back to all projects" navLabel="OncoGraph case study sections" />
        <div className={styles.content}>
          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <h1>OncoGraph</h1>
              <p className={styles.headline}>Growing a bioinformatics class project into a tool for <em>seeing connections</em> and exploring <span className={styles.headlineUnderline}>what to study next</span>.</p>
              <a className={styles.external} href="https://github.com/tomaseuu/cancer-graph-theory" target="_blank" rel="noreferrer">View GitHub repository ↗</a>
            </div>
            <dl className={styles.metadata}>
              <div><dt>Started as</dt><dd>Bioinformatics class project</dd></div>
              <div><dt>Grew into</dt><dd>Python analysis, API, and dashboard</dd></div>
              <div><dt>Tools</dt><dd>Python, FastAPI, Next.js</dd></div>
              <div><dt>Focus</dt><dd>Graph algorithms + exploratory ML</dd></div>
            </dl>
          </header>

          <Figure file="dashboard-results.png" alt="OncoGraph dashboard displaying a completed local run, its explanation, and ten ranked candidate genes" caption="Actual dashboard output from a small local run on October 14, 2026. CAMLG ranked first in this demonstration." width={1136} height={1137} hero />

          <div className={`${contentStyles.caseStudy} ${contentStyles.oncograph}`}>
            <section id="context" className={styles.section} aria-labelledby="onco-context-title">
              <h2 id="onco-context-title">context</h2>
              <div className={`${styles.panel} ${contentStyles.contextSummary}`}>
                <strong>What if the connections matter?</strong>
                <span className={contentStyles.summaryArrow} aria-hidden="true">→</span>
                <p>Start with known cancer-associated genes, then explore nearby parts of a protein-interaction network for candidates worth investigating.</p>
              </div>
              <div className={styles.panel}>
                <span className={labelClass}>From a class assignment to a personal exploration</span>
                <p>OncoGraph began as a bioinformatics project I worked on in class. The assignment used a structured Python workflow, and I got really interested in the patterns it was exploring. I wanted to see those patterns, build more visuals, and learn how machine learning could fit into the analysis.</p>
                <p>The original question was about network relationships: could the connections around known cancer genes help surface other candidates? I kept growing the project beyond the script, adding a reusable pipeline, an API, and a dashboard for running and inspecting experiments.</p>
              </div>
              <dl className={visuals.stats} aria-label="Verified dataset scope">
                <div><dt>Gene-labeled nodes</dt><dd>9,039</dd></div>
                <div><dt>Recorded interactions</dt><dd>24,350</dd></div>
                <div><dt>Starting seed genes</dt><dd>7</dd></div>
              </dl>
            </section>

            <section id="problem" className={styles.section} aria-labelledby="onco-problem-title">
              <h2 id="onco-problem-title">the problem</h2>
              <div className={styles.panel}>
                <span className={labelClass}>A useful experiment needed a clearer way to explore it</span>
                <p>The early version loaded files, ran simulations, opened plots, and exported candidate names from a Python script. Changing the simulation budget meant changing code, and longer runs could take time.</p>
                <p>I wanted to <strong>choose settings, follow a run, and understand the results in one place</strong>. The challenge was making the computation easier to use while being clear about what a network score could actually tell me.</p>
                <div className={visuals.beforeAfter}>
                  <div><strong>Earlier workflow</strong><p>Edit Python settings → run the script → inspect plots and a text export.</p></div>
                  <div><strong>Expanded workflow</strong><p>Choose a preset → submit a run → follow its status → inspect ranked results.</p></div>
                </div>
              </div>
            </section>

            <section id="solution" className={styles.section} aria-labelledby="onco-solution-title">
              <h2 id="onco-solution-title">the solution</h2>
              <div className={styles.panel}>
                <span className={labelClass}>A configurable analysis app</span>
                <p>I turned the experiments into reusable Python modules and connected them to a <strong>FastAPI service and Next.js dashboard</strong>. The dashboard lets someone choose seed genes, change settings, start an analysis, and inspect its progress and results.</p>
                <p>My work covered the analysis pipeline, background run tracking, optional database storage, an exploratory ML ranking mode, and the browser interface with presets, charts, and plain-English summaries.</p>
                <ol className={visuals.workflow} aria-label="OncoGraph experiment workflow">
                  <li><span>01</span><strong>Choose inputs</strong><p>Known genes and a simulation preset.</p></li>
                  <li><span>02</span><strong>Run the analysis</strong><p>Explore the graph and compare random sets.</p></li>
                  <li><span>03</span><strong>Follow status</strong><p>See running, completed, or failed.</p></li>
                  <li><span>04</span><strong>Inspect candidates</strong><p>Read scores, charts, and explanations.</p></li>
                </ol>
              </div>
              <Figure file="experiment-settings.png" alt="OncoGraph form for seed genes, restart probability, simulation steps, random sets, and optional ML ranking" caption="The actual analysis form. Presets supply starting settings, so changing an experiment no longer requires editing the script." width={1136} height={473} />
            </section>

            <section id="how-it-works" className={styles.section} aria-labelledby="onco-method-title">
              <h2 id="onco-method-title">how the ranking works</h2>
              <div className={styles.panel}>
                <span className={labelClass}>Think of it as walking around a map</span>
                <p>The network is a map of protein interactions labeled with gene names. A <strong>seed</strong> is one of the known genes used as a starting point. <strong>Random Walk with Restart</strong> repeatedly moves to neighboring nodes and sometimes jumps back to its starting seed.</p>
                <p>After many walks, non-seed nodes visited more often receive higher scores. The pipeline also compares how close the starting genes are with randomly selected gene sets. That comparison answers a different question from the candidate ranking.</p>
              </div>
              <OncoGraphWalkDemo />
              <Figure file="interaction-neighborhood.png" alt="Real 34-node interaction subgraph connecting seven purple seed genes, six green demo candidates, and gray connector nodes" caption="A real subset of the bundled network: 34 nodes and 37 interactions. Purple marks the seeds; green marks six candidates from the demonstration. Gray connectors are left unlabeled for readability." width={1820} height={1280} plot />
              <div className={styles.panel}>
                <span className={labelClass}>What the optional machine learning adds</span>
                <p>The ML mode gives each gene seven numerical features: its walk score, connection count, network influence, bridge role, closeness to other nodes, distance to a seed, and number of seed neighbors. A small <strong>logistic-regression model</strong> learns a weighted pattern from those numbers.</p>
                <p>The current ranking combines <strong>70% normalized walk score and 30% model output</strong>. That keeps the graph walk as the main signal while adding another ranking approach. These weights are a prototype choice, rather than a proven best combination.</p>
                <div className={visuals.blend} aria-label="ML ranking combines seventy percent normalized walk score and thirty percent model output"><span>70% graph walk</span><span>30% model</span></div>
                <p className={contentStyles.scopeNote}>The model uses seeds as positive examples and sampled non-seeds as negative examples. A non-seed is not necessarily unrelated to cancer, so this is an exploratory model that still needs independent evaluation.</p>
              </div>
            </section>

            <section id="architecture" className={styles.section} aria-labelledby="onco-architecture-section-title">
              <h2 id="onco-architecture-section-title">architecture &amp; tools</h2>
              <div className={styles.panel}>
                <span className={labelClass}>Give each part one understandable job</span>
                <p>The browser collects settings and shows results. The API checks requests and tracks runs. The Python core does the calculations. Results stay in memory by default, or in PostgreSQL when a database is configured.</p>
                <OncoGraphArchitecture />
                <div className={visuals.tableWrap}>
                  <table className={visuals.table}>
                    <caption className={contentStyles.scopeNote}>The stack, translated into everyday jobs.</caption>
                    <thead><tr><th scope="col">Tool</th><th scope="col">What it does</th><th scope="col">Why it fits</th></tr></thead>
                    <tbody>{STACK.map(([tool, job, reason]) => <tr key={tool}><td>{tool}</td><td>{job}</td><td>{reason}</td></tr>)}</tbody>
                  </table>
                </div>
                <dl className={visuals.stackList} aria-label="Tech stack explained">
                  {STACK.map(([tool, job, reason]) => <div key={tool}><dt>{tool}</dt><dd>{job}</dd><dd><strong>Why:</strong> {reason}</dd></div>)}
                </dl>
              </div>
            </section>

            <section id="engineering-decisions" className={styles.section} aria-labelledby="onco-decisions-title">
              <h2 id="onco-decisions-title">why I built it this way</h2>
              <div className={styles.panel}>
                <span className={labelClass}>Reusable pieces, visible work, optional complexity</span>
                <ul className={contentStyles.roleList}>
                  <li><strong>Modules instead of one long script:</strong> The graph loader, walk, ranking, and ML code can be reused from both the command line and API. I can change one part without rewriting the whole experiment.</li>
                  <li><strong>Background runs:</strong> The API returns a run ID while the computation continues. The dashboard asks for updates, so a longer analysis has a visible running state instead of one long request.</li>
                  <li><strong>Optional storage:</strong> I can explore locally without setting up a database. PostgreSQL adds saved results when configured; the memory-only mode clears when the API restarts.</li>
                  <li><strong>Presets and explanations:</strong> Smaller settings make a useful demonstration; larger budgets allow more sampling. Showing the parameters and score explanations helps people understand the tradeoff.</li>
                </ul>
              </div>
            </section>

            <section id="results" className={styles.section} aria-labelledby="onco-results-title">
              <h2 id="onco-results-title">the result</h2>
              <div className={styles.panel}>
                <span className={labelClass}>An experiment I can run and inspect</span>
                <p>The result is an implemented analysis pipeline with a browser workflow: choose settings, submit a run, follow status, and inspect candidates. A small local run completed and returned ten ranked genes, with <strong>CAMLG first in that demonstration</strong>.</p>
                <p>The graph loader reproduced 9,039 nodes, 24,350 interactions, and all seven seeds. The network has 158 separate connected components. Three existing ML unit tests passed, covering score normalization, small-graph features, and exclusion of seeds from candidate results.</p>
              </div>
              <Figure file="candidate-ranking.png" alt="Ten candidate genes ranked by average walk visit frequency; CAMLG leads with about 4.51 percent in the local demonstration" caption="Fresh RWR-only demonstration: restart chance 0.3, 1,000 steps per walk, 20 random sets, ten candidates, fixed random seed 42. Bar values are visit frequencies, not cancer probabilities." width={1820} height={1064} plot />
              <div className={styles.panel}>
                <p>The demo’s seed-set p-value was 0.05. It compares the <strong>starting set as a group</strong> with random sets; it does not measure how likely each candidate is to cause cancer. This quick run verifies the workflow, while biological prediction quality still needs a separate benchmark.</p>
                <p className={contentStyles.scopeNote}>The figures and app captures come from a local demonstration on October 14, 2026. The full-network ML mode and PostgreSQL persistence were not exercised in this verification.</p>
              </div>
            </section>

            <section id="benefit" className={styles.section} aria-labelledby="onco-benefit-title">
              <h2 id="onco-benefit-title">how this helps</h2>
              <div className={styles.panel}>
                <span className={labelClass}>A place to start the next investigation</span>
                <p>For a student or researcher, OncoGraph provides a <strong>shorter list of candidates to investigate and a way to compare experiment settings</strong>. The dashboard brings the scores and their explanations together, making the analysis easier to inspect than a list of exported names.</p>
                <p>Its role is research exploration and learning. A higher score suggests where to look next in this network; it does not establish a cancer gene or support a clinical decision. That distinction is part of making the tool useful.</p>
              </div>
            </section>

            <section id="reflection" className={styles.section} aria-labelledby="onco-reflection-title">
              <h2 id="onco-reflection-title">what I learned</h2>
              <div className={styles.panel}>
                <span className={labelClass}>Growing the project beyond the assignment</span>
                <p>I started with a class project and kept going because I wanted to see more of what I could do with it. Building the visuals and dashboard gave me a way to explore the patterns, learn about graph features and machine learning, and connect the biology to the software I was building.</p>
                <p>I learned that an analysis tool needs more than an algorithm: it needs clear inputs, progress states, readable outputs, and careful explanations. I also learned to separate a ranking score from evidence that a biological claim is true.</p>
                <p>Next, I would strengthen seed-input validation, save every experiment setting with its results, test candidate quality against independent labels, and move longer jobs into a durable worker queue so runs can survive an API restart.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
