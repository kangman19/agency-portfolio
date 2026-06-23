"use client";
import { motion } from "framer-motion";
import { MessageSquare, Calendar, Key, Target, TrendingUp } from "lucide-react";
import { useInView } from "@/lib/utils";
import { SITE, PROMISES, COMMS_WEEK } from "@/lib/content";

const PROMISE_ICON_MAP: Record<string, React.ElementType> = {
  MessageSquare, Calendar, Key, Target, TrendingUp,
};

export default function ProcessClosingSection() {
  const [sectionRefCb, inView] = useInView(0.1);

  return (
    <section ref={sectionRefCb} className="relative py-24 lg:py-32 bg-canvas overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Trust promises strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-20"
        >
          {PROMISES.map((p, i) => {
            const Icon = PROMISE_ICON_MAP[p.icon] ?? MessageSquare;
            const isLast = i === PROMISES.length - 1;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07 }}
                className={`bg-surface border border-border rounded-2xl p-5 bento-border hover:-translate-y-1 transition-transform duration-200 ${isLast ? "col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
              >
                <Icon size={20} className="text-gold mb-3" />
                <h3 className="text-sm font-bold text-text-primary mb-1">{p.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* A typical week */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="rounded-3xl bg-surface-3 border border-border p-8 sm:p-10 bento-border overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/4 blur-3xl pointer-events-none" />
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="font-mono text-label text-text-muted uppercase tracking-widest mb-2">
                Development Phase — Starting Week 2
              </p>
              <h3 className="text-display-md font-extrabold text-text-primary">
                A typical week, once we&apos;re building
              </h3>
              <p className="mt-4 text-text-secondary">
                No mystery, no silence, no &ldquo;we&apos;ll circle back&rdquo;. Just a steady rhythm you can set your watch by.
              </p>
              <p className="mt-6 font-bold text-gold">{SITE.founderName}, founder</p>
            </div>
            <div className="grid gap-3">
              {COMMS_WEEK.map((d) => (
                <div key={d.day} className="flex items-center gap-5 rounded-2xl bg-surface border border-border px-5 py-4">
                  <span className="w-20 shrink-0 font-mono font-bold text-gold">{d.day}</span>
                  <span className="text-sm text-text-secondary">{d.what}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
