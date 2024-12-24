import styles from "./slide3.module.css";
import useWindowSize from "../Hooks/useWindowSize";
import { useState } from "react";
import levelGifs from "../Data/levelGifs";
import dynamic from "next/dynamic";


const LazyVideo = dynamic(() => import('./../Hooks/LazyVideo.js'), { ssr: false });

const Slide3 = () => {
  const [activeVid, setActiveVid] = useState(levelGifs[0]);
  const { isDesktop, isTablet } = useWindowSize();

  return (
    <>
    <div className={styles.wrapper}>


      <div className={styles.Slide3}>
        <div className={styles.leftContainer}>
          
          <div
            className={styles.levelsContainer}
            onMouseEnter={() => {
              document.querySelector(".mySwiper").swiper.mousewheel.disable();
            }}
            onMouseLeave={() => {
              document.querySelector(".mySwiper").swiper.mousewheel.enable();
            }}
          >
            {levelGifs.map((level, index) => (
              <button
                key={index}
                className={styles.levelButton}
                onClick={() => setActiveVid(level)}
              >
                <h2>{level.name}</h2>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.level}>
          {(isDesktop || isTablet) && activeVid && (
            <div className={styles.vid}>
              <LazyVideo
                videoSrc={activeVid.gifPath} // Assume LazyVideo handles lazy loading of the video component
                className={styles.levelVid}
              />
              <div className={styles.levelVidInfo}> </div>
            </div >
          )}
          {!(isDesktop || isTablet) && <div>Mobile Version</div>}
        </div>
      </div>
      </div>
    </>
  );
};

export default Slide3;
