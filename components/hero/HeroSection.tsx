"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/lib/utils";

const PATH_D = "M -50,200 C 150,120 300,320 500,180 S 750,80 900,240 S 1150,400 1400,200 S 1700,60 1920,280";
const PATH_LENGTH = 2200;

function PathParticle({ progress, pathRef }: { progress: number; pathRef: React.RefObject<SVGPathElement | null> }) {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const totalLength = path.getTotalLength();
    const pt = path.getPointAtLength(progress * totalLength);
    setPoint({ x: pt.x, y: pt.y });
  }, [progress, pathRef]);

  return (
    <>
      <circle cx={point.x} cy={point.y} r={20} fill="none" stroke="rgba(201,169,110,0.1)" strokeWidth={1} />
      <circle cx={point.x} cy={point.y} r={11} fill="none" stroke="rgba(201,169,110,0.25)" strokeWidth={1.5} />
      <circle cx={point.x} cy={point.y} r={4} fill="#C9A96E" filter="url(#gold-glow)" />
    </>
  );
}

function CursorOrb() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 15, mass: 0.8 });
  const springY = useSpring(y, { stiffness: 50, damping: 15, mass: 0.8 });
  const trailX = useSpring(x, { stiffness: 20, damping: 20, mass: 1.2 });
  const trailY = useSpring(y, { stiffness: 20, damping: 20, mass: 1.2 });

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div className="pointer-events-none fixed z-10 -translate-x-1/2 -translate-y-1/2" style={{ left: trailX, top: trailY }}>
        <div className="w-36 h-36 rounded-full bg-gold/4 blur-3xl" />
      </motion.div>
      <motion.div className="pointer-events-none fixed z-10 -translate-x-1/2 -translate-y-1/2" style={{ left: springX, top: springY }}>
        <div className="w-16 h-16 rounded-full bg-gold/8 blur-xl border border-gold/15" />
      </motion.div>
    </>
  );
}

function StatBadge({ label, value, delay, className }: { label: string; value: string; delay: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 120, damping: 20 }}
      className={`absolute hidden lg:flex flex-col gap-0.5 bg-surface/80 backdrop-blur-lg border border-border-bright rounded-2xl px-4 py-3 shadow-card ${className}`}
    >
      <span className="font-mono text-label text-text-muted uppercase tracking-widest">{label}</span>
      <span className="text-xl font-bold text-gold tabular-nums">{value}</span>
    </motion.div>
  );
}

export default function HeroSection() {
  const isMobile = useIsMobile();
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [pathProgress, setPathProgress] = useState(0.15);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const { top, height } = sectionRef.current.getBoundingClientRect();
    setPathProgress(Math.max(0.1, Math.min(0.9, (-top / height) * 0.8 + 0.15)));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isMobile) return;
    setPathProgress(0.1 + (e.clientX / window.innerWidth) * 0.8);
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-canvas"
    >
      {!isMobile && <CursorOrb />}

      {/* Grid background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `linear-gradient(rgba(42,42,53,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(42,42,53,0.4) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gold/4 blur-[130px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-sage/4 blur-[100px]" />
      </div>

      {/* SVG Line Follower */}
      <svg ref={svgRef} viewBox="0 0 1920 560" preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="gold-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="path-glow" x="-5%" y="-50%" width="110%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(201,169,110,0)" />
            <stop offset="30%" stopColor="rgba(201,169,110,0.5)" />
            <stop offset="70%" stopColor="rgba(212,149,106,0.4)" />
            <stop offset="100%" stopColor="rgba(212,149,106,0)" />
          </linearGradient>
        </defs>

        <path d={PATH_D} fill="none" stroke="rgba(42,42,53,0.7)" strokeWidth={1} strokeDasharray="6 14" />

        <motion.path
          d={PATH_D} fill="none" stroke="url(#path-gradient)" strokeWidth={2.5}
          filter="url(#path-glow)" strokeDasharray={PATH_LENGTH}
          animate={{ strokeDashoffset: PATH_LENGTH * (1 - pathProgress) }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        />

        {mounted && <PathParticle progress={pathProgress} pathRef={pathRef} />}
        <path ref={pathRef} d={PATH_D} fill="none" stroke="none" style={{ visibility: "hidden" }} />
      </svg>

      {/* Floating stat badges */}
      <StatBadge label="Avg. load time" value="0.4s" delay={1.2} className="top-1/4 left-[8%]" />
      <StatBadge label="Conversion lift" value="+140%" delay={1.4} className="top-[60%] right-[7%]" />
      <StatBadge label="Uptime SLA" value="99.9%" delay={1.6} className="top-[30%] right-[10%]" />

      {/* Hero content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 pt-24 text-center flex flex-col items-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, type: "spring", stiffness: 60, damping: 20 }}
          className="text-display-xl font-extrabold text-text-primary leading-[1.0] tracking-tight mb-6"
        >
          Your business deserves a{" "}
          <span className="gradient-text-gold">website that</span>
          <br />
          <span className="relative">
            does the work.
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 500 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
              <motion.path
                d="M 0,8 Q 125,2 250,8 Q 375,14 500,6"
                stroke="url(#path-gradient)" strokeWidth="3" strokeLinecap="round" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-body-lg text-text-secondary max-w-2xl mb-6 leading-relaxed"
        >
          We build beautiful websites, booking systems and business tools for restaurants, shops,
          clinics and growing companies, built for growth, delivered with absolute clarity.
        </motion.p>

        {/* Tagline badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-5 flex flex-wrap justify-center gap-3 text-xs text-text-muted"
        >
          {["Free first chat", "No jargon", "No pressure"].map((t) => (
            <span key={t} className="px-3 py-1 border border-border rounded-full">{t}</span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted"
      >
        <span className="font-mono text-label uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-canvas to-transparent pointer-events-none" />
    </section>
  );
}
