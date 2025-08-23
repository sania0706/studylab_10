import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Text, OrbitControls } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, RotateCcw } from "lucide-react";
import * as THREE from "three";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Triangle = ({ vertices, color, filled = false }: { 
  vertices: THREE.Vector3[]; 
  color: string; 
  filled?: boolean;
}) => {
  const points = [...vertices, vertices[0]]; // Close the triangle
  
  return (
    <group>
      <Line points={points} color={color} lineWidth={3} />
      {filled && (
        <mesh>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array([
                vertices[0].x, vertices[0].y, vertices[0].z,
                vertices[1].x, vertices[1].y, vertices[1].z,
                vertices[2].x, vertices[2].y, vertices[2].z,
              ])}
              count={3}
              itemSize={3}
            />
          </bufferGeometry>
          <meshBasicMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} />
        </mesh>
      )}
    </group>
  );
};

const DimensionLine = ({ start, end, label, offset }: {
  start: THREE.Vector3;
  end: THREE.Vector3;
  label: string;
  offset: THREE.Vector3;
}) => {
  const midpoint = start.clone().add(end).multiplyScalar(0.5).add(offset);
  
  return (
    <group>
      <Line points={[start.clone().add(offset), end.clone().add(offset)]} color="#666" lineWidth={1} />
      <Text
        position={midpoint}
        fontSize={0.3}
        color="#333"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

export const TriangleAnimation = () => {
  const [triangleType, setTriangleType] = useState<"right" | "equilateral" | "scalene">("right");
  const [showArea, setShowArea] = useState(true);
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const [c, setC] = useState(5);

  const triangleData = useMemo(() => {
    let vertices: THREE.Vector3[];
    let area: number;
    let formula: string;
    
    switch (triangleType) {
      case "right":
        vertices = [
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(a, 0, 0),
          new THREE.Vector3(0, b, 0)
        ];
        area = (a * b) / 2;
        formula = `Area = (1/2) × base × height = (1/2) × ${a} × ${b} = ${area}`;
        break;
        
      case "equilateral":
        const side = a;
        const height = (side * Math.sqrt(3)) / 2;
        vertices = [
          new THREE.Vector3(-side/2, 0, 0),
          new THREE.Vector3(side/2, 0, 0),
          new THREE.Vector3(0, height, 0)
        ];
        area = (side * side * Math.sqrt(3)) / 4;
        formula = `Area = (√3/4) × side² = (√3/4) × ${side}² = ${area.toFixed(2)}`;
        break;
        
      case "scalene":
        vertices = [
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(a, 0, 0),
          new THREE.Vector3(1, b, 0)
        ];
        // Using Heron's formula
        const s = (a + b + c) / 2;
        area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        formula = `Heron's Formula: Area = √[s(s-a)(s-b)(s-c)] = ${area.toFixed(2)}`;
        break;
        
      default:
        vertices = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(3, 0, 0), new THREE.Vector3(0, 4, 0)];
        area = 6;
        formula = "Area = 6";
    }
    
    return { vertices, area, formula };
  }, [triangleType, a, b, c]);

  return (
    <div className="w-full space-y-4">
      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-center bg-card p-4 rounded-lg">
        <div className="flex gap-2">
          <Button
            variant={triangleType === "right" ? "default" : "outline"}
            size="sm"
            onClick={() => setTriangleType("right")}
          >
            Right Triangle
          </Button>
          <Button
            variant={triangleType === "equilateral" ? "default" : "outline"}
            size="sm"
            onClick={() => setTriangleType("equilateral")}
          >
            Equilateral
          </Button>
          <Button
            variant={triangleType === "scalene" ? "default" : "outline"}
            size="sm"
            onClick={() => setTriangleType("scalene")}
          >
            Scalene
          </Button>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowArea(!showArea)}
        >
          <Calculator className="w-4 h-4 mr-2" />
          {showArea ? "Hide" : "Show"} Area
        </Button>
        
        {/* Dimension Controls */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Side A:</label>
          <input
            type="range"
            min="2"
            max="6"
            step="0.5"
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
            className="w-16"
          />
          <span className="text-sm text-muted-foreground">{a}</span>
        </div>
        
        {triangleType !== "equilateral" && (
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Side B:</label>
            <input
              type="range"
              min="2"
              max="6"
              step="0.5"
              value={b}
              onChange={(e) => setB(parseFloat(e.target.value))}
              className="w-16"
            />
            <span className="text-sm text-muted-foreground">{b}</span>
          </div>
        )}
      </div>

      {/* Area Calculation Display */}
      <div className="bg-muted/50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Area Calculation:</h3>
        <p className="text-sm text-muted-foreground">{triangleData.formula}</p>
        <p className="text-lg font-bold text-primary mt-2">Area = {triangleData.area.toFixed(2)} square units</p>
      </div>

      {/* 3D Triangle Animation */}
      <div className="w-full h-96 bg-gradient-interactive rounded-lg overflow-hidden">
        <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          {/* Triangle */}
          <Triangle 
            vertices={triangleData.vertices} 
            color="#4dabf7" 
            filled={showArea}
          />
          
          {/* Dimension Labels */}
          {triangleType === "right" && (
            <>
              <DimensionLine
                start={triangleData.vertices[0]}
                end={triangleData.vertices[1]}
                label={`${a} units`}
                offset={new THREE.Vector3(0, -0.5, 0)}
              />
              <DimensionLine
                start={triangleData.vertices[0]}
                end={triangleData.vertices[2]}
                label={`${b} units`}
                offset={new THREE.Vector3(-0.5, 0, 0)}
              />
            </>
          )}
          
          {/* Vertices */}
          {triangleData.vertices.map((vertex, index) => (
            <mesh key={index} position={vertex}>
              <sphereGeometry args={[0.1]} />
              <meshStandardMaterial color="#ff6b6b" />
            </mesh>
          ))}
          
          {/* Grid for reference */}
          <gridHelper args={[12, 12, "#666", "#666"]} position={[0, -1, 0]} />
          
          {/* Labels */}
          <Text
            position={[0, -2, 0]}
            fontSize={0.4}
            color="#333"
            anchorX="center"
            anchorY="middle"
          >
            {triangleType.charAt(0).toUpperCase() + triangleType.slice(1)} Triangle
          </Text>
          
          <OrbitControls enableZoom={true} enablePan={false} maxDistance={15} minDistance={5} />
        </Canvas>
      </div>
    </div>
  );
};