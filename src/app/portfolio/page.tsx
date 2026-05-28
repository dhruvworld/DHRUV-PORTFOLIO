import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected work by Dhruv Solanki across AI systems, products, and business execution.",
};

export default function PortfolioPage() {
  redirect("/projects");
}
