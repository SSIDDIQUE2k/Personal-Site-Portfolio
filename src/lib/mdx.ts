// src/lib/mdx.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "projects");

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  category: string;
  summary: string;
  stack: string[];
  metrics: string[];
  featured?: boolean;
  imagePlaceholder?: string;
}

export interface ProjectContent extends ProjectFrontmatter {
  content: string;
}

export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug: string): ProjectContent | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    ...(data as ProjectFrontmatter),
    content,
  };
}

export function getAllProjects(): ProjectContent[] {
  return getAllProjectSlugs()
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is ProjectContent => p !== null);
}
