import styles from "./ExecutionTrace.module.css";
import Reveal from "./Reveal";

export default function ExecutionTrace() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <div className={styles.wrap}>
            <div className={styles.terminal}>
              <div className={styles.head}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.title}>mcp execution trace</span>
              </div>
              <div className={styles.body}>
                <div className={styles.prompt}>
                  &gt; &ldquo;Find my MCP report and mark it complete.&rdquo;
                </div>
                <div className={styles.thinking}>Analyzing request…</div>
                <div className={styles.call}>&rarr; search_task</div>
                <div className={styles.check}>&#10003; Task found</div>
                <div className={styles.call}>&rarr; complete_task</div>
                <div className={styles.check}>&#10003; Completed</div>
                <div className={styles.ready}>
                  READY
                  <span className="cursor" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
