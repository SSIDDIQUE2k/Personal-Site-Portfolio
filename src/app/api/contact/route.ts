// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// ── Types ──────────────────────────────────────────────────────────────────
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  need: string;
  budget: string;
  timeline: string;
  message: string;
  submittedAt: string;
}

// ── Validation ─────────────────────────────────────────────────────────────
function validateSubmission(body: Record<string, unknown>): string[] {
  const errors: string[] = [];
  if (!body.name || typeof body.name !== "string" || body.name.trim().length < 2) {
    errors.push("Name is required (minimum 2 characters).");
  }
  if (
    !body.email ||
    typeof body.email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)
  ) {
    errors.push("A valid email address is required.");
  }
  if (!body.need || typeof body.need !== "string") {
    errors.push("Please select a need/service type.");
  }
  if (!body.message || typeof body.message !== "string" || body.message.trim().length < 10) {
    errors.push("Message is required (minimum 10 characters).");
  }
  // Honeypot check
  if (body.website && body.website !== "") {
    errors.push("Spam detected.");
  }
  return errors;
}

// ── Storage: append to local JSON file ─────────────────────────────────────
// In production, replace this with your preferred storage (DB, email, webhook)
function saveSubmission(data: ContactSubmission): void {
  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "contact-submissions.json");

  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  let submissions: ContactSubmission[] = [];
  if (fs.existsSync(file)) {
    try {
      submissions = JSON.parse(fs.readFileSync(file, "utf-8"));
    } catch {
      submissions = [];
    }
  }

  submissions.unshift(data); // newest first
  fs.writeFileSync(file, JSON.stringify(submissions, null, 2));
}

// ── Optional email notification stub ───────────────────────────────────────
// To enable real email sending:
// 1. Add SMTP deps: npm install nodemailer @types/nodemailer
// 2. Set env vars: EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO
// 3. Uncomment the function below and call it from POST
//
// async function sendNotificationEmail(data: ContactSubmission) {
//   const nodemailer = await import("nodemailer");
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: Number(process.env.EMAIL_PORT ?? 587),
//     auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
//   });
//   await transporter.sendMail({
//     from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
//     to: process.env.EMAIL_TO ?? "siddiqueshazib5@gmail.com",
//     subject: `[Portfolio] New inquiry from ${data.name}`,
//     text: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company ?? "—"}\nNeed: ${data.need}\nBudget: ${data.budget}\nTimeline: ${data.timeline}\n\n${data.message}`,
//   });
// }

// ── POST handler ───────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const errors = validateSubmission(body as Record<string, unknown>);

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const submission: ContactSubmission = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: (body.name as string).trim(),
      email: (body.email as string).trim().toLowerCase(),
      company: body.company ? (body.company as string).trim() : undefined,
      need: body.need as string,
      budget: (body.budget as string) || "Not specified",
      timeline: (body.timeline as string) || "Not specified",
      message: (body.message as string).trim(),
      submittedAt: new Date().toISOString(),
    };

    // Save to local JSON (dev/small-volume production)
    try {
      saveSubmission(submission);
    } catch (e) {
      console.error("Failed to save submission:", e);
      // Don't fail the request if storage fails — log and continue
    }

    // Uncomment to send email notification:
    // try { await sendNotificationEmail(submission); } catch (e) { console.error(e); }

    return NextResponse.json(
      {
        success: true,
        message: "Thanks! I'll be in touch within 1–2 business days.",
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { success: false, errors: ["Server error. Please try again or email directly."] },
      { status: 500 }
    );
  }
}
