"use client";
// src/components/sections/ContactForm.tsx
import { useState, FormEvent } from "react";
import { siteConfig } from "@/lib/config";
import {
  Mail, Linkedin, Github, Phone,
  CheckCircle2, AlertCircle, Send, Loader2,
} from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormFields {
  name: string;
  email: string;
  company: string;
  need: string;
  budget: string;
  timeline: string;
  message: string;
  website: string;
}

const EMPTY: FormFields = {
  name: "", email: "", company: "", need: "",
  budget: "", timeline: "", message: "", website: "",
};

const needOptions = [
  "Website (Business Launch Kit)",
  "Workstation Setup (NYC in-person)",
  "Business Card + Poster (Brand Starter Pack)",
  "Full-time or Contract hire",
  "Other / Not sure yet",
];

const budgetOptions = [
  "Under $300",
  "$300\u2013$600",
  "$600\u2013$1,200",
  "$1,200\u2013$1,800",
  "Not sure yet",
];

const timelineOptions = [
  "ASAP",
  "2\u20134 weeks",
  "1\u20132 months",
  "Just exploring",
];

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>(EMPTY);
  const [state, setState] = useState<FormState>("idle");
  const [serverErrors, setServerErrors] = useState<string[]>([]);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormFields, string>>>({});
  const [successMsg, setSuccessMsg] = useState("");

  function set(key: keyof FormFields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFields((f) => ({ ...f, [key]: e.target.value }));
      if (fieldErrors[key]) setFieldErrors((fe) => ({ ...fe, [key]: "" }));
    };
  }

  function clientValidate(): boolean {
    const errs: Partial<Record<keyof FormFields, string>> = {};
    if (!fields.name.trim() || fields.name.trim().length < 2)
      errs.name = "Please enter your name (min 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      errs.email = "Please enter a valid email address.";
    if (!fields.need) errs.need = "Please select what you need.";
    if (!fields.message.trim() || fields.message.trim().length < 10)
      errs.message = "Please write a message (min 10 characters).";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setServerErrors([]);
    if (!clientValidate()) return;
    setState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const json = (await res.json()) as {
        success: boolean;
        message?: string;
        errors?: string[];
      };
      if (json.success) {
        setState("success");
        setSuccessMsg(json.message ?? "Message sent!");
        setFields(EMPTY);
      } else {
        setState("error");
        setServerErrors(json.errors ?? ["Something went wrong. Please try again."]);
      }
    } catch {
      setState("error");
      setServerErrors(["Network error. Please try again or email directly."]);
    }
  }

  const inputClass = (key: keyof FormFields) =>
    `form-input ${fieldErrors[key] ? "field-error" : ""}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

      {/* FORM */}
      <div className="lg:col-span-2">
        <div className="card p-6 md:p-8">

          {state === "success" && (
            <div role="alert" className="flex items-start gap-3 p-4 border mb-6"
                 style={{ backgroundColor: "var(--success-bg)", borderColor: "var(--success-border)" }}>
              <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--success-text)" }} aria-hidden="true" />
              <div>
                <p className="text-sm font-bold" style={{ color: "var(--success-heading)" }}>Message sent!</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--success-text)" }}>{successMsg}</p>
              </div>
            </div>
          )}

          {state === "error" && serverErrors.length > 0 && (
            <div role="alert" className="flex items-start gap-3 p-4 border mb-6"
                 style={{ backgroundColor: "var(--error-bg)", borderColor: "var(--error-border)" }}>
              <AlertCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "var(--error-text)" }} aria-hidden="true" />
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: "var(--error-heading)" }}>Please fix the following:</p>
                <ul className="space-y-0.5">
                  {serverErrors.map((err) => (
                    <li key={err} className="text-xs" style={{ color: "var(--error-text)" }}>{err}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
            <input
              type="text" name="website" value={fields.website}
              onChange={set("website")} tabIndex={-1} aria-hidden="true"
              className="absolute opacity-0 pointer-events-none h-0 overflow-hidden"
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="cf-name" className="form-label">
                  Name <span style={{ color: "var(--required)" }} aria-hidden="true">*</span>
                </label>
                <input id="cf-name" type="text" autoComplete="name" value={fields.name} onChange={set("name")}
                  className={inputClass("name")} placeholder="Your name" required aria-required="true"
                  aria-describedby={fieldErrors.name ? "name-err" : undefined} aria-invalid={!!fieldErrors.name} />
                {fieldErrors.name && <p id="name-err" className="form-error" role="alert">{fieldErrors.name}</p>}
              </div>

              <div>
                <label htmlFor="cf-email" className="form-label">
                  Email <span style={{ color: "var(--required)" }} aria-hidden="true">*</span>
                </label>
                <input id="cf-email" type="email" autoComplete="email" value={fields.email} onChange={set("email")}
                  className={inputClass("email")} placeholder="you@company.com" required aria-required="true"
                  aria-describedby={fieldErrors.email ? "email-err" : undefined} aria-invalid={!!fieldErrors.email} />
                {fieldErrors.email && <p id="email-err" className="form-error" role="alert">{fieldErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="cf-company" className="form-label">
                  Company <span className="text-xs font-normal" style={{ color: "var(--text-dim)" }}>(optional)</span>
                </label>
                <input id="cf-company" type="text" autoComplete="organization" value={fields.company}
                  onChange={set("company")} className="form-input" placeholder="Your company or org" />
              </div>

              <div>
                <label htmlFor="cf-need" className="form-label">
                  What do you need? <span style={{ color: "var(--required)" }} aria-hidden="true">*</span>
                </label>
                <select id="cf-need" value={fields.need} onChange={set("need")}
                  className={inputClass("need")} required aria-required="true"
                  aria-describedby={fieldErrors.need ? "need-err" : undefined} aria-invalid={!!fieldErrors.need}>
                  <option value="" disabled>Select one&hellip;</option>
                  {needOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                {fieldErrors.need && <p id="need-err" className="form-error" role="alert">{fieldErrors.need}</p>}
              </div>

              <div>
                <label htmlFor="cf-budget" className="form-label">Budget range</label>
                <select id="cf-budget" value={fields.budget} onChange={set("budget")} className="form-input">
                  <option value="">Select a range&hellip;</option>
                  {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="cf-timeline" className="form-label">Timeline</label>
                <select id="cf-timeline" value={fields.timeline} onChange={set("timeline")} className="form-input">
                  <option value="">Select a timeline&hellip;</option>
                  {timelineOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="cf-message" className="form-label">
                  Message <span style={{ color: "var(--required)" }} aria-hidden="true">*</span>
                </label>
                <textarea id="cf-message" rows={5} value={fields.message} onChange={set("message")}
                  className={`${inputClass("message")} resize-none`}
                  placeholder="Describe your situation, what you're looking for, and any relevant context&hellip;"
                  required aria-required="true"
                  aria-describedby={fieldErrors.message ? "msg-err" : undefined} aria-invalid={!!fieldErrors.message} />
                {fieldErrors.message && <p id="msg-err" className="form-error" role="alert">{fieldErrors.message}</p>}
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button type="submit" disabled={state === "submitting"}
                className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                aria-disabled={state === "submitting"}>
                {state === "submitting" ? (
                  <><Loader2 size={15} className="animate-spin" aria-hidden="true" /> Sending&hellip;</>
                ) : (
                  <><Send size={15} aria-hidden="true" /> Send Message</>
                )}
              </button>
              <p className="text-xs font-montserrat" style={{ color: "var(--text-dim)" }}>I respond within 1&ndash;2 business days.</p>
            </div>
          </form>
        </div>
      </div>

      {/* SIDEBAR */}
      <aside aria-label="Contact information">
        <div className="space-y-4">
          <div className="card p-6" style={{ backgroundColor: "var(--overlay)" }}>
            <p className="text-sm font-raleway font-bold mb-2 uppercase" style={{ color: "var(--text)" }}>Prefer to talk?</p>
            <p className="text-xs mb-5 leading-relaxed font-montserrat" style={{ color: "var(--text-dim)" }}>
              Call directly &mdash; no voicemail maze. If I miss it, I&apos;ll call back within 24 hours.
            </p>
            <a href={siteConfig.phoneHref}
              className="btn-primary w-full justify-center text-xs">
              Call {siteConfig.phone} <Phone size={12} />
            </a>
          </div>

          <div className="card p-6">
            <p className="text-xs font-inconsolata font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "var(--text-dim)" }}>
              Direct contact
            </p>
            <div className="space-y-4">
              <a href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm hover:opacity-80 transition-colors group"
                style={{ color: "var(--text-dim)" }}>
                <div className="w-8 h-8 border flex items-center justify-center group-hover:opacity-80 transition-colors"
                  style={{ borderColor: "var(--border)" }}>
                  <Mail size={14} style={{ color: "var(--text-dim)" }} aria-hidden="true" />
                </div>
                <span className="text-xs font-montserrat break-all">{siteConfig.email}</span>
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:opacity-80 transition-colors group"
                style={{ color: "var(--text-dim)" }}>
                <div className="w-8 h-8 border flex items-center justify-center group-hover:opacity-80 transition-colors"
                  style={{ borderColor: "var(--border)" }}>
                  <Linkedin size={14} style={{ color: "var(--text-dim)" }} aria-hidden="true" />
                </div>
                <span className="text-xs font-montserrat">LinkedIn</span>
              </a>
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:opacity-80 transition-colors group"
                style={{ color: "var(--text-dim)" }}>
                <div className="w-8 h-8 border flex items-center justify-center group-hover:opacity-80 transition-colors"
                  style={{ borderColor: "var(--border)" }}>
                  <Github size={14} style={{ color: "var(--text-dim)" }} aria-hidden="true" />
                </div>
                <span className="text-xs font-montserrat">GitHub</span>
              </a>
            </div>
          </div>

          <div className="border p-4" style={{ backgroundColor: "var(--overlay)", borderColor: "var(--border)" }}>
            <p className="text-xs leading-relaxed font-montserrat" style={{ color: "var(--text-dim)" }}>
              <strong style={{ color: "var(--text)" }}>Response time:</strong> Within 1&ndash;2 business days.
              For urgent inquiries, call {siteConfig.phone} directly.
            </p>
          </div>

          <div className="border p-4" style={{ backgroundColor: "var(--overlay)", borderColor: "var(--border)" }}>
            <p className="text-xs leading-relaxed font-montserrat" style={{ color: "var(--text-dim)" }}>
              <strong style={{ color: "var(--text)" }}>Location:</strong> NYC in-person &bull; Brooklyn-based &bull; NJ case-by-case
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
