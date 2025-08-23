import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { TriangleAnimation } from "@/components/TriangleAnimation";
import { Assessment } from "@/components/Assessment";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Beaker, ClipboardList, BarChart3, Triangle, Calculator, Target, Zap } from "lucide-react";

const TrianglesPage = () => {
  const [activeTab, setActiveTab] = useState("study");
  const [averageScore, setAverageScore] = useState<number | null>(null);
  const [testsCompleted, setTestsCompleted] = useState<number>(0);
  const [timeSpent, setTimeSpent] = useState<number | null>(null);

  const assessmentQuestions = [
    {
      id: 1,
      question: "What is the formula for the area of a right triangle?",
      options: ["Area = base × height", "Area = (1/2) × base × height", "Area = base + height", "Area = (1/3) × base × height"],
      correctAnswer: 1,
      explanation: "The area of a right triangle is (1/2) × base × height, where base and height are the two perpendicular sides."
    },
    {
      id: 2,
      question: "Heron's formula is used to find:",
      options: ["Perimeter of any triangle", "Area when all three sides are known", "Height of triangle", "Angles of triangle"],
      correctAnswer: 1,
      explanation: "Heron's formula calculates the area of a triangle when all three side lengths are known: Area = √[s(s-a)(s-b)(s-c)]"
    },
    {
      id: 3,
      question: "In Heron's formula, 's' represents:",
      options: ["Side length", "Semi-perimeter", "Area", "Height"],
      correctAnswer: 1,
      explanation: "In Heron's formula, 's' is the semi-perimeter: s = (a + b + c)/2, where a, b, c are the side lengths."
    },
    {
      id: 4,
      question: "For an equilateral triangle with side 'a', the area is:",
      options: ["a²", "(√3/4)a²", "(1/2)a²", "√3 × a"],
      correctAnswer: 1,
      explanation: "For an equilateral triangle, Area = (√3/4) × a², which is derived from the general formula using height = (√3/2) × a"
    },
    {
      id: 5,
      question: "If a triangle has vertices at (0,0), (4,0), and (0,3), its area is:",
      options: ["12", "6", "7", "10"],
      correctAnswer: 1,
      explanation: "This is a right triangle with base = 4 and height = 3. Area = (1/2) × 4 × 3 = 6 square units."
    }
  ];

  const handleAssessmentFinish = (score: number, total: number) => {
    setTestsCompleted(prev => prev + 1);
    setAverageScore(score / total);
    // Placeholder for dynamic time tracking
    setTimeSpent(52);
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
      <Navigation title="Area of Triangles" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Triangle className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Area of Triangles</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master triangle area calculations with interactive geometry tools, visual proofs, and comprehensive formulas.
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
              Geometry Tool
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
                  <Badge variant="outline" className="w-full justify-start">✓ Master basic area formulas</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Apply Heron's formula</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Use coordinate geometry</Badge>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-start">✓ Solve real-world problems</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Understand triangle properties</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Calculate special triangles</Badge>
                </div>
              </div>
            </Card>

            {/* Core Concepts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Basic Area Formula</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-lg font-mono mb-2">Area = (1/2) × base × height</p>
                    <p className="text-sm text-muted-foreground">
                      Works for any triangle when you know the base and perpendicular height
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-blue-500" />
                      Example Calculation
                    </h4>
                    <div className="bg-background border rounded p-3">
                      <p className="text-sm">Base = 8 cm, Height = 5 cm</p>
                      <p className="text-sm">Area = (1/2) × 8 × 5 = 20 cm²</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Heron's Formula</h3>
                <div className="space-y-3">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-lg font-mono mb-1">s = (a + b + c)/2</p>
                    <p className="text-lg font-mono mb-2">Area = √[s(s-a)(s-b)(s-c)]</p>
                    <p className="text-sm text-muted-foreground">
                      Where s is semi-perimeter and a, b, c are side lengths
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Step-by-step Example</h4>
                    <div className="bg-background border rounded p-3 text-sm space-y-1">
                      <p>Sides: a=3, b=4, c=5</p>
                      <p>s = (3+4+5)/2 = 6</p>
                      <p>Area = √[6(6-3)(6-4)(6-5)]</p>
                      <p>Area = √[6×3×2×1] = √36 = 6</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Special Triangles</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Equilateral Triangle</h4>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-lg font-mono">Area = (√3/4) × a²</p>
                      <p className="text-sm text-muted-foreground">Where a is the side length</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Right Triangle</h4>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-lg font-mono">Area = (1/2) × a × b</p>
                      <p className="text-sm text-muted-foreground">Where a and b are perpendicular sides</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Isosceles Triangle</h4>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">Use basic formula or Heron's formula</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Coordinate Geometry</h3>
                <div className="space-y-3">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-lg font-mono mb-2">Area = (1/2)|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|</p>
                    <p className="text-sm text-muted-foreground">
                      For triangle with vertices (x₁,y₁), (x₂,y₂), (x₃,y₃)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Example</h4>
                    <div className="bg-background border rounded p-3 text-sm space-y-1">
                      <p>Vertices: (0,0), (4,0), (2,3)</p>
                      <p>Area = (1/2)|0(0-3) + 4(3-0) + 2(0-0)|</p>
                      <p>Area = (1/2)|0 + 12 + 0| = 6</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Problem Types */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Common Problem Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    Type 1: Given Base & Height
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Use: Area = (1/2) × base × height
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Most straightforward calculation
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-500" />
                    Type 2: Given Three Sides
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Use: Heron's formula
                  </p>
                  <p className="text-xs text-muted-foreground">
                    When height is unknown
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-500" />
                    Type 3: Coordinate Points
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Use: Coordinate formula
                  </p>
                  <p className="text-xs text-muted-foreground">
                    When vertices are given
                  </p>
                </div>
              </div>
            </Card>

            {/* Real Applications */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Real-World Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Architecture & Engineering</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Calculating roof areas for materials</li>
                    <li>• Structural triangle supports</li>
                    <li>• Land surveying and mapping</li>
                    <li>• Bridge and truss design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Everyday Uses</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Garden plot planning</li>
                    <li>• Fabric and material cutting</li>
                    <li>• Sports field markings</li>
                    <li>• Navigation and GPS</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="simulation">
            <Card className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Interactive Triangle Calculator</h2>
                <p className="text-muted-foreground">
                  Explore different triangle types and see real-time area calculations. Adjust dimensions to understand the relationships.
                </p>
              </div>
              <TriangleAnimation />
            </Card>
          </TabsContent>

          <TabsContent value="assessment">
            <Assessment topic="Area of Triangles" questions={assessmentQuestions} onFinish={handleAssessmentFinish} />
          </TabsContent>

          <TabsContent value="analysis">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Performance Analysis - Triangles</h2>
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
                      Excellent with basic area formulas
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Strong understanding of coordinate geometry
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Areas for Improvement</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      Practice more Heron's formula problems
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      Review special triangle formulas
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

export default TrianglesPage;