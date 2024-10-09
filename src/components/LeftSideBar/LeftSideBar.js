import React from 'react';
import styles from './left-sidebar.module.scss'

const leftSideBar = ({ image, alt, channelName }) => {
    return (
        <div className={styles.leftSideBar}>
            <div className={styles["channelName"]}>
                <img src={image} alt={alt} className={styles["icon"]}/>
                <span className={styles["channel"]}>{channelName}</span>
            </div>   

            <div className={styles.team}>
                <img src={""} alt={"overflow_AI"}></img>
                <p><span className={styles["bold"]}>Now available on Stack Overflow for Teams!</span> AI features where you work: search, IDE, and chat.</p>
                <button className={styles["orangebtn"]}>Learn more</button>
                <a href="">Explore Teams</a>
            </div>
        </div>
    );
};

export default leftSideBar;