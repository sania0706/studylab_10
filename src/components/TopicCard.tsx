import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface TopicCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay?: string;
  route: string;
}

export const TopicCard = ({ title, description, icon, color, delay = "0s", route }: TopicCardProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(route);
    }, 500); // Simulate a loading delay
  };

  return (
    <Card 
      className="group relative overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 cursor-pointer animate-slide-up"
      style={{ animationDelay: delay }}
      onClick={handleClick}
    >
      {/* Background Gradient Accent */}
      <div className={`absolute inset-0 ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      <div className="relative p-8">
        {/* Icon */}
        <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {isLoading ? <LoadingSpinner className="w-8 h-8 text-white" /> : <div className="text-white text-2xl">{icon}</div>}
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Action Button */}
        <Button 
          variant="interactive" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Explore Topic"}
          {!isLoading && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
        </Button>
      </div>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-300"></div>
    </Card>
  );
};