// src/app/not-found.tsx
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "var(--bg)" }}>
      <div className="text-center max-w-md">
        <p
          className="text-8xl font-raleway font-black leading-none mb-4 select-none"
          style={{ color: "var(--overlay-bold)" }}
          aria-hidden="true"
        >
          404
        </p>
        <h1 className="text-2xl font-raleway font-black uppercase mb-3" style={{ color: "var(--text)" }}>Page not found</h1>
        <p className="text-sm leading-relaxed mb-8 font-montserrat" style={{ color: "var(--text-dim)" }}>
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={14} aria-hidden="true" /> Back to home
          </Link>
          <Link href="/portfolio" className="btn-secondary">
            <ArrowLeft size={14} aria-hidden="true" /> View portfolio
          </Link>
        </div>
        <p className="text-xs mt-8 font-montserrat" style={{ color: "var(--text-dim)" }}>
          Lost? Email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:opacity-70 transition-colors"
            style={{ color: "var(--text)" }}
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    </div>
  );
}
