"use client";
// src/components/sections/BeforeAfterDemo.tsx
import { useState, useRef, useCallback } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface DemoItem {
  title: string;
  slug: string;
  before: { label: string; points: string[] };
  after: { label: string; points: string[] };
  beforeImage?: string;
  afterImage?: string;
}

const demos: DemoItem[] = [
  {
    title: "Brooklyn College Athletics",
    slug: "athletics-systems",
    before: {
      label: "Before",
      points: [
        "Outdated WordPress theme, broken mobile layout",
        "Manual event scheduling via spreadsheets",
        "No analytics or performance tracking",
        "3+ second page load times",
      ],
    },
    after: {
      label: "After",
      points: [
        "Modern responsive design, mobile-first",
        "Integrated calendar with automated updates",
        "Full analytics dashboard with real-time data",
        "Sub-1 second page loads, 99.9% uptime",
      ],
    },
  },
  {
    title: "AI Knowledge Optimization",
    slug: "ai-knowledge-optimization",
    before: {
      label: "Before",
      points: [
        "Knowledge scattered across Notion, Drive, wikis",
        "Manual search taking 10+ minutes per query",
        "No unified access for team members",
        "Outdated docs surfaced alongside current ones",
      ],
    },
    after: {
      label: "After",
      points: [
        "RAG pipeline indexing all sources in one place",
        "Sub-2 second answers with source citations",
        "Role-based access with shared knowledge base",
        "Auto-deprecation of stale documents",
      ],
    },
  },
  {
    title: "Client Business Website",
    slug: "client-website",
    before: {
      label: "Before",
      points: [
        "No web presence, relying on word-of-mouth only",
        "Competitors dominating local search results",
        "No way for customers to book or inquire online",
        "Zero visibility into visitor behavior",
      ],
    },
    after: {
      label: "After",
      points: [
        "Professional site with SEO-optimized pages",
        "First page Google ranking for local keywords",
        "Integrated contact form + booking system",
        "Analytics dashboard tracking conversions",
      ],
    },
  },
  {
    title: "Uber-Clone App",
    slug: "uber-clone",
    before: {
      label: "Before",
      points: [
        "Concept only — no working prototype",
        "No real-time location or mapping system",
        "No payment or ride-matching logic",
        "No mobile-responsive interface",
      ],
    },
    after: {
      label: "After",
      points: [
        "Full-stack app with real-time GPS tracking",
        "Live driver-rider matching algorithm",
        "Stripe payment integration with receipts",
        "Responsive UI across all device sizes",
      ],
    },
  },
  {
    title: "MarketMate",
    slug: "marketmate",
    before: {
      label: "Before",
      points: [
        "Manual market research taking hours per report",
        "No centralized competitor tracking",
        "Data from multiple sources, no aggregation",
        "Reports outdated by the time they were shared",
      ],
    },
    after: {
      label: "After",
      points: [
        "Automated data collection from multiple APIs",
        "Real-time competitor dashboard",
        "AI-generated insights and trend analysis",
        "One-click exportable reports",
      ],
    },
  },
];

function SliderDemo({ demo }: { demo: DemoItem }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div className="space-y-8">
      {/* Slider area */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] border cursor-col-resize select-none overflow-hidden"
        style={{ borderColor: "var(--border)" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        role="slider"
        aria-label="Before and after comparison slider"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* Before side */}
        <div className="absolute inset-0" style={{ backgroundColor: "var(--bg)" }}>
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center max-w-xs">
              <span
                className="inline-block font-inconsolata text-[10px] uppercase tracking-[0.2em] px-3 py-1 mb-4"
                style={{ backgroundColor: "var(--error-bg)", color: "var(--error-text)", border: "1px solid var(--error-border)" }}
              >
                Before
              </span>
              <div className="space-y-2">
                {demo.before.points.map((p) => (
                  <p key={p} className="text-xs font-montserrat" style={{ color: "var(--text-dim)" }}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* After side — clipped */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--bg-alt)", clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center max-w-xs">
              <span
                className="inline-block font-inconsolata text-[10px] uppercase tracking-[0.2em] px-3 py-1 mb-4"
                style={{ backgroundColor: "var(--success-bg)", color: "var(--success-text)", border: "1px solid var(--success-border)" }}
              >
                After
              </span>
              <div className="space-y-2">
                {demo.after.points.map((p) => (
                  <p key={p} className="text-xs font-montserrat" style={{ color: "var(--text)" }}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider line + handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 -translate-x-1/2 z-10"
          style={{ left: `${position}%`, backgroundColor: "var(--accent)" }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center border-2"
            style={{ backgroundColor: "var(--bg)", borderColor: "var(--accent)" }}
          >
            <span className="text-xs font-bold" style={{ color: "var(--accent)" }}>&#x2194;</span>
          </div>
        </div>
      </div>

      {/* Info below slider */}
      <div className="flex items-center justify-between">
        <p className="font-raleway font-bold text-sm uppercase tracking-tight" style={{ color: "var(--text)" }}>
          {demo.title}
        </p>
        <Link
          href={`/portfolio/${demo.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-inconsolata uppercase tracking-wider transition-opacity hover:opacity-70"
          style={{ color: "var(--accent)" }}
        >
          View case study <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}

export function BeforeAfterDemo() {
  const [activeDemo, setActiveDemo] = useState(0);

  return (
    <section className="py-14" style={{ backgroundColor: "var(--bg-alt)" }} aria-label="Project demos">
      <div className="container mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="mb-10">
            <p className="section-label">Live Demos</p>
            <h2 className="section-heading text-3xl md:text-4xl">Before &amp; After</h2>
            <div className="w-12 h-1 mt-4" style={{ backgroundColor: "var(--accent)" }} />
            <p className="font-montserrat text-sm leading-relaxed mt-4 max-w-xl" style={{ color: "var(--text-muted)" }}>
              Drag the slider to see the transformation. Real projects, real results.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          {/* Project tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {demos.map((demo, i) => (
              <button
                key={demo.slug}
                onClick={() => setActiveDemo(i)}
                className="px-4 py-2 text-xs font-inconsolata uppercase tracking-wider transition-all border"
                style={{
                  backgroundColor: i === activeDemo ? "var(--accent)" : "transparent",
                  color: i === activeDemo ? "var(--accent-fg)" : "var(--text-dim)",
                  borderColor: i === activeDemo ? "var(--accent)" : "var(--border)",
                }}
              >
                {demo.title}
              </button>
            ))}
          </div>

          <SliderDemo key={demos[activeDemo].slug} demo={demos[activeDemo]} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
