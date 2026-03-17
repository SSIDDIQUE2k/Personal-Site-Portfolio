// src/app/portfolio/page.tsx — redirect to /experience
import { redirect } from "next/navigation";

export default function PortfolioRedirect() {
  redirect("/experience");
}
