import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import TrustGridSection from "@/components/trust-grid/TrustGridSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `Services — ${SITE.name}`,
  description:
    "Security, performance, SEO, and human support — everything your business needs to grow online. Built on enterprise-grade infrastructure from day one.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-canvas pt-16">
      <TrustGridSection />
    </main>
  );
}
