import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northline Studio — Websites & Digital Systems for Growing Businesses",
  description: "We build fast, beautiful websites, booking systems and business tools for restaurants, shops, clinics and growing companies across East Africa. Plain English, delivered with care.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
