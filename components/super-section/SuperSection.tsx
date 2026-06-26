"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/lib/utils";

/* ─── Types ──────────────────────────────────────────────────── */

type VerticalBase = {
  id: string;
  label: string;
  heading: string;
  subtext?: string;
  bullets: string[];
};

type DiagramVertical = VerticalBase & {
  kind: "diagram";
  pipeline: [string, string, string];
};

type MockupVertical = VerticalBase & {
  kind: "mockup";
};

type Vertical = DiagramVertical | MockupVertical;

/* ─── Content ────────────────────────────────────────────────── */

const VERTICALS: Vertical[] = [
  {
    id: "general",
    kind: "mockup",
    label: "General & Showcase",
    heading: "Launch a flawless digital storefront for any industry.",
    subtext:
      "From high-converting landing pages to dynamic portfolios, car rentals, and booking showcases.",
    bullets: [
      "Stunning, fast single-page websites and landing pages",
      "Clean product displays for car rentals, menus, or portfolios",
      "Instant WhatsApp buttons for quick customer inquiries",
      "Google-optimized setups so your site loads instantly on mobile",
      "AI-Powered WhatsApp Auto-Responder Linkages",
    ],
  },
  {
    id: "hospitality",
    kind: "diagram",
    label: "Hospitality & Nightlife",
    heading: "Fill tables, streamline dining rooms, and automate your revenue.",
    bullets: [
      "Easy online table reservations and seat booking",
      "Ticketing pages for game nights, trivia, and events",
      "Digital menus customers can view instantly by scanning a QR code",
      "Automated M-Pesa deposit collection to secure bookings before arrival",
      "Automated Instagram DM-to-Booking AI Closers",
    ],
    pipeline: [
      "Customer Reserves VIP Table or Event Spot",
      "M-Pesa STK Deposit Push Instantly Sent & Paid",
      "Table Locked & Digital Order/Check-In Ticket Issued",
    ],
  },
  {
    id: "retail",
    kind: "diagram",
    label: "Retail & E-commerce",
    heading: "Sell around the clock, without the DM chaos.",
    subtext:
      "For local shops and makers who have outgrown chasing customers for payments on Instagram.",
    bullets: [
      "Clean online checkout setups that customers trust",
      "Automated systems that track your stock as items sell",
      "Flexible delivery option selectors built into the checkout",
      "Smart sales dashboards that run while you sleep",
      "AI Customer Abandoned-Cart Recovery Messages",
    ],
    pipeline: [
      "Customer Checks Out",
      "Payment Webhook Verified",
      "Stock Level Auto-Decremented",
    ],
  },
  {
    id: "professional",
    kind: "diagram",
    label: "Professional Services",
    heading: "Build undeniable corporate trust and capture premium B2B leads.",
    bullets: [
      "Lightning-fast case study portfolios",
      "Custom request-for-quote funnel optimization",
      "Direct WhatsApp/Calendly operational links",
      "Multi-role business metrics dashboards",
    ],
    pipeline: [
      "Corporate Lead Inbound",
      "Automated Briefing Document Sent",
      "Discovery Call Scheduled",
    ],
  },
  {
    id: "wellness",
    kind: "diagram",
    label: "Wellness & Clinics",
    heading: "Let your clients book appointments seamlessly, day or night.",
    bullets: [
      "Real-time session calendar availability",
      "Automated consultation deposit payments",
      "Automated SMS & WhatsApp booking reminders",
      "Clean staff roster scheduling interfaces",
    ],
    pipeline: [
      "Patient Selects Time Slot",
      "Deposit Confirmed via API",
      "Calendar Slot Locked Globally",
    ],
  },
  {
    id: "field",
    kind: "diagram",
    label: "Field Services & Logistics",
    heading: "Dominate local search and capture emergency service calls instantly.",
    bullets: [
      "Local SEO optimizations engineered for top-ranking map placement",
      "High-visibility emergency click-to-call mobile hooks",
      "Location pinning and radius map routing integrations",
      "Transparent job quotation calculators",
    ],
    pipeline: [
      "User Searches 'Garage Near Me'",
      "Google Maps Pin Ranks High",
      "Direct Click-To-Call Generated",
    ],
  },
];

/* ─── Framer Motion variants ─────────────────────────────────── */

const tagListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const tagItemVariants = {
  hidden: { opacity: 0, x: -14, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.38, ease: "easeOut" },
  },
};

/* ─── Right-column renderers ─────────────────────────────────── */

function ShowcaseMockup() {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-2xl"
      style={{ border: "1px solid #1E3A5F", background: "#0B1E38" }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-3 py-2"
        style={{ background: "#0D2444", borderBottom: "1px solid #1A3560" }}
      >
        <div className="flex gap-1.5">
          {["#3A5880", "#3A5880", "#3A5880"].map((c, i) => (
            <div key={i} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div
          className="flex flex-1 items-center gap-1.5 rounded-md px-2 py-0.5 text-[9px]"
          style={{ background: "#071529", color: "#6B8FAF" }}
        >
          <div className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#39FF14" }} />
          mybusiness.co.ke
        </div>
        <span
          className="rounded px-1.5 py-0.5 font-mono text-[9px]"
          style={{ background: "#0F3060", color: "#7BB8FF", border: "1px solid #1E4A8A" }}
        >
          0.3s
        </span>
      </div>

      {/* Site canvas */}
      <div className="flex flex-1 flex-col overflow-hidden" style={{ background: "#F8FAFF" }}>
        {/* Nav */}
        <div
          className="flex items-center justify-between px-4 py-2"
          style={{ background: "#FFFFFF", borderBottom: "1px solid #E5EBF5" }}
        >
          <span className="text-[9px] font-extrabold tracking-tight" style={{ color: "#0B1E38" }}>
            mybusiness
          </span>
          <div className="flex gap-3">
            {["Home", "Services", "Contact"].map((item) => (
              <span key={item} className="text-[8px] font-medium" style={{ color: "#64748B" }}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Hero band */}
        <div className="px-4 py-4" style={{ background: "#EDF2FB" }}>
          <div
            className="mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5"
            style={{ background: "#D0E4FF", border: "1px solid #B0CBEF" }}
          >
            <span className="text-[7px] font-semibold" style={{ color: "#1E4A8A" }}>
              Trusted across 80+ businesses
            </span>
          </div>
          <h3
            className="mb-1.5 text-[11px] font-extrabold leading-tight"
            style={{ color: "#0B1E38" }}
          >
            Premium Products,{" "}
            <span style={{ color: "#1E4A8A" }}>Delivered Fast.</span>
          </h3>
          <p className="mb-3 text-[8px] leading-relaxed" style={{ color: "#64748B" }}>
            5,000+ items in stock. Order before 2 pm, delivered tomorrow.
          </p>
          <div className="flex items-center gap-2.5">
            <div
              className="rounded-lg px-3 py-1.5 text-[8px] font-bold text-white"
              style={{ background: "#1E4A8A" }}
            >
              Shop Now →
            </div>
            <span className="text-[8px] font-medium" style={{ color: "#64748B" }}>
              Learn more ↗
            </span>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="flex"
          style={{ background: "#FFFFFF", borderTop: "1px solid #E5EBF5", borderBottom: "1px solid #E5EBF5" }}
        >
          {[["5,200+", "Products"], ["4.9★", "Rating"], ["2 hr", "Delivery"]].map(([v, l], i) => (
            <div
              key={l}
              className="flex-1 py-2 text-center"
              style={{ borderLeft: i > 0 ? "1px solid #E5EBF5" : undefined }}
            >
              <div className="text-[10px] font-extrabold" style={{ color: "#0B1E38" }}>{v}</div>
              <div className="text-[7px]" style={{ color: "#94A3B8" }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-3 gap-1.5 p-3" style={{ background: "#F8FAFF" }}>
          {[["Item One", "KSh 2,400"], ["Item Two", "KSh 890"], ["Item Three", "KSh 1,200"]].map(
            ([n, p]) => (
              <div
                key={n}
                className="rounded-lg p-1.5"
                style={{ background: "#FFFFFF", border: "1px solid #E5EBF5" }}
              >
                <div className="mb-1.5 h-8 w-full rounded-md" style={{ background: "#EDF2FB" }} />
                <div className="truncate text-[7px] font-medium" style={{ color: "#475569" }}>
                  {n}
                </div>
                <div className="text-[7px] font-semibold" style={{ color: "#0B1E38" }}>{p}</div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function EcosystemDiagram({ pipeline }: { pipeline: [string, string, string] }) {
  return (
    <div className="flex flex-col items-stretch">
      {pipeline.map((step, i) => (
        <div key={step} className="flex flex-col items-stretch">
          <div
            className="flex items-center gap-4 rounded-2xl px-5 py-4"
            style={{
              background: "#2C3539",
              border: "1px solid #39FF14",
              boxShadow: "0 0 18px rgba(57,255,20,0.08)",
            }}
          >
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-extrabold"
              style={{ background: "#39FF14", color: "#0A0A0B" }}
            >
              {i + 1}
            </span>
            <p className="text-sm font-semibold leading-snug text-[#F2EDE6]">{step}</p>
          </div>

          {i < 2 && (
            <div className="flex flex-col items-center py-1.5">
              <div
                style={{
                  width: 2,
                  height: 20,
                  background: "linear-gradient(to bottom, #39FF14 60%, transparent)",
                  opacity: 0.7,
                }}
              />
              <svg width="14" height="9" viewBox="0 0 14 9" aria-hidden>
                <polygon points="7,9 0,0 14,0" fill="#39FF14" opacity="0.85" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Right-column panel wrapper ─────────────────────────────── */

function RightPanel({ vertical }: { vertical: Vertical }) {
  const isShowcase = vertical.kind === "mockup";

  return (
    <motion.div
      key={`panel-${vertical.id}`}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="rounded-3xl border flex flex-col relative overflow-hidden"
      style={
        isShowcase
          ? { background: "#07111C", borderColor: "#162740", padding: "1.5rem" }
          : { background: "#0F1A1D", borderColor: "#1E2D31", padding: "2rem" }
      }
    >
      {/* Panel label */}
      <p
        className="font-mono text-label uppercase tracking-widest mb-6 shrink-0"
        style={{ color: isShowcase ? "#7BB8FF" : "#39FF14" }}
      >
        {isShowcase ? "Site Preview" : "System Ecosystem"}
      </p>

      {isShowcase ? (
        <div className="flex-1 min-h-0">
          <ShowcaseMockup />
        </div>
      ) : (
        <>
          <EcosystemDiagram pipeline={(vertical as DiagramVertical).pipeline} />

          {/* Corner grid texture */}
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,#39FF14 0px,#39FF14 1px,transparent 1px,transparent 20px),repeating-linear-gradient(90deg,#39FF14 0px,#39FF14 1px,transparent 1px,transparent 20px)",
            }}
            aria-hidden
          />
          {/* Ambient glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse at 10% 10%, rgba(57,255,20,0.05) 0%, transparent 60%)",
            }}
            aria-hidden
          />
        </>
      )}
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */

export default function SuperSection() {
  const [activeId, setActiveId] = useState<string>(VERTICALS[0].id);
  const [sectionRefCb, inView] = useInView(0.3);

  const vertical = VERTICALS.find((v) => v.id === activeId)!;

  return (
    <section
      id="transform"
      ref={sectionRefCb}
      className="relative py-24 lg:py-32 bg-canvas overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-sage/30 to-transparent" />

      {/* Ambient neon glow */}
      <div
        className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full blur-[180px]"
        style={{ background: "rgba(57,255,20,0.03)" }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Section header ── */}
        <div className="mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-display-lg font-extrabold text-text-primary mb-4"
          >
            Pick a business like yours.{" "}
            <span className="gradient-text-gold">See what changes.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-md text-text-secondary max-w-2xl"
          >
            Real systems engineered for real Nairobi businesses described the way owners
            describe their problems, not the way developers do.
          </motion.p>
        </div>

        {/* ── Business vertical filter tags — staggered left-to-right ── */}
        <motion.div
          variants={tagListVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap gap-3 mb-12"
        >
          {VERTICALS.map((v) => {
            const isActive = v.id === activeId;
            return (
              <motion.button
                key={v.id}
                variants={tagItemVariants}
                onClick={() => setActiveId(v.id)}
                className={`rounded-2xl px-5 py-2.5 text-sm font-bold transition-all duration-300 border ${
                  isActive
                    ? "shadow-gold-sm"
                    : "bg-surface border-border text-text-muted hover:border-border-bright hover:text-text-secondary"
                }`}
                style={
                  isActive
                    ? {
                        background: "linear-gradient(135deg, #C9A96E, #E8C87A)",
                        color: "#0A0A0B",
                        borderColor: "#C9A96E",
                        boxShadow:
                          "0 0 20px rgba(201,169,110,0.35), 0 0 40px rgba(201,169,110,0.12)",
                      }
                    : undefined
                }
              >
                {v.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── Dynamic two-column content ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={vertical.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid gap-8 lg:grid-cols-2 lg:items-stretch"
          >
            {/* ── LEFT: Business-value copy ── */}
            <div className="rounded-3xl border border-border bg-surface p-8 bento-border flex flex-col">
              <h3 className="text-display-md font-extrabold text-text-primary mb-4 leading-tight">
                {vertical.heading}
              </h3>
              {vertical.subtext && (
                <p className="text-body-md text-text-secondary mb-5">{vertical.subtext}</p>
              )}
              <ul className="mt-2 flex flex-col gap-2.5">
                {vertical.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-3 rounded-2xl border border-amber-500/10 bg-[#1c1b17] px-4 py-3.5 text-sm font-semibold text-amber-200/75 hover:bg-neutral-800/60 hover:border-amber-500/20 transition-all duration-200 cursor-default"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── RIGHT: Mockup or Ecosystem Diagram ── */}
            <RightPanel vertical={vertical} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
