import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects } from "@/data/portfolio";
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
    openGraph: {
      title: `${project.title} — Darshan Zala`,
      description: project.summary,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  if (!project) notFound();

  const previous = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const next = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;
  const hostname = new URL(project.live).hostname.replace("www.", "");

  const facts = [
    { label: "Contribution", value: project.contribution },
    { label: "Outcome", value: project.outcome },
    { label: "Primary stack", value: project.technologies.join(" · ") },
    { label: "Key lesson", value: project.lessons },
  ];

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Link className={styles.brand} href="/">
          <span>DZ</span>
          <strong>Darshan Zala</strong>
        </Link>
        <div>
          <Link href="/#work">Selected work</Link>
          <Link href="/projects">All projects</Link>
        </div>
      </nav>

      <article className={styles.article}>
        <header className={styles.hero}>
          <span className={styles.kicker}>{project.category} / Project {project.index}</span>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className={styles.techLine}>
            <span>Built with</span>
            <div>{project.technologies.map((technology) => <small key={technology}>{technology}</small>)}</div>
          </div>
        </header>

        <div className={styles.projectMedia}>
          <div className={styles.browserBar} aria-hidden="true">
            <span><i /><i /><i /></span>
            <b>{hostname}</b>
            <em>↗</em>
          </div>
          <div className={styles.image}>
            <Image
              src={project.image}
              alt={`${project.title} website interface`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 920px"
            />
          </div>
        </div>

        <section className={styles.textSection}>
          <span>01 / Context</span>
          <h2>The context</h2>
          <p>{project.context}</p>
        </section>

        <section className={styles.textSection}>
          <span>02 / Problem</span>
          <h2>The problem</h2>
          <p>{project.problem}</p>
        </section>

        <section className={styles.textSection}>
          <span>03 / Solution</span>
          <h2>The solution</h2>
          <p>{project.summary} My role included {project.contribution.toLowerCase()}</p>
        </section>

        <section className={styles.featuresSection}>
          <span>04 / Engineering</span>
          <h2>Engineering decisions</h2>
          <div className={styles.featureList}>
            {project.decisions.map((decision, index) => (
              <article key={decision}>
                <small>0{index + 1}</small>
                <div>
                  <h3>{["Workflow structure", "Interface direction", "Delivery approach"][index] ?? "Product decision"}</h3>
                  <p>{decision}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.resultsSection}>
          <span>05 / Result</span>
          <h2>Outcome and learning</h2>
          <div className={styles.resultsGrid}>
            {facts.map((fact) => (
              <article key={fact.label}>
                <small>{fact.label}</small>
                <p>{fact.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.faqSection}>
          <span>06 / Quick answers</span>
          <h2>Project FAQ</h2>
          <div>
            <details>
              <summary>What problem does this project address?</summary>
              <p>{project.problem}</p>
            </details>
            <details>
              <summary>What was Darshan’s role?</summary>
              <p>{project.contribution}</p>
            </details>
            <details>
              <summary>What technologies were used?</summary>
              <p>{project.technologies.join(", ")}.</p>
            </details>
            <details>
              <summary>What did the project teach?</summary>
              <p>{project.lessons}</p>
            </details>
          </div>
        </section>

        <nav className={styles.projectNav} aria-label="Adjacent projects">
          {previous ? (
            <Link href={`/projects/${previous.slug}`}>
              <span>← Previous project</span>
              <strong>{previous.title}</strong>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/projects/${next.slug}`}>
              <span>Next project →</span>
              <strong>{next.title}</strong>
            </Link>
          ) : <span />}
        </nav>

        <section className={styles.cta}>
          <span>Start a conversation</span>
          <h2>Have a useful product in mind?</h2>
          <p>I’m open to software-engineering opportunities and selected projects involving web applications, business systems, and practical AI tools.</p>
          <a href={`mailto:${profile.email}`}>Email Darshan →</a>
        </section>
      </article>
    </main>
  );
}
