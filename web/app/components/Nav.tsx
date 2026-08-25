"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import ThemeToggle from "./ThemeToggle";

const GITHUB_URL = "https://github.com/JulnarAssi/ToDoList";

const SECTIONS = [
  { id: "architecture", label: "Architecture" },
  { id: "tools", label: "Tools" },
  { id: "demo", label: "Demo" },
  { id: "calendar", label: "Calendar" },
  { id: "team", label: "Team" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    SECTIONS.forEach((section) => {
      const node = document.getElementById(section.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <span className={styles.prompt}>&gt;</span>
          todo-list-mcp
        </a>
        <div className={`${styles.links} ${styles.linksHideOnMobile}`}>
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={active === section.id ? styles.active : ""}
            >
              {section.label}
            </a>
          ))}
        </div>
        <div className={styles.actions}>
          <ThemeToggle />
          <a
            className={styles.cta}
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </nav>
  );
}
