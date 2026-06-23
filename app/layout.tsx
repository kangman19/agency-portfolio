import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Astral Agency: Websites & Digital Systems for Growing Businesses",
  description: "We build fast, beautiful websites, booking systems and business tools for restaurants, shops, clinics and growing companies across East Africa. Plain English, delivered with care.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-canvas">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
