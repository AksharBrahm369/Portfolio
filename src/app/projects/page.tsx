import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "All Projects",
  description: "All software projects by Darshan Zala across education, community workflows, local commerce, business websites, and AI interfaces.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Link href="/#work">← Selected work</Link>
        <Link href="/">Darshan Zala</Link>
      </nav>

      <header className={styles.header}>
        <span>Complete project archive / 01–05</span>
        <h1>All projects</h1>
        <p>
          Explore the complete collection across education, community workflows,
          local commerce, business websites, and AI experiments.
        </p>
      </header>

      <section className={styles.grid} aria-label="All projects">
        {projects.map((project) => {
          const hostname = new URL(project.live).hostname.replace("www.", "");
          return (
            <article className={styles.card} key={project.slug}>
              <div className={styles.browser}>
                <div className={styles.browserBar} aria-hidden="true">
                  <span className={styles.dots}><i /><i /><i /></span>
                  <span>{hostname}</span>
                  <b>↗</b>
                </div>
                <div className={styles.screenshot}>
                  <Image
                    src={project.image}
                    alt={`${project.title} website screenshot`}
                    fill
                    sizes="(max-width: 760px) 100vw, 380px"
                  />
                  <small>{project.index}</small>
                </div>
              </div>

              <div className={styles.cardBody}>
                <span className={styles.category}>{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <div className={styles.tags}>
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className={styles.actions}>
                  <Link href={`/projects/${project.slug}`}>Project details →</Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
