import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Box, Cylinder, Plane, Text } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Water = () => (
  <Plane rotation-x={-Math.PI / 2} args={[10, 10, 10, 10]} position={[0, -1.5, 0]}>
    <meshStandardMaterial
      attach="material"
      color="#4dabf7"
      transparent
      opacity={0.6}
      roughness={0.2}
      metalness={0.8}
    />
  </Plane>
);

const FloatingObject = ({ density, fluidDensity, shape }: { density: number; fluidDensity: number; shape: "cube" | "cylinder" }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      // Simplified physics for stable simulation
      const targetY = (fluidDensity / density) * 1.5 - 1.5;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    }
  });

  return (
    <>
      {shape === "cube" ? (
        <Box ref={meshRef} args={[1, 1, 1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#ff6b6b" metalness={0.5} roughness={0.5} />
        </Box>
      ) : (
        <Cylinder ref={meshRef} args={[0.5, 0.5, 1, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#51cf66" metalness={0.5} roughness={0.5} />
        </Cylinder>
      )}
    </>
  );
};

export const FluidsAnimation = () => {
  const [fluidDensity, setFluidDensity] = useState(1000); // Water density
  const [objectDensity, setObjectDensity] = useState(500); // Lighter than water
  const [objectShape, setObjectShape] = useState<"cube" | "cylinder">("cube");

  return (
    <div className="w-full space-y-4">
      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <label className="block text-sm font-medium mb-2">Fluid Density: ({fluidDensity} kg/m³)</label>
          <Slider
            value={[fluidDensity]}
            onValueChange={(val) => setFluidDensity(val[0])}
            max={2000}
            step={10}
            min={100}
            className="w-full"
          />
        </Card>
        <Card className="p-4">
          <label className="block text-sm font-medium mb-2">Object Density: ({objectDensity} kg/m³)</label>
          <Slider
            value={[objectDensity]}
            onValueChange={(val) => setObjectDensity(val[0])}
            max={2000}
            step={10}
            min={100}
            className="w-full"
          />
        </Card>
        <Card className="p-4 flex items-center justify-between">
          <Label htmlFor="shape-switch" className="text-sm font-medium">Change Shape (Current: {objectShape})</Label>
          <Switch 
            id="shape-switch"
            checked={objectShape === "cylinder"}
            onCheckedChange={(checked) => setObjectShape(checked ? "cylinder" : "cube")}
          />
        </Card>
      </div>

      {/* Animation Area */}
      <div className="w-full h-96 bg-gradient-interactive rounded-lg overflow-hidden">
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          <Water />
          <FloatingObject density={objectDensity} fluidDensity={fluidDensity} shape={objectShape} />
          
          <Text position={[0, -2.5, 0]} fontSize={0.3} color="#333" anchorX="center" anchorY="middle">
            Fluid Simulation
          </Text>
          
          <OrbitControls enableZoom={true} enablePan={false} maxDistance={10} minDistance={3} />
        </Canvas>
      </div>
    </div>
  );
};