// src/app/resume/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Download, ExternalLink, TrendingUp, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Shazib Siddique's resume — operations, systems support, and web/automation experience. Download PDF or view highlights.",
  alternates: { canonical: "/resume" },
  openGraph: {
    title: "Resume — Shazib Siddique",
    description:
      "Operations, systems support, and web/automation experience. Download PDF.",
    url: "/resume",
  },
};

const highlights = [
  {
    metric: "99.9% uptime",
    detail: "Maintained Brooklyn College Athletics website across full academic year",
    tools: ["WordPress", "Uptime monitoring"],
  },
  {
    metric: "40% wait time reduction",
    detail: "Redesigned check-in workflow for 1,000+ user events via QR-based automation",
    tools: ["Python", "Google Workspace"],
  },
  {
    metric: "60% faster knowledge retrieval",
    detail: "Built RAG system over internal docs; reduced average search time from ~8 min to ~3 min",
    tools: ["LangChain", "OpenAI API", "Vector DB"],
  },
  {
    metric: "45% accuracy improvement",
    detail: "Optimized retrieval and prompt structure in AI knowledge system over baseline",
    tools: ["Python", "LangChain", "Prompt engineering"],
  },
  {
    metric: "50+ events / year",
    detail: "End-to-end event operations coordination including logistics, comms, and post-event reporting",
    tools: ["Google Workspace", "Spreadsheet automation"],
  },
  {
    metric: "Full-stack deployments",
    detail: "Shipped production apps on AWS (EC2/RDS) and Vercel; Django, Next.js, Firebase",
    tools: ["Django", "Next.js", "AWS", "Firebase", "Vercel"],
  },
];

export default function ResumePage() {
  return (
    <>
      {/* Header */}
      <section
        className="relative pt-28 pb-12 border-b"
        style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
        aria-label="Resume header"
      >
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="font-inconsolata text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "var(--text-dim)" }}>Resume</p>
              <h1 className="text-4xl font-raleway font-black uppercase mb-2" style={{ color: "var(--text)" }}>
                {siteConfig.name}
              </h1>
              <p className="font-montserrat" style={{ color: "var(--text-dim)" }}>
                Operations &amp; Systems Support · Brooklyn, NY · {siteConfig.email}
              </p>
            </div>
            <a
              href="/resume.pdf"
              download="Shazib-Siddique-Resume.pdf"
              className="btn-primary self-start sm:self-auto"
              aria-label="Download resume as PDF"
            >
              <Download size={15} />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* PDF Embed */}
          <div className="lg:col-span-3">
            <RevealOnScroll>
              <div className="border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--overlay)" }}>
                  <p className="text-xs font-medium font-inconsolata" style={{ color: "var(--text-dim)" }}>resume.pdf</p>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs hover:opacity-80 transition-colors"
                    style={{ color: "var(--text-dim)" }}
                    aria-label="Open resume PDF in new tab"
                  >
                    Open in new tab <ExternalLink size={11} />
                  </a>
                </div>
                {/* PDF viewer */}
                <div style={{ height: "700px", backgroundColor: "var(--bg-elevated)" }}>
                  <object
                    data="/resume.pdf"
                    type="application/pdf"
                    width="100%"
                    height="100%"
                    aria-label="Resume PDF viewer"
                  >
                    {/* Fallback */}
                    <div className="h-full flex flex-col items-center justify-center gap-4 p-8 text-center">
                      <div className="w-16 h-16 border flex items-center justify-center" style={{ backgroundColor: "var(--overlay)", borderColor: "var(--border-bold)" }}>
                        <FileIcon />
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>
                          PDF preview not available in this browser
                        </p>
                        <p className="text-xs mb-4 font-montserrat" style={{ color: "var(--text-dim)" }}>
                          Please use the download button or open in a new tab.
                        </p>
                        <div className="flex gap-3 justify-center">
                          <a
                            href="/resume.pdf"
                            download="Shazib-Siddique-Resume.pdf"
                            className="btn-primary text-xs"
                          >
                            <Download size={13} /> Download PDF
                          </a>
                          <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-xs"
                          >
                            Open in tab <ExternalLink size={13} />
                          </a>
                        </div>
                      </div>
                      <p className="text-xs font-inconsolata mt-2" style={{ color: "var(--text-dim)" }}>
                        Add your resume to: /public/resume.pdf
                      </p>
                    </div>
                  </object>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <p className="font-inconsolata text-xs uppercase tracking-[0.2em] mb-5" style={{ color: "var(--text-dim)" }}>
                Key Highlights
              </p>
              <div className="space-y-3">
                {highlights.map((h, i) => (
                  <RevealOnScroll key={h.metric} delay={i * 60}>
                    <div className="border p-4" style={{ backgroundColor: "var(--overlay)", borderColor: "var(--border)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={13} style={{ color: "var(--accent)" }} aria-hidden="true" />
                        <span className="text-sm font-bold" style={{ color: "var(--text)" }}>{h.metric}</span>
                      </div>
                      <p className="text-xs leading-relaxed mb-3 font-montserrat" style={{ color: "var(--text-dim)" }}>{h.detail}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {h.tools.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-0.5 font-inconsolata"
                            style={{ color: "var(--text-muted)", backgroundColor: "var(--overlay-bold)" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>

              {/* Recruiter Snapshot */}
              <div className="mt-6 p-5 border" style={{ backgroundColor: "var(--overlay)", borderColor: "var(--border-bold)" }}>
                <p className="font-inconsolata text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "var(--text-dim)" }}>
                  Recruiter Snapshot
                </p>
                <p className="text-xs font-montserrat mb-3 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  <span className="font-semibold" style={{ color: "var(--text)" }}>Open to:</span> Ops Coordinator / Admin Coordinator / HR Coordinator / IT Support (NYC/NJ)
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
                  {["40% faster workflow", "99.9% uptime", "50+ events/year"].map((m) => (
                    <span key={m} className="flex items-center gap-1.5 text-xs font-inconsolata" style={{ color: "var(--text-muted)" }}>
                      <span className="w-1 h-1" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
                      {m}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {["Excel", "SQL", "Jira/Confluence", "Google Workspace"].map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 font-inconsolata" style={{ color: "var(--text-muted)", backgroundColor: "var(--overlay-bold)" }}>{t}</span>
                  ))}
                </div>
                <p className="text-xs font-montserrat" style={{ color: "var(--text-dim)" }}>
                  <Link href="/experience" className="hover:opacity-80 underline underline-offset-2 transition-colors" style={{ color: "var(--text-muted)" }}>View detailed experience &amp; project outcomes →</Link>
                </p>
              </div>

              <div className="mt-4 p-4 border" style={{ backgroundColor: "var(--overlay)", borderColor: "var(--border-bold)" }}>
                <p className="text-xs mb-3 font-montserrat" style={{ color: "var(--text-muted)" }}>
                  Interested? I&apos;d welcome the conversation.
                </p>
                <div className="flex flex-col gap-2">
                  <Link href="/contact" className="btn-primary text-xs justify-center">
                    Contact Me <ArrowRight size={12} />
                  </Link>
                  <Link href="/experience" className="btn-secondary text-xs justify-center">
                    See My Experience <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

function FileIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      style={{ color: "var(--text-dim)" }}
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}
