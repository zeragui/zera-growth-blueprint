import HeroSection from "@/components/HeroSection";
import DiagnosticSteps from "@/components/DiagnosticSteps";
import FeatureSection from "@/components/FeatureSection";
import ScenarioCards from "@/components/ScenarioCards";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <DiagnosticSteps />
      <FeatureSection />
      <ScenarioCards />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;
