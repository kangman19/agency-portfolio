import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#07070800] border-t border-border" style={{ background: "#070708" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-14">
          <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
            <Image
              src="/logo.png"
              alt="Astral Agency"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-lg text-text-primary">{SITE.shortName}<span className="text-gold">.</span></span>
          </Link>
          <p className="text-sm text-text-muted leading-relaxed max-w-xs">
            Websites and digital systems for businesses that are going places, across East Africa and beyond.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-text-muted">
            <div className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
            All systems operational
          </div>
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
