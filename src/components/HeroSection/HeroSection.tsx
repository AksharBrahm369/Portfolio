"use client";

import { CheckCircle2, ArrowRight, Download, Sparkles } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { translations } from "@/translations";
import { TypeAnimation } from "react-type-animation";
import styles from "./HeroSection.module.css";

const tagVariants = ["cyan", "violet", "teal"] as const;

export default function HeroSection() {
  const { language } = useApp();
  const t = translations[language].hero;

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.ambientLines} aria-hidden="true">
        <div className={styles.line1} />
        <div className={styles.line2} />
        <div className={styles.line3} />
      </div>

      <div className={styles.container}>
        {/* ── LEFT: Profile ── */}
        <div className={styles.profileSide}>
          <div className={styles.profileWrapper}>
            <div className={styles.spinRingOuter} />
            <div className={styles.spinRingInner} />
            <div className={styles.glowOrb} />

            <div className={styles.profileImageFrame}>
              {/* Replace src with your own image URL */}
              <img
                src="https://www.image2url.com/r2/default/images/1776962125746-621ea2df-4779-4692-9c73-11887f864702.jpg"
                alt="Profile picture"
                className={styles.profileImage}
              />
            </div>

            <div className={styles.verifiedBadge}>
              <CheckCircle2 size={12} />
              <span>{t.verified}</span>
            </div>

            <div className={styles.statusCard}>
              <div className={styles.statusDot} />
              <span>{t.openTo}</span>
            </div>

            <div className={styles.statChip} style={{ top: "10%", right: "-24px" }}>
              <span className={styles.statNum}>{t.stat1Val}</span>
              <span className={styles.statLabel}>{t.stat1Label}</span>
            </div>
            <div className={styles.statChip} style={{ bottom: "18%", left: "-24px" }}>
              <span className={styles.statNum}>{t.stat2Val}</span>
              <span className={styles.statLabel}>{t.stat2Label}</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Text ── */}
        <div className={styles.textSide}>
          <div className={styles.greeting}>
            <span className={styles.greetingMono}>{t.greeting}</span>
            <span className={styles.greetingName}> {t.name}</span>
            <Sparkles className={styles.greetingIcon} size={15} />
          </div>

          <h1 className={styles.heading}>
            <span className={styles.headingLine1}>{t.line1}</span>
            <span className={styles.headingMid}>{t.mid}</span>
            <span className={styles.headingLine2Wrapper}>
              {/* Invisible placeholders for all strings to maintain grid size and prevent overlap */}
              <span className={styles.headingLine2Placeholder}>
                {t.line2} {t.accent}
              </span>
              <span className={styles.headingLine2Placeholder}>
                Software Developer
              </span>
              <span className={styles.headingLine2Placeholder}>
                AI based Web Services
              </span>
              <span className={styles.headingLine2Placeholder}>
                Saas Products
              </span>

              <TypeAnimation
                sequence={[
                  `${t.line2} ${t.accent}`,
                  1000,
                  "Softwares",
                  1000,
                  "AI based Web Services",
                  1000,
                  "Saas Products ",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className={styles.headingLine2}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className={styles.subtext}>{t.subtext}</p>

          <div className={styles.tags}>
            {t.tags.map((tag, i) => (
              <span key={tag} className={`${styles.tag} ${styles[`tag_${tagVariants[i]}`]}`}>
                <span className={styles.tagDot} />
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.ctas}>
            <a href="#projects" className="btn-primary">
              {t.viewWork}
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              <Download size={15} />
              {t.downloadCV}
            </a>
          </div>

          <div className={styles.metrics}>
            {t.metrics.map((m) => (
              <div key={m.label} className={styles.metric}>
                <span className={styles.metricValue}>{m.value}</span>
                <span className={styles.metricLabel}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}
