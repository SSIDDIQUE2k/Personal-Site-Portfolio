"use client";
// src/components/ui/CodeAnimation.tsx
import { useEffect, useState, useRef } from "react";

const SNIPPETS = [
  {
    filename: "Hero.tsx",
    lang: "react",
    lines: [
      { text: "// Responsive hero with gradient text", color: "code-comment" },
      { text: "", color: "" },
      { text: "export function Hero() {", color: "code-bright" },
      { text: "  return (", color: "code-line" },
      { text: '    <section className="min-h-screen">', color: "code-line" },
      { text: '      <h1 className="text-6xl font-black">', color: "code-bright" },
      { text: "        Build. Launch. Grow.", color: "code-line" },
      { text: "      </h1>", color: "code-bright" },
      { text: '      <Button href="/contact">', color: "code-line" },
      { text: "        Get Started", color: "code-line" },
      { text: "      </Button>", color: "code-line" },
      { text: "    </section>", color: "code-line" },
      { text: "  );", color: "code-line" },
      { text: "}", color: "code-bright" },
    ],
  },
  {
    filename: "styles.css",
    lang: "css",
    lines: [
      { text: "/* Glassmorphism card component */", color: "code-comment" },
      { text: "", color: "" },
      { text: ".card {", color: "code-bright" },
      { text: "  backdrop-filter: blur(12px);", color: "code-line" },
      { text: "  background: rgba(255, 255, 255, 0.05);", color: "code-line" },
      { text: "  border: 1px solid rgba(255, 255, 255, 0.1);", color: "code-line" },
      { text: "  border-radius: 1rem;", color: "code-line" },
      { text: "  transition: transform 0.3s ease;", color: "code-line" },
      { text: "}", color: "code-bright" },
      { text: "", color: "" },
      { text: ".card:hover {", color: "code-bright" },
      { text: "  transform: translateY(-4px);", color: "code-line" },
      { text: "}", color: "code-bright" },
    ],
  },
  {
    filename: "api/contact.ts",
    lang: "typescript",
    lines: [
      { text: "// Contact form API route", color: "code-comment" },
      { text: "", color: "" },
      { text: "export async function POST(req: Request) {", color: "code-bright" },
      { text: "  const { name, email } = await req.json();", color: "code-line" },
      { text: "", color: "" },
      { text: "  await sendEmail({", color: "code-bright" },
      { text: "    to: process.env.CONTACT_EMAIL,", color: "code-line" },
      { text: "    subject: `New inquiry from ${name}`,", color: "code-line" },
      { text: "    replyTo: email,", color: "code-line" },
      { text: "  });", color: "code-bright" },
      { text: "", color: "" },
      { text: "  return Response.json({ ok: true });", color: "code-bright" },
      { text: "}", color: "code-bright" },
    ],
  },
];

const CHAR_DELAY = 28;
const LINE_PAUSE = 120;
const SNIPPET_PAUSE = 2200;

export function CodeAnimation({ className }: { className?: string }) {
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const snippet = SNIPPETS[snippetIdx];

  useEffect(() => {
    setDisplayedLines([]);
    setCurrentLine(0);
    setCurrentChar(0);
    setShowCursor(true);
  }, [snippetIdx]);

  useEffect(() => {
    if (currentLine >= snippet.lines.length) {
      timeoutRef.current = setTimeout(() => {
        setSnippetIdx((i) => (i + 1) % SNIPPETS.length);
      }, SNIPPET_PAUSE);
      return;
    }

    const line = snippet.lines[currentLine];
    const target = line.text;

    if (currentChar < target.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedLines((prev) => {
          const next = [...prev];
          next[currentLine] = target.slice(0, currentChar + 1);
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, CHAR_DELAY);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayedLines((prev) => {
          const next = [...prev];
          next[currentLine] = target;
          return next;
        });
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, LINE_PAUSE);
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [currentLine, currentChar, snippetIdx, snippet.lines]);

  return (
    <div className={`code-window w-full ${className ?? "max-w-md"}`} aria-hidden="true">
      {/* Title bar */}
      <div className="code-window-bar">
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--code-dot)" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--code-dot)" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--code-dot)" }} />
        <span className="ml-3 text-xs flex-1 text-center pr-6 font-inconsolata" style={{ color: "var(--code-dim)" }}>
          {snippet.filename}
        </span>
      </div>

      {/* Code body */}
      <div className="px-5 py-4 h-[340px] overflow-hidden">
        {snippet.lines.map((line, i) => {
          const rendered = displayedLines[i] ?? "";
          const isActive = i === currentLine;
          const isDone = i < currentLine;

          if (!isDone && !isActive) return null;

          return (
            <div key={i} className="leading-7">
              {rendered === "" ? (
                <span className="inline-block h-[1.75rem]">&nbsp;</span>
              ) : (
                <span style={{ color: `var(--${line.color || "code-line"})` }}>
                  {rendered}
                  {isActive && currentLine < snippet.lines.length && (
                    <span className="cursor-blink" />
                  )}
                </span>
              )}
            </div>
          );
        })}
        {currentLine >= snippet.lines.length && showCursor && (
          <div className="leading-7">
            <span className="cursor-blink" />
          </div>
        )}
      </div>

      {/* Snippet dots */}
      <div className="flex items-center gap-1.5 px-5 py-3 border-t" style={{ borderColor: "var(--border)" }}>
        {SNIPPETS.map((_, i) => (
          <button
            key={i}
            onClick={() => setSnippetIdx(i)}
            className="w-1.5 h-1.5 transition-colors"
            style={{ backgroundColor: i === snippetIdx ? "var(--text)" : "var(--code-dot)" }}
            aria-label={`View snippet ${i + 1}`}
          />
        ))}
        <span className="ml-auto text-[10px] font-inconsolata uppercase tracking-wider" style={{ color: "var(--code-dim)" }}>
          {snippet.lang}
        </span>
      </div>
    </div>
  );
}
