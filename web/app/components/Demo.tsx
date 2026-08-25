import styles from "./Demo.module.css";
import Reveal from "./Reveal";

export default function Demo() {
  return (
    <section id="demo" className="section section--tight">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">See it in action</span>
            <h2>From Request to Action</h2>
            <p>
              Two real conversations, tool call by tool call — from{" "}
              <code>examples/conversations.md</code>.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          <Reveal>
            <div className={styles.terminal}>
              <div className={styles.terminalHead}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.terminalTitle}>workflow — add a task</span>
              </div>
              <div className={styles.body}>
                <Reveal delay={0}>
                  <div className={styles.userLine}>
                    <span className={styles.userLabel}>User</span>
                    &ldquo;I have to submit my AI training report tomorrow. Add
                    it to my tasks and make it high priority.&rdquo;
                  </div>
                </Reveal>
                <Reveal delay={150}>
                  <div className={styles.step}>
                    <span className={styles.call}>&gt; add_task</span>
                    <span>title, priority: &quot;high&quot;, due_date</span>
                  </div>
                </Reveal>
                <Reveal delay={300}>
                  <div className={styles.result}>
                    <span className={styles.resultLine}>TASK SAVED ✓</span>
                    <span className={styles.resultId}>
                      &ldquo;Submit AI training report&rdquo; · high priority
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className={styles.terminal}>
              <div className={styles.terminalHead}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.terminalTitle}>
                  workflow — find &amp; complete a task
                </span>
              </div>
              <div className={styles.body}>
                <Reveal delay={0}>
                  <div className={styles.userLine}>
                    <span className={styles.userLabel}>User</span>
                    &ldquo;I finally finished that MCP report I had on my
                    list. Mark it as done.&rdquo;
                  </div>
                </Reveal>
                <Reveal delay={150}>
                  <div className={styles.step}>
                    <span className={styles.call}>&gt; search_task</span>
                    <span>keyword: &quot;MCP report&quot;</span>
                  </div>
                </Reveal>
                <Reveal delay={300}>
                  <div className={styles.result}>
                    <span className={styles.resultLine}>TASK FOUND</span>
                    <span className={styles.resultId}>ID: #######</span>
                  </div>
                </Reveal>
                <Reveal delay={450}>
                  <div className={styles.step}>
                    <span className={styles.call}>&gt; complete_task</span>
                    <span>id: (from search result)</span>
                  </div>
                </Reveal>
                <Reveal delay={600}>
                  <div className={styles.result}>
                    <span className={styles.resultLine}>COMPLETED ✓</span>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
