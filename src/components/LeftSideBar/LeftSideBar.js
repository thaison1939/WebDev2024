import React from 'react';
import styles from './LeftSideBar.module.scss'

const leftSideBar = ({ channels, img, alt }) => {
    return (
        <div className={styles["leftSideBar"]}>
                {channels.map((channel, index) => (
                    <div key={index}>
                        <div className={styles["channelName"]}>
                            <img src={channel.img} alt={channel.alt} className={styles["icon"]}/>
                            <span className={styles["channel"]}>{channel.name}</span>
                        </div>

                        {index == 2 && <div className={styles["divide"]}></div>}
                    </div>  
                ))} 

            <div className={styles.team}>
                <div className={styles["bold-text"]}>TEAMS</div>
                <img src={img} alt={alt}></img>
                <p><span className={styles["bold"]}>Now available on Stack Overflow for Teams!</span> AI features where you work: search, IDE, and chat.</p>
                <button className={styles["orangebtn"]}>Learn more</button>
                <a href="">Explore Teams</a>
            </div>
        </div>
    );
};

export default leftSideBar;