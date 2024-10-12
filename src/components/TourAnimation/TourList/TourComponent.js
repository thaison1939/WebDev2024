import React from 'react';
import styles from './TourComponent.module.scss';

const TourComponent = ({title, paragraph, arrow, image}) => {
    return (
        <div className={styles["container"]}>
            <h2 className={styles["title"]}>{title}</h2>

            <div className={styles["content-container"]}>
                <div className={styles["para-content"]}>
                    <div className={styles["paragraph"]}>

                        {/* help json file apply html tag */}
                        <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                    </div>
                </div>
                
                <div className={styles["arrow"]}>
                    <img src={arrow} alt="arrow"></img>
                </div>
                <div className={styles["image"]}>
                    <img src={image} alt="right-content"></img>
                </div>
            </div>
            
       </div>
    )
}; 
export default TourComponent;