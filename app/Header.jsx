import React from 'react';
import styles from './header.module.css';
import useWindowSize from './Hooks/useWindowSize';

const Header = ({ currentSlide, onButtonClick }) => {
  const {isDesktop,isTablet, isMobile}= useWindowSize(); 

  return (
    <header className={styles.header}>
      <img 
        src="/logo.png" 
        alt="Game Logo" 
        width={250} 
        height={70} 
        className={styles.Logo}
      />
      {!(isTablet|| isMobile) && (
        <ul className={styles.ButtonContainer}>
          <button
            className={currentSlide === 0 ? styles.activeButton : styles.pageButton}
            onClick={() => onButtonClick(0)}
          >
            Home
          </button>
          <button
            className={currentSlide === 1 ? styles.activeButton : styles.pageButton}
            onClick={() => onButtonClick(1)}
          >
            Character Information
          </button>
          <button
            className={currentSlide === 2 ? styles.activeButton : styles.pageButton}
            onClick={() => onButtonClick(2)}
          >
            Game Content
          </button>
          <button
            className={currentSlide === 3 ? styles.activeButton : styles.pageButton}
            onClick={() => onButtonClick(3)}
          >
            Token Information
          </button>
        </ul>
      )}
      <ul className={styles.leftButtonContainer}>
        <button className={styles.leftButton}> Download </button>
        <button className={styles.leftButton}> Contact </button>
      </ul>
    </header>
  );
};

export default Header;
