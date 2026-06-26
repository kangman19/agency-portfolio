"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "@/lib/utils";

/* ─── Content ────────────────────────────────────────────────── */

const SERVICES = [
  {
    id: "web",
    number: "01",
    title: "High-Conversion Web Apps & Landing Pages",
    subtext:
      "Stop chasing clients in Instagram DMs. Get a dedicated, lightning-fast A.I storefront that establishes absolute brand authority.",
    features: [
      "Custom single-page or multi-page layouts built from scratch",
      "100% mobile-optimized layouts for seamless browsing on the go",
      "Direct WhatsApp click-to-chat operational shortcuts",
      "Integrated digital menus, catalogs, and media portfolios",
      "AI-Powered WhatsApp Auto-Responder Linkages",
    ],
  },
  {
    id: "booking",
    number: "02",
    title: "Automated Booking & Payment Systems",
    subtext:
      "Let your customers book spots, tables, or sessions 24/7 without you lifting a finger.",
    features: [
      "Automated M-Pesa Express (STK Push) checkout webhooks",
      "Real-time table reservations, team registrations, and slot scheduling",
      "Instant ticket generation with automated QR verification codes",
      "Simple backend host dashboards for easy guest check-ins",
    ],
  },
  {
    id: "seo",
    number: "03",
    title: "Local SEO & Visibility Domination",
    subtext:
      "Ensure your business is the absolute first choice when local customers are looking to spend money nearby.",
    features: [
      "Advanced local search engine optimization for top Google Maps ranking",
      "High-visibility mobile click-to-call and direction routing links",
      "Schema markup injections for clean rich snippet presentation",
      "Automated performance monitoring and Google Console indexing",
      "Automated Google Maps Review Replying Engines",
    ],
  },
];

/* ─── Reusable gold feature bullet ──────────────────────────── */

function FeaturePill({ text }: { text: string }) {
  return (
    <li className="rounded-2xl border border-amber-500/40 bg-gradient-to-r from-surface-2 to-[rgba(245,158,11,0.07)] px-4 py-3.5 text-sm font-semibold text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:border-amber-400 hover:from-[#141008] hover:to-[rgba(245,158,11,0.14)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-300 cursor-default">
      {text}
    </li>
  );
}

/* ─── Section: Hero ──────────────────────────────────────────── */

function HeroBlock() {
  const [ref, inView] = useInView(0.3);

  return (
    <div ref={ref} className="max-w-3xl mx-auto text-center px-6 lg:px-8 pt-20 pb-20 lg:pt-28 lg:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
        className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5"
      >
        <span className="font-mono text-label text-gold uppercase tracking-wider">What we build</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-display-lg font-extrabold text-text-primary mb-5 leading-[1.06]"
      >
        Software engineered to run your{" "}
        <span className="gradient-text-gold">business automatically.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.22 }}
        className="text-body-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
      >
        No fluff, no technical jargon. Just high-speed websites, automated A.I booking tools, and local
        SEO setups designed to increase your revenue.
      </motion.p>
    </div>
  );
}

/* ─── Section: Service cards ─────────────────────────────────── */

function CardsBlock() {
  const [ref, inView] = useInView(0.15);

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 lg:pb-32">
      <div className="grid gap-6 lg:grid-cols-3">
        {SERVICES.map((svc, i) => (
          <motion.div
            key={svc.id}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            className="rounded-3xl border border-border bg-surface p-8 bento-border flex flex-col"
          >
            {/* Number badge */}
            <span className="font-mono text-label text-gold/60 tracking-widest mb-5 block">
              {svc.number}
            </span>

            {/* Title */}
            <h2 className="text-xl font-extrabold text-text-primary leading-snug mb-3">
              {svc.title}
            </h2>

            {/* Value subtext */}
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              {svc.subtext}
            </p>

            {/* Divider */}
            <div className="h-px bg-border mb-6" />

            {/* Feature pills */}
            <ul className="flex flex-col gap-3 flex-1">
              {svc.features.map((f) => (
                <FeaturePill key={f} text={f} />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Section: CTA ───────────────────────────────────────────── */

function CTABlock() {
  const [ref, inView] = useInView(0.3);

  return (
    <section
      ref={ref}
      className="relative py-28 lg:py-36 bg-canvas overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gold/[0.06] blur-[140px]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5"
        >
          <span className="font-mono text-label text-gold uppercase tracking-wider">Ready to start?</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-display-lg font-extrabold text-text-primary mb-5"
        >
          Ready to build your website or{" "}
          <span className="gradient-text-gold">automate your operations?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-body-lg text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed"
        >
          One conversation is all it takes to get your business online. Whether you need a
          premium showcase website, an integrated booking system, or smart AI workflows — we
          design it completely around your goals. No commitment, no tech jargon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-canvas font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-gold-md hover:scale-[1.02] group"
          >
            Let&apos;s build something together
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Root export ────────────────────────────────────────────── */

export default function ServicesContent() {
  return (
    <>
      <div className="absolute left-1/2 top-16 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-sage/25 to-transparent" />
      <HeroBlock />
      <CardsBlock />
      <CTABlock />
    </>
  );
}
