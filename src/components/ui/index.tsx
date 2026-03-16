// src/components/ui/index.tsx
// Shared UI primitives

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// -- Section Wrapper
interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  size?: "default" | "sm";
}

export function Section({ children, className, id, size = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(size === "sm" ? "section-sm" : "section", className)}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
}

// -- Section Header
interface SectionHeaderProps {
  label?: string;
  heading: string;
  sub?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeader({ label, heading, sub, center, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-14", center && "text-center", className)}>
      {label && <p className="section-label">{label}</p>}
      <h2 className="section-heading mb-4">{heading}</h2>
      {sub && (
        <p className={cn("text-base leading-relaxed max-w-2xl font-montserrat", center && "mx-auto")} style={{ color: "var(--text-dim)" }}>
          {sub}
        </p>
      )}
    </div>
  );
}

// -- Badge
interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return <span className={cn("badge", className)}>{children}</span>;
}

// -- Metric Card
interface MetricCardProps {
  value: string;
  label: string;
  sub?: string;
  className?: string;
}

export function MetricCard({ value, label, sub, className }: MetricCardProps) {
  return (
    <div className={cn("text-center p-6", className)}>
      <p className="metric-value">{value}</p>
      <p className="metric-label">{label}</p>
      {sub && <p className="metric-sub">{sub}</p>}
    </div>
  );
}

// -- Tag list
interface TagListProps {
  items: string[];
  className?: string;
}

export function TagList({ items, className }: TagListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </div>
  );
}

// -- Image Placeholder
interface ImgPlaceholderProps {
  label?: string;
  aspect?: string;
  className?: string;
}

export function ImgPlaceholder({
  label = "Project screenshot",
  aspect = "aspect-video",
  className,
}: ImgPlaceholderProps) {
  return (
    <div
      className={cn(
        aspect,
        "border flex flex-col items-center justify-center gap-2",
        className
      )}
      style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}
      role="img"
      aria-label={label}
    >
      <div className="w-12 h-12 border flex items-center justify-center" style={{ borderColor: "var(--border-bold)" }}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ color: "var(--text-dim)" }}
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
      <p className="text-xs font-inconsolata" style={{ color: "var(--text-dim)" }}>{label}</p>
    </div>
  );
}
