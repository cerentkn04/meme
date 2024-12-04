"use client";
import React, { useState } from 'react';
import Header from './Header';
import Page from './page';
import './globals.css';

const Layout = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleButtonClick = (slideIndex) => {
    setCurrentSlide(slideIndex);
    console.log(slideIndex);  // This will log the updated index
  };

  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header currentSlide={currentSlide} onButtonClick={handleButtonClick} />
        <Page currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} style={{ width: "100%" }} />
      </body>
    </html>
  );
};

export default Layout;
