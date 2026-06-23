"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks: { label: string; href: string; prefetch?: boolean }[] = [
  // { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "/about", prefetch: true },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Hash-only links need to be prefixed with "/" when not on the homepage
  // so the browser navigates to the homepage first, then scrolls to the section.
  const resolveHref = (href: string) =>
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

  const contactHref = resolveHref("#contact");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-canvas/85 backdrop-blur-xl border-b border-border shadow-[0_1px_0_rgba(30,30,36,0.6)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-gold/10 border border-gold/30 group-hover:border-gold/60 transition-colors duration-300" />
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="relative z-10">
                  <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
                  <circle cx="8" cy="8" r="2" fill="#C9A96E"/>
                </svg>
              </div>
              <span className="font-bold text-text-primary tracking-tight">
                Astral<span className="text-gold">.</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={resolveHref(link.href)}
                  prefetch={link.prefetch}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href={contactHref}
                className="relative px-5 py-2 text-sm font-semibold text-canvas bg-gold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-gold-sm hover:scale-[1.02]"
              >
                Start a conversation
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-canvas/97 backdrop-blur-xl pt-20 px-6 flex flex-col gap-2 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                className="py-3 border-b border-border"
              >
                <Link
                  href={resolveHref(link.href)}
                  prefetch={link.prefetch}
                  onClick={() => setMenuOpen(false)}
                  className="block text-2xl font-semibold text-text-primary hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href={contactHref}
                onClick={() => setMenuOpen(false)}
                className="mt-6 block px-6 py-4 text-center text-lg font-semibold text-canvas bg-gold rounded-2xl"
              >
                Start a conversation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
