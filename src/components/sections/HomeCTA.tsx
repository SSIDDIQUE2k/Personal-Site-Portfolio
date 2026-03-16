// src/components/sections/HomeCTA.tsx
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function HomeCTA() {
  return (
    <section
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
      aria-label="Call to action"
    >
      <div className="relative z-10 container mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-label justify-center mb-6">
              Ready to work together?
            </p>
            <h2 className="text-4xl md:text-6xl font-raleway font-black mb-6
                           leading-none uppercase tracking-tight" style={{ color: "var(--text)" }}>
              Let&apos;s Build<br />
              <span style={{ color: "var(--text-muted)" }}>Something Better.</span>
            </h2>
            <div className="w-12 h-1 mx-auto mb-8" style={{ backgroundColor: "var(--accent)" }} />
            <p className="mb-12 text-base leading-relaxed max-w-lg mx-auto font-montserrat" style={{ color: "var(--text-muted)" }}>
              Book a free 15-minute call to talk through your situation. No pitch,
              no pressure — just a clear conversation about what&apos;s possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Call
                <ArrowUpRight size={14} />
              </a>
              <Link href="/contact" className="btn-secondary">
                Send a Message
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                "NYC-based",
                "1-2 day response",
                "No pressure",
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 text-xs font-inconsolata
                                         uppercase tracking-wider" style={{ color: "var(--text-dim)" }}>
                  <span className="w-1 h-1" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
                  {t}
                </span>
              ))}
            </div>

            {/* Wide border accent below CTA */}
            <div className="w-24 h-0.5 mx-auto mt-14" style={{ backgroundColor: "var(--border-bold)" }} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
