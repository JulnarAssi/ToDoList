import styles from "./Team.module.css";
import Reveal from "./Reveal";
import { team } from "../data/team";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Team() {
  return (
    <section id="team" className="section section--tight">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Team</span>
            <h2>Meet the Team</h2>
            <p>Three students, one MCP server, seven tools.</p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 70}>
              <div className={styles.card}>
                <div className={styles.accentBar} aria-hidden="true" />
                <div className={styles.avatar}>
                  {member.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={member.image} alt={member.name} />
                  ) : (
                    initials(member.name)
                  )}
                </div>
                <div>
                  <div className={styles.name}>{member.name}</div>
                  <div className={styles.role}>{member.role}</div>
                </div>
                {(member.github || member.linkedin) && (
                  <div className={styles.links}>
                    {member.github && (
                      <a
                        className={styles.link}
                        href={member.github}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        className={styles.link}
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        LinkedIn ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
