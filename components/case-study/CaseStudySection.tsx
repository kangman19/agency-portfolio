"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Users, Clock } from "lucide-react";
import { useInView, useAnimatedCounter } from "@/lib/utils";

function BeforeMockup() {
  return (
    <div className="relative w-full h-full bg-gray-100 rounded-xl overflow-hidden font-sans select-none">
      <div className="bg-gray-300 px-3 py-2 flex items-center gap-2 border-b border-gray-400">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded text-xs px-3 py-1 text-gray-400 truncate border border-gray-300">
          http://www.mybusiness.co.ke/home.html
        </div>
      </div>
      <div className="bg-[#f5f0e8] h-full overflow-hidden text-gray-800 text-xs">
        <div className="bg-[#003366] text-white flex items-center justify-between px-3 py-2">
          <span className="font-bold text-sm" style={{ fontFamily: "Georgia, serif" }}>ALPHA TRADERS LTD</span>
          <div className="flex gap-3 text-[10px] text-blue-200">
            <span>Home</span><span>|</span><span>About</span><span>|</span><span>Products</span><span>|</span><span>Contact Us</span>
          </div>
        </div>
        <div className="bg-yellow-300 text-red-700 text-[10px] font-bold py-0.5 px-2 overflow-hidden whitespace-nowrap">
          ★ WELCOME TO OUR WEBSITE ★ CALL US FOR THE BEST PRICES ★ WE ARE OPEN 24 HOURS ★
        </div>
        <div className="p-3 space-y-3">
          <div className="w-full h-20 bg-gray-300 border-2 border-gray-400 flex items-center justify-center">
            <span className="text-[10px] text-gray-500 text-center">[IMAGE 800×200, missing]</span>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 space-y-2">
              <div className="bg-[#003366] text-white text-[10px] font-bold px-2 py-1">Welcome To Our Website!</div>
              <p className="text-[9px] leading-relaxed text-gray-600">We are a leading supplier of quality products in Nairobi. We have been in business since 1998. Please call us or visit our office for more information.</p>
              <div className="bg-yellow-100 border border-yellow-400 p-2 text-[9px]"><strong>Special Offer!</strong> Call now: 0722 000 000</div>
            </div>
            <div className="w-24 space-y-2">
              <div className="bg-gray-200 border border-gray-400 p-1.5 text-[9px]">
                <div className="font-bold mb-1 text-[#003366]">Quick Links</div>
                <div className="space-y-0.5 text-blue-600 underline"><div>Products</div><div>Services</div><div>Gallery</div></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[9px] text-red-600">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Page loading… (8.4s)
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-2 flex flex-col gap-1">
        <div className="bg-red-900/80 text-red-300 text-[9px] font-mono px-2 py-0.5 rounded backdrop-blur-sm">Load: 8.4s ↑ BAD</div>
        <div className="bg-red-900/80 text-red-300 text-[9px] font-mono px-2 py-0.5 rounded backdrop-blur-sm">Mobile: BROKEN</div>
        <div className="bg-red-900/80 text-red-300 text-[9px] font-mono px-2 py-0.5 rounded backdrop-blur-sm">Conv: 0.8%</div>
      </div>
    </div>
  );
}

function AfterMockup() {
  return (
    <div className="relative w-full h-full bg-[#0A0A0B] rounded-xl overflow-hidden select-none">
      <div className="bg-[#111113] px-4 py-2.5 flex items-center gap-3 border-b border-[#1E1E24]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1E1E24]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#1E1E24]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#1E1E24]" />
        </div>
        <div className="flex-1 bg-[#0A0A0B] rounded-lg text-xs px-3 py-1 text-[#4A4540] flex items-center gap-1.5 border border-[#1E1E24]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#C9A96E]/60 shrink-0" />
          <span className="text-[#8A8078]">alphatraders.co.ke</span>
        </div>
        <div className="text-[10px] font-mono text-[#C9A96E] bg-[#C9A96E]/10 px-2 py-0.5 rounded">0.4s</div>
      </div>
      <div className="h-[calc(100%-36px)] overflow-hidden">
        <div className="relative bg-gradient-to-br from-[#0A0A0B] via-[#111113] to-[#18181C] px-5 py-6">
          <div className="absolute top-2 right-4 w-24 h-24 rounded-full bg-[#C9A96E]/5 blur-2xl" />
          <div className="inline-flex items-center gap-1.5 mb-2 px-2.5 py-1 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
            <span className="text-[9px] font-mono text-[#C9A96E] uppercase tracking-wide">Taking on new projects</span>
          </div>
          <h2 className="text-sm font-bold text-white leading-tight mb-1.5">
            Quality Products,{" "}<span className="text-[#C9A96E]">Delivered Fast.</span>
          </h2>
          <p className="text-[9px] text-[#8A8078] mb-3 leading-relaxed">Over 5,000 items in stock. Order before 2pm, receive tomorrow.</p>
          <div className="flex gap-2">
            <div className="px-3 py-1.5 bg-[#C9A96E] text-[#0A0A0B] text-[9px] font-bold rounded-lg">Shop Now →</div>
            <div className="px-3 py-1.5 border border-[#1E1E24] text-[#8A8078] text-[9px] rounded-lg">View Catalog</div>
          </div>
        </div>
        <div className="flex border-t border-[#1E1E24]">
          {[{ label: "Products", val: "5,200+" }, { label: "Orders/day", val: "340" }, { label: "Rating", val: "4.9★" }].map((s) => (
            <div key={s.label} className="flex-1 py-2 px-3 text-center border-r last:border-r-0 border-[#1E1E24]">
              <div className="text-xs font-bold text-white">{s.val}</div>
              <div className="text-[8px] text-[#4A4540]">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 p-3">
          {[{ name: "Steel Pipes", price: "KSh 2,400" }, { name: "Cement Bags", price: "KSh 890" }, { name: "Roofing Sheets", price: "KSh 1,200" }].map((p) => (
            <div key={p.name} className="bg-[#111113] rounded-lg p-2 border border-[#1E1E24]">
              <div className="w-full h-10 rounded-md bg-[#1E1E24] mb-1.5" />
              <div className="text-[8px] font-semibold text-white truncate">{p.name}</div>
              <div className="text-[8px] text-[#C9A96E] font-mono">{p.price}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-2 right-2 flex flex-col gap-1">
        <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 text-[#C9A96E] text-[9px] font-mono px-2 py-0.5 rounded backdrop-blur-sm">Load: 0.4s ✓ FAST</div>
        <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 text-[#C9A96E] text-[9px] font-mono px-2 py-0.5 rounded backdrop-blur-sm">Mobile: PERFECT</div>
        <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 text-[#C9A96E] text-[9px] font-mono px-2 py-0.5 rounded backdrop-blur-sm">Conv: 3.4% ↑</div>
      </div>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value, suffix, prefix, inView, delay, color }: {
  icon: React.ElementType; label: string; value: number; suffix?: string; prefix?: string;
  inView: boolean; delay: number; color: "gold" | "sage" | "amber";
}) {
  const count = useAnimatedCounter(value, 1800, inView);
  const colorMap = {
    gold: { text: "text-gold", bg: "bg-gold/10", border: "border-gold/30" },
    sage: { text: "text-sage", bg: "bg-sage/10", border: "border-sage/30" },
    amber: { text: "text-amber", bg: "bg-amber/10", border: "border-amber/30" },
  };
  const c = colorMap[color];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 80, damping: 20 }}
      className={`flex items-center gap-3 bg-surface border ${c.border} rounded-2xl px-4 py-3`}
    >
      <div className={`p-2 rounded-xl ${c.bg}`}><Icon size={16} className={c.text} /></div>
      <div>
        <div className={`text-xl font-bold font-mono tabular-nums ${c.text}`}>{prefix}{count}{suffix}</div>
        <div className="text-label text-text-muted uppercase tracking-wide">{label}</div>
      </div>
    </motion.div>
  );
}

export default function CaseStudySection() {
  const [sliderX, setSliderX] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeView, setActiveView] = useState<"before" | "after">("before");
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionRefCb, inView] = useInView(0.2);

  const handleSliderMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setSliderX(Math.max(10, Math.min(90, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <section id="work" ref={sectionRefCb} className="relative py-24 lg:py-32 bg-canvas">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5">
            <TrendingUp size={12} className="text-gold" />
            <span className="font-mono text-label text-gold uppercase tracking-wider">Real Transformations</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.6 }}
            className="text-display-lg font-extrabold text-text-primary mb-4">
            From forgotten to{" "}<span className="gradient-text-gold">front-runner.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-body-md text-text-secondary max-w-xl mx-auto">
            See exactly what happens when we rebuild an SME's digital presence. Drag the slider to compare.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr,380px] gap-10 items-start">
          {/* Before/After slider */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3, duration: 0.6 }}>
            {/* Toggle tabs */}
            <div className="flex items-center gap-1 mb-4 p-1 bg-surface border border-border rounded-xl w-fit">
              {(["before", "after"] as const).map((v) => (
                <button key={v} onClick={() => setActiveView(v)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 capitalize ${
                    activeView === v
                      ? v === "before" ? "bg-red-900/40 text-red-300 border border-red-800/50" : "bg-gold/15 text-gold border border-gold/30"
                      : "text-text-muted hover:text-text-secondary"
                  }`}>
                  {v === "before" ? "😰 Before" : "✨ After"}
                </button>
              ))}
              <span className="ml-2 text-xs text-text-muted font-mono">· Alpha Traders Ltd.</span>
            </div>

            {/* Drag slider */}
            <div ref={containerRef}
              className="relative h-80 rounded-2xl overflow-hidden border border-border cursor-col-resize shadow-card"
              onMouseMove={(e) => isDragging && handleSliderMove(e.clientX)}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchMove={(e) => handleSliderMove(e.touches[0].clientX)}
            >
              <div className="absolute inset-0"><BeforeMockup /></div>
              <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${sliderX}%)` }}>
                <AfterMockup />
              </div>
              <div className="absolute top-0 bottom-0 w-0.5 bg-gold shadow-gold-sm z-20" style={{ left: `${sliderX}%` }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-canvas border-2 border-gold shadow-gold-md flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M5 9H13M5 9L8 6M5 9L8 12M13 9L10 6M13 9L10 12" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-3 left-3 z-30 bg-red-900/70 text-red-300 text-xs font-mono px-2.5 py-1 rounded-lg backdrop-blur-sm border border-red-800/40">Before ×</div>
              <div className="absolute top-3 right-3 z-30 bg-gold/20 text-gold text-xs font-mono px-2.5 py-1 rounded-lg backdrop-blur-sm border border-gold/30">After ✓</div>
            </div>
            <p className="text-xs text-text-muted mt-2 text-center font-mono">← Drag to compare →</p>
          </motion.div>

          {/* Metrics panel */}
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 }}>
              <div className="text-label font-mono text-text-muted uppercase tracking-widest mb-3">Business Impact, 6 months post-launch</div>
              <div className="grid grid-cols-1 gap-3">
                <MetricCard icon={TrendingUp} label="Conversion Rate" value={140} prefix="+" suffix="%" inView={inView} delay={0.5} color="gold" />
                <MetricCard icon={Zap} label="Load Time" value={4} suffix="× faster" inView={inView} delay={0.6} color="sage" />
                <MetricCard icon={Users} label="Monthly Visitors" value={280} prefix="+" suffix="%" inView={inView} delay={0.7} color="amber" />
                <MetricCard icon={Clock} label="Time to Launch" value={6} suffix=" weeks" inView={inView} delay={0.8} color="gold" />
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.blockquote initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.0 }}
              className="bg-surface border border-border rounded-2xl p-4 relative">
              <div className="absolute top-3 left-4 text-3xl text-gold/30 font-serif leading-none">"</div>
              <p className="text-sm text-text-secondary italic pt-3 leading-relaxed">
                Astral completely transformed how customers find us online. Our phone started ringing more within the first week.
              </p>
              <footer className="mt-3 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-xs font-bold text-gold">JK</div>
                <div>
                  <div className="text-xs font-semibold text-text-primary">James Kimani</div>
                  <div className="text-[10px] text-text-muted">CEO, Alpha Traders Ltd.</div>
                </div>
              </footer>
            </motion.blockquote>

            <motion.a href="#contact" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.1 }}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-surface border border-border-bright rounded-2xl text-sm font-semibold text-text-secondary hover:text-text-primary hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 group">
              Get a free audit of your current site
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
