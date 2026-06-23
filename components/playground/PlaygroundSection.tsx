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
          <div className="rounded-xl2 bg-gold/10 border border-gold/20 p-3 text-center text-xs font-bold text-gold">Friday 7:30pm, table for 4 ✓</div>
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
          {[["New enquiry from Sarah","bg-gold/15"],["Quote #214 approved ✓","bg-sage/15"],["Invoice paid: KSh 45,000","bg-amber/15"]].map(([t,c]) => (
            <div key={t} className={`rounded-xl2 ${c} border border-gold/10 px-3 py-2.5 text-xs font-bold text-text-primary`}>{t}</div>
          ))}
          <div className={`${bar} h-3 w-2/3`} />
        </div>
      )}
    </div>
  );
}

function MockupBefore() {
  return (
    <div
      className="h-full w-full overflow-hidden rounded-xl border-2 border-gray-400 select-none pointer-events-none"
      style={{ background: "#f5f0e8", fontFamily: "Times New Roman, serif", color: "#333" }}
    >
      {/* Old-school blue nav bar */}
      <div className="flex items-center justify-between border-b-2 border-[#000088] bg-[#003399] px-3 py-2">
        <span className="text-sm font-bold text-white">MY BUSINESS WEBSITE</span>
        <div className="flex gap-2 text-[9px] text-blue-200 underline">
          <span>Home</span><span>|</span><span>About</span><span>|</span><span>Contact</span>
        </div>
      </div>
      {/* Yellow ticker */}
      <div className="overflow-hidden bg-yellow-200 py-0.5 px-2 text-[9px] font-bold text-red-700">
        ★ WELCOME TO OUR WEBSITE ★ CALL FOR BEST PRICES ★ WE ARE OPEN ★
      </div>
      {/* Body */}
      <div className="space-y-2 p-3">
        <div className="flex h-14 w-full items-center justify-center border-2 border-gray-400 bg-gray-300">
          <span className="text-[9px] text-gray-500">[IMAGE missing]</span>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 space-y-1.5">
            <div className="bg-[#003399] px-2 py-1 text-[9px] font-bold text-white">Welcome To Our Website!</div>
            <p className="text-[8px] leading-tight text-gray-600">
              We are a leading business in Nairobi since 1998. Call us for more information: 0722 000 000.
            </p>
            <div className="border border-gray-400 bg-gray-100 p-1.5 text-[8px]">
              <strong>Services:</strong> Product A | Product B | Product C
            </div>
          </div>
          <div className="w-20 border border-gray-400 bg-gray-100 p-1.5 text-[8px]">
            <div className="mb-1 font-bold text-[#003399] underline">Links</div>
            <div className="space-y-0.5 text-blue-600 underline">
              <div>Products</div><div>Gallery</div><div>FAQ</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[8px] text-red-600">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          Page loading... (8.4s)
        </div>
      </div>
    </div>
  );
}

function MockupAfter() {
  return (
    <div className="h-full w-full overflow-hidden rounded-xl bg-[#fafaf9] select-none pointer-events-none">
      {/* Browser address bar */}
      <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-100 px-4 py-2">
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-slate-300" />
          <div className="h-2 w-2 rounded-full bg-slate-300" />
          <div className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
        <div className="flex flex-1 items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[9px] text-slate-400">
          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
          mybusiness.co.ke
        </div>
        <div className="rounded bg-green-50 px-1.5 py-0.5 font-mono text-[9px] text-green-600 border border-green-200">0.4s</div>
      </div>
      {/* Site navbar */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-2">
        <div className="text-[9px] font-bold tracking-tight text-slate-900">mybusiness</div>
        <div className="flex items-center gap-3">
          {["Home", "About", "Our Services"].map((item) => (
            <span key={item} className="text-[8px] font-medium text-slate-500">{item}</span>
          ))}
        </div>
      </div>
      {/* Hero section */}
      <div className="border-b border-slate-100/80 bg-[#fafaf9] px-4 py-5">
        {/* Premium badge — transparent, editorial */}
        <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1">
          <div className="h-1 w-1 rounded-full bg-slate-400" />
          <span className="text-[8px] font-semibold uppercase tracking-widest text-slate-600">Trusted across 80+ businesses</span>
        </div>
        <h3 className="mb-1.5 text-xs font-extrabold leading-tight tracking-tight text-slate-900">
          Premium Products,{" "}<span className="text-slate-600">Delivered Fast.</span>
        </h3>
        <p className="mb-3.5 text-[8px] font-normal leading-relaxed text-slate-500">5,000+ items in stock. Order before 2pm, delivered tomorrow.</p>
        <div className="flex items-center gap-3">
          {/* Primary CTA — dark, sophisticated */}
          <div className="rounded-lg bg-blue-600 px-3 py-1.5 text-[8px] font-medium text-white shadow-sm">Shop Now →</div>
          {/* Secondary — bare text link */}
          <div className="text-[8px] font-medium text-slate-500">Learn more ↗</div>
        </div>
      </div>
      {/* Stats — breathable, no rigid dividers */}
      <div className="flex border-b border-slate-100/80 px-4 py-3">
        {[["5,200+", "Products"], ["4.9★", "Rating"]].map(([v, l], i) => (
          <div key={l} className={`flex-1 text-center ${i > 0 ? "border-l border-slate-100" : ""}`}>
            <div className="text-[10px] font-bold tracking-tight text-slate-900">{v}</div>
            <div className="text-[7px] font-normal text-slate-400">{l}</div>
          </div>
        ))}
      </div>
      {/* Product grid — white cards on off-white canvas */}
      <div className="grid grid-cols-3 gap-2 p-3">
        {[["Item One", "KSh 2,400"], ["Item Two", "KSh 890"], ["Item Three", "KSh 1,200"]].map(([n, p]) => (
          <div key={n} className="rounded-lg border border-slate-100 bg-white p-2 shadow-[0_1px_8px_rgb(0,0,0,0.04)]">
            <div className="mb-1.5 h-8 w-full rounded-md bg-slate-100" />
            <div className="truncate text-[7px] font-medium text-slate-700">{n}</div>
            <div className="text-[7px] font-semibold text-slate-900">{p}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PlaygroundSection() {
  const [activeId, setActiveId] = useState(BUILDS[0].id);
  const [beforeAfter, setBeforeAfter] = useState<"before" | "after">("before");
  const [sectionRefCb, inView] = useInView(0.1);

  const isMockup = activeId === "mockup";
  const build = isMockup ? null : BUILDS.find((b) => b.id === activeId)!;

  const handleTabChange = (id: string) => {
    setActiveId(id);
    if (id !== "mockup") setBeforeAfter("before");
  };

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
            Click through the kinds of things we make. No tech talk, just what each one does for your business.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12">
          {BUILDS.map((b) => (
            <button key={b.id} onClick={() => handleTabChange(b.id)}
              className={`rounded-2xl px-5 py-2.5 text-sm font-bold transition-all duration-300 border ${
                b.id === activeId ? "bg-gold text-canvas border-gold shadow-gold-sm" : "bg-surface-2 border-border text-text-muted hover:border-border-bright hover:text-text-secondary"
              }`}>
              {b.label}
            </button>
          ))}
          <button onClick={() => handleTabChange("mockup")}
            className={`rounded-2xl px-5 py-2.5 text-sm font-bold transition-all duration-300 border ${
              isMockup ? "bg-gold text-canvas border-gold shadow-gold-sm" : "bg-surface-2 border-border text-text-muted hover:border-border-bright hover:text-text-secondary"
            }`}>
            Mockup
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          {isMockup ? (
            <motion.div key="mockup"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid items-center gap-10 lg:grid-cols-2">
              {/* Left: copy */}
              <div className="order-2 lg:order-1">
                <h3 className="text-display-md font-extrabold text-text-primary">See the transformation instantly.</h3>
                <p className="mt-3 text-lg text-text-secondary">
                  We turn slow, outdated designs into fast, premium business tools. Use the toggle to see a live before and after comparison.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {["Instant loading speeds", "Fully responsive layout", "Built to convert visitors"].map((f) => (
                    <li key={f} className="flex items-center gap-3 rounded-2xl bg-surface-2 border border-border px-4 py-3 text-sm font-semibold text-text-secondary hover:border-gold/30 hover:text-text-primary transition-all duration-200">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-xs text-gold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right: Before/After preview */}
              <div className="order-1 mx-auto w-full max-w-md lg:order-2">
                {/* Toggle buttons */}
                <div className="mb-4 flex items-center gap-1 rounded-xl border border-border bg-surface p-1 w-fit">
                  {(["before", "after"] as const).map((v) => (
                    <button key={v} onClick={() => setBeforeAfter(v)}
                      className={`rounded-lg px-5 py-2 text-sm font-semibold capitalize transition-all duration-300 ${
                        beforeAfter === v
                          ? v === "before"
                            ? "border border-red-800/50 bg-red-900/40 text-red-300"
                            : "border border-gold/30 bg-gold/15 text-gold"
                          : "text-text-muted hover:text-text-secondary"
                      }`}>
                      {v === "before" ? "Before" : "After"}
                    </button>
                  ))}
                </div>
                {/* Preview frame */}
                <div className="relative h-80 overflow-hidden rounded-2xl border border-border shadow-card">
                  <AnimatePresence mode="wait">
                    {beforeAfter === "before" ? (
                      <motion.div key="before" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }} className="absolute inset-0">
                        <MockupBefore />
                      </motion.div>
                    ) : (
                      <motion.div key="after" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }} className="absolute inset-0">
                        <MockupAfter />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div key={build!.id}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid items-center gap-10 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <h3 className="text-display-md font-extrabold text-text-primary">{build!.headline}</h3>
                <p className="mt-3 text-lg text-text-secondary">{build!.forYou}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {build!.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 rounded-2xl bg-surface-2 border border-border px-4 py-3 text-sm font-semibold text-text-secondary hover:border-gold/30 hover:text-text-primary transition-all duration-200">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-xs text-gold">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 mx-auto w-full max-w-md lg:order-2">
                <Mock kind={build!.mock} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
