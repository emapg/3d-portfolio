import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export const Hero3D = () => {
  const sphereRef = useRef();

  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Sphere ref={sphereRef} args={[1, 32, 32]}>
        <meshStandardMaterial
          color="#4338ca"
          wireframe
          side={THREE.DoubleSide}
        />
      </Sphere>
    </Canvas>
  );
};