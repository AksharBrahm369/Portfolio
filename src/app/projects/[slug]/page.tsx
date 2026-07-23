import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import styles from "./project.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: `${project.title} — Darshan Zala`, description: project.summary, images: [{ url: project.image }] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <main className={styles.main}>
      <nav className={styles.nav}><Link href="/">← Darshan Zala</Link><a href={project.live} target="_blank" rel="noreferrer">Open live project ↗</a></nav>
      <article>
        <header className={styles.hero}>
          <span>{project.category} / {project.index}</span>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div>{project.technologies.map((technology) => <small key={technology}>{technology}</small>)}</div>
        </header>
        <div className={styles.image}><Image src={project.image} alt={`${project.title} interface`} fill priority sizes="(max-width: 900px) 100vw, 1200px" /></div>
        <div className={styles.content}>
          <aside><span>Project overview</span><a href={project.live} target="_blank" rel="noreferrer">Live demo ↗</a></aside>
          <div className={styles.sections}>
            <section><h2>Context</h2><p>{project.context}</p></section>
            <section><h2>Problem</h2><p>{project.problem}</p></section>
            <section><h2>Solution</h2><p>{project.summary}</p></section>
            <section><h2>My role</h2><p>{project.contribution}</p></section>
            <section><h2>Engineering decisions</h2><ol>{project.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ol></section>
            <section><h2>Outcome</h2><p>{project.outcome}</p></section>
            <section><h2>Lesson learned</h2><p>{project.lessons}</p></section>
          </div>
        </div>
      </article>
      <footer className={styles.footer}><Link href="/#work">← Back to selected work</Link></footer>
    </main>
  );
}
