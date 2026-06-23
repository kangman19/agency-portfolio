import HeroSection from "@/components/hero/HeroSection";
// import CaseStudySection from "@/components/case-study/CaseStudySection";
import TransformationSection from "@/components/transformation/TransformationSection";
// import ProjectStoriesSection from "@/components/project-stories/ProjectStoriesSection";
import TrustGridSection from "@/components/trust-grid/TrustGridSection";
import PlaygroundSection from "@/components/playground/PlaygroundSection";
import JourneySection from "@/components/journey/JourneySection";
import ContactSection from "@/components/cta/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas">
      <HeroSection />
      {/* <CaseStudySection /> */}
      <TransformationSection />
      {/* <ProjectStoriesSection /> */}
      <TrustGridSection />
      <PlaygroundSection />
      <JourneySection />
      <ContactSection />
    </main>
  );
}
