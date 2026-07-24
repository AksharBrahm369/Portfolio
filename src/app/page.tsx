import Image from "next/image";
import Link from "next/link";
import { capabilities, journey, profile, socials } from "@/data/portfolio";
import MobileNavigation from "@/components/MobileNavigation";
import ProjectShowcase from "@/components/ProjectShowcase";
import styles from "./page.module.css";

const Arrow = () => <span aria-hidden="true">↗</span>;

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}

function SectionHeader({ index, title, intro }: { index: string; title: string; intro?: string }) {
  return (
    <header className={styles.sectionHeader}>
      <div className={styles.sectionMarker}><span>{index}</span><i /></div>
      <div>
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </header>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.headerInner}>
        <Link href="/" className={styles.brand} aria-label="Darshan Zala, home">
          <span className={styles.monogram}>DZ</span>
          <span><strong>Darshan Zala</strong><small>Software Engineer</small></span>
        </Link>
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#capabilities">Capabilities</a><a href="#journey">Journey</a>
          <a href="#about">About</a><a href="#contact">Contact</a>
          <a href="/darshan-zala-resume.pdf" target="_blank">Résumé <Arrow /></a>
        </nav>
        <MobileNavigation />
      </Container>
    </header>
  );
}

function IdentityPanel() {
  return (
    <aside className={styles.identityPanel} aria-label="Darshan's professional profile">
      <div className={styles.portrait}>
        <Image src="/profile pic.jpg" alt="Darshan Zala" fill priority sizes="(max-width: 760px) 100vw, 440px" />
        
      </div>
      <div className={styles.identityBody}>
        <div>
          <span className={styles.eyebrow}>Identity / 01</span>
          <h2>Darshan Zala</h2>
          <p>Software Engineer · Full-Stack Developer</p>
          <p className={styles.founder}>Founder of Darshonic</p>
        </div>
      </div>
    </aside>
  );
}

export default function HomePage() {
  return (
    <>
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <section className={styles.hero}>
          <Container className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>Darshan Zala / Software Engineer</span>
              <h1>I turn real-world problems into software people can rely on.</h1>
              <p>{profile.intro}</p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#work">Explore my work <span>↓</span></a>
                <a className={styles.secondaryButton} href="/darshan-zala-resume.pdf" target="_blank">View résumé <Arrow /></a>
              </div>
              <a className={styles.textLink} href={`mailto:${profile.email}`}>Let’s talk →</a>
            </div>
            <IdentityPanel />
          </Container>
        </section>

        <Container>
          <section className={styles.snapshot} aria-label="Professional snapshot">
            {profile.snapshot.map((item) => <div key={item.label}><span>{item.label}</span><p>{item.value}</p></div>)}
          </section>
        </Container>

        <section id="work" className={styles.section}>
          <Container>
            <SectionHeader index="02 / 08" title="Selected work" intro="Products spanning business operations, community workflows, local commerce, and AI experimentation." />
            <ProjectShowcase />
          </Container>
        </section>

        <section id="capabilities" className={`${styles.section} ${styles.tintSection}`}>
          <Container>
            <SectionHeader index="03 / 08" title="Engineering capabilities" intro="How I approach useful software—from the interface through delivery." />
            <div className={styles.capabilityGrid}>
              {capabilities.map((capability) => (
                <article className={styles.capability} key={capability.index}>
                  <span>{capability.index}</span><h3>{capability.title}</h3><p>{capability.description}</p>
                  <ul>{capability.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </article>
              ))}
            </div>
            <div className={styles.techRail} aria-label="Technology stack">{profile.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          </Container>
        </section>

        <section id="journey" className={styles.section}>
          <Container>
            <SectionHeader index="04 / 08" title="My engineering journey" intro="A path shaped by learning in public and building tools around real workflows." />
            <ol className={styles.timeline}>
              {journey.map((item) => <li key={item.title}><span>{item.period}</span><div><h3>{item.title}</h3><p>{item.description}</p>{item.slug && <Link href={`/projects/${item.slug}`}>View related project →</Link>}</div></li>)}
            </ol>
          </Container>
        </section>

        <section id="about" className={`${styles.section} ${styles.tintSection}`}>
          <Container>
            <SectionHeader index="05 / 08" title="About Darshan" intro="The person and principles behind the products." />
            <div className={styles.aboutGrid}>
              <div className={styles.aboutCopy}>
                <span className={styles.aboutKicker}>Engineer. Builder. Lifelong learner.</span>
                <p className={styles.aboutLead}>I turn the way people work into software that feels clear, dependable, and genuinely useful.</p>
                <p className={styles.aboutBody}>My work spans education management, attendance workflows, local-business websites, and AI-assisted interfaces. Whatever the domain, I start by understanding the real problem—not just the feature list.</p>
                <div className={styles.aboutLinks}>
                  <Link className={styles.primaryButton} href="/credentials">View credentials <Arrow /></Link>
                  <a className={styles.aboutResume} href="/darshan-zala-resume.pdf" target="_blank">Download résumé <Arrow /></a>
                </div>
              </div>
              <aside className={styles.aboutPanel} aria-label="Professional profile">
                <div className={styles.aboutPanelTop}>
                  <span>Working philosophy</span>
                  <strong>01</strong>
                </div>
                <blockquote>“The best software removes friction without drawing attention to itself.”</blockquote>
                <dl>
                  <div><dt>Currently exploring</dt><dd>AI-assisted interfaces and full-stack product workflows</dd></div>
                  <div><dt>Building</dt><dd>DarshonicTech and practical software products</dd></div>
                  <div><dt>Based in</dt><dd>Gujarat, India</dd></div>
                </dl>
                <div className={styles.aboutStatus}><i aria-hidden="true" /> Available for select opportunities</div>
              </aside>
            </div>
          </Container>
        </section>

        <section id="contact" className={styles.contactSection}>
          <Container>
            <div className={styles.contactPanel}>
              <span className={styles.eyebrow}>06 / Start a conversation</span>
              <h2>Let’s build something meaningful.</h2>
              <p>I’m open to software-engineering opportunities, collaborations, and selected projects involving web applications, business systems, and practical AI tools.</p>
              <a className={styles.email} href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a>
              <div className={styles.contactActions}>
                <a className={styles.primaryButton} href={`mailto:${profile.email}`}>Email Darshan</a>
                <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
                <a href={socials.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
                <a href="/darshan-zala-resume.pdf" target="_blank">Résumé <Arrow /></a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <footer className={styles.footer}><Container><span>© {new Date().getFullYear()} Darshan Zala</span><nav aria-label="Footer"><a href={socials.linkedin}>LinkedIn</a><a href={socials.github}>GitHub</a><a href={`mailto:${profile.email}`}>Email</a></nav></Container></footer>
    </>
  );
}
