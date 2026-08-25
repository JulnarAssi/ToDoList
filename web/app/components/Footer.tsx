import styles from "./Footer.module.css";
import { team } from "../data/team";

const GITHUB_URL = "https://github.com/JulnarAssi/ToDoList";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.top}>
          <h3 className={styles.closing}>
            From simple tasks to intelligent workflows.
          </h3>
          <div className={styles.actions}>
            <a
              className="btn btn-primary"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>To-Do List MCP · {year}</span>
          <div className={styles.teamLinks}>
            {team
              .filter(
                (member): member is typeof member & { github: string } =>
                  Boolean(member.github),
              )
              .map((member) => (
                <a
                  key={member.name}
                  href={member.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {member.name}
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
