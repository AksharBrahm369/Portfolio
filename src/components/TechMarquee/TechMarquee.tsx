"use client";

import styles from "./TechMarquee.module.css";

const techItems = [
  "Next.js", "React", "Python", "API", "SQL",
  "GitHub", "AI Prompting"
];

export default function TechMarquee() {
  const doubled = [...techItems, ...techItems];

  return (
    <div className={styles.wrapper}>
      <div className={styles.fade} />
      <div className={styles.track}>
        {doubled.map((tech, i) => (
          <span key={`${tech}-${i}`} className={styles.item}>
            <span className={styles.dot}>◆</span>
            {tech}
          </span>
        ))}
      </div>
      <div className={`${styles.fade} ${styles.fadeRight}`} />
    </div>
  );
}
