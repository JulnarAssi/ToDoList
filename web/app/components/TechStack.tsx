import styles from "./TechStack.module.css";
import Reveal from "./Reveal";

const STACK = [
  "Model Context Protocol",
  "TypeScript",
  "Node.js 20+",
  "Zod",
  "googleapis (Google Calendar API)",
  "OAuth 2.0",
  "MCP Inspector",
  "Git / GitHub",
];

export default function TechStack() {
  return (
    <section className="section section--tight">
      <div className="shell">
        <Reveal>
          <div className={styles.head}>
            <span className="eyebrow">Tech stack</span>
            <h3 className={styles.heading}>Built with</h3>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className={styles.strip}>
            {STACK.map((item) => (
              <span key={item} className={styles.chip}>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
