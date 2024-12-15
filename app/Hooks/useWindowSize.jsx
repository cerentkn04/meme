import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [ isTablet, setIsTablet] = useState(false);

  useEffect(() => {
  
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 950);
        setIsTablet( window.innerWidth <950 && window.innerWidth >= 768)
      };

      handleResize(); 
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return { isDesktop, isTablet };
};

export default useWindowSize;