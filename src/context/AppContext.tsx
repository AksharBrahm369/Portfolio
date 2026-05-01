"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, Theme } from "@/translations";

interface AppContextType {
  language: Language;
  setLanguage: (l: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}

export const AppContext = createContext<AppContextType>({
  language: "en",
  setLanguage: () => {},
  theme: "dark",
  toggleTheme: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
