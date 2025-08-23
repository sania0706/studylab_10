import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Mail, Github, ExternalLink, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-muted/50 to-background border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">EduPlatform</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Interactive educational platform for Class 10 students. Making science learning 
              engaging through simulations, animations, and visual elements.
            </p>
            <div className="flex gap-2">
              <a href="https://github.com/sania0706" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </a>
              <a href="mailto:saniaakhan76@gmail.com">
                <Button variant="ghost" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Learning Modules</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/atomic-structure" className="text-muted-foreground hover:text-primary transition-colors">Atomic Structure</a></li>
              <li><a href="/waves" className="text-muted-foreground hover:text-primary transition-colors">Waves</a></li>
              <li><a href="/optics" className="text-muted-foreground hover:text-primary transition-colors">Optics</a></li>
              <li><a href="/triangles" className="text-muted-foreground hover:text-primary transition-colors">Area of Triangles</a></li>
              <li><a href="/fluids" className="text-muted-foreground hover:text-primary transition-colors">Fluids</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/documentation" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="/tutorials" className="text-muted-foreground hover:text-primary transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Examples</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Interactive Educational Platform. Built for Class 10 students.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> for education
          </div>
        </div>
      </div>
    </footer>
  );
};