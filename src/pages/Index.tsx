import Header from "@/components/Header";
import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import DiagnosticSteps from "@/components/DiagnosticSteps";
import FeatureSection from "@/components/FeatureSection";
import ScenarioCards from "@/components/ScenarioCards";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <AnimatedBackground />
      <Header />
      <div className="pt-16 md:pt-20">
        <HeroSection />
        <DiagnosticSteps />
        <FeatureSection />
        <ScenarioCards />
        <AboutSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
