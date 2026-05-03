import styles from "./ServicesSection.module.css";

const services = [
  {
    title: "AI-powered websites for local service businesses",
    description: "Turn search traffic into booked calls with a site that answers quickly and feels personal.",
  },
  {
    title: "Fast launch websites for startups and founders",
    description: "Ship a sharp, credible web presence without getting stuck in long build cycles.",
  },
  {
    title: "Conversion-focused websites for coaches and consultants",
    description: "Guide visitors toward action with clear messaging, trust signals, and strong calls to action.",
  },
  {
    title: "Modern websites + AI chat/automation",
    description: "Add lightweight automation that helps visitors get answers and move forward instantly.",
  },
  {
    title: "Frontend performance for SaaS companies",
    description: "Keep interfaces fast, polished, and ready for product-led growth.",
  },
  {
    title: "Landing page for early-stage startups",
    description: "Validate ideas with a focused page that explains value and captures interest fast.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span>{"// what_i_build"}</span>
            <span className={styles.labelLine} />
          </div>
          <h2 className={styles.heading}>
            Websites built for <span className={styles.headingAccent}>growth, speed, and clarity</span>
          </h2>
          <h4 className={styles.subheading}>
            A focused set of offerings for businesses that need a site to do real work, not just exist.
          </h4>
          <p>End-to-end focus across <br /> Design - Development - Deployment - Scaling </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article key={service.title} className={styles.card}>
              <div className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}