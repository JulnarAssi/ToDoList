import styles from "./Academy.module.css";
import Reveal from "./Reveal";

export default function Academy() {
  return (
    <section className="section section--tight">
      <div className="shell">
        <Reveal>
          <div className={styles.card}>
            <span className="eyebrow">Training program</span>
            <h3 className={styles.heading}>Built during NextFlows Academy</h3>
            <p className={styles.copy}>
              This project was developed during the six-week &ldquo;Building
              an MCP for an AI Engine&rdquo; training program.
            </p>
            <a
              className={styles.link}
              href="https://nextflows.ai/academy"
              target="_blank"
              rel="noreferrer noopener"
            >
              NextFlows Academy ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
