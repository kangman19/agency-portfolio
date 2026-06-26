import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/hero/HeroSection";
import SuperSection from "@/components/super-section/SuperSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas">
      <HeroSection />
      <SuperSection />
      <HomeCTASection />
    </main>
  );
}

function HomeCTASection() {
  return (
    <section className="relative py-28 lg:py-36 bg-canvas overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gold/[0.06] blur-[140px]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5">
          <span className="font-mono text-label text-gold uppercase tracking-wider">Ready to start?</span>
        </div>
        <h2 className="text-display-lg font-extrabold text-text-primary mb-6">
          Let&apos;s build something{" "}
          <span className="gradient-text-gold">your customers will love.</span>
        </h2>
        <p className="text-body-lg text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed">
          One conversation is all it takes. No commitment, no tech jargon just an honest look at what we can build for your business.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-canvas font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-gold-md hover:scale-[1.02] group"
        >
          Start a conversation
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
