"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Grace Wanjiru",
    role: "Founder, Bloom Skincare",
    initials: "GW",
    color: "#00E5C8",
    rating: 5,
    text: "I was afraid a modern website would be too complicated for my team to manage. Nexus built us something gorgeous AND gave us a simple dashboard. Sales went up 90% in three months.",
    industry: "E-commerce",
    result: "+90% revenue in 3 months",
  },
  {
    name: "David Ochieng",
    role: "CEO, SwiftLogistics Ltd.",
    initials: "DO",
    color: "#7B6EF6",
    rating: 5,
    text: "Our old website was embarrassing to share with clients. Now I send people to our site and they assume we're a much bigger company than we are. That's the power of great design.",
    industry: "Logistics",
    result: "3× more leads per month",
  },
  {
    name: "Amina Hassan",
    role: "Practice Manager, Amina Dental Clinic",
    initials: "AH",
    color: "#B8F56A",
    rating: 5,
    text: "We went from zero online bookings to 60+ appointments booked through the website per month. The automated reminders alone save us hours every week.",
    industry: "Healthcare",
    result: "60+ online bookings/month",
  },
  {
    name: "Peter Muthoni",
    role: "Director, Muthoni & Associates (Law Firm)",
    initials: "PM",
    color: "#00E5C8",
    rating: 5,
    text: "As a law firm, trust and professionalism are everything. Nexus understood our brand immediately. The site built instant credibility with high-value clients.",
    industry: "Legal",
    result: "4× increase in consultations",
  },
  {
    name: "Sarah Kimemia",
    role: "Co-founder, FreshFarm Delivery",
    initials: "SK",
    color: "#7B6EF6",
    rating: 5,
    text: "We needed a custom ordering system. Every agency said it would take 6 months. Nexus delivered in 5 weeks, within budget, and taught our team how to manage it.",
    industry: "Food & Delivery",
    result: "Live in 5 weeks, 40% retention",
  },
];

function TestimonialCard({
  testimonial,
  index,
  isActive,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
  index: number;
  isActive: boolean;
}) {
  return (
    <motion.div
      animate={{
        opacity: isActive ? 1 : 0.4,
        scale: isActive ? 1 : 0.94,
        y: isActive ? 0 : 8,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`
        relative min-w-[320px] max-w-[400px] bg-surface border rounded-3xl p-6 flex flex-col gap-4
        transition-all duration-300 shrink-0
        ${isActive ? "border-border-bright shadow-card" : "border-border"}
      `}
    >
      {/* Quote icon */}
      <div
        className="absolute top-5 right-5 opacity-20"
        style={{ color: testimonial.color }}
      >
        <Quote size={28} />
      </div>

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} fill="#B8F56A" stroke="none" />
        ))}
      </div>

      {/* Testimonial text */}
      <p className="text-body-md text-text-secondary leading-relaxed flex-1">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
          style={{
            backgroundColor: testimonial.color + "20",
            border: `1px solid ${testimonial.color}40`,
            color: testimonial.color,
          }}
        >
          {testimonial.initials}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-text-primary truncate">{testimonial.name}</div>
          <div className="text-xs text-text-muted truncate">{testimonial.role}</div>
        </div>
      </div>

      {/* Result badge */}
      <div
        className="text-xs font-mono font-semibold px-3 py-1.5 rounded-xl border w-fit"
        style={{
          color: testimonial.color,
          backgroundColor: testimonial.color + "12",
          borderColor: testimonial.color + "30",
        }}
      >
        📈 {testimonial.result}
      </div>
    </motion.div>
  );
}

// ─── Industry filter pills ────────────────────────────────────────────────────
const INDUSTRIES = ["All", "E-commerce", "Healthcare", "Logistics", "Legal", "Food & Delivery"];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sectionRefCb, inView] = useInView(0.15);

  const filtered =
    activeIndustry === "All"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.industry === activeIndustry);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const next =
      dir === "right"
        ? Math.min(activeIndex + 1, filtered.length - 1)
        : Math.max(activeIndex - 1, 0);
    setActiveIndex(next);
    const card = scrollRef.current.children[next] as HTMLElement;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <section
      id="about"
      ref={sectionRefCb}
      className="relative py-24 lg:py-32 bg-canvas overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo/5 blur-[120px] pointer-events-none" />

      {/* Top separator */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-teal/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-lime/30 bg-lime/5"
          >
            <Star size={12} className="text-lime" fill="#B8F56A" />
            <span className="font-mono text-label text-lime uppercase tracking-wider">
              Client Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-display-lg font-extrabold text-text-primary mb-4"
          >
            Don't take our word for it.{" "}
            <span className="gradient-text-warm">Take theirs.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-body-md text-text-secondary max-w-xl mx-auto"
          >
            Real results from real businesses across East Africa, from solo founders to growing enterprises.
          </motion.p>
        </div>

        {/* Industry filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {INDUSTRIES.map((industry) => (
            <button
              key={industry}
              onClick={() => { setActiveIndustry(industry); setActiveIndex(0); }}
              className={`
                px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200
                ${activeIndustry === industry
                  ? "bg-teal/15 border-teal/40 text-teal"
                  : "border-border text-text-muted hover:border-border-bright hover:text-text-secondary"
                }
              `}
            >
              {industry}
            </button>
          ))}
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-6 px-6 lg:-mx-8 lg:px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filtered.map((t, i) => (
              <div
                key={t.name}
                className="snap-center"
                onClick={() => setActiveIndex(i)}
              >
                <TestimonialCard
                  testimonial={t}
                  index={i}
                  isActive={i === activeIndex}
                />
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => scroll("left")}
              disabled={activeIndex === 0}
              className="p-2.5 rounded-xl border border-border text-text-muted hover:text-text-primary hover:border-border-bright disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === activeIndex ? "w-6 h-2 bg-teal" : "w-2 h-2 bg-border-bright hover:bg-text-muted"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              disabled={activeIndex === filtered.length - 1}
              className="p-2.5 rounded-xl border border-border text-text-muted hover:text-text-primary hover:border-border-bright disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { num: "80+", label: "Happy clients", color: "text-teal" },
            { num: "4.9★", label: "Average rating", color: "text-lime" },
            { num: "6 wks", label: "Avg. delivery", color: "text-indigo" },
            { num: "3 yrs", label: "Zero security incidents", color: "text-teal" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-surface border border-border rounded-2xl px-5 py-4 text-center"
            >
              <div className={`text-2xl font-bold font-mono ${stat.color} mb-1`}>{stat.num}</div>
              <div className="text-xs text-text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
