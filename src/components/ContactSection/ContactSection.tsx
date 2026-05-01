"use client";

// NOTE: Github, Linkedin, Twitter do NOT exist in lucide-react v1.9.0+
// They were removed in a major cleanup. Use inline SVGs instead (see socials below).
import { Mail, Calendar } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { translations } from "@/translations";
import styles from "./ContactSection.module.css";


export default function ContactSection() {
  const { language } = useApp();
  const t = translations[language].contact;

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.topFade} />

      <div className={styles.container}>
        <div className={styles.ctaBlock}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />

          <div className={styles.ctaInner}>
            <div className={styles.sectionLabel}>
              <span className={styles.labelLine} />
              {t.label}
              <span className={styles.labelLine} />
            </div>

            <h2 className={styles.ctaHeading}>
              {t.heading} <span className={styles.ctaHeadingAccent}>{t.accent}</span>
            </h2>

            <p className={styles.ctaSubtext}>
              {t.sub}
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.infoChip}>
                {t.location}
              </div>
              <div className={styles.infoChip}>
                {t.response}
              </div>
              <div className={styles.infoChip}>
                <div className={styles.statusDot} />
                {t.available}
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <a href="mailto:hello@example.com" className={styles.primaryCta}>
                <Mail size={18} />
                {t.contactBtn}
              </a>
              <a href="#schedule" className={styles.secondaryCta}>
                <Calendar size={18} />
                {t.scheduleBtn}
              </a>
            </div>

            {/* Social icons — inline SVGs because lucide-react v1.9.0+ removed brand icons */}
            <div className={styles.socials}>
              <a href="https://github.com/AksharBrahm369" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/darshanzala369/" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

            </div>
          </div>
        </div>



        <div className={styles.dividerLine} />

        <footer className={styles.bottomRow}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} <span className={styles.copyrightMono}>Darshan Zala</span>. {t.copyright}
          </div>


        </footer>
      </div>
    </section>
  );
}
