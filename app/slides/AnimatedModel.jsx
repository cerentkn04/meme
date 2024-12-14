"use client";
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";
import * as THREE from "three";

const AnimatedModel = ({ AimationURL }) => {
  const modelRef = useRef();
  const mixerRef = useRef();
  const cameraRef = useRef(); // Ref for the camera
  const { scene, animations } = useGLTF(AimationURL);

  useEffect(() => {
   
    cameraRef.current = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1, 
      100
    );
    if (animations && animations.length > 0)
    {
      mixerRef.current = new AnimationMixer(scene);
      const clip = animations[0];
      const action = mixerRef.current.clipAction(clip);
      action.setEffectiveTimeScale(0.6); 
      action.play();
    }

    const clock = new THREE.Clock();
    const animate = () => {
      if (mixerRef.current) {
        mixerRef.current.update(clock.getDelta());
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current = null;
      }
    };
  }, [animations, scene]);

  return <primitive ref={modelRef} object={scene} />;
};

export default AnimatedModel;