import styles from "./Highlights.module.css";
import Reveal from "./Reveal";
import { highlights } from "../data/highlights";

export default function Highlights() {
  return (
    <section id="highlights" className="section section--tight">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Project highlights</span>
            <h2>What actually shipped.</h2>
            <p>
              Verified against the repository — no invented metrics or
              benchmarks.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className={styles.grid}>
            {highlights.map((item) => (
              <div key={item} className={styles.item}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                <span className={styles.text}>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
