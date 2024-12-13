import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

const Model = () => {
  const { scene } = useGLTF('/test.gltf');
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('/barbarian_texture.png'); 
  return <primitive object={scene} />;
};


const ThreeScene = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model />
        <OrbitControls enableZoom={false} enableRotate={true} />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;
