import { useRef } from "react";

export const useDragScroll = () => {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const scrollTop = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startY.current = e.clientY;
    scrollTop.current = containerRef.current.scrollTop;
    e.stopPropagation();
  };
  
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const dy = e.clientY - startY.current;
    containerRef.current.scrollTop = scrollTop.current - dy;
    e.preventDefault(); 
    e.stopPropagation();
  };
  
  const onMouseUp = (e) => {
    isDragging.current = false;
    e.stopPropagation();
  };

  const attachListeners = () => ({
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave: onMouseUp,
  });

  return { containerRef, attachListeners };
};
