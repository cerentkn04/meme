"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./page.module.css";

export default function Page({ currentSlide, setCurrentSlide }) {
  const swiperRef = useRef(null);
  const swiperStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    console.log("Current slide in Page: " + currentSlide);
    handleSlideChange(currentSlide);
  }, [currentSlide]);

  const handleSlideChange = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        style={swiperStyle}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}  // Set current slide on slide change
        ref={swiperRef}
      >
        <SwiperSlide className={styles.slide1}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.slide2}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.slide3}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.slide4}>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}