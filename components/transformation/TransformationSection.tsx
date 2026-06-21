"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Stethoscope, ShoppingBag, Briefcase } from "lucide-react";
import { TRANSFORMATIONS } from "@/lib/content";
import { useInView } from "@/lib/utils";

const TAB_ICONS: Record<string, React.ElementType> = {
  restaurant: Utensils,
  clinic: Stethoscope,
  shop: ShoppingBag,
  services: Briefcase,
};

export default function TransformationSection() {
  const [activeId, setActiveId] = useState(TRANSFORMATIONS[0].id);
  const [sectionRefCb, inView] = useInView(0.1);
  const biz = TRANSFORMATIONS.find((b) => b.id === activeId)!;

  return (
    <section id="transform" ref={sectionRefCb} className="relative py-24 lg:py-32 bg-canvas">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-sage/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-sage/30 bg-sage/5">
            <span className="font-mono text-label text-sage uppercase tracking-wider">Sound familiar?</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="text-display-lg font-extrabold text-text-primary mb-4">
            Pick a business like yours.{" "}<span className="gradient-text-gold">See what changes.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-body-md text-text-secondary max-w-2xl">
            Real patterns from real projects — described the way owners describe them, not the way developers do.
          </motion.p>
        </div>

        {/* Business type tabs */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-10">
          {TRANSFORMATIONS.map((b) => {
            const Icon = TAB_ICONS[b.id];
            return (
              <button key={b.id} onClick={() => setActiveId(b.id)}
                className={`flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-bold transition-all duration-300 border ${
                  b.id === activeId ? "bg-gold text-canvas border-gold shadow-gold-sm" : "bg-surface border-border text-text-muted hover:border-border-bright hover:text-text-secondary"
                }`}>
                {Icon && <Icon size={16} className="shrink-0" />}
                {b.label}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={biz.id}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 lg:grid-cols-2">
            {/* Before/After text */}
            <div className="rounded-3xl border border-border bg-surface p-8 bento-border">
              <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-3">Life before</p>
              <p className="text-lg leading-relaxed text-text-secondary">{biz.before}</p>
              <div className="my-6 h-px bg-border" />
              <p className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Life after</p>
              <p className="text-lg leading-relaxed text-text-primary">{biz.after}</p>
            </div>

            {/* Metrics */}
            <div className="grid content-start gap-4">
              {biz.metrics.map((m, i) => (
                <motion.div key={m.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-surface border border-border p-5 bento-border">
                  <div>
                    <p className="font-bold text-text-primary">{m.label}</p>
                    <p className="text-sm text-sage">{m.good}</p>
                  </div>
                  <p className="whitespace-nowrap text-right">
                    <span className="text-text-muted line-through text-sm">{m.before}</span>
                    <span className="mx-2 text-gold">→</span>
                    <span className="text-xl font-extrabold text-gold">{m.after}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
