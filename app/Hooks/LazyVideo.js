// LazyVideo.js
import React from 'react';

const LazyVideo = ({ videoSrc, className }) => {
  return (
    <img 
    className={className} 
    src={videoSrc} 
    alt="Level GIF" 
    loading="lazy" // Optional: Lazy load the GIF for performance
  />
);
  
};

export default LazyVideo;
