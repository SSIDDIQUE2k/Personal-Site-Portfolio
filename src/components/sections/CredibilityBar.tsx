// src/components/sections/CredibilityBar.tsx
import { proofMetrics } from "@/lib/config";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CredibilityBar() {
  return (
    <section
      className="border-y-2"
      style={{ borderColor: "var(--border-bold)", backgroundColor: "var(--bg)" }}
      aria-label="Proof metrics"
    >
      <div className="container mx-auto max-w-6xl py-20">
        <RevealOnScroll>
          <p className="text-center text-xs font-inconsolata font-medium tracking-[0.3em] uppercase
                        mb-14" style={{ color: "var(--text-dim)" }}>
            Proven outcomes across operations, systems &amp; web
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-0">
          {proofMetrics.map((m, i) => (
            <RevealOnScroll key={m.value} delay={i * 80}>
              <div className="text-center px-4 relative group">
                {/* Top accent line */}
                <div
                  className="w-8 h-0.5 mx-auto mb-5 group-hover:opacity-100 group-hover:w-12 transition-all duration-300"
                  style={{ backgroundColor: "var(--border-bold)" }}
                />
                <p className="metric-value">{m.value}</p>
                <p className="metric-label">{m.label}</p>
                <p className="metric-sub">{m.sub}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
