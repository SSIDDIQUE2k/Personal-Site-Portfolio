// src/components/sections/Hero.tsx
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
      aria-label="Introduction"
    >
      <div className="relative z-10 container mx-auto max-w-6xl py-24 md:py-32">

        <p className="font-inconsolata text-xs uppercase tracking-[0.3em] mb-8 animate-fade-in" style={{ color: "var(--text-dim)" }}>
          Brooklyn, NY — Operations · Systems · Tech
        </p>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-raleway font-black
                       leading-[0.95] tracking-tight mb-8 uppercase animate-fade-up max-w-4xl"
          style={{ color: "var(--text)" }}
        >
          Operations &amp; Systems Support
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r"
                style={{ backgroundImage: "linear-gradient(to right, var(--gradient-text-from), var(--gradient-text-to))", WebkitTextStroke: "1px var(--gradient-stroke)" }}>
            that keeps teams moving.
          </span>
        </h1>

        <div className="w-16 h-1 mb-8 animate-fade-up delay-100" style={{ backgroundColor: "var(--accent)" }} />

        <p className="text-base md:text-lg leading-relaxed max-w-xl mb-10 animate-fade-up delay-100 font-montserrat" style={{ color: "var(--text-muted)" }}>
          I help NYC businesses reduce operational friction, set up reliable
          workstations, and launch a web presence that generates leads.
        </p>

        {/* Proof points */}
        <div className="flex flex-wrap gap-6 text-xs font-inconsolata uppercase tracking-wider mb-10 animate-fade-up delay-200" style={{ color: "var(--text-dim)" }}>
          {["40% faster workflow", "60% faster retrieval", "99.9% uptime"].map((proof) => (
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
          <Link href="/services" className="btn-secondary">
            See Services <ArrowRight size={14} />
          </Link>
        </div>

        <Link
          href="/portfolio"
          className="inline-flex items-center gap-1.5 text-xs font-inconsolata uppercase tracking-wider
                     hover:opacity-80 transition-colors animate-fade-up delay-300"
          style={{ color: "var(--text-dim)" }}
        >
          View Work <ArrowRight size={11} />
        </Link>

        {/* Recruiter strip */}
        <div className="mt-12 pt-6 border-t animate-fade-up delay-300" style={{ borderColor: "var(--border)" }}>
          <p className="text-xs font-montserrat" style={{ color: "var(--text-dim)" }}>
            Open to full-time roles (NYC/NJ):{" "}
            <span style={{ color: "var(--text-muted)" }}>
              Operations Coordinator &bull; Administrative Coordinator &bull; HR Coordinator &bull; IT Support
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
