"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, ArrowRight, MessageSquare, Clock, Shield } from "lucide-react";
import { useInView } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

const SERVICES = [
  "New Website",
  "Redesign Existing Site",
  "E-commerce Store",
  "Mobile App",
  "Web Application",
  "SEO & Analytics",
];

const BUDGET_RANGES = [
  "Under KSh 50,000",
  "KSh 50k – 150k",
  "KSh 150k – 500k",
  "KSh 500k+",
  "Not sure yet",
];

export default function ContactSection() {
  const [sectionRefCb, inView] = useInView(0.1);
  const [formState, setFormState] = useState<FormState>("idle");
  const [selectedService, setSelectedService] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setFormState("submitting");
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
  };

  const inputClass = `
    w-full bg-surface border border-border rounded-xl px-4 py-3
    text-text-primary placeholder:text-text-muted
    focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/10
    transition-all duration-200 text-sm
  `;

  return (
    <section
      id="contact"
      ref={sectionRefCb}
      className="relative py-24 lg:py-32 bg-[#0D1220] overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute left-0 bottom-0 w-[600px] h-[400px] rounded-full bg-teal/5 blur-[140px] pointer-events-none" />
      <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-indigo/5 blur-[120px] pointer-events-none" />

      {/* Top separator */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-teal/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,1.4fr] gap-16 items-start">

          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/5"
            >
              <MessageSquare size={12} className="text-teal" />
              <span className="font-mono text-label text-teal uppercase tracking-wider">
                Start the Conversation
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-display-md font-extrabold text-text-primary mb-4"
            >
              Ready to grow?{" "}
              <span className="gradient-text-teal">Let's talk.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-body-lg text-text-secondary mb-8 leading-relaxed"
            >
              Tell us about your business and what you're trying to achieve. We'll
              come back within 24 hours with honest advice. No sales pressure.
            </motion.p>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {[
                {
                  icon: Clock,
                  title: "Reply within 24 hours",
                  desc: "We respond to every inquiry personally, usually much faster.",
                  color: "teal",
                },
                {
                  icon: Shield,
                  title: "No obligation, no pressure",
                  desc: "A free consultation. We'll only work together if it's a great fit.",
                  color: "indigo",
                },
                {
                  icon: CheckCircle,
                  title: "Fixed-price projects",
                  desc: "No surprises. You'll get a clear scope and price before we start.",
                  color: "lime",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-xl shrink-0 bg-${item.color}/10 border border-${item.color}/20`}
                  >
                    <item.icon size={14} className={`text-${item.color}`} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">{item.title}</div>
                    <div className="text-xs text-text-muted mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/254716777633?text=Hi%20Astral%2C%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="
                mt-8 inline-flex items-center gap-3 px-6 py-3
                bg-[#25D366]/10 border border-[#25D366]/30
                rounded-2xl text-[#25D366] font-semibold text-sm
                hover:bg-[#25D366]/20 transition-all duration-200
              "
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
              <ArrowRight size={14} />
            </motion.a>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="bg-surface border border-border rounded-3xl p-7 bento-border relative overflow-hidden"
          >
            {/* Card glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />

            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="w-16 h-16 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center"
                >
                  <CheckCircle size={32} className="text-teal" />
                </motion.div>
                <h3 className="text-xl font-bold text-text-primary">We got your message!</h3>
                <p className="text-text-secondary text-sm max-w-sm">
                  Expect a personal reply within 24 hours. We're excited to learn about your project.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-1">Tell us about your project</h3>
                  <p className="text-xs text-text-muted">All fields are optional. Share what you're comfortable with.</p>
                </div>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-1.5">Your Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Mwangi"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-muted mb-1.5">Email or WhatsApp</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@yourbiz.co.ke"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Service selector */}
                <div>
                  <label className="block text-xs font-medium text-text-muted mb-2">What do you need?</label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedService(s === selectedService ? "" : s)}
                        className={`
                          px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200
                          ${selectedService === s
                            ? "bg-teal/15 border-teal/40 text-teal"
                            : "border-border text-text-muted hover:border-border-bright hover:text-text-secondary"
                          }
                        `}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget selector */}
                <div>
                  <label className="block text-xs font-medium text-text-muted mb-2">Rough budget range</label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGET_RANGES.map((b) => (
                      <button
                        key={b}
                        onClick={() => setSelectedBudget(b === selectedBudget ? "" : b)}
                        className={`
                          px-3 py-1.5 rounded-xl text-xs font-medium border transition-all duration-200
                          ${selectedBudget === b
                            ? "bg-indigo/15 border-indigo/40 text-indigo"
                            : "border-border text-text-muted hover:border-border-bright hover:text-text-secondary"
                          }
                        `}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-text-muted mb-1.5">Tell us more (optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="What's your business, and what problem are you trying to solve?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={formState === "submitting"}
                  className="
                    group w-full flex items-center justify-center gap-2.5
                    px-6 py-4 bg-teal text-canvas font-bold rounded-2xl
                    transition-all duration-300 hover:shadow-teal-md hover:scale-[1.01]
                    disabled:opacity-70 disabled:cursor-not-allowed
                    overflow-hidden relative
                  "
                >
                  {formState === "submitting" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-canvas/30 border-t-canvas rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send My Project Details
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                  {/* Shimmer */}
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12" />
                </button>

                <p className="text-center text-xs text-text-muted">
                   Your details are private and never shared with third parties.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
