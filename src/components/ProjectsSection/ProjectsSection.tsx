"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { translations } from "@/translations";
import styles from "./ProjectsSection.module.css";

const projects = [
  { id: "p1", title: "AI Chatbot", subtitle: "Real-time AI Inference ", accent: "#00f5ff", accentGlow: "rgba(0,245,255,0.15)", category: "AI Platform", impact: "A basic AI Chatbot with real-time response and Used Real-time API  ", tags: ["Javascript", "React.js"], diagram: "ARCH", year: "2025", status: "Production", demoLink: "https://darshanbot.netlify.app/" },
  { id: "p2", title: "Sampark Attendance", subtitle: "Developed Using Next.js and AI", accent: "#a855f7", accentGlow: "rgba(168,85,247,0.15)", category: "Optimization", impact: "Helps in marking Attendance in weekly forum", tags: ["Next.js", "Vercel"], diagram: "INFRA", year: "2026", status: "Production", demoLink: "https://sampark-nextjs.vercel.app/" },
  { id: "p3", title: "The art cafe", subtitle: "Developed Using React.js ", accent: "#14b8a6", accentGlow: "rgba(20,184,166,0.15)", category: "E-Commerce", impact: "Helps in increasing customers and incresed sale", tags: ["React.js"], diagram: "RAG", year: "2026", status: "Production", demoLink: "https://theartcafe.netlify.app/" },
  { id: "p4", title: "Ambika Tailor", subtitle: "A website for Tailor to showcase their new designs", accent: "#f97316", accentGlow: "rgba(249,115,22,0.15)", category: "E-Commerce", impact: "Helps in incresing visibility of the tailor and incresed sale", tags: ["React.js", "Netlify"], diagram: "OBS", year: "2026", status: "Production", demoLink: "https://ambikatailors.netlify.app/" },
  { id: "p5", title: "Tution Management System ", subtitle: "A Sysytem which supports full management Students,Teacher and Parents with proper fee record system ", accent: "#f97316", accentGlow: "rgba(249,115,22,0.15)", category: "Management System", impact: "Fully Optimized Tution Management System helps to increse productivity and student record management and fee record management", tags: ["Next.js", "Vercel"], diagram: "OBS", year: "2026", status: "Production", demoLink: "https://tution-management-system-using-next-nine.vercel.app/" },
];

const caseStudies: Record<string, { title: string; content: React.ReactNode }> = {
  "p1": {
    title: "Project Story: Building the DarshanBot",
    content: (
      <>
        <div className={styles.csSection}>
          <h4>1. Why This Was Built</h4>
          <p>Most websites today are cluttered with pop-ups, menus, and too much text. The idea for DarshanBot was to create something that felt like a private conversation. Instead of searching through pages of info, the goal was to let users just &quot;ask and receive.&quot; It was built for people who want a quick, no-fuss interaction.</p>
        </div>
        <div className={styles.csSection}>
          <h4>2. The Main Goal</h4>
          <p>The plan was simple: build a chatbot that works without any glitches. We didn&apos;t want to overcomplicate it with fancy features that most people wouldn&apos;t use. We focused on:</p>
          <ul>
            <li><strong>Ease of use:</strong> If you can send a text, you can use this bot.</li>
            <li><strong>Quick speed:</strong> The site opens immediately, and the bot replies right away.</li>
            <li><strong>No clutter:</strong> No ads, no sign-up forms, and no distractions.</li>
          </ul>
        </div>
        <div className={styles.csSection}>
          <h4>3. How it Looks and Feels</h4>
          <p>Since the bot is meant to be basic and helpful, the design follows that same rule.</p>
          <ul>
            <li><strong>Familiar Layout:</strong> It looks like the messaging apps we all use every day. This makes people feel comfortable using it right away.</li>
            <li><strong>Clean Screen:</strong> There are no unnecessary buttons. You have a chat window and a place to type. That&apos;s it.</li>
            <li><strong>Mobile Friendly:</strong> It looks just as good on a small phone screen as it does on a big computer monitor.</li>
          </ul>
        </div>
        <div className={styles.csSection}>
          <h4>4. How it Works Behind the Scenes</h4>
          <p>We used simple building blocks to make this happen.</p>
          <ul>
            <li><strong>The Website Code:</strong> We used basic web languages (Javascript and React.js) to keep the site &quot;light.&quot; This ensures it doesn&apos;t drain your phone battery or data.</li>
            <li><strong>The &quot;Brain&quot;:</strong> The bot follows a set of clear rules. When you type something, it looks for the best answer it has in its memory and gives it to you instantly.</li>
            <li><strong>The Hosting:</strong> We put the site on a platform called Netlify, which is known for keeping websites online and running smoothly at all times.</li>
          </ul>
        </div>
        <div className={styles.csSection}>
          <h4>5. The Hardest Part</h4>
          <p>The biggest challenge was actually &quot;keeping it simple.&quot; It is tempting to add more and more buttons, but we had to make sure the bot stayed easy to understand. We spent time making sure the bot&apos;s replies were clear and that it didn&apos;t get stuck if someone typed something unexpected.</p>
        </div>
        <div className={styles.csSection}>
          <h4>6. The Final Result</h4>
          <p>DarshanBot ended up being a very handy little tool. It shows that you don&apos;t need a complicated system to be useful.</p>
          <ul>
            <li>It saves people time.</li>
            <li>It&apos;s easy to talk to.</li>
            <li>It&apos;s always available whenever someone needs a quick answer.</li>
          </ul>
        </div>
        <div className={styles.csSection}>
          <h4>7. Conclusion</h4>
          <p>DarshanBot is proof that a basic tool can often be better than a complex one. By sticking to the basics—fast replies and a clean look—it provides a great experience without making the user do any extra work.</p>
        </div>
      </>
    )
  },
  "p2": {
    title: "Project Story: Sampark – Making Attendance Actionable",
    content: (
      <>
        <div className={styles.csSection}>
          <h4>1. The Problem: &quot;Data Overload&quot;</h4>
          <p>In many community groups or organizations, leaders receive a weekly spreadsheet (CSV) of people who missed a meeting or &quot;Sabha.&quot; The problem isn&apos;t having the data; it&apos;s that the data is just a long, boring list. It&apos;s hard to tell at a glance who is just having a busy month and who is actually drifting away and needs a friendly phone call.</p>
        </div>
        <div className={styles.csSection}>
          <h4>2. The Solution: The Command Center</h4>
          <p>Sampark was built to act as a &quot;filter.&quot; Instead of making a leader scroll through hundreds of rows in Excel, it automatically sorts people into categories based on their attendance history. It moves the focus from &quot;tracking numbers&quot; to &quot;taking care of people.&quot;</p>
        </div>
        <div className={styles.csSection}>
          <h4>3. How to Work on the Website (Step-by-Step)</h4>
          <p>The workflow is designed to be finished in less than a minute. Here is exactly how a user interacts with it:</p>
          <ul>
            <li><strong>Upload the File:</strong> You start by clicking &quot;Choose File&quot; to upload your weekly &quot;Absent CSV.&quot;</li>
            <li><strong>Set the Threshold:</strong> There is a &quot;Healthy Threshold&quot; box. If you set it to &apos;3&apos;, the system automatically knows that anyone with fewer than 3 absences is doing okay, while anyone above that needs attention.</li>
            <li><strong>The Automatic Sort:</strong> The site instantly splits the names into four simple boxes:
              <ul style={{ marginTop: '8px' }}>
                <li><strong>Total Follow-ups:</strong> The big picture number.</li>
                <li><strong>Healthy:</strong> People who are mostly regular.</li>
                <li><strong>At Risk:</strong> People starting to miss more often.</li>
                <li><strong>Critical:</strong> People who have missed many sessions and need an immediate call.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.csSection}>
          <h4>4. Visualizing the Work (Graphs &amp; Charts)</h4>
          <p>To help leaders understand the situation without reading every name, the tool provides three main visuals:</p>
          <ul>
            <li><strong>Attendance Health Distribution (The Donut Chart):</strong> This is a circular graph that shows the &quot;vibe&quot; of the group. If the green section is big, things are great. If the red section grows, the leader knows the group needs more support.</li>
            <li><strong>Karyakarta Workload (The Bar Chart):</strong> This shows which team member has the most phone calls to make. It helps balance the work so no single person is overwhelmed with follow-ups.</li>
            <li><strong>Top Most Absent Members:</strong> A quick &quot;Top 10&quot; list that highlights the individuals who haven&apos;t been seen in a long time, making sure no one falls through the cracks.</li>
          </ul>
        </div>
        <div className={styles.csSection}>
          <h4>5. Technical Choices</h4>
          <p>The site is built with Next.js and hosted on Vercel.</p>
          <ul>
            <li><strong>Why?</strong> It&apos;s incredibly fast. When you upload a file, the charts update instantly without the page having to reload.</li>
            <li><strong>Clean Design:</strong> It uses a professional blue-to-purple gradient that feels like a &quot;Command Center,&quot; giving the user a sense of control and organization.</li>
          </ul>
        </div>
        <div className={styles.csSection}>
          <h4>6. The Human Impact</h4>
          <p>The real &quot;magic&quot; of Sampark isn&apos;t the code; it&apos;s the follow-up. By automating the sorting process, leaders save hours of manual work. That saved time is then spent on the phone, talking to members, asking how they are, and inviting them back. It turns a &quot;data task&quot; into a &quot;people task.&quot;</p>
        </div>
        <div className={styles.csSection}>
          <h4>7. Conclusion</h4>
          <p>Sampark is a perfect example of a &quot;smart&quot; tool. It takes a basic job (checking attendance) and adds a layer of intelligence that helps a community stay connected. It&apos;s simple, visual, and highly effective for any leader who wants to focus on people rather than spreadsheets.</p>
        </div>
      </>
    )
  }
};


function DiagramPreview({ type, accent }: { type: string; accent: string }) {
  return (
    <div className={styles.diagramFrame} style={{ borderColor: `${accent}30` }}>
      <div className={styles.diagramInner}>
        {type === "ARCH" && (
          <svg viewBox="0 0 180 100" className={styles.diagramSvg}>
            <rect x="10" y="35" width="40" height="25" rx="4" fill="none" stroke={accent} strokeWidth="1" opacity="0.6" />
            <text x="30" y="51" fill={accent} fontSize="7" textAnchor="middle" opacity="0.8">API</text>
            <rect x="70" y="20" width="40" height="25" rx="4" fill="none" stroke={accent} strokeWidth="1" opacity="0.6" />
            <text x="90" y="36" fill={accent} fontSize="7" textAnchor="middle" opacity="0.8">Queue</text>
            <rect x="70" y="55" width="40" height="25" rx="4" fill="none" stroke={accent} strokeWidth="1" opacity="0.6" />
            <text x="90" y="71" fill={accent} fontSize="7" textAnchor="middle" opacity="0.8">Cache</text>
            <rect x="130" y="35" width="40" height="25" rx="4" fill="none" stroke={accent} strokeWidth="1" opacity="0.6" />
            <text x="150" y="51" fill={accent} fontSize="7" textAnchor="middle" opacity="0.8">ML</text>
            <line x1="50" y1="47" x2="70" y2="32" stroke={accent} strokeWidth="0.8" opacity="0.4" />
            <line x1="50" y1="47" x2="70" y2="67" stroke={accent} strokeWidth="0.8" opacity="0.4" />
            <line x1="110" y1="32" x2="130" y2="47" stroke={accent} strokeWidth="0.8" opacity="0.4" />
            <line x1="110" y1="67" x2="130" y2="47" stroke={accent} strokeWidth="0.8" opacity="0.4" />
          </svg>
        )}
        {type === "INFRA" && (
          <svg viewBox="0 0 180 100" className={styles.diagramSvg}>
            {[0, 1, 2].map(i => (
              <g key={i}>
                <rect x={20 + i * 52} y="15" width="44" height="70" rx="6" fill="none" stroke={accent} strokeWidth="0.8" opacity="0.3" />
                <text x={42 + i * 52} y="35" fill={accent} fontSize="6" textAnchor="middle" opacity="0.6">Region {i + 1}</text>
                {[0, 1, 2].map(j => (<rect key={j} x={28 + i * 52} y={45 + j * 14} width="28" height="10" rx="2" fill={`${accent}20`} stroke={accent} strokeWidth="0.5" opacity="0.5" />))}
              </g>
            ))}
          </svg>
        )}
        {type === "RAG" && (
          <svg viewBox="0 0 180 100" className={styles.diagramSvg}>
            <rect x="10" y="38" width="35" height="22" rx="4" fill="none" stroke={accent} strokeWidth="1" opacity="0.6" />
            <text x="27" y="52" fill={accent} fontSize="6" textAnchor="middle" opacity="0.8">Query</text>
            <circle cx="90" cy="50" r="20" fill="none" stroke={accent} strokeWidth="1" opacity="0.6" />
            <text x="90" y="48" fill={accent} fontSize="6" textAnchor="middle" opacity="0.8">Vector</text>
            <text x="90" y="56" fill={accent} fontSize="6" textAnchor="middle" opacity="0.8">Store</text>
            <rect x="135" y="38" width="35" height="22" rx="4" fill="none" stroke={accent} strokeWidth="1" opacity="0.6" />
            <text x="152" y="52" fill={accent} fontSize="6" textAnchor="middle" opacity="0.8">LLM</text>
            <line x1="45" y1="50" x2="70" y2="50" stroke={accent} strokeWidth="0.8" opacity="0.4" />
            <line x1="110" y1="50" x2="135" y2="50" stroke={accent} strokeWidth="0.8" opacity="0.4" />
          </svg>
        )}
        {type === "OBS" && (
          <svg viewBox="0 0 180 100" className={styles.diagramSvg}>
            <polyline points="10,70 30,50 50,65 70,30 90,45 110,20 130,40 150,25 170,35" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.7" />
            <circle cx="110" cy="20" r="4" fill={accent} opacity="0.8" />
            <line x1="110" y1="20" x2="110" y2="95" stroke={accent} strokeWidth="0.5" strokeDasharray="3,2" opacity="0.3" />
            <text x="108" y="90" fill={accent} fontSize="6" opacity="0.6">anomaly</text>
          </svg>
        )}
      </div>
      <div className={styles.diagramLabel} style={{ color: accent }}>{type}</div>
    </div>
  );
}

export default function ProjectsSection() {
  const { language } = useApp();
  const t = translations[language].projects;
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>
            <span className={styles.labelLine} />
            <span>{t.label}</span>
            <span className={styles.labelLine} />
          </div>
          <h2 className={styles.heading}>
            {t.heading}{" "}
            <span className={styles.headingAccent}>{t.accent}</span>
          </h2>
          <p className={styles.subheading}>{t.sub}</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={styles.card}
              style={{ "--accent": project.accent, "--accent-glow": project.accentGlow } as React.CSSProperties}
            >
              <div className={styles.cardTop}>
                <DiagramPreview type={project.diagram} accent={project.accent} />
                <div className={styles.cardMeta}>
                  <div className={styles.cardBadges}>
                    <span className={styles.badge} style={{ color: project.accent, borderColor: `${project.accent}40`, background: project.accentGlow }}>
                      {project.category}
                    </span>
                    <span className={`${styles.badge} ${styles.badgeStatus}`} style={{ color: project.status === "Open Source" ? "#22c55e" : "#94a3b8" }}>
                      ● {project.status}
                    </span>
                  </div>
                  <span className={styles.year}>{project.year}</span>
                </div>
              </div>

              <div className={styles.titleGroup}>
                <h3 className={styles.cardTitle} style={{ color: project.accent }}>{project.title}</h3>
                <p className={styles.cardSubtitle}>{project.subtitle}</p>
              </div>

              <div className={styles.impactBox} style={{ borderColor: `${project.accent}30`, background: project.accentGlow }}>
                <span className={styles.impactIcon}>↑</span>
                <p className={styles.impactText}>{project.impact}</p>
              </div>

              <div className={styles.techTags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.techTag}>{tag}</span>
                ))}
              </div>

              <div className={styles.cardActions}>
                <a
                  href={project.demoLink || "#"}
                  target={project.demoLink ? "_blank" : undefined}
                  rel={project.demoLink ? "noopener noreferrer" : undefined}
                  className={styles.viewBtn}
                  style={{ background: `linear-gradient(135deg, ${project.accent}cc, ${project.accent}88)` }}
                >
                  {t.viewDemo}
                  <ArrowUpRight size={14} />
                </a>
                <button
                  className={styles.caseStudyBtn}
                  onClick={() => setActiveCaseStudy(project.id)}
                >
                  {t.caseStudy}
                  <ExternalLink size={12} />
                </button>
              </div>

              <div className={styles.cornerDeco} style={{ borderColor: `${project.accent}40` }} />
            </div>
          ))}
        </div>
      </div>

      {activeCaseStudy && (
        <div className={styles.modalOverlay} onClick={() => setActiveCaseStudy(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={() => setActiveCaseStudy(null)}>
              <X size={20} />
            </button>
            <h3 className={styles.modalTitle}>
              {caseStudies[activeCaseStudy]?.title || `${projects.find(p => p.id === activeCaseStudy)?.title} - Case Study`}
            </h3>
            <div className={styles.modalBody}>
              {caseStudies[activeCaseStudy]?.content || (
                <div className={styles.csSection}>
                  <p>Case study coming soon. Stay tuned for more details on the development process, challenges, and outcomes of this project.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
