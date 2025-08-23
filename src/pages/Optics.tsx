import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { OpticsAnimation } from "@/components/OpticsAnimation";
import { Assessment } from "@/components/Assessment";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Beaker, ClipboardList, BarChart3, Eye, Lightbulb, Target, Zap } from "lucide-react";

const OpticsPage = () => {
  const [activeTab, setActiveTab] = useState("study");
  const [averageScore, setAverageScore] = useState<number | null>(null);
  const [testsCompleted, setTestsCompleted] = useState<number>(0);
  const [timeSpent, setTimeSpent] = useState<number | null>(null);

  const assessmentQuestions = [
    {
      id: 1,
      question: "What happens when light passes from air into water?",
      options: ["It speeds up and bends away from normal", "It slows down and bends toward normal", "It maintains speed but changes direction", "It stops completely"],
      correctAnswer: 1,
      explanation: "Light slows down when entering a denser medium (water) and bends toward the normal line due to refraction."
    },
    {
      id: 2,
      question: "The law of reflection states that:",
      options: ["Angle of incidence > angle of reflection", "Angle of incidence = angle of reflection", "Angle of incidence < angle of reflection", "Angles are unrelated"],
      correctAnswer: 1,
      explanation: "The law of reflection states that the angle of incidence equals the angle of reflection, both measured from the normal."
    },
    {
      id: 3,
      question: "A convex lens:",
      options: ["Always produces virtual images", "Converges light rays", "Diverges light rays", "Cannot form real images"],
      correctAnswer: 1,
      explanation: "A convex lens converges (brings together) parallel light rays to a focal point."
    },
    {
      id: 4,
      question: "Total internal reflection occurs when:",
      options: ["Light goes from dense to less dense medium at large angles", "Light goes from less dense to dense medium", "Light travels parallel to surface", "Light hits perpendicularly"],
      correctAnswer: 0,
      explanation: "Total internal reflection occurs when light travels from a denser to a less dense medium at angles greater than the critical angle."
    },
    {
      id: 5,
      question: "The refractive index of a material is:",
      options: ["Speed of light in material / Speed of light in vacuum", "Speed of light in vacuum / Speed of light in material", "Always greater than 2", "Independent of wavelength"],
      correctAnswer: 1,
      explanation: "Refractive index = Speed of light in vacuum / Speed of light in the material. It's always ≥ 1 for real materials."
    }
  ];

  const handleAssessmentFinish = (score: number, total: number) => {
    setTestsCompleted(prev => prev + 1);
    setAverageScore(score / total);
    // Placeholder for dynamic time tracking
    setTimeSpent(38);
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
      <Navigation title="Optics" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Optics & Light</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the fascinating world of light, reflection, refraction, and lenses through interactive ray diagrams and simulations.
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
              Ray Diagrams
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
                  <Badge variant="outline" className="w-full justify-start">✓ Understand light behavior</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Learn reflection laws</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Master refraction concepts</Badge>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-start">✓ Explore lens properties</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Calculate refractive index</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Apply optical principles</Badge>
                </div>
              </div>
            </Card>

            {/* Core Concepts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Nature of Light</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-500" />
                      Light Properties
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Travels in straight lines (rays)</li>
                      <li>• Speed in vacuum: 3 × 10⁸ m/s</li>
                      <li>• Electromagnetic wave</li>
                      <li>• Can be reflected and refracted</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm"><strong>Key Fact:</strong> Light slows down in materials denser than vacuum</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Reflection</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Laws of Reflection</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Incident ray, reflected ray, and normal lie in same plane</li>
                      <li>• Angle of incidence = Angle of reflection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Types of Reflection</h4>
                    <div className="space-y-2">
                      <div className="bg-muted/50 p-2 rounded">
                        <p className="text-sm"><strong>Regular:</strong> Smooth surface (mirror)</p>
                      </div>
                      <div className="bg-muted/50 p-2 rounded">
                        <p className="text-sm"><strong>Diffuse:</strong> Rough surface (paper)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Refraction</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Snell's Law</h4>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-lg font-mono">n₁sin(θ₁) = n₂sin(θ₂)</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Where n = refractive index, θ = angle from normal
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Refractive Index Examples</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Air: n ≈ 1.00</li>
                      <li>• Water: n ≈ 1.33</li>
                      <li>• Glass: n ≈ 1.5</li>
                      <li>• Diamond: n ≈ 2.42</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Lenses</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Convex Lens (Converging)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Thicker in center</li>
                      <li>• Converges parallel rays</li>
                      <li>• Can form real and virtual images</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Concave Lens (Diverging)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Thinner in center</li>
                      <li>• Diverges parallel rays</li>
                      <li>• Always forms virtual images</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm"><strong>Lens Formula:</strong> 1/f = 1/u + 1/v</p>
                    <p className="text-sm text-muted-foreground">f = focal length, u = object distance, v = image distance</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Applications */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Real-World Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Eye className="w-4 h-4 text-green-500" />
                    Human Eye
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Cornea and lens focus light on retina. Accommodation changes focal length.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-500" />
                    Optical Fibers
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Use total internal reflection to transmit light signals over long distances.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Target className="w-4 h-4 text-purple-500" />
                    Cameras
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Lens systems focus light to form images on sensors or film.
                  </p>
                </div>
              </div>
            </Card>

            {/* Formulas & Examples */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Key Formulas & Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Refractive Index</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-lg font-mono">n = c/v</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      n = refractive index, c = speed in vacuum, v = speed in medium
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Example: Glass n = 1.5, so light is 1.5× slower
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Critical Angle</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-lg font-mono">sin(θc) = 1/n</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      θc = critical angle for total internal reflection
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Example: Water-air, θc = 48.6°
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="simulation">
            <Card className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Interactive Ray Diagrams</h2>
                <p className="text-muted-foreground">
                  Explore light behavior with convex and concave lenses. Observe how light rays converge or diverge.
                </p>
              </div>
              <OpticsAnimation />
            </Card>
          </TabsContent>

          <TabsContent value="assessment">
            <Assessment topic="Optics" questions={assessmentQuestions} onFinish={handleAssessmentFinish} />
          </TabsContent>

          <TabsContent value="analysis">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Performance Analysis - Optics</h2>
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
                      Excellent understanding of reflection laws
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Strong grasp of lens behavior
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Areas for Improvement</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      Practice Snell's law calculations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      Review critical angle concepts
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

export default OpticsPage;