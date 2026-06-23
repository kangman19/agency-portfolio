"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/content";
import { useInView } from "@/lib/utils";

export default function ProjectStoriesSection() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const [sectionRefCb, inView] = useInView(0.1);
  const project = PROJECTS.find((p) => p.id === activeId)!;

  return (
    <section id="projects" ref={sectionRefCb} className="relative py-24 lg:py-32 bg-surface">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-sage/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-sage/30 bg-sage/5">
            <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
            <span className="font-mono text-label text-sage uppercase tracking-wider">Real stories, honest labels</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="text-display-lg font-extrabold text-text-primary mb-4">
            What actually changed for the{" "}<span className="gradient-text-gold">businesses we work with</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-body-md text-text-secondary max-w-2xl">
            One flagship system has been live for 18 months. Concepts are clearly marked, because trust starts with honest labels.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.5fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}
            className="grid content-start gap-3">
            {PROJECTS.map((p) => {
              const active = p.id === activeId;
              return (
                <button key={p.id} onClick={() => setActiveId(p.id)}
                  className={`rounded-2xl p-5 text-left transition-all duration-300 border ${
                    active ? "bg-gold text-canvas border-gold shadow-gold-sm" : "bg-surface-2 border-border hover:border-border-bright hover:-translate-y-0.5"
                  }`}>
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-bold text-lg">{p.name}</p>
                    <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${
                      p.live
                        ? active ? "bg-canvas/20 text-canvas" : "bg-sage/15 text-sage border border-sage/30"
                        : active ? "bg-canvas/20 text-canvas" : "bg-amber/15 text-amber border border-amber/30"
                    }`}>
                      {p.live ? "● Live" : "Concept"}
                    </span>
                  </div>
                  <p className={`mt-1 text-sm ${active ? "text-canvas/80" : "text-text-muted"}`}>{p.kind}</p>
                </button>
              );
            })}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}>
            <AnimatePresence mode="wait">
              <motion.article key={project.id}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-surface-2 border border-border p-8 sm:p-10 bento-border">
                <div className="grid gap-7">
                  {([["The problem", project.problem], ["What we did", project.solution], ["What changed", project.outcome]] as [string, string][]).map(([label, text], i) => (
                    <div key={label} className="grid gap-2 sm:grid-cols-[150px_1fr] sm:gap-6">
                      <p className="flex items-start gap-2 font-bold text-gold">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-xs font-extrabold text-gold">{i + 1}</span>
                        {label}
                      </p>
                      <p className="leading-relaxed text-text-secondary">{text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
                  {project.highlights.map((h) => (
                    <span key={h} className="rounded-full bg-gold/10 border border-gold/25 px-4 py-2 text-sm font-semibold text-gold">✓ {h}</span>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
