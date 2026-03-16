"use client";
// src/components/sections/TestimonialsCarousel.tsx
import { useRef, useState } from "react";
import type { Testimonial } from "@/lib/config";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Quote } from "lucide-react";

interface Props {
  testimonials: Testimonial[];
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div
      className="carousel-card w-[320px] sm:w-[380px] p-6 border shrink-0"
      style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}
      role="group"
      aria-roledescription="slide"
      aria-label={`Testimonial from ${t.name}`}
    >
      <Quote size={20} className="mb-4" style={{ color: "var(--border-bold)" }} aria-hidden="true" />
      <p className="text-sm leading-relaxed mb-5 font-montserrat italic" style={{ color: "var(--text-muted)" }}>
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 flex items-center justify-center text-xs font-bold font-inconsolata uppercase"
          style={{ backgroundColor: "var(--overlay-bold)", color: "var(--text-dim)" }}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-xs font-raleway font-bold uppercase" style={{ color: "var(--text)" }}>
            {t.name}
          </p>
          <p className="text-xs font-inconsolata" style={{ color: "var(--text-dim)" }}>
            {t.role} · {t.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsCarousel({ testimonials }: Props) {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate items for seamless infinite loop
  const items = [...testimonials, ...testimonials];

  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: "var(--bg)" }} aria-label="Client testimonials">
      <div className="container mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="mb-10">
            <p className="section-label">Testimonials</p>
            <h2 className="section-heading text-3xl md:text-4xl">What clients say</h2>
            <div className="w-12 h-1 mt-4" style={{ backgroundColor: "var(--accent)" }} />
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll>
        <div
          className="carousel-track-wrapper"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          <div
            ref={trackRef}
            className="carousel-track flex gap-6"
            style={{ animationPlayState: paused ? "paused" : "running" }}
          >
            {items.map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
