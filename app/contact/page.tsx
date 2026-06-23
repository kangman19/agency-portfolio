import type { Metadata } from "next";
import { SITE } from "@/lib/content";
import ContactSection from "@/components/cta/ContactSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `Contact — ${SITE.name}`,
  description:
    "Tell us about your business and we'll tell you what we'd build, for free. One message is all it takes — you'll hear back from the founder within one working day.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-canvas pt-16">
      <ContactSection />
    </main>
  );
}
