"use client";
import React, { useState } from "react";
import styles from "./slide2.module.css";
import characters from "../Data/characters";
import useWindowSize from "../Hooks/useWindowSize";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const AnimatedModel = dynamic(() => import("./AnimatedModel"), { ssr: false });

const Slide2 = () => {
  const { isDesktop, isTablet,isMobile } = useWindowSize();
  const [activeCharacter, setActiveCharacter] = useState(characters[0] || {});
  const fov = isDesktop ? 40 : isTablet ? 35 : 25;
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

  return (
    <div className={styles.slide2}>
      {!(isMobile) && (
        <>
          {isDesktop && (<div className={styles.characterInfoBox}>{uiElement()}</div>) }
          {isTablet && (<div className={styles.characterTabletName}>{activeCharacter.name}</div>) }
        
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
              textureURLs={[
                activeCharacter.Texture1,
                activeCharacter.Texture2,
                activeCharacter.Texture3,
              ]}
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
            className={styles.characterButton}
            onClick={() => setActiveCharacter(character)}
          >
           
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slide2;
