"use client";
// src/components/sections/PortfolioGrid.tsx
import { useState, useMemo } from "react";
import Link from "next/link";
import { projects as allProjects } from "@/lib/config";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowRight, TrendingUp, Layers, ArrowUpDown, Briefcase, User } from "lucide-react";
import { cn } from "@/lib/utils";

type Project = (typeof allProjects)[number];
type SortMode = "default" | "name-asc" | "name-desc";

interface PortfolioGridProps {
  projects?: Project[];
  sectionTitle?: string;
  sectionSubtitle?: string;
  projectType?: "client" | "personal";
}

export function PortfolioGrid({
  projects: projectsProp,
  sectionTitle,
  sectionSubtitle,
  projectType,
}: PortfolioGridProps) {
  const sourceProjects = projectsProp ?? allProjects;

  // Derive filters from actual data
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    sourceProjects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, [sourceProjects]);

  const filters = useMemo(() => ["All", ...availableTags], [availableTags]);

  const [active, setActive] = useState("All");
  const [sortMode, setSortMode] = useState<SortMode>("default");

  const filtered = useMemo(() => {
    let result =
      active === "All"
        ? [...sourceProjects]
        : sourceProjects.filter((p) => p.tags.includes(active));

    if (sortMode === "name-asc") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortMode === "name-desc") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    return result;
  }, [active, sortMode, sourceProjects]);

  function cycleSort() {
    setSortMode((prev) =>
      prev === "default" ? "name-asc" : prev === "name-asc" ? "name-desc" : "default"
    );
  }

  const sortLabel =
    sortMode === "name-asc" ? "A→Z" : sortMode === "name-desc" ? "Z→A" : "Sort";

  return (
    <>
      {/* Section heading */}
      {sectionTitle && (
        <RevealOnScroll>
          <div className="mb-10">
            <div className="flex items-center gap-2">
              {projectType === "client" && <Briefcase size={14} style={{ color: "var(--accent)" }} aria-hidden="true" />}
              {projectType === "personal" && <User size={14} style={{ color: "var(--text-dim)" }} aria-hidden="true" />}
              <p className="section-label">{sectionTitle}</p>
            </div>
            {sectionSubtitle && (
              <p className="text-sm font-montserrat max-w-lg" style={{ color: "var(--text-muted)" }}>
                {sectionSubtitle}
              </p>
            )}
            <div className="w-12 h-1 mt-4" style={{ backgroundColor: "var(--accent)" }} />
          </div>
        </RevealOnScroll>
      )}

      {/* Filter pills + sort */}
      <div
        className="flex flex-wrap items-center gap-2 mb-8"
        role="group"
        aria-label="Filter and sort projects"
      >
        {filters.map((f) => {
          const count =
            f === "All"
              ? sourceProjects.length
              : sourceProjects.filter((p) => p.tags.includes(f)).length;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={cn(
                "px-5 py-2 text-xs font-inconsolata font-bold uppercase tracking-[0.15em] transition-all duration-200 border",
                active === f ? "" : "bg-transparent hover:opacity-80"
              )}
              style={
                active === f
                  ? { backgroundColor: "var(--accent)", color: "var(--accent-fg)", borderColor: "var(--accent)" }
                  : { color: "var(--text-dim)", borderColor: "var(--border-bold)" }
              }
            >
              {f}
              <span className={cn("ml-1.5 text-xs", active === f ? "opacity-70" : "opacity-50")}>
                {count}
              </span>
            </button>
          );
        })}

        {/* Sort toggle */}
        <button
          onClick={cycleSort}
          className={cn(
            "ml-auto px-3 py-2 text-xs font-inconsolata font-bold uppercase tracking-wider border transition-all duration-200 inline-flex items-center gap-1.5",
            sortMode !== "default" ? "" : "bg-transparent hover:opacity-80"
          )}
          style={
            sortMode !== "default"
              ? { backgroundColor: "var(--accent)", color: "var(--accent-fg)", borderColor: "var(--accent)" }
              : { color: "var(--text-dim)", borderColor: "var(--border-bold)" }
          }
          aria-label={`Sort by name: ${sortLabel}`}
        >
          <ArrowUpDown size={12} />
          {sortLabel}
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border)" }}>
        {filtered.map((project, i) => (
          <RevealOnScroll key={project.slug} delay={i * 60}>
            <Link
              href={`/experience/${project.slug}`}
              className="block h-full group focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: "var(--bg)" }}
              aria-label={`${project.title} — view case study`}
            >
              {/* Thumbnail */}
              <div
                className="aspect-video border-b flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}
                role="img"
                aria-label={`${project.title} preview`}
              >
                <div className="text-center p-4">
                  <Layers size={20} className="mx-auto mb-1.5" style={{ color: "var(--text-dim)" }} />
                  <p className="text-xs font-inconsolata uppercase tracking-wider" style={{ color: "var(--text-dim)" }}>
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {/* Type badge */}
                  <span
                    className="inline-flex items-center gap-1 text-[10px] font-inconsolata font-bold uppercase tracking-[0.15em] px-2 py-0.5"
                    style={
                      project.type === "client"
                        ? { backgroundColor: "var(--accent)", color: "var(--accent-fg)" }
                        : { backgroundColor: "var(--overlay-bold)", color: "var(--text-dim)", border: "1px solid var(--border-bold)" }
                    }
                  >
                    {project.type === "client" ? <Briefcase size={9} aria-hidden="true" /> : <User size={9} aria-hidden="true" />}
                    {project.type === "client" ? "Client" : "Personal"}
                  </span>
                  <span className="badge">{project.category}</span>
                  {project.tags
                    .filter((t) => t !== project.category)
                    .map((t) => (
                      <span key={t} className="badge-slate">{t}</span>
                    ))}
                </div>

                <h3
                  className="text-sm font-raleway font-bold mb-2 uppercase group-hover:opacity-80 transition-colors"
                  style={{ color: "var(--text)" }}
                >
                  {project.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4 font-montserrat" style={{ color: "var(--text-dim)" }}>
                  {project.summary}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 font-inconsolata border"
                      style={{ color: "var(--text-dim)", backgroundColor: "var(--overlay)", borderColor: "var(--border)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center gap-1 text-xs font-inconsolata font-bold border px-2.5 py-1 uppercase tracking-wider"
                      style={{ color: "var(--text)", backgroundColor: "var(--overlay)", borderColor: "var(--border-bold)" }}
                    >
                      <TrendingUp size={9} aria-hidden="true" />
                      {m}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center gap-2 text-xs font-inconsolata uppercase tracking-wider mt-auto group-hover:opacity-100 group-hover:gap-3 transition-all"
                  style={{ color: "var(--text-dim)" }}
                >
                  View case study <ArrowRight size={12} aria-hidden="true" />
                </div>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 font-montserrat" style={{ color: "var(--text-dim)" }} role="status">
          <p>No projects found for &ldquo;{active}&rdquo;.</p>
        </div>
      )}
    </>
  );
}
