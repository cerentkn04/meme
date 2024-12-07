import React, { useState, useEffect } from 'react';
import styles from "./slide2.module.css"


const Slide2 = () =>
{
    return(
        <div className={styles.slide2}>
            <div className={styles.characterInfoBox} >
                    heheh
            </div>
            <ul>
                <button  className={ styles.characterButton}>
                          
                </button>
                <button className={ styles.characterButton}>
                    
                </button>
                <button className={ styles.characterButton}>
                    
                </button>
                <button className={ styles.characterButton}>
                    
                </button>
                <button className={ styles.characterButton}>
                    
                </button>
            </ul>
        </div>
    );

};

export default Slide2