import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [ isTablet, setIsTablet] = useState(false);

  useEffect(() => {
  
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 950);
        setIsTablet(window.innerWidth )
      };

      handleResize(); 
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return isDesktop;
};

export default useWindowSize;