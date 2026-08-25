import styles from "./Toolbox.module.css";
import Reveal from "./Reveal";
import { tools } from "../data/tools";

export default function Toolbox() {
  return (
    <section id="tools" className="section section--tight">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">MCP toolbox</span>
            <h2>Seven tools, one job each.</h2>
            <p>
              Every tool is registered directly from{" "}
              <code>src/tools/</code>, validated with Zod, and named for
              exactly what it does. Hover a card to see its shape.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {tools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 60}>
              <div
                className={`${styles.card} ${
                  tool.kind === "external" ? styles["card--external"] : ""
                }`}
              >
                <div className={styles.head}>
                  <span className={styles.icon} aria-hidden="true">
                    {tool.icon}
                  </span>
                  <span className={styles.name}>{tool.name}</span>
                  {tool.kind === "external" && (
                    <span className={styles.externalBadge}>EXTERNAL API</span>
                  )}
                </div>
                <p className={styles.desc}>{tool.description}</p>
                <div className={styles.footer}>
                  <span className={styles.tag}>MCP TOOL</span>
                  <div className={styles.inputs}>
                    {tool.inputs.map((input) => (
                      <span key={input} className={styles.inputChip}>
                        {input}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.example}>
                  <div className={styles.exampleBlock}>
                    <span className={styles.exampleLabel}>Input</span>
                    {tool.example.input.map((line) => (
                      <span key={line} className={styles.exampleLine}>
                        {line}
                      </span>
                    ))}
                  </div>
                  <div className={styles.exampleBlock}>
                    <span className={styles.exampleLabel}>Output</span>
                    <span className={styles.exampleOutput}>
                      {tool.example.output}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
