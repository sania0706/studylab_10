import { HeroSection } from "@/components/HeroSection";
import { TopicsGrid } from "@/components/TopicsGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TopicsGrid />
      <Footer />
    </div>
  );
};

export default Index;
