import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Palette, Code, ArrowRight, BookOpen } from "lucide-react";

const TutorialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation title="Technical Tutorials" showHome={true} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Technology Stack</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A guide to the core technologies used to build this interactive educational platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* React & Vite */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">React & Vite</h3>
                <p className="text-sm text-muted-foreground">Modern web application framework.</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              This project is built using React for the user interface and Vite as a fast development server and build tool. Together, they provide an efficient environment for creating Single-Page Applications.
            </p>
            <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="w-full justify-start text-primary">
                <Globe className="w-4 h-4 mr-2" />
                Learn React
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="https://vitejs.dev/guide/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="w-full justify-start text-primary mt-2">
                <Globe className="w-4 h-4 mr-2" />
                Learn Vite
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </Card>

          {/* React Three Fiber */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">React Three Fiber (R3F)</h3>
                <p className="text-sm text-muted-foreground">Declarative 3D for React.</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              R3F is a renderer for Three.js that allows you to build 3D scenes using reusable React components. It powers the interactive animations in the Atomic Structure and Fluids modules.
            </p>
            <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="w-full justify-start text-primary">
                <Globe className="w-4 h-4 mr-2" />
                Learn R3F
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </Card>
          
          {/* Shadcn/ui & Tailwind CSS */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">shadcn/ui & Tailwind</h3>
                <p className="text-sm text-muted-foreground">Styling and UI components.</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Tailwind CSS is a utility-first CSS framework for building custom designs rapidly. `shadcn/ui` provides a collection of beautifully designed, reusable components built with Tailwind that we used to create the consistent look and feel of the platform.
            </p>
            <a href="https://ui.shadcn.com/docs" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="w-full justify-start text-primary">
                <Globe className="w-4 h-4 mr-2" />
                Learn shadcn/ui
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="w-full justify-start text-primary mt-2">
                <Globe className="w-4 h-4 mr-2" />
                Learn Tailwind CSS
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </Card>

          {/* Project Structure */}
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Project Structure</h3>
                <p className="text-sm text-muted-foreground">Understanding the codebase.</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              The project is organized with a clear component-based structure. Shared UI components are in the `components/ui` folder, main pages are in `pages`, and animation-specific components are in `components`. This modular approach makes it easy to add new features and maintain existing code.
            </p>
            <a href="https://github.com/sania0706" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="w-full justify-start text-primary">
                <Globe className="w-4 h-4 mr-2" />
                View Source Code
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;