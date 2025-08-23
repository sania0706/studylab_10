import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-education.jpg";
import { ArrowRight, Play, Users } from "lucide-react";

export const HeroSection = () => {
  const handleScrollToModules = () => {
    const element = document.getElementById("topics-grid-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Interactive Educational Platform" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Interactive
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Educational
            </span>
            <span className="block">Platform</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore Class 10 topics through interactive simulations, animations, and engaging visual elements. 
            Make learning science fun and memorable!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group" onClick={handleScrollToModules}>
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Start Learning
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="interactive" size="lg" className="bg-white/10 backdrop-blur-sm" onClick={handleScrollToModules}>
              <Users className="w-5 h-5 mr-2" />
              Explore Modules
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-scale-up">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">4</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Interactive Topics</div>
            </div>
            <div className="text-center animate-scale-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Simulations</div>
            </div>
            <div className="text-center animate-scale-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Interactive</div>
            </div>
            <div className="text-center animate-scale-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-yellow-300/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-blue-300/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};