"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";

type Message = {
  role: "assistant" | "user";
  content: string;
};

type Answer = {
  terms: string[];
  reply: string;
};

const suggestions = [
  "Who is Darshan?",
  "What services does he offer?",
  "Tell me about his projects",
  "How can I contact him?",
];

const answers: Answer[] = [
  {
    terms: ["contact", "email", "reach", "connect", "hire", "available", "freelance", "collaboration", "opportunity"],
    reply: "Darshan is open to freelance projects, business collaborations, startup opportunities, and custom software development. Email him at darshanzala369@gmail.com. You can also visit his portfolio at darshan-portfolio369.vercel.app or DARSHONIC at darshonic.vercel.app.",
  },
  {
    terms: ["darshonic", "company", "founder", "current position", "startup"],
    reply: "Darshan is the Founder of DARSHONIC, a technology company focused on intelligent software solutions, business websites, AI-powered applications, dashboards, education platforms, and custom digital products. Its vision is to combine thoughtful design with practical functionality to help businesses grow through technology.",
  },
  {
    terms: ["vision", "tagline", "vision beyond code"],
    reply: "DARSHONIC’s tagline is “Vision Beyond Code.” Its vision is: “To shape the future through visionary technology by creating solutions inspired by perspectives others have yet to discover.”",
  },
  {
    terms: ["service", "services", "offer", "offers", "build for clients", "type of project", "types of projects"],
    reply: "Darshan builds business and portfolio websites, landing pages, admin dashboards, education ERP systems, learning management systems, AI chatbots, AI integrations, and custom web applications. He also offers website redesign, UI/UX improvements, and performance optimization.",
  },
  {
    terms: ["tuitionpro", "tuition pro", "tuition", "education management", "coaching institute"],
    reply: "TuitionPro is a complete education management platform for coaching institutes and tuition centers. It includes student management, attendance tracking, fee management, teacher and batch management, analytics, a responsive admin panel, and a modern interface.",
  },
  {
    terms: ["fake news", "fake link", "suspicious url", "media literacy"],
    reply: "Fake News Detection is an AI-powered web application designed to identify fake news and suspicious URLs while promoting media literacy. Its modules include fake-news detection, fake-link detection, educational resources, and live AI analysis.",
  },
  {
    terms: ["learning management system", "lms", "online learning", "course management"],
    reply: "Darshan’s Learning Management System is a modern platform designed to simplify online learning through structured course management and an intuitive user experience.",
  },
  {
    terms: ["ngo", "nonprofit", "volunteer", "beneficiaries"],
    reply: "Darshan designed and developed an NGO website to strengthen the organization’s digital presence and simplify communication with volunteers and beneficiaries.",
  },
  {
    terms: ["weather", "forecast", "city search"],
    reply: "Darshan’s Weather Application provides live forecasts, dynamic backgrounds, city search, and a responsive interface.",
  },
  {
    terms: ["project", "projects", "work", "portfolio", "featured", "best", "built", "build"],
    reply: "Darshan’s featured projects include TuitionPro, an AI-powered Fake News Detection application, a Learning Management System, an NGO website, and a modern Weather Application. His broader work focuses on business systems, education platforms, responsive websites, dashboards, and practical AI tools.",
  },
  {
    terms: ["frontend", "front end", "html", "css", "react", "next.js", "nextjs", "tailwind", "framer motion", "responsive design"],
    reply: "Darshan’s frontend skills include HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Framer Motion, and responsive design.",
  },
  {
    terms: ["backend", "back end", "node", "express", "rest", "api", "authentication"],
    reply: "For backend development, Darshan works with Node.js, Express.js, REST APIs, authentication, and third-party API integration.",
  },
  {
    terms: ["database", "supabase", "firebase", "mongodb", "mongo", "prisma", "orm"],
    reply: "Darshan works with Supabase, Firebase, MongoDB, and Prisma ORM for application data and backend workflows.",
  },
  {
    terms: ["ai", "artificial intelligence", "gemini", "prompt engineering", "chatbot", "llm", "automation"],
    reply: "Darshan’s AI skills include Google Gemini API, prompt engineering, AI integration, chatbot development, LLM applications, and automation. He focuses on practical AI experiences that make real tasks simpler.",
  },
  {
    terms: ["tool", "tools", "git", "github", "vs code", "vscode", "figma", "vercel", "netlify"],
    reply: "Darshan uses Git, GitHub, VS Code, Figma, Vercel, and Netlify for design, development, version control, and deployment.",
  },
  {
    terms: ["technology", "technologies", "tech", "stack", "language", "framework"],
    reply: "Darshan works with React.js, Next.js, JavaScript, TypeScript, Node.js, Tailwind CSS, Supabase, Firebase, MongoDB, Prisma, REST APIs, and AI APIs. He also uses Git, GitHub, Figma, Vercel, and Netlify.",
  },
  {
    terms: ["skill", "skills", "strength", "capability", "good at", "specialize", "speciality"],
    reply: "Darshan specializes in modern web applications, business websites, dashboards, education platforms, AI-powered tools, and custom software. His strengths span frontend development, full-stack web development, AI application development, UI/UX thinking, and practical product delivery.",
  },
  {
    terms: ["experience", "role", "roles", "career", "position"],
    reply: "Darshan’s experience includes working as the Founder of DARSHONIC, Software Developer, Frontend Developer, Full Stack Web Developer, and AI Application Developer.",
  },
  {
    terms: ["education", "degree", "college", "study", "studied", "qualification"],
    reply: "Darshan holds a Bachelor of Science in Information Technology (B.Sc. IT).",
  },
  {
    terms: ["location", "based", "live", "where", "mumbai", "maharashtra"],
    reply: "Darshan is based in Mumbai, Maharashtra, India.",
  },
  {
    terms: ["interest", "interests", "passion", "apart from coding", "open source"],
    reply: "Darshan is interested in software development, artificial intelligence, UI/UX and product design, entrepreneurship, business strategy, technology innovation, open source, and problem solving.",
  },
  {
    terms: ["goal", "goals", "future", "ambition", "aspiration"],
    reply: "Darshan aims to build DARSHONIC into a globally recognized technology company, create products used by businesses worldwide, develop innovative AI-powered SaaS solutions, positively impact millions of users, keep learning emerging technologies, and build an engineering culture centered on quality and innovation.",
  },
  {
    terms: ["philosophy", "approach", "belief", "work style", "why software"],
    reply: "Darshan believes technology should simplify people’s work instead of making it more complicated. He focuses on useful, scalable products, thoughtful user experiences, maintainable engineering, and practical functionality that solves real problems.",
  },
  {
    terms: ["resume", "résumé", "cv", "credential", "certificate"],
    reply: "You can open Darshan’s résumé from the main navigation or visit the credentials page to see his certificates and continued learning.",
  },
  {
    terms: ["website", "portfolio url", "company website", "darshan portfolio"],
    reply: "Darshan’s portfolio is https://darshan-portfolio369.vercel.app, and the DARSHONIC website is https://darshonic.vercel.app.",
  },
  {
    terms: ["who", "about", "introduce", "introduction", "darshan"],
    reply: "Darshan Zala is a Software Developer, Founder of DARSHONIC, and aspiring technology entrepreneur based in Mumbai, India. He builds modern web applications, business websites, dashboards, education platforms, AI-powered tools, and custom software designed to solve real-world problems.",
  },
];

function getAnswer(question: string) {
  const normalized = question.toLowerCase();
  const ranked = answers
    .map((answer) => ({
      ...answer,
      score: answer.terms.reduce(
        (score, term) => score + (normalized.includes(term) ? term.length : 0),
        0,
      ),
    }))
    .sort((a, b) => b.score - a.score);

  if (ranked[0]?.score > 0) return ranked[0].reply;
  return "I’m not certain about that. Please contact Darshan directly for the most accurate information.";
}

export default function PortfolioAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi, I’m Darshan’s personal portfolio assistant. Ask me about his work, experience, projects, skills, DARSHONIC, or availability.",
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, thinking]);

  async function ask(question: string) {
    const cleanQuestion = question.trim().slice(0, 240);
    if (!cleanQuestion || thinking) return;

    const conversation = messages;
    setMessages((current) => [...current, { role: "user", content: cleanQuestion }]);
    setInput("");
    setThinking(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: cleanQuestion,
          history: conversation.slice(-8),
        }),
      });
      const data = await response.json() as { answer?: string };
      const answer = response.ok && data.answer ? data.answer : getAnswer(cleanQuestion);
      setMessages((current) => [...current, { role: "assistant", content: answer }]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: getAnswer(cleanQuestion) }]);
    } finally {
      setThinking(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(input);
  }

  return (
    <div className={styles.assistantShell}>
      <div className={styles.assistantIntro}>
        <span className={styles.aboutKicker}>Interactive profile / AI assistant</span>
        <h3>Curious about my work? Just ask.</h3>
        <p>I’m Darshan Zala, Founder of DARSHONIC. Explore my experience conversationally—projects, services, skills, working style, and availability.</p>
        <div className={styles.assistantMeta}>
          <span><i aria-hidden="true" /> Online</span>
          <span>Answers from verified portfolio data</span>
        </div>
        <Link className={styles.assistantResume} href="https://darshonic.vercel.app/" target="_blank" rel="noreferrer">Visit DARSHONIC ↗</Link>
        <Link className={styles.assistantResume} href="/darshan-zala-resume.pdf" target="_blank">Prefer the full résumé? Open PDF ↗</Link>
      </div>

      <div className={styles.chatWindow}>
        <header className={styles.chatHeader}>
          <div className={styles.chatAvatar}>DZ</div>
          <div><strong>Ask Darshan AI</strong><span>Portfolio assistant</span></div>
          <span className={styles.chatLive}>Live</span>
        </header>

        <div className={styles.chatMessages} aria-live="polite" aria-label="Conversation">
          {messages.map((message, index) => (
            <div className={`${styles.chatMessage} ${styles[message.role]}`} key={`${message.role}-${index}`}>
              {message.role === "assistant" && <span className={styles.messageAvatar}>AI</span>}
              <p>{message.content}</p>
            </div>
          ))}
          {thinking && <div className={`${styles.chatMessage} ${styles.assistant}`}><span className={styles.messageAvatar}>AI</span><p className={styles.typing}><i /><i /><i /></p></div>}
          <div ref={endRef} />
        </div>

        {messages.length === 1 && (
          <div className={styles.chatSuggestions} aria-label="Suggested questions">
            {suggestions.map((suggestion) => <button type="button" key={suggestion} onClick={() => ask(suggestion)}>{suggestion}</button>)}
          </div>
        )}

        <form className={styles.chatForm} onSubmit={submit}>
          <label className={styles.srOnly} htmlFor="portfolio-question">Ask a question about Darshan</label>
          <input id="portfolio-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask anything about Darshan…" autoComplete="off" />
          <button type="submit" disabled={!input.trim() || thinking} aria-label="Send question">↑</button>
        </form>
        <p className={styles.chatDisclaimer}>This assistant only answers from Darshan’s verified portfolio.</p>
      </div>
    </div>
  );
}
