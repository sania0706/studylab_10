import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Text, OrbitControls, Cylinder } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, Lightbulb } from "lucide-react";
import * as THREE from "three";

const LightRay = ({ start, end, color }: { start: THREE.Vector3; end: THREE.Vector3; color: string }) => {
  const points = [start, end];
  
  return <Line points={points} color={color} lineWidth={2} />;
};

const Lens = ({ position, type }: { position: THREE.Vector3; type: "convex" | "concave" }) => {
  const scale = type === "convex" ? [0.2, 3, 3] : [0.2, 3, 3];
  
  return (
    <mesh position={position}>
      <cylinderGeometry args={[1.5, 1.5, 0.2, 32]} />
      <meshPhysicalMaterial
        color="#87ceeb"
        transparent
        opacity={0.7}
        transmission={0.9}
        thickness={0.5}
        roughness={0}
      />
    </mesh>
  );
};

const Mirror = ({ position, rotation }: { position: THREE.Vector3; rotation: THREE.Euler }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[4, 0.1]} />
      <meshStandardMaterial color="#c0c0c0" metalness={1} roughness={0} />
    </mesh>
  );
};

export const OpticsAnimation = () => {
  const [showReflection, setShowReflection] = useState(true);
  const [showRefraction, setShowRefraction] = useState(true);
  const [lensType, setLensType] = useState<"convex" | "concave">("convex");

  const rayPaths = useMemo(() => {
    const paths = [];
    const lensPos = new THREE.Vector3(0, 0, 0);
    const sourcePos = new THREE.Vector3(-6, 0, 0);
    
    // Parallel rays hitting convex lens
    if (lensType === "convex") {
      for (let i = -2; i <= 2; i++) {
        const start = new THREE.Vector3(-6, i, 0);
        const lensHit = new THREE.Vector3(0, i, 0);
        const focusPoint = new THREE.Vector3(3, 0, 0);
        
        paths.push({
          incident: [start, lensHit],
          refracted: [lensHit, focusPoint]
        });
      }
    } else {
      // Diverging rays for concave lens
      for (let i = -2; i <= 2; i++) {
        const start = new THREE.Vector3(-6, i, 0);
        const lensHit = new THREE.Vector3(0, i, 0);
        const divergeEnd = new THREE.Vector3(6, i * 2, 0);
        
        paths.push({
          incident: [start, lensHit],
          refracted: [lensHit, divergeEnd]
        });
      }
    }
    
    return paths;
  }, [lensType]);

  return (
    <div className="w-full space-y-4">
      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-center bg-card p-4 rounded-lg">
        <div className="flex gap-2">
          <Button
            variant={lensType === "convex" ? "default" : "outline"}
            size="sm"
            onClick={() => setLensType("convex")}
          >
            Convex Lens
          </Button>
          <Button
            variant={lensType === "concave" ? "default" : "outline"}
            size="sm"
            onClick={() => setLensType("concave")}
          >
            Concave Lens
          </Button>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setShowReflection(!showReflection);
            setShowRefraction(!showRefraction);
          }}
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Toggle Effects
        </Button>
      </div>

      {/* 3D Optics Animation */}
      <div className="w-full h-96 bg-gradient-interactive rounded-lg overflow-hidden">
        <Canvas camera={{ position: [0, 8, 12], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          {/* Light Source */}
          <mesh position={[-7, 0, 0]}>
            <sphereGeometry args={[0.3]} />
            <meshStandardMaterial color="#ffd93d" emissive="#ffd93d" emissiveIntensity={0.5} />
          </mesh>
          
          {/* Lens */}
          <Lens position={new THREE.Vector3(0, 0, 0)} type={lensType} />
          
          {/* Light Rays */}
          {rayPaths.map((path, index) => (
            <group key={index}>
              <LightRay 
                start={new THREE.Vector3(...path.incident[0])} 
                end={new THREE.Vector3(...path.incident[1])} 
                color="#ff6b6b" 
              />
              <LightRay 
                start={new THREE.Vector3(...path.refracted[0])} 
                end={new THREE.Vector3(...path.refracted[1])} 
                color="#4dabf7" 
              />
            </group>
          ))}
          
          {/* Focal Point for Convex Lens */}
          {lensType === "convex" && (
            <mesh position={[3, 0, 0]}>
              <sphereGeometry args={[0.1]} />
              <meshStandardMaterial color="#51cf66" emissive="#51cf66" emissiveIntensity={0.8} />
            </mesh>
          )}
          
          {/* Grid for reference */}
          <gridHelper args={[16, 16, "#666", "#666"]} position={[0, -3, 0]} />
          
          {/* Labels */}
          <Text
            position={[0, -4, 0]}
            fontSize={0.4}
            color="#333"
            anchorX="center"
            anchorY="middle"
          >
            {lensType === "convex" ? "Convex Lens - Light Convergence" : "Concave Lens - Light Divergence"}
          </Text>
          
          <Text
            position={[-7, -1, 0]}
            fontSize={0.3}
            color="#ffd93d"
            anchorX="center"
            anchorY="middle"
          >
            Light Source
          </Text>
          
          {lensType === "convex" && (
            <Text
              position={[3, -1, 0]}
              fontSize={0.3}
              color="#51cf66"
              anchorX="center"
              anchorY="middle"
            >
              Focal Point
            </Text>
          )}
          
          <OrbitControls enableZoom={true} enablePan={false} maxDistance={20} minDistance={8} />
        </Canvas>
      </div>
    </div>
  );
};