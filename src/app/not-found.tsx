import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return <main className={styles.main}><span>404 / Route not found</span><h1>This page is outside the system.</h1><p>The address may have changed, or the project may no longer be published here.</p><Link href="/">Return to Darshan’s portfolio →</Link></main>;
}
