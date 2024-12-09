import React, { useState } from "react";
import styles from "./slide2.module.css";
import characters from "../Data/characters";
import { useDragScroll } from "../hooks/useDragScroll";

const Slide2 = () => {
  const [activeCharacter, setActiveCharacter] = useState(null);
  const { containerRef, attachListeners } = useDragScroll();

  const uiElement = () => {
    if (!activeCharacter) {
      return <div>Select a character to see details.</div>;
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
      <div className={styles.characterInfoBox}>{uiElement()}</div>
      <ul
        className={styles.scrollableList}
        ref={containerRef}
        {...attachListeners()} // Attach the drag scroll listeners
        onWheel={(e) => e.stopPropagation()} // Prevent Swiper from intercepting the wheel event
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
      </ul>
    </div>
  );
};

export default Slide2;
