// src/components/sections/ResultsHighlights.tsx
import { resultsHighlights } from "@/lib/config";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TrendingUp } from "lucide-react";

export function ResultsHighlights() {
  return (
    <section className="section" style={{ backgroundColor: "var(--bg)" }} aria-label="Documented results">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="section-label justify-center">Results</p>
            <h2 className="section-heading mb-6">Documented Outcomes</h2>
            <div className="w-12 h-1 mx-auto mb-6" style={{ backgroundColor: "var(--accent)" }} />
            <p className="text-base max-w-2xl mx-auto leading-relaxed font-montserrat" style={{ color: "var(--text-dim)" }}>
              These aren&apos;t testimonials — they&apos;re documented results from real
              projects. No fabrications.
            </p>
          </div>
        </RevealOnScroll>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {resultsHighlights.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <div className="p-8 h-full flex flex-col relative" style={{ backgroundColor: "var(--bg)" }}>
                {/* Large quote mark */}
                <div
                  className="text-7xl font-serif leading-none
                             mb-4 -mt-2 select-none"
                  style={{ color: "var(--overlay-bold)" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                <blockquote className="text-sm leading-relaxed flex-1
                                       mb-6 not-italic font-montserrat" style={{ color: "var(--text-muted)" }}>
                  {item.quote}
                </blockquote>

                <div className="pt-5 border-t" style={{ borderColor: "var(--border)" }}>
                  <p className="text-xs mb-3 font-montserrat" style={{ color: "var(--text-dim)" }}>{item.context}</p>
                  <span
                    className="inline-flex items-center gap-2 text-xs font-inconsolata font-bold
                                   border
                                   px-3 py-1.5 uppercase tracking-wider"
                    style={{ color: "var(--text)", backgroundColor: "var(--overlay)", borderColor: "var(--border-bold)" }}
                  >
                    <TrendingUp size={11} aria-hidden="true" />
                    {item.metric}
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <p className="text-center text-xs mt-10 font-inconsolata uppercase tracking-wider" style={{ color: "var(--text-dim)" }}>
            * Results based on actual project outcomes
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
