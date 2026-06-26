import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import ServicesContent from "@/components/services/ServicesContent";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `Services | ${SITE.name}`,
  description:
    "High-speed websites, automated A.I booking systems, and local SEO setups engineered to increase revenue for Nairobi businesses.",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-canvas pt-16 overflow-hidden">
      <ServicesContent />
    </main>
  );
}
