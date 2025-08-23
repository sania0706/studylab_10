import { TopicCard } from "./TopicCard";
import { Atom, Waves, Eye, Triangle, Cloud } from "lucide-react";
import { useState } from "react";
import { SimulationModal } from "./SimulationModal";

export const TopicsGrid = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  
  const topics = [
    {
      id: "atomic-structure",
      title: "Atomic Structure",
      description: "Explore atoms, electrons, protons, and neutrons through interactive 3D models and animations.",
      icon: <Atom />,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      route: "/atomic-structure"
    },
    {
      id: "waves",
      title: "Waves",
      description: "Understand wave properties, frequency, amplitude, and wave behavior with dynamic simulations.",
      icon: <Waves />,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      route: "/waves"
    },
    {
      id: "optics",
      title: "Optics", 
      description: "Learn about light, reflection, refraction, and lenses through interactive ray diagrams.",
      icon: <Eye />,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      route: "/optics"
    },
    {
      id: "triangles",
      title: "Area of Triangles",
      description: "Master triangle calculations with interactive geometry tools and visual proofs.",
      icon: <Triangle />,
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      route: "/triangles"
    },
    {
      id: "fluids",
      title: "Fluids",
      description: "Learn about pressure, buoyancy, and fluid dynamics through interactive simulations.",
      icon: <Waves />, // Using Waves icon for now, you can replace this
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
      route: "/fluids"
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Interactive Learning
            <span className="block text-primary">Modules</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dive deep into Class 10 concepts with our carefully designed interactive modules. 
            Each topic features animations, simulations, and hands-on activities.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {topics.map((topic, index) => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              description={topic.description}
              icon={topic.icon}
              color={topic.color}
              delay={`${index * 0.1}s`}
              route={topic.route}
            />
          ))}
        </div>
      </div>

      {/* Simulation Modal */}
      {selectedTopic && (
        <SimulationModal
          topicId={selectedTopic}
          onClose={() => setSelectedTopic(null)}
        />
      )}
    </section>
  );
};