import { useState, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import { AtomAnimation } from "@/components/AtomAnimation";
import { Assessment } from "@/components/Assessment";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Beaker, ClipboardList, BarChart3, Atom, Zap, Target } from "lucide-react";
import { Elements } from "@/lib/elements";

const AtomicStructure = () => {
  const [activeTab, setActiveTab] = useState("study");
  const [averageScore, setAverageScore] = useState<number | null>(null);
  const [testsCompleted, setTestsCompleted] = useState<number>(0);
  const [timeSpent, setTimeSpent] = useState<number | null>(null);
  const [selectedElement, setSelectedElement] = useState(Elements[5]); // Default to Carbon

  const assessmentQuestions = [
    {
      id: 1,
      question: "What is the charge of a proton?",
      options: ["+1", "0", "-1", "+2"],
      correctAnswer: 0,
      explanation: "Protons carry a positive charge of +1 elementary charge unit."
    },
    {
      id: 2,
      question: "Where are electrons located in an atom?",
      options: ["In the nucleus", "Around the nucleus in orbitals", "Both in and around nucleus", "Outside the atom"],
      correctAnswer: 1,
      explanation: "Electrons orbit around the nucleus in specific energy levels called orbitals or electron shells."
    },
    {
      id: 3,
      question: "What determines the atomic number of an element?",
      options: ["Number of neutrons", "Number of protons", "Number of electrons", "Total mass"],
      correctAnswer: 1,
      explanation: "The atomic number is determined by the number of protons in the nucleus, which defines the element."
    },
    {
      id: 4,
      question: "Which particles contribute to the mass of an atom?",
      options: ["Only protons", "Only neutrons", "Protons and neutrons", "Protons, neutrons, and electrons"],
      correctAnswer: 2,
      explanation: "Protons and neutrons contribute almost all the mass of an atom. Electrons have negligible mass."
    },
    {
      id: 5,
      question: "What are isotopes?",
      options: [
        "Atoms with same number of electrons", 
        "Atoms with same number of protons but different neutrons", 
        "Atoms with same mass", 
        "Different elements"
      ],
      correctAnswer: 1,
      explanation: "Isotopes are atoms of the same element (same protons) but with different numbers of neutrons."
    }
  ];

  const handleAssessmentFinish = (score: number, total: number) => {
    setTestsCompleted(prev => prev + 1);
    setAverageScore(score / total);
    setTimeSpent(45); // Placeholder for dynamic time tracking
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
      <Navigation title="Atomic Structure" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Atom className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Atomic Structure</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the fundamental building blocks of matter through interactive 3D models and comprehensive study materials.
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
              3D Simulation
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
            <Card className="p-6 bg-gradient-card">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Learning Objectives
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-start">✓ Understand atomic composition</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Learn about electron shells</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Explore protons and neutrons</Badge>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-start">✓ Calculate atomic mass</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Identify isotopes</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Understand chemical bonding</Badge>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Atomic Composition</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-red-500">Protons (+)</h4>
                    <p className="text-sm text-muted-foreground">
                      Positively charged particles in the nucleus. Determine the element's identity (atomic number).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-green-500">Neutrons (0)</h4>
                    <p className="text-sm text-muted-foreground">
                      Neutral particles in the nucleus. Contribute to atomic mass and create isotopes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-yellow-500">Electrons (-)</h4>
                    <p className="text-sm text-muted-foreground">
                      Negatively charged particles orbiting the nucleus in energy levels (shells).
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Electron Configuration</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Shell Capacity</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• K Shell (n=1): 2 electrons maximum</li>
                      <li>• L Shell (n=2): 8 electrons maximum</li>
                      <li>• M Shell (n=3): 18 electrons maximum</li>
                      <li>• N Shell (n=4): 32 electrons maximum</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm"><strong>Example:</strong> Carbon (C) has 6 electrons</p>
                    <p className="text-sm text-muted-foreground">Configuration: K(2) L(4)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Atomic Mass & Isotopes</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Calculating Atomic Mass</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Atomic Mass ≈ Number of Protons + Number of Neutrons
                    </p>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm"><strong>Carbon-12:</strong></p>
                      <p className="text-sm text-muted-foreground">6 protons + 6 neutrons = 12 atomic mass units</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Isotopes</h4>
                    <p className="text-sm text-muted-foreground">
                      Same element, different neutron count. Example: C-12, C-13, C-14
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-teal-600">Important Facts</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <p className="text-sm">Atoms are mostly empty space</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-500" />
                    <p className="text-sm">Nucleus is 100,000 times smaller than atom</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-500" />
                    <p className="text-sm">Electrons determine chemical properties</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-500" />
                    <p className="text-sm">Atoms are electrically neutral</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Key Formulas & Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Atomic Number (Z)</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-lg font-mono">Z = Number of Protons</p>
                    <p className="text-sm text-muted-foreground mt-2">Also equals number of electrons in neutral atom</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Mass Number (A)</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-lg font-mono">A = Z + N</p>
                    <p className="text-sm text-muted-foreground mt-2">Where N = Number of Neutrons</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="simulation">
            <Card className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Interactive 3D Atom Model</h2>
                <p className="text-muted-foreground">
                  Explore atomic structure with our interactive 3D simulation. Click and drag to rotate the view.
                </p>
              </div>

              {/* Element Selector as Cards */}
              <div className="max-w-2xl mx-auto mb-6 grid grid-cols-2 md:grid-cols-5 gap-3">
                {Elements.map((el) => (
                  <Card
                    key={el.name}
                    className={`p-2 text-center cursor-pointer transition-all duration-200 ${selectedElement.name === el.name ? "bg-primary text-white" : "hover:bg-accent"}`}
                    onClick={() => setSelectedElement(el)}
                  >
                    <h4 className="font-semibold">{el.name}</h4>
                    <p className="text-xs">{el.protons} Protons</p>
                  </Card>
                ))}
              </div>
              
              <AtomAnimation
                protons={selectedElement.protons}
                neutrons={selectedElement.neutrons}
                electrons={selectedElement.electrons}
              />
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 text-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2"></div>
                  <h4 className="font-medium">Protons: {selectedElement.protons}</h4>
                  <p className="text-sm text-muted-foreground">Positive charge, in nucleus</p>
                </Card>
                <Card className="p-4 text-center">
                  <div className="w-8 h-8 bg-teal-500 rounded-full mx-auto mb-2"></div>
                  <h4 className="font-medium">Neutrons: {selectedElement.neutrons}</h4>
                  <p className="text-sm text-muted-foreground">No charge, in nucleus</p>
                </Card>
                <Card className="p-4 text-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                  <h4 className="font-medium">Electrons: {selectedElement.electrons}</h4>
                  <p className="text-sm text-muted-foreground">Negative charge, orbit nucleus</p>
                </Card>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="assessment">
            <Assessment topic="Atomic Structure" questions={assessmentQuestions} onFinish={handleAssessmentFinish} />
          </TabsContent>

          <TabsContent value="analysis">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Performance Analysis</h2>
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
                      Excellent understanding of proton/neutron concepts
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Strong grasp of electron configuration
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Areas for Improvement</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      Review isotope calculations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      Practice atomic mass problems
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Recommended Actions</h3>
                  <div className="space-y-2">
                    <a href="https://www.iaea.org/newscenter/news/what-are-isotopes#:~:text=Atoms%20with%20the%20same%20number,and%20therefore%20in%20physical%20properties." className="block" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full justify-start">
                        📚 Review Isotope Chapter
                      </Button>
                    </a>
                    <a href="https://teachchemistry.org/classroom-resources/simulation-activity-isotopes-calculating-average-atomic-mass" className="block" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full justify-start">
                        🧪 Practice More Simulations
                      </Button>
                    </a>
                    <a href="https://www.proprofs.com/quiz-school/story.php?title=atomic-structure_9" className="block" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full justify-start">
                        📝 Take Additional Quizzes
                      </Button>
                    </a>
                  </div>
                </Card>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AtomicStructure;