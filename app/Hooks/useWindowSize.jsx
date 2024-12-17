import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [ isTablet, setIsTablet] = useState(false);
  const [ isMobile, setIsMobile] = useState(false);
  useEffect(() => {
  
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1025);
        setIsTablet( window.innerWidth <950 && window.innerWidth >= 768)
        setIsMobile(window.innerWidth < 768)
      };

      handleResize(); 
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return { isDesktop, isTablet, isMobile};
};

export default useWindowSize;