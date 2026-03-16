// src/components/sections/ServicesPreview.tsx
import Link from "next/link";
import { services } from "@/lib/config";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServicesPreview() {
  return (
    <section className="section" style={{ backgroundColor: "var(--bg)" }} aria-label="Services overview">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <RevealOnScroll>
          <div className="mb-16">
            <p className="section-label">What I do</p>
            <h2 className="section-heading mb-6">
              Services
            </h2>
            <div className="w-12 h-1 mb-6" style={{ backgroundColor: "var(--accent)" }} />
            <p className="text-base max-w-xl leading-relaxed font-montserrat" style={{ color: "var(--text-dim)" }}>
              Three focused services — each scoped around results, not billable
              hours. Pick the one that fits your situation.
            </p>
          </div>
        </RevealOnScroll>

        {/* Cards — no pricing on homepage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {services.map((svc, i) => (
            <RevealOnScroll key={svc.id} delay={i * 100}>
              <div
                className={cn(
                  "p-10 h-full flex flex-col group relative",
                  svc.featured && "border-t-2"
                )}
                style={
                  svc.featured
                    ? { backgroundColor: "var(--bg-alt)", borderTopColor: "var(--accent)" }
                    : { backgroundColor: "var(--bg)" }
                }
              >
                {svc.featured && (
                  <span
                    className="text-[10px] font-inconsolata font-bold uppercase tracking-[0.2em] px-3 py-1 mb-6 inline-block self-start"
                    style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg)" }}
                  >
                    Most popular
                  </span>
                )}

                <h3 className="text-lg font-raleway font-bold mb-2 uppercase" style={{ color: "var(--text)" }}>
                  {svc.title}
                </h3>
                <p className="text-sm mb-6 leading-relaxed flex-1 font-montserrat" style={{ color: "var(--text-muted)" }}>
                  {svc.tagline}
                </p>

                {/* Single outcome highlight */}
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-1 h-1 flex-shrink-0" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
                  <span className="text-xs font-inconsolata uppercase tracking-wider" style={{ color: "var(--text-dim)" }}>
                    {svc.outcome}
                  </span>
                </div>

                {/* CTA — links to services page */}
                <div className="pt-5 border-t mt-auto" style={{ borderColor: "var(--border)" }}>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-inconsolata
                               uppercase tracking-wider hover:opacity-80 transition-colors"
                    style={{ color: "var(--text-dim)" }}
                  >
                    Learn more <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA */}
        <RevealOnScroll>
          <div className="text-center mt-14">
            <Link href="/services" className="btn-secondary">
              View all services
              <ArrowRight size={14} />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
