import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
  
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1000);
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