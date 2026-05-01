"use client";

import { useState, useEffect, useRef } from "react";
import { Sun, Moon, ChevronDown, Globe } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { translations } from "@/translations";
import styles from "./Navbar.module.css";

const languages = [
  { code: "en" as const, label: "EN", native: "English" },
  { code: "hi" as const, label: "हि", native: "हिंदी" },
];

export default function Navbar() {
  const { language, setLanguage, theme, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const t = translations[language].nav;

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const currentLang = languages.find((l) => l.code === language)!;

  const navItems = [
    { label: t.myPath, href: "#about" },
    { label: t.whatIBuild, href: "#expertise" },
    { label: t.certificates, href: "#certificates" },
    { label: t.projects, href: "#projects" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${theme === "light" ? styles.light : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}


        {/* Nav links */}
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className={styles.controls}>
          {/* Language dropdown */}
          <div className={styles.langWrapper} ref={langRef}>
            <button
              id="lang-btn"
              className={styles.langBtn}
              onClick={() => setLangOpen((o) => !o)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Select language"
            >
              <Globe size={13} />
              <span>{currentLang.label}</span>
              <ChevronDown size={11} className={langOpen ? styles.chevronOpen : ""} />
            </button>

            {langOpen && (
              <div className={styles.langDropdown} role="listbox">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    role="option"
                    aria-selected={language === lang.code}
                    className={`${styles.langOption} ${language === lang.code ? styles.langOptionActive : ""}`}
                    onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                  >
                    <span className={styles.langCode}>{lang.label}</span>
                    <span className={styles.langNative}>{lang.native}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme toggle */}
          <button
            id="theme-toggle"
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a href="#contact" className={styles.ctaBtn}>
            {t.hireMe}
          </a>
        </div>
      </div>
    </nav>
  );
}
