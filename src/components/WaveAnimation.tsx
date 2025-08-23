import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Text, OrbitControls } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import * as THREE from "three";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const WaveForm = ({ amplitude, frequency, phase, color }: { 
  amplitude: number; 
  frequency: number; 
  phase: number; 
  color: string;
}) => {
  
  const points = useMemo(() => {
    const pts = [];
    for (let x = -10; x <= 10; x += 0.2) {
      const y = amplitude * Math.sin(frequency * x + phase);
      pts.push(new THREE.Vector3(x, y, 0));
    }
    return pts;
  }, [amplitude, frequency, phase]);

  return <Line points={points} color={color} lineWidth={3} />;
};

const WaveParticle = ({ amplitude, frequency, phase, position }: {
  amplitude: number;
  frequency: number;
  phase: number;
  position: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      const y = amplitude * Math.sin(frequency * position + phase + time * 2);
      meshRef.current.position.set(position, y, 0);
    }
  });

  return (
    <mesh ref={meshRef} position={[position, 0, 0]}>
      <sphereGeometry args={[0.1]} />
      <meshStandardMaterial color="#ff6b6b" emissive="#ff6b6b" emissiveIntensity={0.3} />
    </mesh>
  );
};

export const WaveAnimation = () => {
  const [amplitude, setAmplitude] = useState(2);
  const [frequency, setFrequency] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="w-full space-y-4">
      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-center bg-card p-4 rounded-lg">
        <Button
          variant={isPlaying ? "secondary" : "default"}
          size="sm"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          {isPlaying ? "Pause" : "Play"}
        </Button>
        
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Amplitude:</label>
          <Slider
            value={[amplitude]}
            onValueChange={(val) => setAmplitude(val[0])}
            min={0.5}
            max={3}
            step={0.1}
            className="w-20"
          />
          <span className="text-sm text-muted-foreground">{amplitude.toFixed(1)}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Frequency:</label>
          <Slider
            value={[frequency]}
            onValueChange={(val) => setFrequency(val[0])}
            min={0.2}
            max={2}
            step={0.1}
            className="w-20"
          />
          <span className="text-sm text-muted-foreground">{frequency.toFixed(1)}</span>
        </div>
      </div>

      {/* 3D Wave Animation */}
      <div className="w-full h-96 bg-gradient-interactive rounded-lg overflow-hidden">
        <Canvas camera={{ position: [0, 5, 15], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          {/* Wave Forms */}
          <WaveForm amplitude={amplitude} frequency={frequency} phase={0} color="#4dabf7" />
          <WaveForm amplitude={amplitude * 0.7} frequency={frequency} phase={Math.PI / 2} color="#51cf66" />
          
          {/* Particles showing wave motion */}
          {Array.from({ length: 10 }, (_, i) => (
            <WaveParticle
              key={i}
              amplitude={amplitude}
              frequency={frequency}
              phase={0}
              position={i * 2 - 9}
            />
          ))}
          
          {/* Grid */}
          <gridHelper args={[20, 20, "#666", "#666"]} position={[0, -4, 0]} />
          
          {/* Labels */}
          <Text
            position={[0, -5, 0]}
            fontSize={0.4}
            color="#333"
            anchorX="center"
            anchorY="middle"
          >
            Wave Propagation
          </Text>
          
          <Text
            position={[-8, amplitude + 0.5, 0]}
            fontSize={0.3}
            color="#4dabf7"
            anchorX="center"
            anchorY="middle"
          >
            Primary Wave
          </Text>
          
          <OrbitControls enableZoom={true} enablePan={false} maxDistance={25} minDistance={8} />
        </Canvas>
      </div>
    </div>
  );
};