"use client";

import { useApp } from "@/context/AppContext";
import { translations } from "@/translations";
import styles from "./PhilosophySection.module.css";

export default function PhilosophySection() {
  const { language } = useApp();
  const t = translations[language].philosophy;

  return (
    <section id="about" className={styles.section}>
      <div className={styles.topDivider} />
      <div className={styles.container}>
        <div className={styles.coFounderWrapper}>
          <a
            href="https://niramaystudio.qzz.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.coFounderLink}
          >
            co-founder of NIramay Studio
          </a>
        </div>

        <div className={styles.sectionLabel}>
          <span className={styles.labelLine} />
          <span className={styles.labelText}>{t.label}</span>
          <span className={styles.labelLine} />
        </div>

        <h2 className={styles.mainHeading}>
          {t.heading}
          <br />
          <span className={styles.headingAccent}>{t.accent}</span>
        </h2>

        <div className={styles.narrativeContainer}>
          {/* Block 01 */}
          <div className={styles.narrativeBlock}>
            <span className={styles.narrativeNumber}>{t.pillars[0] ? "01" : "01"}</span>
            <p className={styles.narrativeText}>
              <span className={styles.highlightCyan}>{t.n1h}</span>
              {t.n1.replace(t.n1h, "")}
            </p>
          </div>
          <div className={styles.narrativeDivider} />

          {/* Block 02 */}
          <div className={styles.narrativeBlock}>
            <span className={styles.narrativeNumber}>02</span>
            <p className={styles.narrativeText}>
              {t.n2pre}
              <span className={styles.highlightViolet}>{t.n2h}</span>
              {t.n2post}
            </p>
          </div>
          <div className={styles.narrativeDivider} />

          {/* Block 03 */}
          <div className={styles.narrativeBlock}>
            <span className={styles.narrativeNumber}>03</span>
            <p className={styles.narrativeText}>
              {t.n3pre}
              <span className={styles.highlightTeal}>{t.n3h}</span>
              {t.n3post}
            </p>
          </div>
        </div>

        <div className={styles.concludingWrapper}>
          <div className={styles.concludingLine} />
          <p className={styles.concluding}>
            {t.c1}
            <br />
            <span className={styles.concludingAccent}>{t.c2}</span>
          </p>
          <div className={styles.concludingLine} />
        </div>

        <div className={styles.pillarsGrid}>
          {t.pillars.map((pillar) => (
            <div key={pillar.label} className={styles.pillar}>
              <span className={styles.pillarIcon}>{pillar.icon}</span>
              <span className={styles.pillarLabel}>{pillar.label}</span>
              <span className={styles.pillarDesc}>{pillar.desc}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottomDivider} />
    </section>
  );
}
