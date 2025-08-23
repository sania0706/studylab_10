import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { WaveAnimation } from "@/components/WaveAnimation";
import { Assessment } from "@/components/Assessment";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Beaker, ClipboardList, BarChart3, Waves, Zap, Target, Activity } from "lucide-react";

const WavesPage = () => {
  const [activeTab, setActiveTab] = useState("study");
  const [averageScore, setAverageScore] = useState<number | null>(null);
  const [testsCompleted, setTestsCompleted] = useState<number>(0);
  const [timeSpent, setTimeSpent] = useState<number | null>(null);

  const assessmentQuestions = [
    {
      id: 1,
      question: "What is the relationship between frequency and wavelength?",
      options: ["Directly proportional", "Inversely proportional", "No relationship", "Sometimes proportional"],
      correctAnswer: 1,
      explanation: "Frequency and wavelength are inversely proportional. As frequency increases, wavelength decreases, and vice versa."
    },
    {
      id: 2,
      question: "The formula for wave speed is:",
      options: ["v = fλ", "v = f/λ", "v = λ/f", "v = f + λ"],
      correctAnswer: 0,
      explanation: "Wave speed (v) equals frequency (f) times wavelength (λ): v = fλ"
    },
    {
      id: 3,
      question: "What determines the amplitude of a wave?",
      options: ["Frequency", "Wavelength", "Energy of the wave", "Wave speed"],
      correctAnswer: 2,
      explanation: "Amplitude is determined by the energy of the wave. Higher energy waves have greater amplitude."
    },
    {
      id: 4,
      question: "Sound waves are examples of:",
      options: ["Transverse waves", "Longitudinal waves", "Electromagnetic waves", "Standing waves"],
      correctAnswer: 1,
      explanation: "Sound waves are longitudinal waves where particles vibrate parallel to the direction of wave propagation."
    },
    {
      id: 5,
      question: "What happens when two waves meet in phase?",
      options: ["Destructive interference", "Constructive interference", "No interference", "Wave cancellation"],
      correctAnswer: 1,
      explanation: "When two waves meet in phase (crest meets crest), they undergo constructive interference, resulting in increased amplitude."
    }
  ];

  const handleAssessmentFinish = (score: number, total: number) => {
    setTestsCompleted(prev => prev + 1);
    setAverageScore(score / total);
    // Placeholder for dynamic time tracking
    setTimeSpent(32);
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
      <Navigation title="Waves" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Waves className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Wave Properties</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore wave behavior, frequency, amplitude, and wave phenomena through interactive simulations and comprehensive study materials.
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
              Wave Simulator
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
                  <Badge variant="outline" className="w-full justify-start">✓ Understand wave properties</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Learn frequency and amplitude</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Explore wave speed calculations</Badge>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-start">✓ Study wave interference</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Analyze wave behavior</Badge>
                  <Badge variant="outline" className="w-full justify-start">✓ Apply Doppler effect</Badge>
                </div>
              </div>
            </Card>

            {/* Core Concepts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Wave Characteristics</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-blue-500" />
                      Wavelength (λ)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Distance between two consecutive crests or troughs. Measured in meters.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      Frequency (f)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Number of complete waves passing a point per second. Measured in Hertz (Hz).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-500" />
                      Amplitude (A)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Maximum displacement from equilibrium position. Related to wave energy.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Wave Types</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Transverse Waves</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Particle vibration perpendicular to wave direction
                    </p>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm"><strong>Examples:</strong> Light waves, radio waves, waves on a string</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Longitudinal Waves</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Particle vibration parallel to wave direction
                    </p>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm"><strong>Examples:</strong> Sound waves, seismic P-waves</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Wave Behavior</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Reflection</h4>
                    <p className="text-sm text-muted-foreground">
                      Wave bounces off a surface or boundary
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Refraction</h4>
                    <p className="text-sm text-muted-foreground">
                      Wave changes direction when entering new medium
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Interference</h4>
                    <p className="text-sm text-muted-foreground">
                      Two or more waves combine to form resultant wave
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Diffraction</h4>
                    <p className="text-sm text-muted-foreground">
                      Wave bends around obstacles or through openings
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">Doppler Effect</h3>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Change in frequency when source or observer is moving
                  </p>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <h4 className="font-medium mb-2">Examples:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ambulance siren changing pitch</li>
                      <li>• Radar speed detection</li>
                      <li>• Redshift in astronomy</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Formulas & Examples */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Key Formulas & Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Wave Speed</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-lg font-mono">v = fλ</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Speed = Frequency × Wavelength
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Example: f = 500 Hz, λ = 0.68 m → v = 340 m/s
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Period & Frequency</h4>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-lg font-mono">T = 1/f</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Period = 1 / Frequency
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Example: f = 50 Hz → T = 0.02 s
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="simulation">
            <Card className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Interactive Wave Simulator</h2>
                <p className="text-muted-foreground">
                  Explore wave properties by adjusting amplitude and frequency. Observe how changes affect wave behavior.
                </p>
              </div>
              <WaveAnimation />
            </Card>
          </TabsContent>

          <TabsContent value="assessment">
            <Assessment topic="Waves" questions={assessmentQuestions} onFinish={handleAssessmentFinish} />
          </TabsContent>

          <TabsContent value="analysis">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Performance Analysis - Waves</h2>
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
                      Good understanding of wave speed calculations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      Strong grasp of frequency and wavelength relationship
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-semibold mb-3">Areas for Improvement</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      Practice wave interference concepts
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-warning rounded-full"></div>
                      Review Doppler effect applications
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

export default WavesPage;