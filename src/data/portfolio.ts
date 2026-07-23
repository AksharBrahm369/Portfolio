export const profile = {
  email: "darshanzala369@gmail.com",
  intro: "I design and build responsive web applications, business systems, and practical AI-powered tools using modern full-stack technologies.",
  snapshot: [
    { label: "Focus", value: "Full-stack software development" },
    { label: "Strength", value: "Turning workflows into usable products" },
    { label: "Current work", value: "Business systems and AI-assisted applications" },
    { label: "Approach", value: "Clear UX, maintainable code, reliable delivery" },
  ],
  technologies: ["React", "Next.js", "JavaScript", "Git", "GitHub", "Vercel", "Netlify", "AI APIs"],
};

export const socials = {
  github: "https://github.com/AksharBrahm369",
  linkedin: "https://www.linkedin.com/in/darshanzala369/",
};

export const projects = [
  { index: "01", slug: "tuition-admin-management-system", title: "Tuition Admin Management System", category: "Education management", image: "/projects/tuition.webp", live: "https://tution-management-system-using-next-nine.vercel.app/", technologies: ["Next.js", "React", "Vercel"], summary: "A role-based system for organizing tuition administration, including student, teacher, parent, attendance, and fee workflows.", problem: "Tuition records and day-to-day administration can become fragmented across separate manual processes.", contribution: "Product planning, interface design, application development, and deployment.", outcome: "Consolidated multiple administrative workflows into one structured application.", context: "The project explores how one administrative workspace can support the people and records involved in running a tuition centre.", decisions: ["Organized the product around distinct administrative workflows.", "Used a role-oriented interface to keep different tasks understandable.", "Built the application with Next.js and deployed it on Vercel."], lessons: "Complex business tools need clear information hierarchy before they need more features." },
  { index: "02", slug: "sampark-attendance", title: "Sampark Attendance", category: "Community workflow", image: "/projects/sampark.webp", live: "https://sampark-nextjs.vercel.app/", technologies: ["Next.js", "React", "Vercel"], summary: "A focused attendance tool that turns weekly absence data into a clearer follow-up workflow.", problem: "Long attendance lists make it difficult to identify who needs timely follow-up.", contribution: "Workflow planning, interface design, frontend development, and deployment.", outcome: "Changed a spreadsheet-heavy review task into a more direct, visual process.", context: "Sampark was created around a recurring community workflow: reviewing attendance and deciding where follow-up is most useful.", decisions: ["Accepted CSV input to fit the existing workflow.", "Grouped information by attendance patterns for faster scanning.", "Used charts and summaries to make the data easier to act on."], lessons: "Useful automation often begins by respecting the format people already use." },
  { index: "03", slug: "the-art-cafe", title: "The Art Cafe", category: "Local commerce", image: "/projects/art-cafe.webp", live: "https://theartcafe.netlify.app/", technologies: ["React", "JavaScript", "Netlify"], summary: "A responsive cafe website designed to present the venue, menu, and visual character clearly online.", problem: "A local cafe needs a clear digital presence that makes its offering easy to understand.", contribution: "Interface design, React development, responsive implementation, and deployment.", outcome: "Created a dedicated online showcase for the cafe.", context: "The website translates the cafe’s visual identity into a simple, accessible web presence.", decisions: ["Led with the venue’s visual character.", "Kept primary visitor information easy to find.", "Built a responsive React interface for mobile and desktop."], lessons: "Small-business websites work best when atmosphere never obscures practical information." },
  { index: "04", slug: "ambika-tailors", title: "Ambika Tailors", category: "Business website", image: "/projects/ambika.webp", live: "https://ambikatailors.netlify.app/", technologies: ["React", "JavaScript", "Netlify"], summary: "A tailored business website for presenting services and design work to prospective customers.", problem: "A local tailoring business needed a dedicated place to show its work and explain its services.", contribution: "Interface design, React development, responsive implementation, and deployment.", outcome: "Established a focused online showcase for the business.", context: "The project centers on helping a local service business communicate craft and offering without unnecessary complexity.", decisions: ["Used imagery to communicate the work quickly.", "Kept service information direct and scannable.", "Optimized the layout for browsing on a phone."], lessons: "Clear presentation can give a small business a stronger and more credible digital home." },
  { index: "05", slug: "ai-chatbot", title: "AI Chatbot", category: "AI experiment", image: "/projects/chatbot.webp", live: "https://darshanbot.netlify.app/", technologies: ["React", "JavaScript", "Netlify"], summary: "A lightweight conversational interface built to explore direct, low-friction AI interaction.", problem: "Visitors often need a faster way to ask a question than navigating multiple pages.", contribution: "Conversation design, interface development, responsive implementation, and deployment.", outcome: "Produced a compact working experiment in conversational UI.", context: "The chatbot is a practical exploration of how a familiar messaging pattern can make information easier to access.", decisions: ["Used a familiar chat layout to reduce learning effort.", "Kept the interface intentionally narrow and distraction-free.", "Focused the experience on short, direct exchanges."], lessons: "Conversational interfaces depend as much on restraint and clear feedback as they do on the response itself." },
] as const;

export const capabilities = [
  { index: "01", title: "Frontend Engineering", description: "Responsive applications, reusable components, state-driven interfaces, accessibility, and performance.", skills: ["Responsive UI", "Component systems", "Accessibility", "Performance"] },
  { index: "02", title: "Full-Stack Applications", description: "Application logic, forms, administrative workflows, and the interfaces that connect them.", skills: ["Application logic", "Forms", "Business workflows", "Data interfaces"] },
  { index: "03", title: "AI Integration", description: "Conversational interfaces, prompt workflows, and practical experiments with AI-assisted products.", skills: ["AI APIs", "Conversation UI", "Prompt workflows", "Automation"] },
  { index: "04", title: "Product Delivery", description: "Requirement understanding, interface planning, iteration, Git workflows, deployment, and maintenance.", skills: ["Product planning", "Git workflows", "Deployment", "Iteration"] },
];

export const journey = [
  { period: "Foundation", title: "Learning through web projects", description: "I began by building responsive web interfaces and learning how design decisions translate into working software." },
  { period: "Business websites", title: "Building for local businesses", description: "Projects such as The Art Cafe and Ambika Tailors taught me to balance visual identity with practical visitor needs.", slug: "the-art-cafe" },
  { period: "Workflow tools", title: "Turning recurring work into products", description: "Sampark Attendance and the Tuition Admin Management System moved my focus toward structured, real-world workflows.", slug: "sampark-attendance" },
  { period: "Current direction", title: "Exploring AI-assisted products", description: "I’m now combining full-stack product thinking with conversational interfaces and practical automation.", slug: "ai-chatbot" },
];

// Developer TODO: confirm project dates, source-code URLs, database/auth providers,
// DarshonicTech public URL, formal experience, and any personal interests to publish.
