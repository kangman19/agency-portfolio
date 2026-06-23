import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import JourneySection from "@/components/journey/JourneySection";
import ProcessClosingSection from "@/components/process/ProcessClosingSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `How We Work — ${SITE.name}`,
  description:
    "Five friendly stops from first conversation to launch day. At every step you know exactly what's happening and exactly what you get.",
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-canvas pt-16">
      <JourneySection />
      <ProcessClosingSection />
    </main>
  );
}
