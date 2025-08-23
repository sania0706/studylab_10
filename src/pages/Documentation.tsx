import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle2, Code, Layout, Lightbulb, Package, Puzzle } from "lucide-react";

const DocumentationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation title="Documentation" showHome={true} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Documentation</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A brief overview of the project's design, technical implementation, and how it meets the assignment requirements.
          </p>
        </div>

        <div className="space-y-12">
          {/* Design Philosophy */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-4">
              <Lightbulb className="w-6 h-6" /> Design Philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The platform is designed around the core principle of making complex scientific concepts accessible and engaging for Class 10 students. The user interface is clean and intuitive, minimizing cognitive load so students can focus on the learning material. Interactive elements are a central part of the design, providing a hands-on approach to abstract topics like atomic structure and fluid dynamics. We chose a vibrant but professional color palette to create an inviting and modern feel.
            </p>
          </Card>

          {/* Technical Choices */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-4">
              <Code className="w-6 h-6" /> Technical Stack
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">React & Vite</h4>
                  <p className="text-sm">
                    A modern and fast toolchain was chosen to build a dynamic single-page application. React's component-based architecture ensures the codebase is modular, reusable, and easy to maintain.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">React Three Fiber (R3F)</h4>
                  <p className="text-sm">
                    This library was used to create the 3D simulations (e.g., Atom Animation, Fluids Simulation). R3F allows us to write Three.js code in a declarative, component-based way, which is a natural fit for React. It's highly performant and provides powerful tools for building complex 3D scenes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">shadcn/ui & Tailwind CSS</h4>
                  <p className="text-sm">
                    For styling and a consistent user interface, Tailwind CSS and the `shadcn/ui` component library were used. This approach allows for rapid development and easy customization of UI elements.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* How the Assignment is Met */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-4">
              <Puzzle className="w-6 h-6" /> Meeting the Requirements
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">Interactive Simulations</h4>
                  <p className="text-sm">
                    Each core topic includes a dynamic simulation with user controls, allowing students to experiment with different parameters and visualize abstract concepts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">Content Appropriateness</h4>
                  <p className="text-sm">
                    The topics of Atomic Structure, Waves, Optics, Triangles, and Fluids are directly from the Class 10 curriculum. The explanations and interactive elements are designed to be appropriate for this age group.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">User Interface</h4>
                  <p className="text-sm">
                    The UI is designed to be clean and easy to navigate. A consistent design system is maintained across all pages to provide an intuitive user experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">Educational Value</h4>
                  <p className="text-sm">
                    The platform focuses on visual learning and hands-on interaction, providing a more effective and memorable learning experience than traditional static content.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Submission Info */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2 mb-4">
              <Package className="w-6 h-6" /> Submission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This application can be deployed to a web server for public access. The source code is maintained in a Git repository, ensuring clean version control and collaborative potential.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;