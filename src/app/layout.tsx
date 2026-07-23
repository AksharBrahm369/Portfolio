import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });
const siteUrl = "https://darshan-portfolio369.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Darshan Zala — Software Engineer", template: "%s | Darshan Zala" },
  description: "Software engineer building responsive web applications, business systems, and practical AI-powered tools.",
  alternates: { canonical: "/" },
  openGraph: { title: "Darshan Zala — Software Engineer", description: "Full-stack web applications, business systems, and practical AI-powered tools.", url: siteUrl, siteName: "Darshan Zala", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Darshan Zala — Software Engineer" }] },
  twitter: { card: "summary_large_image", title: "Darshan Zala — Software Engineer", description: "Full-stack web applications, business systems, and practical AI-powered tools.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geist.variable} ${mono.variable}`}><body>{children}</body></html>;
}
