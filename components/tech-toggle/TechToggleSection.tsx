"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sparkles, Terminal, ChevronRight } from "lucide-react";
import { useInView, useIsMobile } from "@/lib/utils";

// ─── Code snippets for Geek View ─────────────────────────────────────────────
const CODE_SNIPPETS: Record<string, string[]> = {
  performance: [
    `// next.config.ts — Edge-optimised delivery`,
    `import type { NextConfig } from 'next';`,
    ``,
    `const config: NextConfig = {`,
    `  experimental: {`,
    `    ppr: true,          // Partial Pre-Rendering`,
    `    reactCompiler: true, // Auto-memoisation`,
    `  },`,
    `  images: {`,
    `    formats: ['image/avif', 'image/webp'],`,
    `    minimumCacheTTL: 60 * 60 * 24 * 30,`,
    `  },`,
    `};`,
    ``,
    `// Result: Lighthouse score 98/100 ✓`,
  ],
  security: [
    `// middleware.ts — Zero-trust security layer`,
    `import { NextRequest, NextResponse } from 'next/server';`,
    `import { verifyJWT } from '@/lib/auth';`,
    ``,
    `export async function middleware(req: NextRequest) {`,
    `  // Rate limiting — 100 req/min per IP`,
    `  const ip = req.headers.get('x-forwarded-for');`,
    `  const limited = await rateLimit(ip);`,
    `  if (limited) return new Response('429', { status: 429 });`,
    ``,
    `  // CSRF + JWT verification`,
    `  const token = req.cookies.get('__session')?.value;`,
    `  const payload = await verifyJWT(token);`,
    `  if (!payload) return NextResponse.redirect('/login');`,
    ``,
    `  // Security headers auto-applied ✓`,
    `  return NextResponse.next();`,
    `}`,
  ],
  database: [
    `// schema.prisma — Type-safe data layer`,
    `model Customer {`,
    `  id        String   @id @default(cuid())`,
    `  email     String   @unique`,
    `  name      String`,
    `  orders    Order[]`,
    `  createdAt DateTime @default(now())`,
    ``,
    `  @@index([email])  // Fast lookups`,
    `}`,
    ``,
    `// Automatic migrations, backups & scaling`,
    `// Query time: avg 4ms on 1M+ rows ✓`,
  ],
};

// ─── Friendly card content ────────────────────────────────────────────────────
const FRIENDLY_CARDS = [
  {
    id: "performance",
    icon: "⚡",
    title: "Lightning Fast Pages",
    subtitle: "Your pages load before customers can blink",
    description:
      "We use intelligent pre-loading technology that predicts what page a visitor will click next and pre-loads it in the background, so every click feels instant.",
    metric: "0.4s avg. load time",
    metricColor: "text-teal",
    badge: "Speed",
    badgeColor: "text-teal bg-teal/10 border-teal/25",
  },
  {
    id: "security",
    icon: "🔐",
    title: "Fort Knox Security",
    subtitle: "Sleep soundly. Your data is locked up tight.",
    description:
      "Every request to your site is verified and rate-limited. Customer data is encrypted both in transit and at rest. Automated scans run daily to catch vulnerabilities before attackers can.",
    metric: "0 breaches in 3 years",
    metricColor: "text-indigo",
    badge: "Security",
    badgeColor: "text-indigo bg-indigo/10 border-indigo/25",
  },
  {
    id: "database",
    icon: "🗄️",
    title: "Your Data, Always Safe",
    subtitle: "Reliable storage that grows with your business",
    description:
      "Customer orders, contact forms, inventory: everything is stored in a structured, backed-up database. We design it to be fast, organised, and never lose a record.",
    metric: "Daily automated backups",
    metricColor: "text-lime",
    badge: "Database",
    badgeColor: "text-lime bg-lime/10 border-lime/25",
  },
];

// ─── Animated terminal line ────────────────────────────────────────────────────
function TerminalLine({ text, delay, isComment }: { text: string; delay: number; isComment?: boolean }) {
  const [visible, setVisible] = useState(false);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const show = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(show);
  }, [delay]);

  useEffect(() => {
    if (!visible || !text) return;
    let i = 0;
    const interval = setInterval(() => {
      i += 2;
      setChars(i);
      if (i >= text.length) clearInterval(interval);
    }, 12);
    return () => clearInterval(interval);
  }, [visible, text]);

  if (!visible) return null;
  if (text === "") return <div className="h-4" />;

  const displayed = text.slice(0, chars);
  const colorClass = isComment || text.startsWith("//")
    ? "text-text-muted"
    : text.startsWith("import") || text.startsWith("export") || text.startsWith("const") || text.startsWith("  experimental") || text.startsWith("  images") || text.startsWith("  formats")
    ? "text-indigo"
    : text.includes("true") || text.includes("false") || text.includes("✓")
    ? "text-teal"
    : text.includes(":") && !text.includes("//")
    ? "text-text-secondary"
    : "text-text-primary";

  return (
    <div className={`font-mono text-xs leading-6 whitespace-pre ${colorClass}`}>
      {displayed}
      {chars < text.length && (
        <span className="inline-block w-1.5 h-4 bg-teal/80 animate-blink ml-0.5 align-text-bottom" />
      )}
    </div>
  );
}

// ─── Geek view terminal panel ─────────────────────────────────────────────────
function GeekView({ snippetKey }: { snippetKey: string }) {
  const lines = CODE_SNIPPETS[snippetKey] ?? [];

  return (
    <motion.div
      key={snippetKey}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.3 }}
      className="relative bg-[#080C14] rounded-2xl border border-border overflow-hidden terminal-scanline"
    >
      {/* Terminal chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 text-center font-mono text-xs text-text-muted">
          nexus-Agency / {snippetKey}.ts
        </div>
        <Terminal size={12} className="text-teal" />
      </div>

      {/* Code area */}
      <div className="p-5 space-y-0 min-h-[240px]">
        {lines.map((line, i) => (
          <TerminalLine
            key={`${snippetKey}-${i}`}
            text={line}
            delay={i * 60}
          />
        ))}
      </div>

      {/* Glow overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080C14] to-transparent" />
      </div>
    </motion.div>
  );
}

// ─── Friendly view card ────────────────────────────────────────────────────────
function FriendlyView({ card }: { card: (typeof FRIENDLY_CARDS)[0] }) {
  return (
    <motion.div
      key={card.id}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-surface border border-border rounded-2xl p-6 min-h-[240px] flex flex-col justify-between"
    >
      <div>
        <div className="text-4xl mb-4">{card.icon}</div>
        <h3 className="text-xl font-bold text-text-primary mb-1">{card.title}</h3>
        <p className="text-sm font-medium text-text-muted mb-3">{card.subtitle}</p>
        <p className="text-body-md text-text-secondary leading-relaxed">{card.description}</p>
      </div>
      <div className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold ${card.metricColor}`}>
        <div className={`w-2 h-2 rounded-full ${card.metricColor.replace("text-", "bg-")} animate-pulse`} />
        {card.metric}
      </div>
    </motion.div>
  );
}

// ─── The toggle switch UI ──────────────────────────────────────────────────────
function ViewToggle({
  isGeek,
  onToggle,
}: {
  isGeek: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      {/* Friendly label */}
      <span className={`text-sm font-medium transition-colors ${!isGeek ? "text-text-primary" : "text-text-muted"}`}>
        <Sparkles size={14} className="inline mr-1.5 text-teal" />
        Friendly
      </span>

      {/* Toggle pill */}
      <button
        onClick={onToggle}
        aria-label={isGeek ? "Switch to friendly view" : "Switch to geek view"}
        className={`
          relative w-14 h-7 rounded-full border transition-all duration-300 cursor-pointer
          focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/50
          ${isGeek
            ? "bg-indigo/20 border-indigo/40"
            : "bg-teal/15 border-teal/35"
          }
        `}
      >
        <motion.div
          animate={{ x: isGeek ? 28 : 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`
            absolute top-1 w-5 h-5 rounded-full shadow-md
            flex items-center justify-center
            ${isGeek ? "bg-indigo" : "bg-teal"}
          `}
        >
          {isGeek
            ? <Code2 size={10} className="text-white" />
            : <Sparkles size={10} className="text-canvas" />
          }
        </motion.div>
      </button>

      {/* Geek label */}
      <span className={`text-sm font-medium transition-colors ${isGeek ? "text-text-primary" : "text-text-muted"}`}>
        <Code2 size={14} className="inline mr-1.5 text-indigo" />
        Geek
      </span>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function TechToggleSection() {
  const [isGeek, setIsGeek] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [sectionRefCb, inView] = useInView(0.15);
  const isMobile = useIsMobile();

  const currentCard = FRIENDLY_CARDS[activeCard];

  return (
    <section
      id="process"
      ref={sectionRefCb}
      className="relative py-24 lg:py-32 bg-[#0D1220]"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300E5C8' fill-opacity='1'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Top separator */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-lime/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-indigo/30 bg-indigo/5"
            >
              <Code2 size={12} className="text-indigo" />
              <span className="font-mono text-label text-indigo uppercase tracking-wider">
                Under the Hood
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-display-lg font-extrabold text-text-primary mb-4"
            >
              Curious how it{" "}
              <span className="gradient-text-teal">actually works?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-body-md text-text-secondary"
            >
              Toggle between a plain-English explanation and the real code running under
              the surface. We believe in full transparency.
            </motion.p>
          </div>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-start lg:items-end gap-2"
          >
            <ViewToggle isGeek={isGeek} onToggle={() => setIsGeek((v) => !v)} />
            <span className="text-xs text-text-muted font-mono">
              {isGeek ? "// You're seeing the actual production code" : "No jargon, promise 🙂"}
            </span>
          </motion.div>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-[260px,1fr] gap-6 items-start">

          {/* Left: Tab selector */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35 }}
            className="flex lg:flex-col gap-2"
          >
            {FRIENDLY_CARDS.map((card, i) => (
              <button
                key={card.id}
                onClick={() => setActiveCard(i)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-2xl text-left
                  transition-all duration-200 border group
                  ${activeCard === i
                    ? "bg-surface border-border-bright text-text-primary shadow-card"
                    : "border-transparent text-text-muted hover:text-text-secondary hover:bg-surface/50"
                  }
                `}
              >
                <span className="text-xl">{card.icon}</span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold truncate">{card.title}</div>
                  {!isMobile && (
                    <div className={`text-xs truncate mt-0.5 ${card.badgeColor} px-1.5 py-0.5 rounded-md border w-fit`}>
                      {card.badge}
                    </div>
                  )}
                </div>
                <ChevronRight
                  size={14}
                  className={`ml-auto shrink-0 transition-transform ${activeCard === i ? "text-teal rotate-90 lg:rotate-0" : "opacity-0 group-hover:opacity-50"}`}
                />
              </button>
            ))}
          </motion.div>

          {/* Right: Content panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {isGeek ? (
                <GeekView key={`geek-${currentCard.id}`} snippetKey={currentCard.id} />
              ) : (
                <FriendlyView key={`friendly-${currentCard.id}`} card={currentCard} />
              )}
            </AnimatePresence>

            {/* Bottom hint */}
            <div className="mt-4 flex items-center gap-3 p-4 bg-surface border border-border rounded-2xl">
              <div className={`p-2 rounded-xl ${currentCard.badgeColor} border`}>
                <Code2 size={14} />
              </div>
              <div className="text-sm text-text-muted">
                {isGeek
                  ? "This is real, production-ready code, not a mockup. We write clean, typed, maintainable TypeScript."
                  : "Want to see the code powering this? Flip the toggle above."}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
