import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavigationProps {
  title: string;
  showHome?: boolean;
}

export const Navigation = ({ title, showHome = true }: NavigationProps) => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <h1 className="text-lg font-semibold text-foreground">{title}</h1>
            </div>
          </div>

          {showHome && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};