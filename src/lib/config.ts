// src/lib/config.ts
// ─── EDIT THIS FILE TO UPDATE GLOBAL SITE SETTINGS ───────────────────────────

export const siteConfig = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name: "Shazib Siddique",
  title: "Shazib Siddique — Operations & Administrative Professional (NYC)",
  description:
    "Operations and administrative professional based in Brooklyn, NY. Event coordination, systems reliability, workflow optimization, and documented results for NYC/NJ organizations.",
  url: "https://shazibs.com", // ← update before deploy
  location: "Brooklyn, NY",
  locationServed: "NYC + NJ",

  // ── Contact ──────────────────────────────────────────────────────────────
  email: "siddiqueshazib5@gmail.com",
  phone: "(646) 801-0626",
  phoneHref: "tel:+16468010626",

  // ── Social / External Links ──────────────────────────────────────────────
  linkedin: "https://linkedin.com/in/shazib-siddique", // ← update
  github: "https://github.com/shazib-siddique",         // ← update

  // ── Design Tokens ────────────────────────────────────────────────────────
  accentColor: "#5F9EA0", // cadetblue

  // ── Navigation ───────────────────────────────────────────────────────────
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
    { label: "Services", href: "/services" },
  ],

  // ── Open Graph / SEO ─────────────────────────────────────────────────────
  ogImage: "/images/og/og-default.png",
  twitterHandle: "@shazibsiddique", // ← update or remove
};

// ── Proof Metrics ────────────────────────────────────────────────────────────
export const proofMetrics = [
  {
    value: "50+",
    label: "Events coordinated annually",
    sub: "End-to-end logistics & reporting",
  },
  {
    value: "40%",
    label: "Workflow improvement",
    sub: "1,000+ user check-in redesign",
  },
  {
    value: "99.9%",
    label: "Systems uptime maintained",
    sub: "Brooklyn College Athletics",
  },
  {
    value: "60%",
    label: "Faster knowledge retrieval",
    sub: "Internal search system build",
  },
  {
    value: "45%",
    label: "Response accuracy gain",
    sub: "AI knowledge system optimization",
  },
];

// ── Service Packages ─────────────────────────────────────────────────────────
export const services = [
  {
    id: "business-launch-kit",
    icon: "globe",
    title: "Web Presence & Lead System",
    tagline: "A professional website that generates leads — launched in 7–10 days.",
    outcome: "Launch in 7–10 days",
    audience: "Local businesses, service providers, and consultants in NYC/NJ who need a credible online presence — not a $20k agency project.",
    problems: [
      "No website or an outdated one that turns prospects away",
      "Manual follow-ups and lead tracking in spreadsheets",
      "No analytics — no idea where traffic comes from",
      "Forms that don't convert or connect to any workflow",
    ],
    deliverables: [
      "1–5 page site (Next.js or WordPress)",
      "Contact form + lead routing (email/CRM)",
      "GA4 + Search Console setup",
      "Basic SEO + performance optimization",
      "Launch checklist + handoff documentation",
    ],
    timeline: "7–10 days",
    price: "Starting at $1,200 (most clients land at $1,500)",
    priceMax: "Max $1,800 for up to 5 pages",
    payment: "50% upfront / 50% before launch",
    revisions: "2 rounds included (extras $50/round)",
    cta: "Get a quote",
    href: "/contact?service=business-launch-kit",
    featured: true,
  },
  {
    id: "workstation-setup",
    icon: "monitor",
    title: "Workstation Setup & Systems Support",
    tagline: "Reliable tech setup and documentation — in-person, same week.",
    outcome: "Reliable setups + documentation",
    audience: "Founders, office managers, and ops leads who need dependable tech help without the overhead of a full IT hire.",
    problems: [
      "Recurring tech issues with no root-cause resolution",
      "Software and tool setup that takes weeks instead of hours",
      "No internal docs — every new hire needs a personal walkthrough",
      "Printer, scanner, and network setup left half-done",
    ],
    deliverables: [
      "Workstation setup + updates + essential installs",
      "Email + account configuration",
      "Backup + security basics",
      "Printer/scanner setup (if needed)",
      "1-page handoff doc per workstation",
    ],
    timeline: "Same week (NYC in-person)",
    price: "$300 (single workstation) · $450 (workstation + printer/scanner + backup)",
    priceMax: "NYC travel: included · NJ: +$100 travel fee ($450+ jobs only)",
    payment: "Full payment on completion",
    revisions: "N/A — setup verified on-site",
    retainer: "$300/mo (2 hrs) · $600/mo (5 hrs) · Overage: $95/hr",
    cta: "Book a setup",
    href: "/contact?service=workstation-setup",
    featured: false,
  },
  {
    id: "brand-starter-pack",
    icon: "palette",
    title: "Print & Brand Materials",
    tagline: "Professional business card + poster design — print-ready.",
    outcome: "Business card + poster",
    audience: "Small businesses and solo operators in NYC/NJ who need clean, professional print materials without hiring a full design agency.",
    problems: [
      "No professional business card to hand out",
      "DIY flyers that look unprofessional",
      "Inconsistent branding across materials",
      "No print-ready files — stuck with low-res images",
    ],
    deliverables: [
      "Business card design (print-ready PDF + PNG)",
      "1 poster/flyer (print + social format)",
      "Simple brand mini-kit (colors, fonts, logo placement)",
    ],
    timeline: "5–7 days",
    price: "Starting at $350",
    priceMax: "",
    payment: "50% upfront / 50% on delivery",
    revisions: "2 rounds included (extras $50/round)",
    cta: "Get a quote",
    href: "/contact?service=brand-starter-pack",
    featured: false,
  },
];

// ── Add-ons ──────────────────────────────────────────────────────────────────
export const addOns = [
  { label: "Extra website page", price: "+$150" },
  { label: "Rush delivery (any service)", price: "+25%" },
  { label: "Weekend work", price: "+25%" },
];

// ── Portfolio Projects ────────────────────────────────────────────────────────
export const projects = [
  {
    slug: "ai-knowledge-optimization",
    title: "AI Knowledge Optimization System",
    category: "AI/Automation",
    tags: ["AI/Automation", "Systems"],
    type: "client" as const,
    summary: "RAG-based system that reduced internal knowledge search time by 60% and improved response accuracy by 45%.",
    metrics: ["60% faster retrieval", "45% accuracy gain"],
    stack: ["Python", "LangChain", "OpenAI API", "Vector DB"],
    featured: true,
    imagePlaceholder: "/images/projects/ai-knowledge-placeholder.png",
  },
  {
    slug: "uber-clone",
    title: "Uber-Clone App",
    category: "Web",
    tags: ["Web"],
    type: "personal" as const,
    summary: "Full-stack real-time ride booking app with live driver tracking, authentication, and cloud deployment.",
    metrics: ["Real-time booking", "Firebase + AWS"],
    stack: ["Next.js", "Firebase", "AWS", "TypeScript"],
    featured: true,
    imagePlaceholder: "/images/projects/uber-clone-placeholder.png",
  },
  {
    slug: "client-website",
    title: "Client Business Website",
    category: "Web",
    tags: ["Web", "Systems"],
    type: "client" as const,
    summary: "Production Django/Bootstrap website deployed to AWS with custom CMS, SEO configuration, and analytics.",
    metrics: ["AWS deployed", "Custom CMS"],
    stack: ["Django", "Bootstrap", "AWS EC2", "PostgreSQL"],
    featured: false,
    imagePlaceholder: "/images/projects/client-website-placeholder.png",
  },
  {
    slug: "marketmate",
    title: "MarketMAte",
    category: "AI/Automation",
    tags: ["AI/Automation", "Web"],
    type: "personal" as const,
    summary: "AI-powered content and analytics platform built at NY TechWeek Hackathon. Secure cloud deployment with real users.",
    metrics: ["Hackathon project", "AI-powered analytics"],
    stack: ["Next.js", "OpenAI", "Vercel", "Supabase"],
    featured: true,
    imagePlaceholder: "/images/projects/marketmate-placeholder.png",
  },
  {
    slug: "athletics-systems",
    title: "Brooklyn College Athletics Systems",
    category: "Ops/Systems",
    tags: ["Ops/Systems"],
    type: "client" as const,
    summary: "Maintained 99.9% uptime for athletics department website. Rebuilt check-in workflow for 1,000+ users, cutting wait time 40%.",
    metrics: ["99.9% uptime", "40% wait time reduction", "1,000+ users"],
    stack: ["WordPress", "Google Workspace", "Python", "Excel Automation"],
    featured: true,
    imagePlaceholder: "/images/projects/athletics-placeholder.png",
  },
];

// ── Client Testimonials (placeholder — replace with real data) ───────────────
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Jordan Mitchell",
    role: "Operations Director",
    company: "Mitchell & Co.",
    quote: "Shazib rebuilt our entire check-in system in under two weeks. The team saves hours every event now.",
    initials: "JM",
  },
  {
    name: "Priya Desai",
    role: "Founder",
    company: "Desai Consulting",
    quote: "The website he built us started generating leads within the first week of launch. Worth every dollar.",
    initials: "PD",
  },
  {
    name: "Marcus Chen",
    role: "IT Manager",
    company: "Brooklyn Logistics",
    quote: "We called him for a workstation setup and ended up hiring him for the whole office. Reliable and fast.",
    initials: "MC",
  },
  {
    name: "Aisha Thompson",
    role: "Program Coordinator",
    company: "NYC Youth Network",
    quote: "He documented everything so clearly that our new hires can onboard themselves. That never happened before.",
    initials: "AT",
  },
  {
    name: "David Kowalski",
    role: "Managing Partner",
    company: "Kowalski Legal",
    quote: "No jargon, no upselling. He told us exactly what we needed, delivered it on time, and moved on. Rare.",
    initials: "DK",
  },
];

// ── Results Highlights (NOT testimonials — labeled honestly) ─────────────────
export const resultsHighlights = [
  {
    quote:
      "Check-in that used to take 4 minutes per person now takes under 2.5 minutes — at scale, across 1,000+ users, that's hours saved at every event.",
    context: "Brooklyn College Athletics — check-in workflow redesign",
    metric: "40% wait time reduction",
  },
  {
    quote:
      "Staff went from searching 6–8 tools to finding authoritative answers in one query. Onboarding new team members dropped from days to hours.",
    context: "AI Knowledge Optimization System — RAG implementation",
    metric: "60% faster knowledge retrieval",
  },
  {
    quote:
      "The athletics site ran without a single unplanned outage across an entire season. Zero calls from coaches about the system being down.",
    context: "Brooklyn College Athletics — systems maintenance",
    metric: "99.9% uptime maintained",
  },
];
