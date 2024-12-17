import styles from "./slide3.module.css";
import useWindowSize from "../Hooks/useWindowSize";
import { useState } from "react";
import levelGifs from "../Data/levelGifs";


const Slide3 = () => {
  const [activeVid, setActiveVid] = useState(levelGifs[0]);
  const {isDesktop, isTablet} = useWindowSize();

  return (
    <>
      <div className={styles.Slide3}>
        <div className={styles.leftContainer}>
        {(isDesktop) && <div className={styles.leftContainerHead}>LEVELS:</div>}
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
                <img src={level.imgpath}/>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.level}>
          {(isDesktop||isTablet) && activeVid && (
            <>
            <h3> {activeVid.name}</h3>
            <img  src={activeVid.gifPath} width="100%" height="auto" controls className={styles.levelVid}/>
            </>
          )}
          {!(isDesktop||isTablet)&& <div>Mobile Version</div>} 
        </div>
      </div>
    </>
  );
};

export default Slide3;
