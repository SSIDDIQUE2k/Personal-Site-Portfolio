// src/app/portfolio/page.tsx
import type { Metadata } from "next";
import { projects } from "@/lib/config";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { BeforeAfterDemo } from "@/components/sections/BeforeAfterDemo";
import { CodeAnimation } from "@/components/ui/CodeAnimation";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Projects across operations systems, web development, and AI/automation — each with documented outcomes and a full case study.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio — Shazib Siddique",
    description:
      "Projects across operations systems, web development, and AI/automation.",
    url: "/portfolio",
  },
};

const clientProjects = projects.filter((p) => p.type === "client");
const personalProjects = projects.filter((p) => p.type === "personal");

export default function PortfolioPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="relative pt-28 pb-12 border-b"
        style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
        aria-label="Portfolio introduction"
      >
        <div className="relative z-10 container mx-auto max-w-6xl">
          <p className="font-inconsolata text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "var(--text-dim)" }}>
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-raleway font-black uppercase tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>
            Work &amp; Projects
          </h1>
          <div className="w-12 h-1 mb-6" style={{ backgroundColor: "var(--accent)" }} />
          <p className="font-montserrat max-w-xl text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Client deliverables and personal builds — each with documented
            outcomes and a full case study.
          </p>
        </div>
      </section>

      {/* ── Live Code ─────────────────────────────────────── */}
      <section className="py-14" style={{ backgroundColor: "var(--bg-alt)" }} aria-label="Live code showcase">
        <div className="container mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Terminal size={16} style={{ color: "var(--text-dim)" }} aria-hidden="true" />
                  <p className="font-inconsolata text-xs uppercase tracking-[0.2em]" style={{ color: "var(--text-dim)" }}>
                    Live code
                  </p>
                </div>
                <h2 className="text-2xl md:text-3xl font-raleway font-black uppercase tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>
                  Code in Action
                </h2>
                <div className="w-12 h-1 mb-6" style={{ backgroundColor: "var(--accent)" }} />
                <p className="font-montserrat text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                  Real snippets from sites and systems I&apos;ve built — React components,
                  responsive CSS, and API routes.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["React", "CSS", "TypeScript", "Next.js"].map((tag) => (
                    <span key={tag} className="badge-slate">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <CodeAnimation className="w-full max-w-xl" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Before & After Demos ─────────────────────────── */}
      <BeforeAfterDemo />

      {/* ── Client Projects ───────────────────────────────── */}
      {clientProjects.length > 0 && (
        <section className="py-14" style={{ backgroundColor: "var(--bg)" }} aria-label="Client projects">
          <div className="container mx-auto max-w-6xl">
            <PortfolioGrid
              projects={clientProjects}
              sectionTitle="Client Projects"
              sectionSubtitle="Work delivered for real clients with documented outcomes."
            />
          </div>
        </section>
      )}

      {/* ── Personal Projects ─────────────────────────────── */}
      {personalProjects.length > 0 && (
        <section className="py-14" style={{ backgroundColor: "var(--bg-alt)" }} aria-label="Personal projects">
          <div className="container mx-auto max-w-6xl">
            <PortfolioGrid
              projects={personalProjects}
              sectionTitle="Personal Projects"
              sectionSubtitle="Side projects, hackathons, and explorations."
            />
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────── */}
      <HomeCTA />
    </>
  );
}
