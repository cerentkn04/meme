"use client";
import React, { useState } from "react";
import styles from "./slide2.module.css";
import characters from "../Data/characters";
import useWindowSize from "../Hooks/useWindowSize";

import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('./threeScene'), { ssr: false });
const Slide2 = () => {
  const isDesktop = useWindowSize();
  const [activeCharacter, setActiveCharacter] = useState(null);

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

  return (
    <div className={styles.slide2}> 
      {isDesktop && (
        <div className={styles.characterInfoBox}>{uiElement()} </div> ) 
      }
       <div style={{ width: '100vw', height: '100vh' }}>
      <ThreeScene />
    </div>
      <div
        className={styles.scrollableList}
        onMouseEnter={() => {
          document.querySelector(".mySwiper").swiper.mousewheel.disable();
        }}
        onMouseLeave={() => {
          document.querySelector(".mySwiper").swiper.mousewheel.enable();
        }}
      >
        {characters.map((character, index) => (
          <button
            key={index}
            className={styles.characterButton}
            onClick={() => setActiveCharacter(character)}
          >
            {character.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slide2;
