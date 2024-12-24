"use client";
import React, { useRef, useEffect,useState } from "react";
import { useGLTF } from "@react-three/drei";
import { AnimationMixer, LoopRepeat,LoopOnce} from "three";
import * as THREE from "three";

const AnimatedModel = ({ AnimationURL, textureURLs }) => {
  const modelRef = useRef();
  const mixerRef = useRef();
  const clock = useRef(new THREE.Clock());
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const { scene, animations } = useGLTF(AnimationURL, {
    onError: (error) => {
      console.error("Error loading GLTF model:", error);
      console.error("AnimationURL:", AnimationURL);
    }
  });
  const textureLoader = new THREE.TextureLoader();

  useEffect(() => {
    console.log("Animations:", animations);
    console.log("Current Animation Index:", currentAnimationIndex);
    if (!animations || animations.length === 0) {
      console.warn("No animations found in the GLTF file.");
      return;
    }
  
    mixerRef.current = new AnimationMixer(scene);
    const mixer = mixerRef.current;
  
    const playNextAnimation = () => {
      mixer.stopAllAction(); 
    
      const clip = animations[currentAnimationIndex];
      const action = mixer.clipAction(clip);
    
      if (action) {
        console.log(`Playing animation: ${clip.name}`);
        action.reset();
    
        
        if (currentAnimationIndex === 0) {
          action.setLoop(LoopOnce); 
        } else {
          action.setLoop(LoopRepeat, Infinity); 
        }
    
        action.clampWhenFinished = true; 
        action.play();
      } else {
        console.error(`Failed to create action for animation index ${currentAnimationIndex}`);
      }
    };
    
    playNextAnimation();
  
    
    const onFinished = (event) => {
      if (event.action === mixer.existingAction(animations[currentAnimationIndex])) {
        setCurrentAnimationIndex((prevIndex) => (prevIndex + 1) % animations.length);
      }
    };
    mixer.addEventListener('finished', onFinished);
  
    const animate = () => {
      const delta = clock.current.getDelta();
      if (mixerRef.current) {
        mixerRef.current.update(delta);
      }
      requestAnimationFrame(animate);
    };
    animate();
  
    return () => {
      mixer.stopAllAction();
      mixer.uncacheRoot(scene);
      mixer.removeEventListener("finished", onFinished);
    };
  }, [animations, scene, textureURLs, currentAnimationIndex]);
  

 return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} />
      <spotLight position={[15, 20, 15]} angle={0.3} penumbra={0.5} intensity={0.5} castShadow />
      <primitive ref={modelRef} object={scene} />
    </>
  );
};

export default AnimatedModel;
