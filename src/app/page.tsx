// src/app/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { Hero } from "@/components/sections/Hero";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { ResultsHighlights } from "@/components/sections/ResultsHighlights";
import { AboutFull } from "@/components/sections/AboutFull";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { HomeCTA } from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityBar />
      <ResultsHighlights />
      <AboutFull />
      <ServicesPreview />
      <HomeCTA />
    </>
  );
}
