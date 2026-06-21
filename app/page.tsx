import Navigation from "@/components/ui/Navigation";
import HeroSection from "@/components/hero/HeroSection";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import TransformationSection from "@/components/transformation/TransformationSection";
import ProjectStoriesSection from "@/components/project-stories/ProjectStoriesSection";
import TrustGridSection from "@/components/trust-grid/TrustGridSection";
import PlaygroundSection from "@/components/playground/PlaygroundSection";
import JourneySection from "@/components/journey/JourneySection";
import ContactSection from "@/components/cta/ContactSection";
import Footer from "@/components/ui/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navigation />
      <HeroSection />
      <CaseStudySection />
      <TransformationSection />
      <ProjectStoriesSection />
      <TrustGridSection />
      <PlaygroundSection />
      <JourneySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
