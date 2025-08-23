import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, RotateCcw, Settings, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface SimulationModalProps {
  topicId: string;
  onClose: () => void;
}

export const SimulationModal = ({ topicId, onClose }: SimulationModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  const topicData = {
    "atomic-structure": {
      title: "Atomic Structure Interactive Simulation",
      description: "Explore the components of an atom and understand electron shells",
      simulation: "AtomicStructureSimulation",
      activities: ["3D Atom Model", "Electron Configuration", "Ion Formation", "Isotopes Comparison"]
    },
    "waves": {
      title: "Wave Properties Simulation", 
      description: "Visualize wave behavior and understand frequency, amplitude, and wavelength",
      simulation: "WaveSimulation",
      activities: ["Wave Generator", "Interference Patterns", "Doppler Effect", "Standing Waves"]
    },
    "optics": {
      title: "Optics & Light Simulation",
      description: "Interactive ray diagrams and lens behavior",
      simulation: "OpticsSimulation", 
      activities: ["Ray Tracing", "Lens Focus", "Reflection Laws", "Refraction Index"]
    },
    "triangles": {
      title: "Triangle Area Calculator",
      description: "Interactive geometry tools for triangle area calculations",
      simulation: "TriangleSimulation",
      activities: ["Area Formulas", "Heron's Formula", "Coordinate Geometry", "Special Triangles"]
    }
  };

  const topic = topicData[topicId as keyof typeof topicData];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            setCompleted(true);
            toast.success("Simulation completed! Great job!");
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      toast.info("Simulation started!");
    }
  };

  const handleReset = () => {
    setProgress(0);
    setCompleted(false);
    setIsPlaying(false);
    toast.info("Simulation reset!");
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {topic.title}
          </DialogTitle>
          <p className="text-muted-foreground">{topic.description}</p>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Main Simulation Area */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-gradient-card">
              <div className="aspect-video bg-gradient-interactive rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                {/* Simulation Placeholder - Would contain actual interactive content */}
                <div className="text-center animate-pulse-glow">
                  <div className="w-32 h-32 bg-primary/20 rounded-full animate-pulse mb-4 mx-auto"></div>
                  <p className="text-lg font-semibold text-primary">Interactive Simulation</p>
                  <p className="text-sm text-muted-foreground">Click controls to interact</p>
                </div>
                
                {/* Animated Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-secondary/30 rounded-full animate-float"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-success/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button 
                    variant={isPlaying ? "secondary" : "default"}
                    size="sm"
                    onClick={handlePlayPause}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isPlaying ? "Pause" : "Play"}
                  </Button>
                  
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  
                  <Button variant="ghost" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>

                {completed && (
                  <Badge variant="default" className="bg-success text-success-foreground">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Completed
                  </Badge>
                )}
              </div>

              {/* Progress */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            </Card>
          </div>

          {/* Activities Sidebar */}
          <div className="space-y-4">
            <Card className="p-4">
              <h3 className="font-semibold text-foreground mb-3">Interactive Activities</h3>
              <div className="space-y-2">
                {topic.activities.map((activity, index) => (
                  <Button
                    key={activity}
                    variant="ghost"
                    className="w-full justify-start text-left h-auto p-3"
                    onClick={() => toast.info(`Opening ${activity}...`)}
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-xs font-bold text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{activity}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold text-foreground mb-3">Learning Objectives</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  Understand key concepts
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  Visualize interactions
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  Apply knowledge
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  Practice problem solving
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};