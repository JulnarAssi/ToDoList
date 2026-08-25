import styles from "./Hero.module.css";
import RequestDemo from "./RequestDemo";

const GITHUB_URL = "https://github.com/JulnarAssi/ToDoList";

const SYSTEM_STATUS = [
  "MCP SERVER · READY",
  "7 TOOLS REGISTERED",
  "LOCAL STORAGE CONNECTED",
  "GOOGLE CALENDAR CONNECTED",
];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="shell">
        <div className={styles.content}>
          <div>
            <div className={styles.badgeRow}>
              <span className={styles.tag}>Model Context Protocol</span>
            </div>

            <h1 className={styles.title}>
              To-Do List <span className={styles.accent}>MCP</span>
            </h1>

            <p className={styles.tagline}>
              Turn natural language into organized action.
            </p>

            <p className={styles.description}>
              An MCP server that lets an AI assistant manage a real,
              persistent to-do list — and create actual events on Google
              Calendar — through seven structured tools instead of guesswork.
            </p>

            <div className={styles.actions}>
              <a className="btn btn-primary" href="#architecture">
                Explore Project
              </a>
              <a
                className="btn btn-secondary"
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer noopener"
              >
                View on GitHub
              </a>
            </div>

            <div className={styles.statusRow} aria-hidden="true">
              {SYSTEM_STATUS.map((label) => (
                <span key={label} className="pill">
                  <span className="pillDot" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <RequestDemo />
        </div>
      </div>
    </section>
  );
}
