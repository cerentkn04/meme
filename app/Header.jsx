import React, { useState, useEffect } from 'react';
import styles from './header.module.css';
import Image from 'next/image';

const Header = ({ currentSlide, onButtonClick }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 769);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
    
        <Image 
          src="/logo.png" 
          alt="Company Logo" 
          width={250} 
          height={40} 
          className={styles.Logo}
        />
 
      {isDesktop && (
        <ul className={styles.ButtonContainer}>
          <button
            className={currentSlide === 0 ? styles.activeButton : ''}
            onClick={() => onButtonClick(0)}
          >
            Home
          </button>
          <button
            className={currentSlide === 1 ? styles.activeButton : ''}
            onClick={() => onButtonClick(1)}
          >
            Character Information
          </button>
          <button
            className={currentSlide === 2 ? styles.activeButton : ''}
            onClick={() => onButtonClick(2)}
          >
            Game Content
          </button>
          <button
            className={currentSlide === 3 ? styles.activeButton : ''}
            onClick={() => onButtonClick(3)}
          >
            Token Information
          </button>
        </ul>
      )}
    </header>
  );
};

export default Header;
