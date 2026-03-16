// src/components/sections/AboutFull.tsx
import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  CheckCircle2,
  Zap,
  Shield,
  BarChart2,
  BookOpen,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Reliability first",
    desc: "I build things that keep working after I'm gone. If it needs me to run, it's not done.",
  },
  {
    icon: BarChart2,
    title: "Measurable outcomes",
    desc: "Every engagement should have a clear before and after. If we can't measure it, we agree on what success looks like upfront.",
  },
  {
    icon: BookOpen,
    title: "Documentation as a deliverable",
    desc: "Documentation isn't an afterthought. Your team should be able to run and maintain anything I build without calling me.",
  },
  {
    icon: Zap,
    title: "Speed through clarity",
    desc: "The fastest path to done is a clear scope. I ask the hard questions early so execution is clean.",
  },
];

const workProcess = [
  {
    step: "01",
    title: "Discovery",
    desc: "A 15-minute call to understand your situation, constraints, and what a successful outcome looks like. No pitch — just listening.",
  },
  {
    step: "02",
    title: "Plan",
    desc: "A written scope with timeline, deliverables, and fixed price. You know exactly what you're getting before any work starts.",
  },
  {
    step: "03",
    title: "Execute",
    desc: "I work in your tools, check in at milestones, and flag problems early. No surprises at the end.",
  },
  {
    step: "04",
    title: "Deliver",
    desc: "You receive documented deliverables and a walkthrough session. The work should be fully operational on day one.",
  },
  {
    step: "05",
    title: "Iterate",
    desc: "After handoff, I'm available for questions. For ongoing retainers, we review results regularly and adjust scope as needed.",
  },
];

const skills = [
  {
    category: "Operations",
    items: [
      "Event coordination",
      "Process documentation",
      "CRM management",
      "Scheduling systems",
      "Reporting & dashboards",
      "SOP writing",
    ],
  },
  {
    category: "Technical",
    items: [
      "Python scripting",
      "Django / Next.js",
      "AWS (EC2, S3, IAM)",
      "Firebase / Supabase",
      "Google Workspace",
      "LangChain / OpenAI API",
    ],
  },
  {
    category: "Web & Automation",
    items: [
      "Next.js + TypeScript",
      "Tailwind CSS",
      "Zapier / Make",
      "GA4 + Search Console",
      "On-page SEO",
      "WordPress / Bootstrap",
    ],
  },
];

export function AboutFull() {
  return (
    <>
      {/* Bio */}
      <section className="py-24 md:py-32 border-b" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }} aria-label="About">
        <div className="container mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <p className="section-label mb-4">About me</p>
                <h2 className="section-heading mb-6">
                  I make operations run smoother.
                </h2>
                <div className="w-12 h-1 mb-6" style={{ backgroundColor: "var(--accent)" }} />
                <p className="leading-relaxed mb-4 font-montserrat" style={{ color: "var(--text-muted)" }}>
                  I&apos;m Shazib Siddique — an operations and systems professional based
                  in Brooklyn, NY. I work at the intersection of business operations,
                  technical support, and web development, helping NYC/NJ organizations
                  reduce friction, improve reliability, and build systems that deliver
                  measurable results.
                </p>
                <p className="text-sm leading-relaxed font-montserrat" style={{ color: "var(--text-dim)" }}>
                  My background spans large-scale event operations, production web
                  systems, high-traffic workflow redesigns, and AI tools that cut
                  internal search time in half.
                </p>
              </div>

              {/* Profile photo */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-56 h-56 md:w-72 md:h-72 border overflow-hidden" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-alt)" }}>
                  <Image
                    src="/images/profile.jpg"
                    alt="Shazib Siddique"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Values */}
          <RevealOnScroll>
            <div className="mb-12">
              <p className="section-label">How I operate</p>
              <h3 className="font-raleway font-black uppercase tracking-tight text-2xl md:text-3xl mb-4" style={{ color: "var(--text)" }}>
                Values
              </h3>
              <div className="w-12 h-1 mb-4" style={{ backgroundColor: "var(--accent)" }} />
              <p className="font-montserrat max-w-xl leading-relaxed" style={{ color: "var(--text-dim)" }}>
                These aren&apos;t aspirational statements — they&apos;re constraints I
                design my work around.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ backgroundColor: "var(--border)" }}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <RevealOnScroll key={v.title} delay={i * 80}>
                  <div className="p-6 flex gap-4" style={{ backgroundColor: "var(--bg)" }}>
                    <div className="w-10 h-10 border flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--overlay)", borderColor: "var(--border)" }}>
                      <Icon size={18} style={{ color: "var(--accent)" }} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1" style={{ color: "var(--text)" }}>{v.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>{v.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 border-b" style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }} aria-label="Process">
        <div className="container mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="mb-12">
              <p className="section-label">Process</p>
              <h3 className="font-raleway font-black uppercase tracking-tight text-2xl md:text-3xl mb-4" style={{ color: "var(--text)" }}>
                How I Work
              </h3>
              <div className="w-12 h-1 mb-4" style={{ backgroundColor: "var(--accent)" }} />
              <p className="font-montserrat max-w-xl leading-relaxed" style={{ color: "var(--text-dim)" }}>
                Five repeatable phases that apply to every engagement — ops
                retainer, tech project, or web build.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {workProcess.map((phase, i) => (
              <RevealOnScroll key={phase.step} delay={i * 80}>
                <div className="text-center">
                  <div
                    className="w-12 h-12 border flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "var(--overlay)", borderColor: "var(--border-bold)" }}
                  >
                    <span className="text-xs font-bold" style={{ color: "var(--text)" }}>{phase.step}</span>
                  </div>
                  <h4 className="text-sm font-bold mb-2" style={{ color: "var(--text)" }}>{phase.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-dim)" }}>{phase.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 border-b" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }} aria-label="Skills">
        <div className="container mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="mb-10">
              <p className="section-label">Toolkit</p>
              <h3 className="font-raleway font-black uppercase tracking-tight text-2xl md:text-3xl mb-4" style={{ color: "var(--text)" }}>
                Skills &amp; Tools
              </h3>
              <div className="w-12 h-1" style={{ backgroundColor: "var(--accent)" }} />
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="font-inconsolata text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "var(--text-dim)" }}>
                  {group.category}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                      <CheckCircle2
                        size={13}
                        className="flex-shrink-0"
                        style={{ color: "var(--accent)" }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
