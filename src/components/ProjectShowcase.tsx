"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { projects } from "@/data/portfolio";
import styles from "./ProjectShowcase.module.css";

const ROTATION_TIME = 4000;

export default function ProjectShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeProject = projects[activeIndex];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, ROTATION_TIME);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div
      className={styles.showcase}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className={styles.projectList} aria-label="Featured projects">
        <div className={styles.listLabel}>
          <span>Project index</span>
        </div>

        {projects.map((project, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              className={`${styles.projectRow} ${isActive ? styles.active : ""}`}
              key={project.slug}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveIndex(index)}
            >
              <span className={styles.rowIndex}>{project.index}</span>
              <span className={styles.rowTitle}>{project.title}</span>
              <span className={styles.rowCategory}>{project.category}</span>
              <span className={styles.rowTech}>{project.technologies[0]} build</span>
              <span className={styles.rowArrow} aria-hidden="true">→</span>
              {isActive && <span key={activeIndex} className={styles.timer} aria-hidden="true" />}
            </button>
          );
        })}

      </div>

      <article className={styles.preview} aria-live="polite">
        <div className={styles.browserBar} aria-hidden="true">
          <span className={styles.browserDots}><i /><i /><i /></span>
          <span className={styles.browserAddress}>
            {new URL(activeProject.live).hostname.replace("www.", "")}
          </span>
          <span>↗</span>
        </div>
        <div className={styles.screenshot}>
          <Image
            key={activeProject.slug}
            src={activeProject.image}
            alt={`${activeProject.title} website screenshot`}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 600px"
          />
        </div>
        <div className={styles.previewBody}>
          <span className={styles.meta}>{activeProject.category} · {activeProject.technologies.join(" · ")}</span>
          <h3>{activeProject.title}</h3>
          <p>{activeProject.summary}</p>
          <div className={styles.tags}>
            {activeProject.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <div className={styles.actions}>
            <Link href={`/projects/${activeProject.slug}`}>Project details →</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
