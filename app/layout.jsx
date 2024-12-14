"use client";
import React, { useState } from 'react';
import Header from './Header';
import Page from './page';
import './globals.css';

const Layout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleButtonClick = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header currentSlide={currentSlide} onButtonClick={handleButtonClick} />
        <Page currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}  />
      </body>
    </html>
  );
};

export default Layout;
