// src/app/portfolio/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/mdx";
import { projects as configProjects, siteConfig } from "@/lib/config";
import { TagList } from "@/components/ui";
import { ArrowLeft, TrendingUp, ArrowRight, ExternalLink } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const mdxSlugs = getAllProjectSlugs();
  const configSlugs = configProjects.map((p) => p.slug);
  const all = Array.from(new Set([...mdxSlugs, ...configSlugs]));
  return all.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const mdxProject = getProjectBySlug(params.slug);
  const configProject = configProjects.find((p) => p.slug === params.slug);
  const title = mdxProject?.title ?? configProject?.title ?? "Case Study";
  const description = mdxProject?.summary ?? configProject?.summary ?? "";
  return {
    title,
    description,
    alternates: { canonical: `/portfolio/${params.slug}` },
    openGraph: { title, description, url: `/portfolio/${params.slug}` },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const mdx = getProjectBySlug(params.slug);
  const config = configProjects.find((p) => p.slug === params.slug);

  if (!mdx && !config) notFound();

  const title = mdx?.title ?? config?.title ?? "";
  const summary = mdx?.summary ?? config?.summary ?? "";
  const stack = mdx?.stack ?? config?.stack ?? [];
  const metrics = mdx?.metrics ?? config?.metrics ?? [];
  const category = mdx?.category ?? config?.category ?? "";

  const fallback = getFallbackContent(params.slug);

  return (
    <>
      {/* Back nav */}
      <div className="pt-24 pb-0 border-b" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}>
        <div className="container mx-auto max-w-6xl pb-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-inconsolata hover:opacity-80 transition-colors"
            style={{ color: "var(--text-dim)" }}
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12" style={{ backgroundColor: "var(--bg)" }} aria-label="Case study header">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="badge">{category}</span>
              {stack.slice(0, 3).map((s) => (
                <span
                  key={s}
                  className="font-inconsolata text-xs px-2 py-0.5 border"
                  style={{ color: "var(--text-muted)", backgroundColor: "var(--overlay)", borderColor: "var(--border)" }}
                >
                  {s}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-raleway font-black uppercase tracking-tight mb-4 leading-tight" style={{ color: "var(--text)" }}>
              {title}
            </h1>
            <div className="w-12 h-1 mb-6" style={{ backgroundColor: "var(--accent)" }} />
            <p className="font-montserrat text-base leading-relaxed mb-6" style={{ color: "var(--text-dim)" }}>{summary}</p>

            {metrics.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {metrics.map((m) => (
                  <div
                    key={m}
                    className="inline-flex items-center gap-2 px-3 py-2 font-inconsolata font-bold text-sm uppercase tracking-wider border"
                    style={{ color: "var(--text)", backgroundColor: "var(--overlay)", borderColor: "var(--border-bold)" }}
                  >
                    <TrendingUp size={13} aria-hidden="true" />
                    {m}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section
        className="py-12 border-t"
        style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}
        aria-label="Case study content"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Body */}
            <div className="lg:col-span-2">
              {/* Screenshot placeholder */}
              <div
                className="aspect-video border flex items-center justify-center mb-8"
                style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}
                role="img"
                aria-label={`${title} — main screenshot`}
              >
                <div className="text-center">
                  <p className="text-xs font-inconsolata" style={{ color: "var(--text-muted)" }}>
                    /public/images/projects/{params.slug}-01.png
                  </p>
                  <p className="text-xs mt-1 font-inconsolata" style={{ color: "var(--text-muted)" }}>Recommended: 1280×720px</p>
                </div>
              </div>

              {mdx?.content ? (
                <div className="prose-content">
                  <MDXRemote source={mdx.content} />
                </div>
              ) : (
                <FallbackBody data={fallback} />
              )}

              {/* Secondary screenshots */}
              <div className="mt-10">
                <h2 className="text-base font-raleway font-black uppercase tracking-tight mb-4" style={{ color: "var(--text)" }}>
                  Screenshots
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2].map((n) => (
                    <div
                      key={n}
                      className="aspect-video border flex items-center justify-center"
                      style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}
                      role="img"
                      aria-label={`${title} — detail view ${n}`}
                    >
                      <p className="text-xs font-inconsolata text-center px-2" style={{ color: "var(--text-muted)" }}>
                        {params.slug}-0{n}.png
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1" aria-label="Project details">
              <div className="border p-5 sticky top-24" style={{ backgroundColor: "var(--bg-alt)", borderColor: "var(--border)" }}>
                <h2 className="text-sm font-raleway font-black uppercase tracking-tight mb-4" style={{ color: "var(--text)" }}>
                  Project Details
                </h2>

                <div className="space-y-4">
                  <div>
                    <p className="font-inconsolata text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "var(--text-dim)" }}>
                      Category
                    </p>
                    <span className="badge">{category}</span>
                  </div>
                  <div>
                    <p className="font-inconsolata text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "var(--text-dim)" }}>
                      Stack / Tools
                    </p>
                    <TagList items={stack} />
                  </div>
                  {metrics.length > 0 && (
                    <div>
                      <p className="font-inconsolata text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "var(--text-dim)" }}>
                        Key Results
                      </p>
                      <ul className="space-y-2">
                        {metrics.map((m) => (
                          <li
                            key={m}
                            className="flex items-center gap-2 font-inconsolata text-xs font-bold uppercase tracking-wider"
                            style={{ color: "var(--text)" }}
                          >
                            <TrendingUp size={11} aria-hidden="true" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
                  <p className="font-inconsolata text-xs mb-3" style={{ color: "var(--text-dim)" }}>
                    Want this outcome for your business?
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center"
                  >
                    Get a quote
                    <ArrowRight size={12} />
                  </Link>
                  <a
                    href={siteConfig.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full justify-center mt-2"
                  >
                    Book a call
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14" style={{ backgroundColor: "var(--bg-alt)" }} aria-label="Project CTA">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-raleway font-black uppercase tracking-tight mb-3" style={{ color: "var(--text)" }}>
            Want this outcome?
          </h2>
          <p className="font-montserrat text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            Let&apos;s talk through your situation and see if a similar approach fits.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Get a quote <ArrowRight size={14} />
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              View more work <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Fallback structured content ──────────────────────────────────────────────
interface FallbackData {
  problem: string;
  context: string;
  built: string[];
  process: string[];
  results: string[];
}

function getFallbackContent(slug: string): FallbackData {
  const fallbacks: Record<string, FallbackData> = {
    "ai-knowledge-optimization": {
      problem:
        "The team was spending significant time searching across multiple tools and documentation sources to answer recurring questions. Knowledge was scattered, inconsistent, and slow to retrieve — especially for new team members.",
      context:
        "The project needed to work within existing infrastructure constraints, integrate with current documentation sources, and require minimal ongoing maintenance. The solution had to improve both speed and accuracy, not just consolidate content.",
      built: [
        "RAG (Retrieval-Augmented Generation) pipeline over internal documentation",
        "Vector database integration for semantic search",
        "OpenAI API integration with fine-tuned prompting",
        "Query interface for staff use",
        "Evaluation framework to measure accuracy over time",
      ],
      process: [
        "Audited existing documentation sources and identified highest-traffic query patterns",
        "Selected and deployed vector database; chunked and embedded documents",
        "Iterated on retrieval logic and prompt structure to maximize answer accuracy",
        "Ran accuracy benchmarks against a test set of 50 common questions",
        "Documented system for future maintenance",
      ],
      results: [
        "60% reduction in time spent searching for information",
        "45% improvement in response accuracy over keyword search baseline",
        "Onboarding time for new staff reduced from ~3 days to ~1 day",
        "System maintained with minimal ongoing intervention",
      ],
    },
    "uber-clone": {
      problem:
        "A full-featured ride booking app was needed to demonstrate real-time systems architecture, authentication, and cloud deployment in a portfolio context.",
      context:
        "Built as a portfolio project with production-quality standards: real-time updates, user auth, driver simulation, and full cloud deployment.",
      built: [
        "Next.js frontend with TypeScript and real-time UI updates",
        "Firebase Realtime Database for live booking state",
        "Firebase Authentication (email + Google OAuth)",
        "AWS deployment with environment-based configuration",
        "Driver and rider role separation with separate flows",
      ],
      process: [
        "Designed system architecture for real-time booking state management",
        "Implemented auth with role-based routing",
        "Built live tracking UI with optimistic updates",
        "Deployed to AWS with CI/CD pipeline",
        "Documented the codebase for portfolio presentation",
      ],
      results: [
        "Fully functional real-time booking system",
        "Live deployment on AWS",
        "Complete auth + role management",
        "Sub-200ms booking confirmation latency",
      ],
    },
    "client-website": {
      problem:
        "A client needed a professional web presence with a content management system, proper SEO configuration, and reliable cloud hosting — without ongoing developer dependency.",
      context:
        "Budget was a consideration; the solution needed to be maintainable by non-technical staff after handoff. SEO was a primary goal.",
      built: [
        "Django backend with custom CMS for content management",
        "Bootstrap 5 responsive frontend",
        "PostgreSQL database on AWS RDS",
        "AWS EC2 deployment with Nginx + Gunicorn",
        "On-page SEO: meta tags, schema markup, sitemap",
        "Analytics integration (GA4)",
      ],
      process: [
        "Discovery call to define content structure and client editing needs",
        "Built CMS with Django admin customization for non-technical staff",
        "Configured production server with SSL, caching, and security headers",
        "Ran Lighthouse audit and resolved performance + SEO issues",
        "Delivered documentation and staff training session",
      ],
      results: [
        "100% score on Lighthouse SEO audit",
        "AWS deployed with SSL and production-grade security",
        "Client able to self-manage all content after handoff",
        "Page load under 2s on mobile",
      ],
    },
    "marketmate": {
      problem:
        "NY TechWeek Hackathon challenge: build a working AI-powered marketing content and analytics tool within 48 hours, with a live demo and real users.",
      context:
        "Team of 3; 48-hour timeframe; needed to ship a working product with AI content generation, user auth, and cloud deployment.",
      built: [
        "Next.js + TypeScript application",
        "OpenAI API integration for content generation",
        "Supabase for auth and database",
        "Analytics dashboard with usage tracking",
        "Vercel deployment with environment variable management",
      ],
      process: [
        "Rapid requirement scoping in first 2 hours",
        "Divided frontend, backend, and AI integration work across team",
        "Integrated OpenAI API with structured prompting for content quality",
        "Deployed to Vercel mid-hackathon to test with real users",
        "Demoed to judges with live usage data",
      ],
      results: [
        "Working product shipped in 48 hours",
        "Live demo with real user data at presentation",
        "Secure cloud deployment on Vercel",
        "AI content generation with structured output quality",
      ],
    },
    "athletics-systems": {
      problem:
        "The athletics department website had reliability issues, and the event check-in process for 1,000+ users was slow — creating long lines and staff frustration at every major event.",
      context:
        "Systems needed to run without a dedicated IT team on-site. Documentation was sparse. Budget was limited. Check-in hardware was fixed (existing tablets and laptops).",
      built: [
        "WordPress site maintenance and uptime monitoring",
        "Automated check-in workflow replacing manual spreadsheet process",
        "Python script for roster pre-processing and QR code generation",
        "Google Workspace automation for event communication",
        "Internal runbook for staff to operate the system independently",
      ],
      process: [
        "Audited existing check-in flow and identified 3 bottlenecks",
        "Redesigned flow to front-load data validation before event day",
        "Built and tested QR-based check-in with fallback process",
        "Set up uptime monitoring with alerting for the website",
        "Ran 3 pilot events before full rollout; iterated on each",
      ],
      results: [
        "99.9% website uptime maintained across full academic year",
        "40% reduction in per-person check-in wait time",
        "1,000+ users processed smoothly at peak events",
        "Staff able to run system independently after documentation handoff",
        "Zero unplanned website outages during the season",
      ],
    },
  };

  return (
    fallbacks[slug] ?? {
      problem: "Details coming soon.",
      context: "",
      built: [],
      process: [],
      results: [],
    }
  );
}

function FallbackBody({ data }: { data: FallbackData }) {
  return (
    <div className="prose-content">
      <h2>The Problem</h2>
      <p>{data.problem}</p>

      {data.context && (
        <>
          <h2>Context &amp; Constraints</h2>
          <p>{data.context}</p>
        </>
      )}

      {data.built.length > 0 && (
        <>
          <h2>What Was Built</h2>
          <ul>
            {data.built.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {data.process.length > 0 && (
        <>
          <h2>Process</h2>
          <ul>
            {data.process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {data.results.length > 0 && (
        <>
          <h2>Results</h2>
          <ul>
            {data.results.map((item) => (
              <li key={item}>
                <strong>{item}</strong>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
