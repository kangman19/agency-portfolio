import { SITE } from "@/lib/content";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const LINKS = {
  Services: ["Web Design", "Booking Systems", "Online Stores", "Business Dashboards", "Custom Tools"],
  Company: ["Our Work", "How It Works", "Meet the Founder", "Blog", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-[#07070800] border-t border-border" style={{ background: "#070708" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-14 grid grid-cols-2 lg:grid-cols-[2fr,1fr,1fr,1fr] gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
                  <circle cx="8" cy="8" r="2" fill="#C9A96E"/>
                </svg>
              </div>
              <span className="font-bold text-lg text-text-primary">{SITE.shortName}<span className="text-gold">.</span></span>
            </a>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Websites and digital systems for businesses that are going places, across East Africa and beyond.
            </p>
            <div className="flex gap-3 mt-6">
              {[{ Icon: Github, href: "#" }, { Icon: Twitter, href: "#" }, { Icon: Linkedin, href: "#" }, { Icon: Mail, href: `mailto:${SITE.email}` }].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/30 transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-text-muted">
              <div className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
              All systems operational
            </div>
          </div>

          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs font-mono font-semibold text-text-muted uppercase tracking-widest mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-text-muted hover:text-text-secondary transition-colors duration-150">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted font-mono">© {new Date().getFullYear()} {SITE.name}, {SITE.location} 🇰🇪</p>
          <p className="text-xs text-text-muted">
            Built with <span className="text-gold">Next.js</span>, <span className="text-sage">TypeScript</span> & <span className="text-amber">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
