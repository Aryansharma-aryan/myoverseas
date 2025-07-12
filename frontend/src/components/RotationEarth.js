import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Earth = () => {
  const earthMap = useTexture("/earthmap.jpg"); // Place image in public/ folder

  const meshRef = React.useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002; // Infinite rotation
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0, 0, 0]}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial map={earthMap} />
    </mesh>
  );
};

const RotatingEarth = () => {
  return (
    <div className="w-full h-96 md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 3, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade />
          <Earth />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RotatingEarth;
