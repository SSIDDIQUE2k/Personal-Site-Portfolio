// src/components/sections/Hero.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
      aria-label="Introduction"
    >
      <div className="relative z-10 container mx-auto max-w-6xl py-24 md:py-32">

        <p className="font-inconsolata text-xs uppercase tracking-[0.3em] mb-8 animate-fade-in" style={{ color: "var(--text-dim)" }}>
          Brooklyn, NY — Operations · Administration · Systems
        </p>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-raleway font-black
                       leading-[0.95] tracking-tight mb-8 uppercase animate-fade-up max-w-4xl"
          style={{ color: "var(--text)" }}
        >
          Operations &amp; Administrative Professional
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r"
                style={{ backgroundImage: "linear-gradient(to right, var(--gradient-text-from), var(--gradient-text-to))", WebkitTextStroke: "1px var(--gradient-stroke)" }}>
            who keeps organizations running.
          </span>
        </h1>

        <div className="w-16 h-1 mb-8 animate-fade-up delay-100" style={{ backgroundColor: "var(--accent)" }} />

        <p className="text-base md:text-lg leading-relaxed max-w-xl mb-10 animate-fade-up delay-100 font-montserrat" style={{ color: "var(--text-muted)" }}>
          I coordinate events, optimize workflows, maintain systems, and
          document everything — so your team moves faster with fewer
          bottlenecks. Currently open to full-time roles in NYC/NJ.
        </p>

        {/* Proof points */}
        <div className="flex flex-wrap gap-6 text-xs font-inconsolata uppercase tracking-wider mb-10 animate-fade-up delay-200" style={{ color: "var(--text-dim)" }}>
          {["50+ events/year", "40% workflow improvement", "99.9% uptime"].map((proof) => (
            <span key={proof} className="flex items-center gap-2">
              <span className="w-1 h-1" style={{ backgroundColor: "var(--accent)" }} aria-hidden="true" />
              {proof}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 animate-fade-up delay-300">
          <Link href="/resume" className="btn-primary">
            View Resume <ArrowRight size={14} />
          </Link>
          <Link href="/experience" className="btn-secondary">
            See My Experience <ArrowRight size={14} />
          </Link>
        </div>

        {/* Recruiter strip */}
        <div className="mt-12 pt-6 border-t animate-fade-up delay-300" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs font-montserrat" style={{ color: "var(--text-dim)" }}>
            Open to full-time roles (NYC/NJ):{" "}
            <span style={{ color: "var(--text-muted)" }}>
              Operations Coordinator &bull; Administrative Coordinator &bull; Program Coordinator &bull; HR Coordinator &bull; IT Support
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
