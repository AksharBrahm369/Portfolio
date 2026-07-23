"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/app/page.module.css";

const links = [
  ["Work", "#work"], ["Capabilities", "#capabilities"], ["Journey", "#journey"],
  ["About", "#about"], ["Contact", "#contact"], ["Résumé", "/darshan-zala-resume.pdf"],
];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); buttonRef.current?.focus(); } };
    document.addEventListener("keydown", escape);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", escape); };
  }, [open]);
  return (
    <div className={styles.mobileNav}>
      <button ref={buttonRef} className={styles.menuButton} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      {open && <nav id="mobile-menu" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<span>↗</span></a>)}</nav>}
    </div>
  );
}
