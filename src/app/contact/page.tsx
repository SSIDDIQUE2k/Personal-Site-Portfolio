// src/app/contact/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Shazib Siddique for operations support, tech help, or web automation. Based in Brooklyn, NY — serving NYC + NJ.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Shazib Siddique",
    description: "Get in touch for operations support, tech help, or web automation.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="relative pt-28 pb-12 border-b"
        style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}
        aria-label="Contact introduction"
      >
        <div className="relative z-10 container mx-auto max-w-6xl">
          <p className="font-inconsolata text-xs uppercase tracking-[0.2em] mb-3" style={{ color: "var(--text-dim)" }}>Get in touch</p>
          <h1 className="text-4xl md:text-5xl font-raleway font-black uppercase mb-4" style={{ color: "var(--text)" }}>
            Contact
          </h1>
          <p className="max-w-lg text-base leading-relaxed font-montserrat" style={{ color: "var(--text-muted)" }}>
            Tell me about your project or situation. I respond within 1&ndash;2
            business days. For a faster response, book a{" "}
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 underline underline-offset-2 transition-colors"
              style={{ color: "var(--text)" }}
            >
              15-min call directly
            </a>
            .
          </p>
          <p className="text-xs font-inconsolata uppercase tracking-wider mt-4" style={{ color: "var(--text-dim)" }}>
            NYC in-person &bull; Brooklyn-based &bull; NJ case-by-case
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-14" style={{ backgroundColor: "var(--bg)" }} aria-label="Contact form and info">
        <div className="container mx-auto max-w-6xl">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
