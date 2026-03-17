// src/app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { services, addOns, siteConfig, testimonials } from "@/lib/config";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  CheckCircle2,
  XCircle,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  Phone,
  Plus,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business Launch Kit ($1,200+), Workstation Setup ($300+), Business Launch Essentials ($350+). Transparent pricing for NYC businesses.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Shazib Siddique",
    description:
      "Three service packages for NYC businesses. Transparent pricing, concrete deliverables.",
    url: "/services",
  },
};

const faqItems = [
  {
    q: "What are the minimums?",
    a: "$300 for in-person support, $350 for design work, $1,200 for website builds.",
  },
  {
    q: "Do you require a deposit?",
    a: "Yes — 50% deposit required before work begins on all projects. Workstation setups are paid in full on completion.",
  },
  {
    q: "How many revisions are included?",
    a: "2 rounds of revisions are included in website and design projects. Additional rounds are $50 each.",
  },
  {
    q: "Do you work in New Jersey?",
    a: "NJ is case-by-case. There's a $100 travel fee, and I only book NJ jobs at the $450+ tier.",
  },
  {
    q: "What if I need something not listed?",
    a: "Give me a call at (646) 801-0626 and we'll figure out scope together. Most custom requests fit within these packages with minor adjustments.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="relative pt-28 pb-14 border-b"
        style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
        aria-label="Services introduction"
      >
        <div className="relative z-10 container mx-auto max-w-6xl">
          <p className="font-inconsolata text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "var(--text-dim)" }}>
            What I offer
          </p>
          <h1 className="font-raleway font-black uppercase tracking-tight text-4xl md:text-5xl mb-4 max-w-2xl leading-tight" style={{ color: "var(--text)" }}>
            Three services.{" "}
            <br className="hidden sm:block" />
            <span style={{ color: "var(--text)" }}>Transparent pricing.</span>
          </h1>
          <div className="w-12 h-1 mb-6" style={{ backgroundColor: "var(--accent)" }} />
          <p className="font-montserrat max-w-xl text-base leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
            Each package is scoped for small-to-mid-size businesses in NYC/NJ.
            Every engagement starts with a quick call so we both
            know it&apos;s the right fit before any money changes hands.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="btn-primary"
          >
            Call {siteConfig.phone}
            <Phone size={14} />
          </a>
        </div>
      </section>

      {/* Service packages */}
      <section className="py-16" style={{ backgroundColor: "var(--bg-alt)" }} aria-label="Service packages">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border)" }}>
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.id} delay={i * 100}>
                <article
                  id={svc.id}
                  className={cn(
                    "flex flex-col h-full relative overflow-hidden",
                  )}
                  style={{ backgroundColor: "var(--bg-alt)" }}
                  aria-label={`${svc.title} package`}
                >
                  {svc.featured && (
                    <div className="absolute top-0 left-6">
                      <span className="font-inconsolata text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1"
                            style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg)" }}>
                        Most popular
                      </span>
                    </div>
                  )}

                  <div className="p-6 pb-0">
                    <h2 className="font-raleway font-black uppercase tracking-tight text-lg mb-1 mt-4" style={{ color: "var(--text)" }}>
                      {svc.title}
                    </h2>
                    <p className="font-montserrat text-sm font-medium mb-4" style={{ color: "var(--text-dim)" }}>
                      {svc.tagline}
                    </p>

                    {/* Audience */}
                    <div className="flex items-start gap-2 mb-5 p-3 border" style={{ backgroundColor: "var(--overlay)", borderColor: "var(--border)" }}>
                      <Users size={14} className="flex-shrink-0 mt-0.5" style={{ color: "var(--text-dim)" }} aria-hidden="true" />
                      <p className="font-montserrat text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        <span className="font-semibold" style={{ color: "var(--text-muted)" }}>Who it&apos;s for: </span>
                        {svc.audience}
                      </p>
                    </div>

                    {/* Problems */}
                    <div className="mb-5">
                      <p className="font-inconsolata text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "var(--text-dim)" }}>
                        Problems it solves
                      </p>
                      <ul className="space-y-2" role="list">
                        {svc.problems.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-dim)" }}>
                            <XCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: "var(--error-text)" }} aria-hidden="true" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-5">
                      <p className="font-inconsolata text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "var(--text-dim)" }}>
                        Deliverables
                      </p>
                      <ul className="space-y-2" role="list">
                        {svc.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                            <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }} aria-hidden="true" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer — pricing details */}
                  <div className="mt-auto p-6 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-dim)" }}>
                        <Clock size={12} aria-hidden="true" />
                        <span>{svc.timeline}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 mb-2">
                      <DollarSign size={14} style={{ color: "var(--accent)" }} aria-hidden="true" />
                      <p className="font-inconsolata text-sm font-bold uppercase" style={{ color: "var(--text)" }}>{svc.price}</p>
                    </div>

                    {svc.priceMax && (
                      <p className="text-xs mb-2 font-montserrat" style={{ color: "var(--text-dim)" }}>{svc.priceMax}</p>
                    )}

                    <div className="space-y-1 mb-4">
                      <p className="text-xs font-montserrat" style={{ color: "var(--text-dim)" }}>
                        <span style={{ color: "var(--text-dim)" }}>Payment:</span> {svc.payment}
                      </p>
                      <p className="text-xs font-montserrat" style={{ color: "var(--text-dim)" }}>
                        <span style={{ color: "var(--text-dim)" }}>Revisions:</span> {svc.revisions}
                      </p>
                      {svc.retainer && (
                        <p className="text-xs font-montserrat" style={{ color: "var(--text-dim)" }}>
                          <span style={{ color: "var(--text-dim)" }}>Monthly support:</span> {svc.retainer}
                        </p>
                      )}
                    </div>

                    <Link
                      href={svc.href}
                      className={cn(
                        "w-full justify-center inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest px-4 py-2.5 transition-colors",
                        svc.featured
                          ? "hover:opacity-90"
                          : "border-2 bg-transparent"
                      )}
                      style={
                        svc.featured
                          ? { backgroundColor: "var(--accent)", color: "var(--accent-fg)" }
                          : { borderColor: "var(--accent)", color: "var(--text)" }
                      }
                    >
                      {svc.cta}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-12 border-y" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }} aria-label="Add-ons">
        <div className="container mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="text-center mb-8">
              <p className="font-inconsolata text-xs uppercase tracking-[0.3em]" style={{ color: "var(--text-dim)" }}>
                Add-ons
              </p>
              <h2 className="font-raleway font-black uppercase tracking-tight text-2xl mt-2" style={{ color: "var(--text)" }}>
                Need something extra?
              </h2>
              <div className="w-12 h-1 mx-auto mt-4" style={{ backgroundColor: "var(--accent)" }} />
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {addOns.map((addon) => (
              <RevealOnScroll key={addon.label}>
                <div className="flex items-center gap-3 p-4 border" style={{ backgroundColor: "var(--overlay)", borderColor: "var(--border)" }}>
                  <Plus size={14} className="flex-shrink-0" style={{ color: "var(--accent)" }} aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold font-montserrat" style={{ color: "var(--text)" }}>{addon.label}</p>
                    <p className="text-xs font-inconsolata uppercase tracking-wider" style={{ color: "var(--text-dim)" }}>{addon.price}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16" style={{ backgroundColor: "var(--bg-alt)" }} aria-label="Process">
        <div className="container mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <p className="font-inconsolata text-xs uppercase tracking-[0.3em]" style={{ color: "var(--text-dim)" }}>
                How it works
              </p>
              <h2 className="font-raleway font-black uppercase tracking-tight text-2xl md:text-3xl mt-2" style={{ color: "var(--text)" }}>
                From first call to delivered work
              </h2>
              <div className="w-12 h-1 mx-auto mt-4" style={{ backgroundColor: "var(--accent)" }} />
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery call", desc: "15 min, free. I learn your situation and you learn how I work." },
              { step: "02", title: "Scoping & quote", desc: "I send a written scope with timeline and fixed price. No surprises." },
              { step: "03", title: "Execution", desc: "I work with your tools and check in at defined milestones." },
              { step: "04", title: "Handoff", desc: "You get documented deliverables + a walkthrough. No dependency." },
            ].map((phase, i) => (
              <RevealOnScroll key={phase.step} delay={i * 80}>
                <div className="text-center">
                  <div className="w-10 h-10 border flex items-center justify-center mx-auto mb-3" style={{ borderColor: "var(--border-bold)" }}>
                    <span className="font-inconsolata text-xs font-bold" style={{ color: "var(--text)" }}>{phase.step}</span>
                  </div>
                  <h3 className="font-raleway font-black uppercase tracking-tight text-sm mb-1" style={{ color: "var(--text)" }}>{phase.title}</h3>
                  <p className="font-montserrat text-xs leading-relaxed" style={{ color: "var(--text-dim)" }}>{phase.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }} aria-label="FAQ">
        <div className="container mx-auto max-w-3xl">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <p className="font-inconsolata text-xs uppercase tracking-[0.3em]" style={{ color: "var(--text-dim)" }}>
                FAQ
              </p>
              <h2 className="font-raleway font-black uppercase tracking-tight text-2xl md:text-3xl mt-2" style={{ color: "var(--text)" }}>
                Common questions
              </h2>
              <div className="w-12 h-1 mx-auto mt-4" style={{ backgroundColor: "var(--accent)" }} />
            </div>
          </RevealOnScroll>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <RevealOnScroll key={item.q} delay={i * 60}>
                <div className="p-5 border" style={{ backgroundColor: "var(--overlay)", borderColor: "var(--border)" }}>
                  <div className="flex items-start gap-3">
                    <HelpCircle size={14} className="flex-shrink-0 mt-0.5" style={{ color: "var(--text-dim)" }} aria-hidden="true" />
                    <div>
                      <p className="text-sm font-bold mb-1.5 font-raleway" style={{ color: "var(--text)" }}>{item.q}</p>
                      <p className="text-xs leading-relaxed font-montserrat" style={{ color: "var(--text-muted)" }}>{item.a}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* CTA strip */}
      <section className="py-16" style={{ backgroundColor: "var(--bg-alt)" }} aria-label="Services CTA">
        <div className="container mx-auto max-w-6xl text-center">
          <RevealOnScroll>
            <h2 className="font-raleway font-black uppercase tracking-tight text-2xl md:text-3xl mb-3" style={{ color: "var(--text)" }}>
              Not sure which service fits?
            </h2>
            <p className="font-montserrat text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
              Call me and we&apos;ll figure out the right scope together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={siteConfig.phoneHref}
                className="btn-primary"
              >
                Call {siteConfig.phone} <Phone size={14} />
              </a>
              <Link href="/contact" className="btn-secondary">
                Send a message <ArrowRight size={14} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
