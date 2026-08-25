import styles from "./Calendar.module.css";
import Reveal from "./Reveal";

export default function Calendar() {
  return (
    <section id="calendar" className="section section--tight">
      <div className="shell">
        <div className={styles.wrap}>
          <Reveal>
            <div className={styles.copy}>
              <span className="eyebrow">Google Calendar integration</span>
              <h2>One tool, a real external API.</h2>
              <p>
                The MCP server integrates with the real Google Calendar API
                using OAuth 2.0. The <code>create_calendar_event</code>{" "}
                tool lets the assistant create an actual event on the
                user&apos;s primary calendar — not a simulated one.
              </p>
              <p>
                OAuth credentials and the authorized token are read from a
                git-ignored <code>.secrets/</code> directory on the server.
                They never reach the frontend or this website.
              </p>
              <div className={styles.example}>
                &ldquo;Schedule &lsquo;Prepare Demo Day&rsquo; tomorrow from
                4 PM to 5 PM.&rdquo;
              </div>
            </div>
          </Reveal>

          <div className={styles.rightCol}>
            <Reveal delay={120}>
              <div className={styles.diagram}>
                <div className={styles.node}>
                  <span>AI Request</span>
                  <span className={styles.smallTag}>structured args</span>
                </div>
                <div className={styles.arrow} aria-hidden="true">
                  ↓
                </div>
                <div className={`${styles.node} ${styles.nodeExternal}`}>
                  <span>create_calendar_event</span>
                  <span className={styles.smallTag}>MCP tool</span>
                </div>
                <div className={styles.arrow} aria-hidden="true">
                  ↓
                </div>
                <div className={`${styles.node} ${styles.nodeExternal}`}>
                  <span>Google Calendar API</span>
                  <span className={styles.smallTag}>OAuth 2.0</span>
                </div>
                <div className={styles.arrow} aria-hidden="true">
                  ↓
                </div>
                <div className={styles.node}>
                  <span>Calendar Event ✓</span>
                  <span className={styles.smallTag}>user&apos;s calendar</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className={styles.eventCard}>
                <div className={styles.eventCardHead}>
                  <span className="pill">
                    <span className="pillDot" />
                    GOOGLE CALENDAR · SYNCED
                  </span>
                </div>
                <div className={styles.eventRow} aria-hidden="true">
                  <div className={styles.eventDate}>
                    <span className={styles.eventMonth}>AUG</span>
                    <span className={styles.eventDay}>25</span>
                  </div>
                  <div className={styles.eventBody}>
                    <span className={styles.eventTitle}>Prepare Demo Day</span>
                    <span className={styles.eventTime}>4:00 PM – 5:00 PM</span>
                    <span className={styles.eventCreated}>
                      &#10003; Event created
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
