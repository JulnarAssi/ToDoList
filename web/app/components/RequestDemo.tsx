"use client";

import { useEffect, useState } from "react";
import styles from "./RequestDemo.module.css";

const STEPS = [
  {
    id: "user",
    label: "User",
    body: "\u201cAdd my AI training report for tomorrow and make it high priority.\u201d",
    variant: "step--user",
  },
  {
    id: "ai",
    label: "AI Assistant",
    body: "Understanding intent\u2026",
    variant: "step--ai",
  },
  {
    id: "mcp",
    label: "MCP",
    body: "> add_task",
    variant: "step--mcp",
  },
  {
    id: "action",
    label: "Action",
    body: "Task created \u2713",
    variant: "step--action",
  },
];

const STEP_INTERVAL_MS = 2200;
const PAUSE_MS = 900;

export default function RequestDemo() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setActiveStep(STEPS.length - 1);
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    const advance = (step: number) => {
      if (step >= STEPS.length) {
        timeout = setTimeout(() => {
          setActiveStep(0);
          timeout = setTimeout(() => advance(1), STEP_INTERVAL_MS);
        }, PAUSE_MS);
        return;
      }
      timeout = setTimeout(() => {
        setActiveStep(step);
        advance(step + 1);
      }, STEP_INTERVAL_MS);
    };

    advance(1);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.card} aria-hidden="true">
      <div className={styles.header}>
        <span>mcp request</span>
        <span className={styles.live}>
          <span className={styles.liveDot} />
          live
        </span>
      </div>
      <div className={styles.steps}>
        {STEPS.map((step, i) => (
          <div
            key={step.id}
            className={`${styles.step} ${styles[step.variant]} ${
              i <= activeStep ? styles.active : ""
            }`}
          >
            <span className={styles.stepLabel}>{step.label}</span>
            <span className={styles.stepBody}>{step.body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
