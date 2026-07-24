"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const suggestions = [
  "What does Darshan build?",
  "Tell me about his best projects",
  "What technologies does he use?",
  "How can I contact him?",
];

const answers = [
  {
    terms: ["contact", "email", "reach", "connect", "hire", "available", "opportunity"],
    reply: "Darshan is available for select software-engineering opportunities, collaborations, and practical web or AI projects. You can reach him at darshanzala369@gmail.com or use the contact section just below.",
  },
  {
    terms: ["project", "work", "portfolio", "best", "built", "build"],
    reply: "Darshan’s featured work includes a Tuition Admin Management System, Sampark Attendance, The Art Cafe, Ambika Tailors, and an AI Chatbot. His strongest projects turn real operational workflows into clear, usable products.",
  },
  {
    terms: ["technology", "technologies", "tech", "stack", "language", "framework", "tool"],
    reply: "His current toolkit includes React, Next.js, JavaScript, Git, GitHub, Vercel, Netlify, and AI APIs. He focuses on responsive interfaces, full-stack workflows, accessibility, maintainable code, and reliable delivery.",
  },
  {
    terms: ["skill", "strength", "capability", "good at", "specialize"],
    reply: "Darshan’s strengths are frontend engineering, full-stack application development, AI integration, and end-to-end product delivery. He is especially good at understanding a workflow and turning it into a simpler digital experience.",
  },
  {
    terms: ["ai", "artificial intelligence", "chatbot", "automation"],
    reply: "Darshan is exploring practical AI-assisted products, conversational interfaces, prompt workflows, and automation. His approach is product-first: AI should reduce friction and make a real task easier, not exist only as a novelty.",
  },
  {
    terms: ["location", "based", "live", "where"],
    reply: "Darshan is based in Gujarat, India, and is open to software-engineering opportunities and collaborations.",
  },
  {
    terms: ["resume", "résumé", "cv", "credential", "certificate"],
    reply: "You can open Darshan’s résumé from the main navigation or view his credentials page for certificates and continued learning.",
  },
  {
    terms: ["who", "about", "introduce", "darshan"],
    reply: "Darshan Zala is a software engineer and full-stack developer who builds responsive web applications, business systems, and practical AI-powered tools. He enjoys understanding how people work and creating software that supports them clearly and reliably.",
  },
  {
    terms: ["approach", "philosophy", "process", "work style"],
    reply: "Darshan starts by understanding the real problem and the people doing the work. He values clear interactions, maintainable code, reliable functionality, and learning from real use.",
  },
];

function getAnswer(question: string) {
  const normalized = question.toLowerCase();
  const ranked = answers
    .map((answer) => ({
      ...answer,
      score: answer.terms.reduce((score, term) => score + (normalized.includes(term) ? term.length : 0), 0),
    }))
    .sort((a, b) => b.score - a.score);

  if (ranked[0]?.score > 0) return ranked[0].reply;
  return "I don’t have a verified answer for that yet. I can tell you about Darshan’s projects, skills, technology stack, AI work, availability, or how to contact him.";
}

export default function PortfolioAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi, I’m Darshan’s portfolio assistant. Ask me about his work, skills, projects, or availability.",
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, thinking]);

  function ask(question: string) {
    const cleanQuestion = question.trim().slice(0, 240);
    if (!cleanQuestion || thinking) return;

    setMessages((current) => [...current, { role: "user", content: cleanQuestion }]);
    setInput("");
    setThinking(true);

    window.setTimeout(() => {
      setMessages((current) => [...current, { role: "assistant", content: getAnswer(cleanQuestion) }]);
      setThinking(false);
    }, 450);
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
        <p>Explore my experience conversationally—projects, capabilities, technology choices, working style, and availability.</p>
        <div className={styles.assistantMeta}>
          <span><i aria-hidden="true" /> Online</span>
          <span>Answers from verified portfolio data</span>
        </div>
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
