import styles from "./ProjectDetails.module.css";

export default function TaskLoggerProjectDetails() {
  return (
    <details className={styles.details}>
      <summary>Read project details</summary>
      <div className={styles.body}>
        <section aria-labelledby="task-logger-context-title">
          <h3 id="task-logger-context-title">context</h3>
          <div className={styles.panel}>
            <p>I worked in a team of six, Team CSA, at PolyPrompt, Cal Poly’s weekend-long OpenAI hackathon. The challenge was to create an AI-powered product for student life. In the Studying category, my team tackled the “group project nightmare”: uneven workloads, missed deadlines, and unclear responsibilities.</p>
          </div>
        </section>

        <section aria-labelledby="task-logger-problem-title">
          <h3 id="task-logger-problem-title">the problem</h3>
          <div className={styles.panel}>
            <p>Dividing a group project can leave workloads uneven, dependencies unclear, and progress hard to follow. The challenge was turning a large brief into manageable tasks with clear ownership.</p>
          </div>
        </section>

        <section aria-labelledby="task-logger-planning-title">
          <h3 id="task-logger-planning-title">our solution</h3>
          <div className={styles.panel}>
            <p>Task Logger uses <strong>LLM task decomposition</strong> to turn requirements into editable tasks. Skills, deadlines, and dependencies guide planning; people review the draft before locking it and running assignment.</p>
            <p>I built project setup, skill profiles, and document-intake interfaces, then split planning into separate clarification and task-review pages. I connected the screens to existing APIs and added visible upload progress and error states.</p>
          </div>
        </section>

        <section aria-labelledby="task-logger-agents-title">
          <h3 id="task-logger-agents-title">the five agent roles</h3>
          <div className={styles.panel}>
            <p>I worked with a Codex <strong>multi-agent workflow with five main agents</strong>:</p>
            <ul>
              <li><strong>Coordinator agent:</strong> Wrote a task plan in Markdown and turned it into GitHub issues on the project board.</li>
              <li><strong>Agent 1 — platform/data:</strong> Authentication, database schemas, storage, and core APIs.</li>
              <li><strong>Agent 2 — AI planning:</strong> Clarifying questions, task generation, dependency validation, and assignment logic.</li>
              <li><strong>Agent 3 — frontend integration:</strong> Pages, dashboards, and connecting the UI to backend APIs.</li>
              <li><strong>QA/reviewer agent:</strong> Tested UI behavior, reviewed pull requests, and merged changes after checks passed.</li>
            </ul>
            <p>The three implementation agents worked in parallel with role-specific instructions. I also reviewed user workflows by hand and used Codex to adjust behavior; the team stepped in for manual PR review when needed.</p>
          </div>
        </section>

        <section aria-labelledby="task-logger-result-title">
          <h3 id="task-logger-result-title">the result</h3>
          <div className={styles.panel}>
            <p>I delivered setup, skills, upload, and task-review interfaces for the prototype. The app connects requirements to reviewed tasks, assignments, and shared workflow views, giving the project a foundation for further testing.</p>
          </div>
        </section>

        <section aria-labelledby="task-logger-learning-title">
          <h3 id="task-logger-learning-title">what I learned</h3>
          <div className={styles.panel}>
            <ul>
              <li><strong>Agent orchestration:</strong> I learned to split work into small issues with clear ownership. An upload feature involved an API builder, frontend integration, and a separate browser check.</li>
              <li><strong>Context engineering:</strong> I learned why agents need API contracts and handoff notes. The next run needs to know what’s finished, what’s blocked, and what to do next.</li>
              <li><strong>Parallel development:</strong> I learned how Git worktrees give separate Codex sessions their own checkout, so tasks can move forward at the same time.</li>
              <li><strong>Structured outputs + guardrails:</strong> I learned why generated tasks need a JSON schema and dependency checks. A convincing answer can still have missing fields or impossible task relationships.</li>
              <li><strong>Human-in-the-loop:</strong> I learned to make AI work reviewable: editable task drafts for users, pull requests for code, and visible errors or deterministic fallbacks when AI assignment fails.</li>
            </ul>
          </div>
        </section>
      </div>
    </details>
  );
}
