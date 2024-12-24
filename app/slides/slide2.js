"use client";
import React, { useState, useEffect } from "react";
import styles from "./slide2.module.css";
import characters from "../Data/characters";
import useWindowSize from "../Hooks/useWindowSize";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const AnimatedModel = dynamic(() => import("./AnimatedModel"), { ssr: false });

const Slide2 = () => {
  const { isDesktop, isTablet, isMobile } = useWindowSize();
  const [activeCharacter, setActiveCharacter] = useState(characters[0] || {});
  const [playAnimation, setPlayAnimation] = useState(false);
  const fov = isDesktop ? 40 : isTablet ? 35 : 25;

  useEffect(() => {
    // Stop animation when component unmounts
    return () => setPlayAnimation(false);
  }, []);
  const uiElement = () => {
    if (!activeCharacter) {
      return <div></div>;
    }

    return (
      <div className={styles.characterDetails}>
        <div>Name: {activeCharacter.name}</div>
        <div>Health: {activeCharacter.health}</div>
      </div>
    );
  };

  const handleMouseEnter = () => {
    const swiperInstance = document.querySelector(".mySwiper")?.swiper;
    swiperInstance?.mousewheel?.disable?.();
  };

  const handleMouseLeave = () => {
    const swiperInstance = document.querySelector(".mySwiper")?.swiper;
    swiperInstance?.mousewheel?.enable?.();
  };

  const handleCharacterClick = (character) => {
    if (activeCharacter !== character) {
      setPlayAnimation(false);
      setActiveCharacter(character);
      // Small delay to ensure the animation restarts
      setTimeout(() => setPlayAnimation(true), 50);
    } else {
      // Toggle animation for the same character
      setPlayAnimation(!playAnimation);
    }
  };

  return (
    <div className={styles.slide2}>
      {!isMobile && (
        <>
          {isDesktop && <div className={styles.characterInfoBox}>{uiElement()}</div>}
          {isTablet && <div className={styles.characterTabletName}>{activeCharacter.name}</div>}

          <Canvas
            className={styles.Anim} 
            camera={{
              position: [0, 30, 10],
              fov: fov,
              near: 0.9,
              far: 1000,
            }}
          >
            <AnimatedModel 
              AnimationURL={activeCharacter?.Anim} 
              className={styles.Anim}
              playAnimation={playAnimation}
              textureURLs={activeCharacter?.textures}
            />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              rotateSpeed={0.5}
              target={[0, 4, 0]}
            />
          </Canvas>
        </>
      )}

      <div
        className={styles.scrollableList}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {characters.map((character, index) => (
          <button
            key={index}
            className={`${styles.characterButton} ${activeCharacter.name === character.name ? styles.activeButton : ''}`}
            onClick={() => handleCharacterClick(character)}
          >
            {character.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slide2;
