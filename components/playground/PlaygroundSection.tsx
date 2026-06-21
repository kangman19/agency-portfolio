"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BUILDS, type BuildType } from "@/lib/content";
import { useInView } from "@/lib/utils";

function Mock({ kind }: { kind: BuildType["mock"] }) {
  const bar = "rounded-full bg-border";
  return (
    <div className="animate-floaty rounded-3xl border border-border bg-surface p-4 shadow-card motion-reduce:animate-none">
      <div className="flex items-center gap-1.5 border-b border-border pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 h-5 flex-1 rounded-full bg-surface-2" />
      </div>
      {kind === "site" && (
        <div className="grid gap-3 pt-4">
          <div className="h-24 rounded-xl2 bg-gradient-to-br from-gold/20 via-amber/10 to-sage/10" />
          <div className={`${bar} h-3 w-3/4`} /><div className={`${bar} h-3 w-1/2`} />
          <div className="grid grid-cols-3 gap-2 pt-1">{[0,1,2].map((i) => <div key={i} className="h-14 rounded-xl2 bg-surface-2" />)}</div>
        </div>
      )}
      {kind === "booking" && (
        <div className="grid gap-3 pt-4">
          <div className={`${bar} h-3 w-1/2`} />
          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({ length: 21 }).map((_, i) => (
              <div key={i} className={`h-7 rounded-md ${[3,9,12,17].includes(i) ? "bg-gold" : "bg-surface-2"}`} />
            ))}
          </div>
          <div className="rounded-xl2 bg-gold/10 border border-gold/20 p-3 text-center text-xs font-bold text-gold">Friday 7:30pm — table for 4 ✓</div>
        </div>
      )}
      {kind === "store" && (
        <div className="grid grid-cols-2 gap-3 pt-4">
          {[["bg-gold/20","KSh 1,200"],["bg-sage/20","KSh 850"],["bg-amber/20","KSh 2,400"],["bg-border","Sold out"]].map(([c, price], i) => (
            <div key={i} className="rounded-xl2 bg-surface-2 p-2">
              <div className={`h-12 rounded-lg ${c}`} />
              <p className="mt-1.5 text-[10px] font-bold text-text-muted">{price}</p>
            </div>
          ))}
        </div>
      )}
      {kind === "dashboard" && (
        <div className="grid gap-3 pt-4">
          <div className="grid grid-cols-3 gap-2">
            {[["Today","KSh 84k"],["Orders","37"],["New","+12"]].map(([l, v]) => (
              <div key={l} className="rounded-xl2 bg-surface-2 p-2 text-center">
                <p className="text-[9px] font-bold uppercase text-text-muted">{l}</p>
                <p className="text-sm font-extrabold text-gold">{v}</p>
              </div>
            ))}
          </div>
          <div className="flex h-20 items-end gap-1.5 rounded-xl2 bg-surface-2 p-3">
            {[35,55,40,70,60,85,95].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md bg-gold" style={{ height: `${h}%`, opacity: 0.3 + i * 0.1 }} />
            ))}
          </div>
        </div>
      )}
      {kind === "app" && (
        <div className="grid gap-2.5 pt-4">
          {[["New enquiry from Sarah","bg-gold/15"],["Quote #214 approved ✓","bg-sage/15"],["Invoice paid — KSh 45,000","bg-amber/15"]].map(([t,c]) => (
            <div key={t} className={`rounded-xl2 ${c} border border-gold/10 px-3 py-2.5 text-xs font-bold text-text-primary`}>{t}</div>
          ))}
          <div className={`${bar} h-3 w-2/3`} />
        </div>
      )}
    </div>
  );
}

export default function PlaygroundSection() {
  const [activeId, setActiveId] = useState(BUILDS[0].id);
  const [sectionRefCb, inView] = useInView(0.1);
  const build = BUILDS.find((b) => b.id === activeId)!;

  return (
    <section id="build" ref={sectionRefCb} className="relative py-24 lg:py-32 bg-surface">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5">
            <span className="font-mono text-label text-gold uppercase tracking-wider">The playground</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="text-display-lg font-extrabold text-text-primary mb-4">
            What could we build{" "}<span className="gradient-text-gold">for you?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-body-md text-text-secondary max-w-xl mx-auto">
            Click through the kinds of things we make. No tech talk — just what each one does for your business.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12">
          {BUILDS.map((b) => (
            <button key={b.id} onClick={() => setActiveId(b.id)}
              className={`rounded-2xl px-5 py-2.5 text-sm font-bold transition-all duration-300 border ${
                b.id === activeId ? "bg-gold text-canvas border-gold shadow-gold-sm" : "bg-surface-2 border-border text-text-muted hover:border-border-bright hover:text-text-secondary"
              }`}>
              {b.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={build.id}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h3 className="text-display-md font-extrabold text-text-primary">{build.headline}</h3>
              <p className="mt-3 text-lg text-text-secondary">{build.forYou}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {build.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 rounded-2xl bg-surface-2 border border-border px-4 py-3 text-sm font-semibold text-text-secondary hover:border-gold/30 hover:text-text-primary transition-all duration-200">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-xs text-gold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 mx-auto w-full max-w-md lg:order-2">
              <Mock kind={build.mock} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
