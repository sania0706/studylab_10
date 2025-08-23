import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { FluidsAnimation } from "@/components/FluidsAnimation";
import { Assessment } from "@/components/Assessment";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Beaker, ClipboardList, BarChart3, Waves, Target, Cloud, Activity } from "lucide-react";

const FluidsPage = () => {
  const [activeTab, setActiveTab] = useState("study");
  const [averageScore, setAverageScore] = useState<number | null>(null);
  const [testsCompleted, setTestsCompleted] = useState<number>(0);
  const [timeSpent, setTimeSpent] = useState<number | null>(null);

  const assessmentQuestions = [
    {
      id: 1,
      question: "What principle states that the buoyant force on an object is equal to the weight of the fluid it displaces?",
      options: ["Pascal's Principle", "Bernoulli's Principle", "Archimedes' Principle", "Newton's First Law"],
      correctAnswer: 2,
      explanation: "Archimedes' Principle describes the relationship between buoyant force and displaced fluid."
    },
    {
      id: 2,
      question: "Bernoulli's principle relates fluid velocity to:",
      options: ["Pressure", "Temperature", "Viscosity", "Density"],
      correctAnswer: 0,
      explanation: "Bernoulli's principle states that as the speed of a fluid increases, its pressure decreases."
    },
    {
      id: 3,
      question: "Which of the following is a unit of pressure?",
      options: ["Pascal (Pa)", "Newton (N)", "Joule (J)", "Watt (W)"],
      correctAnswer: 0,
      explanation: "The Pascal (Pa) is the standard SI unit of pressure."
    },
    {
      id: 4,
      question: "An object will float if its density is:",
      options: ["Greater than the fluid's density", "Equal to the fluid's density", "Less than the fluid's density", "Irrelevant to the fluid's density"],
      correctAnswer: 2,
      explanation: "An object floats when the buoyant force (from displacing fluid) is greater than or equal to its weight, which occurs when its density is less than the fluid's density."
    },
    {
      id: 5,
      question: "What is viscosity?",
      options: ["The resistance to flow", "The mass per unit volume", "The force exerted on a surface", "The ability to displace water"],
      correctAnswer: 0,
      explanation: "Viscosity is a measure of a fluid's resistance to flow."
    }
  ];

  const handleAssessmentFinish = (score: number, total: number) => {
    setTestsCompleted(prev => prev + 1);
    setAverageScore(score / total);
    setTimeSpent(40); // Placeholder for dynamic time tracking
  };

  const getGrade = (score: number) => {
    if (score >= 0.9) return "A+";
    if (score >= 0.8) return "A";
    if (score >= 0.7) return "B";
    if (score >= 0.6) return "C";
    return "D";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation title="Fluids" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <Waves className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Fluids & Pressure</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive into the world of fluid dynamics and hydrostatics with interactive simulations and key principles.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="study" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Study Material
            </TabsTrigger>
            <TabsTrigger value="simulation" className="flex items-center gap-2">
              <Beaker className="w-4 h-4" />
              Fluid Simulator
            </TabsTrigger>
            <TabsTrigger value="assessment" className="flex items-center gap-2">
              <ClipboardList className="w-4 h-4" />
              Assessment
            </TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Performance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="study" className="space-y-8">
            {/* Learning Objectives */}
            <Card className="p-6 bg-gradient-card">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Learning Objectives
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-start">✓ Understand pressure in fluids</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Learn Archimedes' Principle</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Explore Bernoulli's Principle</Badge>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-start">✓ Study Pascal's Law</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Investigate buoyancy and density</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Analyze fluid dynamics</Badge>
                </div>
              </div>
            </Card>

            {/* Core Concepts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-600">Pressure in Fluids</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-gray-500" />
                      Pascal's Law
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Waves className="w-4 h-4 text-blue-500" />
                      Hydraulic Systems
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Hydraulic presses and brakes use Pascal's law to multiply force.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Buoyancy & Archimedes' Principle</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Principle of Buoyancy</h4>
                    <p className="text-sm text-muted-foreground">
                      An object immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid displaced by the object.
                    </p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm"><strong>Key Idea:</strong> Floating occurs when buoyant force equals weight of object.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-teal-600">Fluid Dynamics & Bernoulli's Principle</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Bernoulli's Principle</h4>
                    <p className="text-sm text-muted-foreground">
                      For a flowing fluid, an increase in the speed of the fluid occurs simultaneously with a decrease in pressure.
                    </p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm"><strong>Application:</strong> This principle explains how an airplane's wings generate lift.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Viscosity & Surface Tension</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Viscosity</h4>
                    <p className="text-sm text-muted-foreground">
                      A fluid's resistance to flow. High viscosity fluids (like honey) flow slowly, while low viscosity fluids (like water) flow quickly.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Surface Tension</h4>
                    <p className="text-sm text-muted-foreground">
                      The cohesive force that causes the surface of a liquid to behave like a stretched elastic sheet.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Formulas */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Key Formulas & Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Pressure Formula</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-lg font-mono">P = F/A</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      P = Pressure, F = Force, A = Area
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Example: A 100 N force on a 1 m² area is 100 Pa.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Buoyant Force</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-lg font-mono">F_b = ρVg</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      ρ = fluid density, V = submerged volume, g = gravity
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Example: A submerged object displaces 1 kg of water, so buoyant force is 9.8 N.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="simulation">
            <Card className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Interactive Fluid Simulation</h2>
                <p className="text-muted-foreground">
                  Explore how objects behave in fluids with different densities.
                </p>
              </div>
              <FluidsAnimation />
            </Card>
          </TabsContent>

          <TabsContent value="assessment">
            <Assessment topic="Fluids" questions={assessmentQuestions} onFinish={handleAssessmentFinish} />
          </TabsContent>

          <TabsContent value="analysis">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Performance Analysis - Fluids</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Card className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {averageScore !== null ? `${(averageScore * 100).toFixed(0)}%` : "N/A"}
                  </div>
                  <div className="text-sm text-muted-foreground">Average Score</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-3xl font-bold text-success mb-2">
                    {testsCompleted}
                  </div>
                  <div className="text-sm text-muted-foreground">Tests Completed</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-3xl font-bold text-warning mb-2">
                    {timeSpent !== null ? `${timeSpent}m` : "N/A"}
                  </div>
                  <div className="text-sm text-muted-foreground">Time Spent</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    {averageScore !== null ? getGrade(averageScore) : "N/A"}
                  </div>
                  <div className="text-sm text-muted-foreground">Current Grade</div>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Strengths</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Strong grasp of Archimedes' principle
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Good at pressure calculations
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Areas for Improvement</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      Review Bernoulli's applications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      Practice problems on viscosity
                    </li>
                  </ul>
                </Card>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FluidsPage;