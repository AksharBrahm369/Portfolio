"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, User, Bot, Sparkles } from "lucide-react";
import styles from "./Chatbot.module.css";
import { useApp } from "@/context/AppContext";
import { translations, Language } from "@/translations";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

// Simulated AI responses based strictly on the user's profile
const getAIResponse = (input: string, lang: Language): string => {
  const query = input.toLowerCase();
  const t = translations[lang];

  // 1. "My Path" (Hero & Philosophy)
  if (query.match(/path|journey|who are you|about|background|history|who is/)) {
    return lang === 'hi' 
      ? `दर्शन का सफर: ${t.hero.subtext} उनके पास ${t.hero.stat1Val} ${t.hero.stat1Label} है। उनका दर्शन है: "${t.philosophy.c1} ${t.philosophy.c2}"` 
      : `My Path: Darshan is a Scalable Architect & AI Systems Builder. ${t.hero.subtext} He has ${t.hero.stat1Val} ${t.hero.stat1Label} and believes: "${t.philosophy.c1} ${t.philosophy.c2}"`;
  }

  // 2. "What I Build" (Expertise)
  if (query.match(/build|what i build|expertise|skills|tech|stack/)) {
    const skills = Array.from(new Set(t.expertise.cards.flatMap(c => c.tags))).slice(0, 8).join(", ");
    return lang === 'hi'
      ? `मैं क्या बनाता हूँ: दर्शन ${skills} जैसी तकनीकों का उपयोग करके सिस्टम आर्किटेक्चर, AI/ML प्लेटफॉर्म और फुल स्टैक ऐप बनाते हैं।`
      : `What I Build: Darshan engineers resilient systems across Frontend Architecture, AI/ML Platforms, and Cloud Infrastructure using ${skills}, and more.`;
  }

  // 3. "Certificates"
  if (query.match(/certificate|certification|award|credential/)) {
    return lang === 'hi'
      ? `प्रमाणपत्र: दर्शन के पास "Anthropic Claude", "Ultimate Prompt Engineering", और "AI Mastering Prompt Engineering" में उद्योग-मान्यता प्राप्त प्रमाणपत्र हैं।`
      : `Certificates: Darshan holds verified credentials including the "Anthropic Claude Certificate", "Ultimate Prompt Engineering", and "AI Mastering Prompt Engineering".`;
  }

  // 4. "Projects"
  if (query.match(/project|portfolio|work|platform/)) {
    return lang === 'hi'
      ? `प्रोजेक्ट्स: दर्शन ने कई प्लेटफॉर्म बनाए हैं जैसे कि "AI Chatbot", "Sampark Attendance" (Next.js & AI), "The Art Cafe", और "Ambika Tailor"। ${t.projects.sub}`
      : `Projects: Darshan has engineered multiple platforms including an "AI Chatbot" (Real-time inference), "Sampark Attendance" (Next.js/AI), and e-commerce apps like "The Art Cafe" and "Ambika Tailor".`;
  }

  // 5. "Blog"
  if (query.match(/blog|article|writing|post/)) {
    return lang === 'hi'
      ? `ब्लॉग: दर्शन का ब्लॉग अभी विकास के अधीन है। इस बीच, आप उनके प्रोजेक्ट्स और विशेषज्ञता देख सकते हैं!`
      : `Blog: Darshan's blog is currently in development where he will share insights on Scalable Architecture and AI Systems. Stay tuned!`;
  }

  // 6. "Contact"
  if (query.match(/contact|hire|email|reach|message|location/)) {
    return lang === 'hi'
      ? `संपर्क: ${t.contact.sub} स्थान: ${t.contact.location}। ${t.contact.response}।`
      : `Contact: ${t.contact.sub} Location: ${t.contact.location}. ${t.contact.response}. He is ${t.contact.available.toLowerCase()}.`;
  }

  // 7. "Niramay Studio"
  if (query.match(/niramay|studio|saas|startup|company|founder|business/)) {
    return lang === 'hi'
      ? `निरामय स्टूडियो: दर्शन "निरामय स्टूडियो" (https://niramaystudio.qzz.io/) के सह-संस्थापक हैं। हम उच्च गुणवत्ता वाले SaaS (Software as a Service) उत्पाद बनाते हैं जो व्यवसायों को समस्याओं को हल करने और स्केल करने में मदद करते हैं।`
      : `Niramay Studio: Darshan is the Co-founder of "Niramay Studio" (https://niramaystudio.qzz.io/). We specialize in building high-quality SaaS products that help businesses solve complex problems, automate workflows, and scale efficiently.`;
  }

  // Metrics / Stats
  if (query.match(/metrics|stats|uptime|requests|sla/)) {
    return lang === 'hi' 
      ? `मेट्रिक्स: ${t.hero.metrics.map(m => `${m.value} ${m.label}`).join(', ')}.`
      : `Key Metrics: ${t.hero.metrics.map(m => `${m.value} ${m.label}`).join(', ')}.`;
  }

  // Greeting / Hello
  if (query.match(/^hi$|^hello$|^hey$|^नमस्ते$|^hi /)) {
    return lang === 'hi'
      ? "नमस्ते! मैं दर्शन का एआई असिस्टेंट हूँ। आप मुझसे उनके सफर (My Path), प्रोजेक्ट्स (Projects), कौशल (What I Build), या प्रमाणपत्र (Certificates) के बारे में पूछ सकते हैं।"
      : "Hello! I'm Darshan's AI Assistant. Feel free to ask me about his Path, what he Builds, his Projects, Certificates, or how to Contact him.";
  }

  // Fallback - STRICT restriction to portfolio
  return lang === "hi"
    ? "मुझे क्षमा करें, मैं केवल दर्शन के पोर्टफोलियो (सफर, कौशल, प्रमाणपत्र, प्रोजेक्ट्स, निरामय स्टूडियो, ब्लॉग और संपर्क) के आधार पर उत्तर देने के लिए प्रोग्राम किया गया हूँ। कृपया इनमें से किसी एक के बारे में पूछें।"
    : "I am strictly programmed to answer questions based solely on Darshan's portfolio (My Path, What I Build, Certificates, Projects, Niramay Studio, Blog, and Contact). Please ask something related to these sections.";
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language } = useApp();

  // Initialize welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: language === "en" 
            ? "Hi! I'm Darshan's AI Assistant. Ask me anything about his skills, experience, or projects."
            : "नमस्ते! मैं दर्शन का एआई सहायक हूँ। मुझसे उनके कौशल या अनुभव के बारे में कुछ भी पूछें।"
        }
      ]);
    }
  }, [language, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate network delay for AI realism
    setTimeout(() => {
      const responseText = getAIResponse(userMessage.content, language);
      const aiMessage: Message = { id: (Date.now() + 1).toString(), role: "assistant", content: responseText };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 second delay
  };

  return (
    <>
      <button 
        className={`${styles.triggerBtn} ${isOpen ? styles.hidden : ""}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Assistant"
      >
        <Sparkles size={24} />
      </button>

      <div className={`${styles.chatWindow} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <Bot size={20} className={styles.botIcon} />
            <div>
              <h3>AI Assistant</h3>
              <span className={styles.status}>Online</span>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.messagesContainer}>
          {messages.map((msg) => (
            <div key={msg.id} className={`${styles.messageWrapper} ${msg.role === "user" ? styles.userWrapper : styles.botWrapper}`}>
              {msg.role === "assistant" && (
                <div className={styles.avatar}>
                  <Bot size={16} />
                </div>
              )}
              <div className={`${styles.messageBubble} ${msg.role === "user" ? styles.userBubble : styles.botBubble}`}>
                {msg.content}
              </div>
              {msg.role === "user" && (
                <div className={styles.avatar}>
                  <User size={16} />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className={`${styles.messageWrapper} ${styles.botWrapper}`}>
              <div className={styles.avatar}>
                <Bot size={16} />
              </div>
              <div className={`${styles.messageBubble} ${styles.botBubble} ${styles.typingIndicator}`}>
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className={styles.inputArea}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder={language === "en" ? "Ask about Darshan..." : "दर्शन के बारे में पूछें..."}
            className={styles.inputField}
          />
          <button 
            className={styles.sendBtn} 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </>
  );
}
