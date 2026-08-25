import styles from "./Problem.module.css";
import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section className="section">
      <div className="shell">
        <div className={styles.wrap}>
          <Reveal>
            <div className={styles.statement}>
              <span className="eyebrow">The gap</span>
              <h2>Understanding a request isn&apos;t the same as acting on it.</h2>
              <p>
                An AI assistant can follow what you ask for. MCP is what lets
                it actually do something about it — through real,
                structured tools instead of a plain text reply.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className={styles.compare}>
              <div className={`${styles.card} ${styles.cardBad}`}>
                <span className={styles.cardLabel}>Without MCP</span>
                <div className={styles.line}>&gt; user: add a high priority task</div>
                <div className={styles.line}>&lt; &quot;Sure, I&apos;ve noted that.&quot;</div>
                <div className={styles.line}>Nothing saved. Nothing to list later.</div>
              </div>
              <div className={`${styles.card} ${styles.cardGood}`}>
                <span className={styles.cardLabel}>With this MCP server</span>
                <div className={styles.line}>&gt; user: add a high priority task</div>
                <div className={`${styles.line} ${styles.lineDone}`}>
                  &gt; add_task(title, priority: &quot;high&quot;)
                </div>
                <div className={`${styles.line} ${styles.lineDone}`}>
                  Task #1220675 saved to data/tasks.json
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
