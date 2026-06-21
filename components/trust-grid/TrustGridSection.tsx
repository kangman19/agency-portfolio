"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Smartphone, BarChart3, Clock, HeartHandshake, Globe, Lock, Cpu } from "lucide-react";
import { useInView, useMousePosition } from "@/lib/utils";

interface BentoCardProps {
  icon: React.ElementType; title: string; description: string;
  accentColor: "gold" | "sage" | "amber"; size?: "normal" | "wide" | "tall";
  tag?: string; children?: React.ReactNode; delay?: number; inView: boolean;
}

function BentoCard({ icon: Icon, title, description, accentColor, size = "normal", tag, children, delay = 0, inView }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const pos = useMousePosition(cardRef as React.RefObject<HTMLElement | null>);
  const [isHovered, setIsHovered] = useState(false);

  const colorMap = {
    gold:  { icon: "text-gold",  iconBg: "bg-gold/10 border-gold/20",  glow: "rgba(201,169,110,0.12)", glowBorder: "rgba(201,169,110,0.45)", tag: "text-gold bg-gold/10 border-gold/20"  },
    sage:  { icon: "text-sage",  iconBg: "bg-sage/10 border-sage/20",  glow: "rgba(123,158,135,0.12)", glowBorder: "rgba(123,158,135,0.45)", tag: "text-sage bg-sage/10 border-sage/20"  },
    amber: { icon: "text-amber", iconBg: "bg-amber/10 border-amber/20", glow: "rgba(212,149,106,0.12)", glowBorder: "rgba(212,149,106,0.45)", tag: "text-amber bg-amber/10 border-amber/20" },
  };
  const c = colorMap[accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 80, damping: 20 }}
      ref={cardRef} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-3xl border border-border overflow-hidden transition-all duration-300 group ${size === "wide" ? "lg:col-span-2" : ""} ${size === "tall" ? "lg:row-span-2" : ""}`}
      style={{ background: isHovered ? `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, ${c.glow}, transparent 70%), #111113` : "#111113" }}
    >
      <div className="absolute inset-0 rounded-3xl transition-opacity duration-300 pointer-events-none"
        style={{ opacity: isHovered ? 1 : 0, background: `radial-gradient(200px circle at ${pos.x}px ${pos.y}px, ${c.glowBorder}, transparent 60%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: "1px" }} />
      <div className="relative z-10 p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-2xl border ${c.iconBg} transition-transform duration-300 group-hover:scale-110`}>
            <Icon size={20} className={c.icon} />
          </div>
          {tag && <span className={`text-label font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${c.tag}`}>{tag}</span>}
        </div>
        <h3 className="text-lg font-bold text-text-primary mb-2 leading-tight">{title}</h3>
        <p className="text-body-md text-text-secondary leading-relaxed flex-1">{description}</p>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </motion.div>
  );
}

function SecurityBadges() {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {["TLS 1.3", "AES-256", "2FA", "GDPR"].map((label, i) => (
        <motion.div key={label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.15 }}
          className="flex items-center gap-1.5 bg-gold/5 border border-gold/20 rounded-lg px-2.5 py-1.5">
          <Lock size={10} className="text-gold" />
          <span className="font-mono text-[10px] text-gold">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}

function ScoreBar({ label, score, color }: { label: string; score: number; color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-text-muted">{label}</span>
        <span className="font-mono" style={{ color }}>{score}</span>
      </div>
      <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={{ width: `${score}%` }} transition={{ duration: 1, delay: 0.5 }}
          className="h-full rounded-full" style={{ backgroundColor: color }} />
      </div>
    </div>
  );
}

function UptimeGrid() {
  const days = Array.from({ length: 60 }, (_, i) => ({ status: Math.random() > 0.02 ? "up" : "incident", day: i }));
  return (
    <div className="flex flex-wrap gap-1 mt-2">
      {days.map((d) => (
        <div key={d.day} className={`w-2 h-2 rounded-sm ${d.status === "up" ? "bg-sage/60" : "bg-red-500/60"}`} />
      ))}
      <div className="w-full mt-2 flex items-center justify-between">
        <span className="text-[10px] text-text-muted font-mono">60 days ago</span>
        <span className="text-[10px] text-sage font-mono font-bold">99.97% uptime</span>
        <span className="text-[10px] text-text-muted font-mono">Today</span>
      </div>
    </div>
  );
}

function GrowthSparkline() {
  const points = [20, 28, 24, 35, 42, 38, 55, 62, 58, 75, 80, 95];
  const max = Math.max(...points);
  const w = 220; const h = 60;
  const svgPoints = points.map((v, i) => `${(i / (points.length - 1)) * w},${h - (v / max) * h}`).join(" ");
  return (
    <div className="mt-3 relative">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={`0,${h} ${svgPoints} ${w},${h}`} fill="url(#sparkGrad)" />
        <motion.polyline points={svgPoints} fill="none" stroke="#C9A96E" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }} />
        <circle cx={w} cy={h - (points[points.length - 1] / max) * h} r="3" fill="#C9A96E" />
      </svg>
      <div className="flex justify-between text-[9px] font-mono text-text-muted mt-1">
        <span>Jan</span>
        <span className="text-gold">+380% organic growth</span>
        <span>Dec</span>
      </div>
    </div>
  );
}

export default function TrustGridSection() {
  const [sectionRefCb, inView] = useInView(0.1);

  return (
    <section id="services" ref={sectionRefCb} className="relative py-24 lg:py-32 bg-canvas">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5">
            <Shield size={12} className="text-gold" />
            <span className="font-mono text-label text-gold uppercase tracking-wider">Built Right, From the Start</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="text-display-lg font-extrabold text-text-primary mb-4">
            Everything your business{" "}<span className="gradient-text-gold">needs to grow online.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-body-md text-text-secondary">
            We handle the hard technical stuff so you can focus on running your business. Plain English, real results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          <BentoCard icon={Shield} title="Bulletproof Security" description="Your customer data is protected by bank-grade encryption. We run automated security scans daily so you never have to worry about hackers or data leaks." accentColor="gold" size="wide" tag="Always On" delay={0.1} inView={inView}><SecurityBadges /></BentoCard>
          <BentoCard icon={Smartphone} title="Mobile-First Engine" description="Over 70% of your customers browse on their phones. Every site we build works flawlessly on all screen sizes — from a small Nokia to a wide desktop." accentColor="sage" tag="Responsive" delay={0.2} inView={inView}>
            <div className="mt-3 space-y-2">
              <ScoreBar label="Performance" score={98} color="#C9A96E" />
              <ScoreBar label="Accessibility" score={100} color="#7B9E87" />
              <ScoreBar label="Best Practices" score={96} color="#D4956A" />
            </div>
          </BentoCard>
          <BentoCard icon={Clock} title="Always Online, Never Down" description="We deploy on enterprise-grade infrastructure with redundancy built in. If something breaks at 3am, our monitoring alerts us — not you." accentColor="sage" tag="99.9% SLA" delay={0.3} inView={inView}><UptimeGrid /></BentoCard>
          <BentoCard icon={BarChart3} title="Automated Growth Tools" description="Built-in SEO, analytics dashboards, and conversion tracking — all configured and explained in plain language. Know exactly how your site is performing every day." accentColor="gold" size="wide" delay={0.4} inView={inView}><GrowthSparkline /></BentoCard>
          <BentoCard icon={HeartHandshake} title="Human Support, Always" description="You'll always reach a real person — not a chatbot. WhatsApp, email, or phone. We're your long-term tech partner, not just a one-time vendor." accentColor="amber" tag="Local Team" delay={0.5} inView={inView} />
          <BentoCard icon={Globe} title="Global Speed, Local Heart" description="CDN-powered delivery means your site loads fast for customers in Nairobi, Mombasa, Kampala, or London — under 500ms everywhere." accentColor="sage" delay={0.6} inView={inView}>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Nairobi", "Mombasa", "Kampala", "London", "Dubai"].map((city) => (
                <div key={city} className="flex items-center gap-1.5 bg-sage/5 border border-sage/15 rounded-lg px-2.5 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
                  <span className="text-[10px] font-mono text-text-secondary">{city}</span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Tech stack */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }}
            className="lg:col-span-2 bg-surface border border-border rounded-3xl p-6 bento-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-amber/10 border border-amber/20"><Cpu size={20} className="text-amber" /></div>
              <div>
                <h3 className="font-bold text-text-primary">Enterprise Tech Stack</h3>
                <p className="text-sm text-text-muted">The same tools used by Airbnb, Netflix & Shopify — now for your business.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "PostgreSQL", "Redis", "Vercel", "Stripe", "Cloudflare", "AWS S3", "SendGrid", "Sentry", "Docker"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-surface-2 border border-border rounded-xl text-xs font-mono text-text-secondary hover:border-gold/30 hover:text-gold transition-colors duration-200 cursor-default">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.75 }}
            className="bg-surface border border-border rounded-3xl p-6 bento-border">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={16} className="text-gold" />
              <span className="text-sm font-bold text-text-primary">Typical Timeline</span>
            </div>
            <div className="space-y-3">
              {[
                { week: "Week 1", task: "Discovery & Design", done: true },
                { week: "Week 2–3", task: "Development", done: true },
                { week: "Week 4", task: "Testing & Launch", done: true },
                { week: "Week 5+", task: "Growth & Support", done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${item.done ? "bg-gold" : "bg-border-bright"}`} />
                  <div className="flex-1 flex justify-between text-xs">
                    <span className="font-mono text-text-muted">{item.week}</span>
                    <span className={item.done ? "text-text-secondary" : "text-text-muted"}>{item.task}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
