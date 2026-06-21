"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JOURNEY } from "@/lib/content";
import { useInView } from "@/lib/utils";

export default function JourneySection() {
  const [active, setActive] = useState(0);
  const [sectionRefCb, inView] = useInView(0.1);
  const step = JOURNEY[active];

  return (
    <section id="process" ref={sectionRefCb} className="relative py-24 lg:py-32 bg-surface-2">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-amber/30 bg-amber/5">
            <span className="font-mono text-label text-amber uppercase tracking-wider">How it works</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="text-display-lg font-extrabold text-text-primary mb-4">
            From first chat to launch day —{" "}<span className="gradient-text-gold">a path, not a process</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-body-md text-text-secondary max-w-xl mx-auto">
            Five friendly stops. At every one, you know exactly what's happening and exactly what you get.
          </motion.p>
        </div>

        {/* Animated path + stops */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
          className="relative mx-auto max-w-3xl mb-10">
          <svg viewBox="0 0 600 120" className="w-full" aria-hidden="true">
            {/* Static dotted path */}
            <path d="M 30 80 C 120 20, 180 110, 300 60 S 480 20, 570 70"
              fill="none" stroke="#2A2A35" strokeWidth="5" strokeLinecap="round" strokeDasharray="1 14" />
            {/* Animated gold fill */}
            <path d="M 30 80 C 120 20, 180 110, 300 60 S 480 20, 570 70"
              fill="none" stroke="#C9A96E" strokeWidth="5" strokeLinecap="round"
              pathLength={100}
              style={{
                strokeDashoffset: 100 - (active / (JOURNEY.length - 1)) * 100,
                strokeDasharray: "1 3.6",
                transition: "stroke-dashoffset 600ms cubic-bezier(0.22,1,0.36,1)",
              }} />
          </svg>

          <div className="absolute inset-0 flex items-center justify-between px-1">
            {JOURNEY.map((s, i) => (
              <button key={s.title} onClick={() => setActive(i)} aria-pressed={i === active}
                className="group relative -translate-y-1"
                style={{ marginTop: [50, -45, 5, -50, 20][i] }}>
                <span className={`grid h-12 w-12 place-items-center rounded-full font-mono text-sm font-extrabold shadow-card transition-all duration-300 border ${
                  i === active ? "scale-110 bg-gold text-canvas border-gold shadow-gold-sm" :
                  i < active ? "bg-gold/20 text-gold border-gold/30" : "bg-surface border-border text-text-muted group-hover:border-gold/30 group-hover:text-gold"
                }`}>
                  {i < active ? "✓" : i + 1}
                </span>
                <span className={`absolute left-1/2 top-14 -translate-x-1/2 whitespace-nowrap text-xs font-bold ${i === active ? "text-gold" : "text-text-muted"}`}>
                  {s.title}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Detail card */}
        <div className="mx-auto max-w-2xl mt-20">
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-surface border border-border p-8 sm:p-10 bento-border">
              <p className="font-mono text-label text-text-muted uppercase tracking-widest">Stop {active + 1} of {JOURNEY.length}</p>
              <h3 className="mt-2 text-display-md font-extrabold text-text-primary">{step.friendly}</h3>
              <p className="mt-4 leading-relaxed text-text-secondary">{step.desc}</p>
              <div className="mt-6 rounded-2xl bg-gold/8 border border-gold/20 px-5 py-4 text-sm font-semibold text-gold">
                What you get: {step.youGet}
              </div>
              <div className="mt-6 flex justify-between">
                <button onClick={() => setActive((a) => Math.max(0, a - 1))} disabled={active === 0}
                  className="rounded-full px-5 py-2.5 text-sm font-bold text-text-muted transition-colors hover:bg-surface-2 disabled:opacity-30">
                  ← Previous
                </button>
                <button onClick={() => setActive((a) => Math.min(JOURNEY.length - 1, a + 1))} disabled={active === JOURNEY.length - 1}
                  className="rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-canvas transition-all hover:shadow-gold-sm disabled:opacity-30">
                  Next stop →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
