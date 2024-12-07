import React, { useState, useEffect } from 'react';
import styles from './header.module.css';


const Header = ({ currentSlide, onButtonClick }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1064);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
    
        <img 
          src="/logo.png" 
          alt="Game Logo" 
          width={250} 
          height={70} 
          className={styles.Logo}
        />
      {isDesktop && (
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
