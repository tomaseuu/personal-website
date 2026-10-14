"use client";

import { useState } from "react";
import styles from "./OncoGraphCaseStudy.module.css";

const NODES = [
  { x: 70, y: 140, label: "Seed" },
  { x: 210, y: 65, label: "A" },
  { x: 210, y: 215, label: "B" },
  { x: 370, y: 65, label: "C" },
  { x: 370, y: 215, label: "D" },
];
const NEIGHBORS = [[1, 2], [0, 3], [0, 3, 4], [1, 2, 4], [2, 3]];
const EDGES = [[0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [3, 4]];
const INITIAL = { current: 0, steps: 0, restarts: 0, visits: [0, 0, 0, 0, 0] };

export default function OncoGraphWalkDemo() {
  const [walk, setWalk] = useState(INITIAL);
  const [restartChance, setRestartChance] = useState(30);

  function takeSteps() {
    const choices = Array.from({ length: 10 }, () => [Math.random(), Math.random()]);
    setWalk((previous) => {
      let current = previous.current;
      let restarts = previous.restarts;
      const visits = [...previous.visits];
      for (const [restart, move] of choices) {
        visits[current] += 1;
        if (restart < restartChance / 100) {
          current = 0;
          restarts += 1;
        } else {
          const neighbors = NEIGHBORS[current];
          current = neighbors[Math.floor(move * neighbors.length)];
        }
      }
      return { current, restarts, visits, steps: previous.steps + 10 };
    });
  }

  return (
    <figure className={styles.figure}>
      <div className={styles.walk}>
        <p>Start at a known gene, move to a neighbor, and sometimes return to the starting point. Try a higher restart chance to keep the walk closer to the seed.</p>
        <svg viewBox="0 0 450 285" role="img" aria-labelledby="onco-walk-title onco-walk-desc">
          <title id="onco-walk-title">Try a random walk with restart</title>
          <desc id="onco-walk-desc">A made-up five-node graph. The purple seed connects to A and B, which connect to C and D. The green outline shows the walk’s current location.</desc>
          {EDGES.map(([a, b]) => <line key={`${a}-${b}`} x1={NODES[a].x} y1={NODES[a].y} x2={NODES[b].x} y2={NODES[b].y} stroke="#c5d6cb" strokeWidth="2" />)}
          {NODES.map((node, index) => (
            <g key={node.label}>
              <circle cx={node.x} cy={node.y} r={32} fill={index === 0 ? "#8262a0" : "#edf3ef"} stroke={walk.current === index ? "#407564" : "#d3dfd7"} strokeWidth={walk.current === index ? 4 : 1.5} />
              <text x={node.x} y={node.y + 5} textAnchor="middle" className={index === 0 ? styles.seedText : undefined}>{node.label}</text>
              <text x={node.x} y={node.y + 54} textAnchor="middle">{walk.visits[index]} visits</text>
            </g>
          ))}
        </svg>
        <div className={styles.walkControls}>
          <button type="button" onClick={takeSteps}>Walk 10 steps</button>
          <button type="button" onClick={() => setWalk(INITIAL)}>Start over</button>
        </div>
        <label className={styles.restartControl}>
          Restart chance: {restartChance}%
          <input type="range" min="0" max="100" step="10" value={restartChance} onChange={(event) => { setRestartChance(Number(event.target.value)); setWalk(INITIAL); }} aria-label="Restart chance" />
        </label>
        <p className={styles.walkStatus} aria-live="polite" aria-atomic="true">{walk.steps} steps · {walk.restarts} restarts · currently at {NODES[walk.current].label}</p>
      </div>
      <figcaption>This interactive example uses an invented network to explain the algorithm. The real analysis repeats walks from all seven seed genes and ranks non-seed nodes by average visit frequency.</figcaption>
    </figure>
  );
}
