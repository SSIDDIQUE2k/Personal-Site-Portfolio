// src/components/layout/Footer.tsx
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Pages: [
    { label: "Home",        href: "/" },
    { label: "Resume",      href: "/resume" },
    { label: "Experience",  href: "/experience" },
    { label: "Contact",     href: "/contact" },
    { label: "Services",    href: "/services" },
  ],
  Services: [
    { label: "Web Presence & Lead System",  href: "/services#business-launch-kit" },
    { label: "Systems & Workstation Setup", href: "/services#workstation-setup" },
    { label: "Print & Brand Materials",     href: "/services#brand-starter-pack" },
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
            <Link
              href="/contact"
              className="text-xs font-inconsolata uppercase tracking-wider hover:opacity-80 transition-colors inline-flex items-center gap-1"
              style={{ color: "var(--text-dim)" }}
            >
              Contact <ArrowUpRight size={11} />
            </Link>
            <a
              href="https://railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-inconsolata uppercase tracking-wider hover:opacity-80 transition-colors inline-flex items-center gap-1.5"
              style={{ color: "var(--text-dim)" }}
              aria-label="Powered by Railway"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M.113 17.33c-.14.2-.04.453.2.526l3.744 1.08c.147.042.303-.01.39-.134l5.727-8.2c.128-.182.037-.436-.175-.49L6.82 9.4a.343.343 0 0 0-.367.112L.113 17.33ZM9.545 21.528c-.068.196.065.397.27.397h3.792c.132 0 .25-.088.288-.216l4.91-16.2c.07-.228-.1-.448-.332-.4l-3.477.666a.302.302 0 0 0-.234.21l-5.217 15.543ZM18.21 8.088c-.14.198-.04.45.2.523l3.428.988c.23.066.46-.114.404-.35L20.655 2.31a.302.302 0 0 0-.44-.186L18.21 8.088Z"/>
              </svg>
              Powered by Railway
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
