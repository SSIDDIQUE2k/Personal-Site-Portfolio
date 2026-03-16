// src/components/layout/Footer.tsx
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Pages: [
    { label: "Home",      href: "/" },
    { label: "Services",  href: "/services" },
    { label: "Work",      href: "/portfolio" },
    { label: "Resume",    href: "/resume" },
    { label: "Contact",   href: "/contact" },
  ],
  Services: [
    { label: "Business Launch Kit",     href: "/services#business-launch-kit" },
    { label: "Workstation Setup",       href: "/services#workstation-setup" },
    { label: "Brand Starter Pack",      href: "/services#brand-starter-pack" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ backgroundColor: "var(--bg-alt)", color: "var(--text-dim)", borderColor: "var(--border)" }} aria-label="Site footer">
      <div className="container mx-auto max-w-6xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-block font-raleway text-sm font-black tracking-[0.15em] uppercase
                         hover:opacity-70 transition-opacity mb-5"
              style={{ color: "var(--text)" }}
            >
              Shazib Siddique
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mb-5 font-montserrat" style={{ color: "var(--text-dim)" }}>
              Operations, systems, and tech support for NYC + NJ businesses.
              Built on reliability, documentation, and measurable results.
            </p>
            <div className="flex flex-col gap-2 text-sm font-montserrat">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 hover:opacity-80 transition-colors"
                style={{ color: "var(--text-dim)" }}
              >
                <Mail size={14} />
                {siteConfig.email}
              </a>
              <span className="inline-flex items-center gap-2" style={{ color: "var(--text-dim)" }}>
                <MapPin size={14} />
                {siteConfig.location} — serving {siteConfig.locationServed}
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-xs font-inconsolata font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--text-dim)" }}>
                {heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm hover:opacity-80 transition-colors font-montserrat"
                      style={{ color: "var(--text-dim)" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--border)" }}>
          <div>
            <p className="text-xs font-inconsolata uppercase tracking-wider" style={{ color: "var(--text-dim)" }}>
              &copy; {year} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-xs mt-1.5 font-montserrat" style={{ color: "var(--text-dim)" }}>
              Open to full-time roles (NYC/NJ): Operations Coordinator &bull; Administrative Coordinator &bull; HR Coordinator &bull; IT Support
            </p>
          </div>
          <div className="flex items-center gap-6">
            {siteConfig.linkedin && (
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-inconsolata uppercase tracking-wider hover:opacity-80 transition-colors inline-flex items-center gap-1"
                style={{ color: "var(--text-dim)" }}
                aria-label="LinkedIn profile"
              >
                LinkedIn <ArrowUpRight size={11} />
              </a>
            )}
            {siteConfig.github && (
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-inconsolata uppercase tracking-wider hover:opacity-80 transition-colors inline-flex items-center gap-1"
                style={{ color: "var(--text-dim)" }}
                aria-label="GitHub profile"
              >
                GitHub <ArrowUpRight size={11} />
              </a>
            )}
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-inconsolata uppercase tracking-wider hover:opacity-80 transition-colors inline-flex items-center gap-1"
              style={{ color: "var(--text-dim)" }}
            >
              Book a call <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
