"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./page.module.css";
import Slide2 from "./slides/slide2"
import Slide3 from "./slides/slide3"

export default function Page({ currentSlide, setCurrentSlide }) {
  const swiperRef = useRef(null);
  const swiperStyle =
  {
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
        mousewheel
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        ref={swiperRef}
      >
        <SwiperSlide className={styles.slide1}></SwiperSlide>
        <SwiperSlide className={styles.slide2}>
          <Slide2 />
        </SwiperSlide>
        <SwiperSlide className={styles.slide3}>
          <Slide3/>
        </SwiperSlide>
        <SwiperSlide className={styles.slide4}></SwiperSlide>
      </Swiper>
    </>
  );
}
