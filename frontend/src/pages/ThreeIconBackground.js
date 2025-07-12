// components/ThreeIconBackground.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Environment } from "@react-three/drei";

const AnimatedSphere = () => {
  return (
    <Sphere args={[1.2, 64, 64]} scale={1.2}>
      <meshStandardMaterial
        color="#0fffc1"
        metalness={0.8}
        roughness={0.2}
        emissive="#0fffc1"
        emissiveIntensity={0.4}
      />
    </Sphere>
  );
};

export default function ThreeIconBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      className="absolute inset-0 z-0"
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[2, 1, 3]} />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Suspense>
    </Canvas>
  );
}
