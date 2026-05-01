"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Award, ExternalLink, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useApp } from "@/context/AppContext";
import { translations } from "@/translations";
import styles from "./CertificatesSection.module.css";
import claudeCertImg from "@/claude certificate 1_page-0001.jpg";
import aicertificate from "@/ai .png";
import lamacertificate from "@/lama AI marketing course.jpg";
import claudecourse from "@/claude 101 course.jpg";
import claudecowork from "@/claude cowork certificate_page-0001.jpg";
import claudecodeinaction from "@/claude-code-in-Action-certificate.jpg";


const certificates = [
  {
    id: "c1",
    title: "Anthropic Claude Certificate claude 101",
    issuer: "Anthropic",
    date: "Issued April 2026",
    credentialId: "CLAUDE-12345",
    link: "#",
    accent: "#d97757",
    accentGlow: "rgba(217,119,87,0.15)",
    image: claudeCertImg
  },
  {
    id: "c2",
    title: "Anthropic Claude Certificate  claude code 101",
    issuer: "Anthropic",
    date: "Issued April 2026",
    accent: "#0668E1",
    accentGlow: "rgba(6,104,225,0.15)",
    image: claudecourse
  },
  {
    id: "c3",
    title: "Anthropic Claude Certificate  claude cowork ",
    issuer: "Anthropic",
    date: "Issued April 2026",
    accent: "#0668E1",
    accentGlow: "rgba(6,104,225,0.15)",
    image: claudecowork
  },
  {
    id: "c4",
    title: "Anthropic Claude Certificate  claude code in action ",
    issuer: "Anthropic",
    date: "Issued April 2026",
    accent: "#0668E1",
    accentGlow: "rgba(6,104,225,0.15)",
    image: claudecodeinaction
  },
  {
    id: "c5",
    title: "Ultimate Prompt engineering",
    issuer: "Udemy",
    date: "Issued June 2025",
    accent: "#4285f4",
    accentGlow: "rgba(66,133,244,0.15)",
    image: aicertificate
  },
  {
    id: "c6",
    title: "AI Mastering Pormpt Engineering",
    issuer: "Udemy",
    date: "Issued July 2025",
    accent: "#0668E1",
    accentGlow: "rgba(6,104,225,0.15)",
    image: lamacertificate
  },

];

export default function CertificatesSection() {
  const { language } = useApp();
  const t = translations[language].certificates;
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  if (!t) return null; // Safe fallback

  return (
    <section id="certificates" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span>{t.label}</span>
            <span className={styles.labelLine} />
          </div>
          <h2 className={styles.heading}>
            {t.heading}{" "}
            <span className={styles.headingAccent}>{t.accent}</span>
          </h2>
          <p className={styles.subheading}>{t.sub}</p>
        </div>

        <div className={styles.grid}>
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className={styles.card}
              style={{ "--accent": cert.accent, "--accent-glow": cert.accentGlow } as React.CSSProperties}
            >
              {cert.image && (
                <div
                  className={styles.imagePreview}
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className={styles.certImage}
                  />
                </div>
              )}
              <div className={styles.cardTop}>
                <div className={styles.iconFrame} style={{ borderColor: `${cert.accent}30`, background: cert.accentGlow }}>
                  <Award size={24} color={cert.accent} />
                </div>
                <span className={styles.date}>{cert.date}</span>
              </div>

              <div className={styles.titleGroup}>
                <h3 className={styles.cardTitle}>{cert.title}</h3>
                <p className={styles.cardIssuer}>{cert.issuer}</p>
              </div>





              <div className={styles.cornerDeco} style={{ borderColor: `${cert.accent}40` }} />
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen Modal via Portal to avoid z-index/stacking context issues */}
      {mounted && selectedImage && createPortal(
        <div className={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
          <button className={styles.closeBtn} onClick={() => setSelectedImage(null)} aria-label="Close fullscreen image">
            <X size={24} />
          </button>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Certificate Full Screen"
              fill
              className={styles.fullScreenImage}
              quality={100}
            />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
