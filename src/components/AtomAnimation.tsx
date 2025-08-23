import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Text, OrbitControls, Sphere } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Elements } from "@/lib/elements"; // Corrected import

const Electron = ({ radius, speed, color, offset = 0 }: { radius: number; speed: number; color: string; offset?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() * speed + offset;
      meshRef.current.position.x = Math.cos(time) * radius;
      meshRef.current.position.z = Math.sin(time) * radius;
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.1]} position={[radius, 0, 0]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </Sphere>
  );
};

const Nucleus = ({ protons, neutrons }: { protons: number; neutrons: number }) => {
  return (
    <group>
      {/* Protons */}
      {Array.from({ length: protons }).map((_, index) => (
        <Sphere key={`p-${index}`} args={[0.15]} position={[
          (Math.random() - 0.5) * 0.4,
          (Math.random() - 0.5) * 0.4,
          (Math.random() - 0.5) * 0.4,
        ]}>
          <meshStandardMaterial color="#ff6b6b" emissive="#ff6b6b" emissiveIntensity={0.2} />
        </Sphere>
      ))}
      {/* Neutrons */}
      {Array.from({ length: neutrons }).map((_, index) => (
        <Sphere key={`n-${index}`} args={[0.15]} position={[
          (Math.random() - 0.5) * 0.4,
          (Math.random() - 0.5) * 0.4,
          (Math.random() - 0.5) * 0.4,
        ]}>
          <meshStandardMaterial color="#4ecdc4" emissive="#4ecdc4" emissiveIntensity={0.2} />
        </Sphere>
      ))}
    </group>
  );
};

const OrbitRing = ({ radius }: { radius: number }) => {
  const points = [];
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
  }
  
  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          count={points.length}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#666" opacity={0.3} transparent />
    </line>
  );
};

export const AtomAnimation = ({ protons, neutrons, electrons }: { protons: number; neutrons: number; electrons: number }) => {
  const elementData = useMemo(() => {
    const elementName = Elements.find(el => el.protons === protons)?.name || "Unknown Element";
    const mass = protons + neutrons;
    return { name: elementName, mass };
  }, [protons, neutrons]);

  const electronOrbits = useMemo(() => {
    const orbits = [];
    let remainingElectrons = electrons;
    const colors = ["#ffd93d", "#6bcf7f", "#4dabf7"];
    const radii = [1.5, 2.5, 3.5];
    const maxElectrons = [2, 8, 18];

    for (let i = 0; i < radii.length && remainingElectrons > 0; i++) {
      const count = Math.min(remainingElectrons, maxElectrons[i]);
      for (let j = 0; j < count; j++) {
        orbits.push(
          <Electron
            key={`e-${i}-${j}`}
            radius={radii[i]}
            speed={2 - i * 0.5}
            color={colors[i]}
            offset={(j / count) * Math.PI * 2}
          />
        );
      }
      remainingElectrons -= count;
    }

    return orbits;
  }, [electrons]);

  return (
    <div className="w-full space-y-4">
      {/* Animation Area */}
      <div className="w-full h-96 bg-gradient-interactive rounded-lg overflow-hidden">
        <Canvas camera={{ position: [5, 2, 5], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4ecdc4" />
          
          {/* Nucleus */}
          <Nucleus protons={protons} neutrons={neutrons} />
          
          {/* Electron Orbits */}
          <OrbitRing radius={1.5} />
          <OrbitRing radius={2.5} />
          <OrbitRing radius={3.5} />
          
          {/* Electrons */}
          {electronOrbits}
          
          {/* Labels */}
          <Text
            position={[0, -4, 0]}
            fontSize={0.3}
            color="#333"
            anchorX="center"
            anchorY="middle"
          >
            {elementData.name} (Mass: {elementData.mass})
          </Text>
          
          <OrbitControls enableZoom={true} enablePan={false} maxDistance={10} minDistance={3} />
        </Canvas>
      </div>
    </div>
  );
};