"use client";
// src/components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300"
      )}
      style={{
        backgroundColor: scrolled ? "color-mix(in srgb, var(--bg) 95%, transparent)" : "var(--bg)",
        borderBottom: `1px solid var(--border)`,
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav
        className="container mx-auto flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-raleway text-sm font-black tracking-[0.15em] uppercase
                     hover:opacity-70 transition-opacity"
          style={{ color: "var(--text)" }}
          aria-label="Shazib Siddique — Home"
        >
          Shazib Siddique
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link px-4 py-2",
                pathname === link.href && "active"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 px-5 py-2
                       text-xs font-inconsolata font-bold uppercase tracking-[0.2em]
                       transition-all duration-300"
            style={{
              border: "1px solid var(--accent)",
              color: "var(--text)",
            }}
          >
            Book a Call
            <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Mobile: toggle + menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 transition-colors"
            style={{ color: "var(--text-dim)" }}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-label="Mobile navigation"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
        style={{ borderBottom: open ? `1px solid var(--border)` : "none" }}
      >
        <div className="container mx-auto pb-8 pt-4" style={{ backgroundColor: "var(--bg)" }}>
          <div className="flex flex-col gap-1">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 text-xs font-inconsolata font-medium uppercase tracking-[0.2em] transition-colors",
                  pathname === link.href
                    ? ""
                    : "hover:opacity-80"
                )}
                style={{ color: pathname === link.href ? "var(--text)" : "var(--text-dim)" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mx-4 inline-flex items-center justify-center gap-2
                         px-5 py-3 text-xs font-inconsolata font-bold uppercase tracking-[0.2em]
                         transition-all duration-300"
              style={{
                border: "1px solid var(--accent)",
                color: "var(--text)",
              }}
            >
              Book a Call
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
