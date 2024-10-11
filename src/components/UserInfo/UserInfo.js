import React from "react";
import styles from './UserInfo.module.scss';

const UserInfo = ({ time, avatar, name, icon, repuScore, badges, badgesImages }) => {
    return (
        <div className={styles.user-info}>
            <div className={styles["time"]}>
                <a href="" className={styles["blue-text"]}>{time}</a>
            </div>

            <img src={avatar} alt={`${name}'s avatar`}></img>

            <div className={styles["author-info"]}>
                <div className={styles["author"]}>
                    <a href="">{name}</a>
                    <span>{icon}</span> ♦
                </div>
                <div className={styles["repu-score"]}>
                    <p>{repuScore}</p>
                    <img src={badgesImages.gold}></img> /*hard code gold img*/
                    <p>{badges.gold}</p>
                    <img src={badgesImages.silver}></img>
                    <p>{badges.silver}</p>
                    <img src={badgesImages.bronze}></img>
                    <p>{badges.bronze}</p>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;