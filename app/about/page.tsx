import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: `About — ${SITE.name}`,
  description:
    "Astral Agency builds high-performance websites and booking systems engineered for speed, SEO, and measurable revenue. Bridging the gap between operational excellence and digital presence.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-canvas px-6">
      <div className="max-w-2xl mx-auto py-32">
        
        <h1 className="text-display-lg font-extrabold text-text-primary mb-10 leading-tight">
          Websites built to match{" "}
          <span className="gradient-text-gold">your ambition.</span>
        </h1>
        <div className="space-y-6 text-body-lg text-text-secondary leading-relaxed">
          <p>
            Local businesses are evolving at an incredible pace. Every day, growing companies are upgrading their logistics, mastering customer service, and modernizing their physical operations to compete at a world-class level.
          </p>
          <p>
            But when you look at their digital presence, there is often a massive gap. A brilliant, thriving business should not be held back by an outdated, slow website that fails to reflect its true quality.
          </p>
          <p>
            Astral Agency was started to bridge that exact gap. We do not just build online presence; we build high-performance business engines. Every website and booking system we design is engineered from the ground up for speed and visibility. By combining clean code with deep search engine optimization (SEO), we ensure your business ranks exactly where your customers are looking.
          </p>
          <p className="font-mono text-label text-gold uppercase tracking-widest mb-6">
          We chose the name Astral because it means to reach for the stars. For us, that is not just a poetic phrase. It represents the exact trajectory we want for your business.
        </p>
          <p>
            Our goal is to take the operational excellence you have already built offline and project it flawlessly online. We turn your website into a tool that actively captures premium clients, reduces your daily administrative work, and drives measurable revenue to your bottom line.
          </p>
        </div>
        <p className="mt-10 text-sm font-semibold text-gold">
          — Ian Kangethe, Founder
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href={`https://wa.me/${SITE.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-canvas font-bold rounded-2xl text-sm hover:shadow-gold-sm hover:scale-[1.02] transition-all duration-300"
          >
            Start a conversation
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-text-secondary font-semibold rounded-2xl text-sm hover:border-border-bright hover:text-text-primary transition-all duration-200"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
