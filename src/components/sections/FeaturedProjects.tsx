// src/components/sections/FeaturedProjects.tsx
import Link from "next/link";
import { projects } from "@/lib/config";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowRight, TrendingUp } from "lucide-react";

const featured = projects.filter((p) => p.featured).slice(0, 3);

export function FeaturedProjects() {
  return (
    <section className="section-alt" aria-label="Featured projects">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <RevealOnScroll>
          <div className="mb-16">
            <p className="section-label">Recent work</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="section-heading">Projects</h2>
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 text-xs font-inconsolata font-bold
                           uppercase tracking-[0.2em] hover:opacity-70
                           transition-colors whitespace-nowrap"
                style={{ color: "var(--text)" }}
              >
                View all work <ArrowRight size={14} />
              </Link>
            </div>
            <div className="w-12 h-1 mt-6" style={{ backgroundColor: "var(--accent)" }} />
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border)" }}>
          {featured.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={i * 100}>
              <Link
                href={`/experience/${project.slug}`}
                className="block h-full group focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ backgroundColor: "var(--bg-alt)" }}
                aria-label={`${project.title} — view case study`}
              >
                {/* Image placeholder */}
                <div
                  className="aspect-video border-b
                             flex items-center justify-center overflow-hidden relative"
                  style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--border)" }}
                  role="img"
                  aria-label={`${project.title} preview`}
                >
                  {/* Grid pattern background */}
                  <div className="absolute inset-0 opacity-[0.04]"
                       style={{backgroundImage: 'linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
                  <div className="text-center p-4 relative z-10">
                    <div
                      className="w-12 h-12 border-2 flex items-center justify-center mx-auto mb-3
                                    group-hover:opacity-80 transition-colors duration-300"
                      style={{ borderColor: "var(--border-bold)" }}
                    >
                      <TrendingUp size={20} className="group-hover:opacity-100 transition-colors duration-300" style={{ color: "var(--text-dim)" }} />
                    </div>
                    <p className="text-[10px] font-inconsolata uppercase tracking-[0.2em]" style={{ color: "var(--text-dim)" }}>
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="badge">{project.category}</span>
                    {project.stack.slice(0, 2).map((s) => (
                      <span key={s} className="badge-slate">{s}</span>
                    ))}
                  </div>

                  <h3
                    className="text-sm font-raleway font-bold mb-2 uppercase
                                 group-hover:opacity-70 transition-colors"
                    style={{ color: "var(--text)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4 font-montserrat" style={{ color: "var(--text-muted)" }}>
                    {project.summary}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((m) => (
                      <span
                        key={m}
                        className="inline-flex items-center gap-1 text-xs font-inconsolata font-bold
                                   border
                                   px-2.5 py-1 uppercase tracking-wider"
                        style={{ color: "var(--text)", backgroundColor: "var(--overlay)", borderColor: "var(--border-bold)" }}
                      >
                        <TrendingUp size={9} aria-hidden="true" />
                        {m}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex items-center gap-2 text-xs font-inconsolata uppercase tracking-wider
                                  group-hover:opacity-100 group-hover:gap-3 transition-all"
                    style={{ color: "var(--text-dim)" }}
                  >
                    View case study <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
