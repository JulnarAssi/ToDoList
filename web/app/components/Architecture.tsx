import { Fragment } from "react";
import styles from "./Architecture.module.css";
import Reveal from "./Reveal";

const CHAIN = [
  { kicker: "Person", title: "User", variant: "node--user" },
  { kicker: "MCP host", title: "AI Assistant", variant: "node--ai" },
  { kicker: "This project", title: "To-Do List MCP Server", variant: "node--mcp" },
  { kicker: "src/tools/*", title: "Tool Layer", variant: "node--tool" },
  { kicker: "data/tasks.json", title: "Local Task Storage", variant: "node--storage" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="section">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Architecture</span>
            <h2>One request, five steps, two destinations.</h2>
            <p>
              Every request follows the same path through the server. Local
              task tools stay on disk; one tool branches out to a real
              external API.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className={styles.diagram}>
            <div className={styles.mainRow}>
              {CHAIN.map((node, i) => (
                <Fragment key={node.title}>
                  <div className={`${styles.node} ${styles[node.variant]}`}>
                    <span className={styles.nodeKicker}>{node.kicker}</span>
                    <span className={styles.nodeTitle}>{node.title}</span>
                  </div>
                  {i < CHAIN.length - 1 && (
                    <div className={styles.arrow} aria-hidden="true">
                      →
                    </div>
                  )}
                </Fragment>
              ))}
            </div>

            <div className={styles.branch}>
              <span className={styles.branchConnector} aria-hidden="true">
                ⬆ tool layer
              </span>
              <span className={styles.branchLabel}>
                Google Calendar branches from the tool layer
              </span>
              <div className={styles.branchLine}>
                <span className={styles.branchNode}>create_calendar_event</span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
                <span className={styles.branchNode}>Google Calendar API</span>
                <span className={styles.externalTag}>external · OAuth 2.0</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
