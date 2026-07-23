import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./credentials.module.css";

export const metadata: Metadata = { title: "Credentials", description: "A compact selection of Darshan Zala's learning credentials." };

const credentials = [
  { title: "Claude 101", image: "/certificates/claude-certificate.jpg", note: "Course certificate" },
];

export default function CredentialsPage() {
  return (
    <main className={styles.main}>
      <nav><Link href="/">← Darshan Zala</Link></nav>
      <header><span>Credentials / Learning</span><h1>Continuous learning, kept concise.</h1><p>A small collection of published course credentials. The portfolio keeps the work itself in the foreground.</p></header>
      <section aria-label="Credentials">
        {credentials.map((item) => <article key={item.title}><div><Image src={item.image} alt={`${item.title} certificate`} fill sizes="(max-width: 760px) 100vw, 560px" /></div><span>{item.note}</span><h2>{item.title}</h2></article>)}
      </section>
    </main>
  );
}
