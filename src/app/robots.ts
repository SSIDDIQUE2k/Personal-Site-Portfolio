// src/app/robots.ts
import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/data/"] },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
