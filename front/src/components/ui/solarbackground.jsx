import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function Planet({ position = [0, 0, 0], size = 1, color = 'purple' }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} />
    </mesh>
  );
}

export default function SolarBackground() {
  return (
    <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 10] }} style={{ backgroundColor: '#040920' }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={60} count={2000} factor={4} saturation={4} fade speed={1} />
      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.1} />
    </Canvas>
    
  );
}
