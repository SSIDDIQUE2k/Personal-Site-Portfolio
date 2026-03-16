// src/app/page.tsx
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { Hero } from "@/components/sections/Hero";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ResultsHighlights } from "@/components/sections/ResultsHighlights";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { AboutFull } from "@/components/sections/AboutFull";

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
      <AboutFull />
      <ServicesPreview />
      <FeaturedProjects />
      <ResultsHighlights />
      <HomeCTA />
    </>
  );
}
