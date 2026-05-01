import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

export const metadata: Metadata = {
  title: "Portfolio | Scalable Architect & AI Systems Builder",
  description:
    "Professional portfolio of a Software Engineer, AI Systems Builder, and Platform Engineer with Systems Built years engineering mission-critical systems.",
  keywords: [
    "Software Engineer",
    "AI/ML Systems",
    "Platform Engineer",
    "Full Stack",
    "DevOps",
    "Kubernetes",
  ],
  openGraph: {
    title: "Portfolio | Scalable Architect & AI Systems Builder",
    description:
      "Systems Built years engineering mission-critical, resilient, intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&family=Syne:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
