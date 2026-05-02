"use client";

import { useApp } from "@/context/AppContext";
import { translations } from "@/translations";
import styles from "./ExpertiseSection.module.css";

const cardMeta = [
  { iconColor: "#a855f7", iconGlow: "rgba(168,85,247,0.3)", accent: "violet" },
  { iconColor: "#00f5ff", iconGlow: "rgba(0,245,255,0.3)", accent: "cyan" },
  { iconColor: "#e879f9", iconGlow: "rgba(232,121,249,0.3)", accent: "magenta" },
  { iconColor: "#22c55e", iconGlow: "rgba(34,197,94,0.3)", accent: "green" },
  { iconColor: "#eab308", iconGlow: "rgba(234,179,8,0.3)", accent: "yellow" },
  { iconColor: "#f97316", iconGlow: "rgba(249,115,22,0.3)", accent: "orange" },
];

export default function ExpertiseSection() {
  const { language } = useApp();
  const t = translations[language].expertise;

  return (
    <section id="expertise" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span>{t.label}</span>
            <span className={styles.labelLine} />
          </div>
          <h2 className={styles.heading}>
            <span className={styles.briefcaseIcon}>💼</span>
            {t.heading}{" "}
            <span className={styles.headingAccent}>{t.accent}</span>
          </h2>
          <p className={styles.subheading}>
            <span className={styles.subheadingText}>{t.subheading}</span>
            <span className={styles.flowWrapper}>
              {t.flow.map((f, i) => (
                <span key={f}>
                  <span className={styles.flow}>{f}</span>
                  {i < t.flow.length - 1 && <span className={styles.arrow}>→</span>}
                </span>
              ))}
            </span>
          </p>
        </div>

        <div className={styles.grid}>
          {t.cards.map((card, i) => {
            const meta = cardMeta[i];
            return (
              <div
                key={card.title}
                className={`${styles.card} ${styles[`card_${meta.accent}`]}`}
              >
                <div className={styles.cardHeader}>
                  <div
                    className={styles.cardIcon}
                    style={{ color: meta.iconColor, boxShadow: `0 0 18px ${meta.iconGlow}` }}
                  >
                    ⚡
                  </div>
                  <div className={styles.cardTitleGroup}>
                    <h3 className={styles.cardTitle} style={{ color: meta.iconColor }}>{card.title}</h3>
                    <span className={styles.cardMetric}>{card.metric}</span>
                  </div>
                </div>
                <p className={styles.cardDesc}>{card.desc}</p>
                <div className={styles.cardTags}>
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className={styles.cardTag}
                      style={{
                        color: meta.iconColor,
                        borderColor: meta.iconGlow,
                        background: meta.iconGlow.replace("0.3", "0.06"),
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className={styles.cardGlowLine}
                  style={{ background: `linear-gradient(90deg, transparent, ${meta.iconColor}, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
