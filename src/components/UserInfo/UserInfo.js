import React from "react";
import styles from './UserInfo.module.scss';

const UserInfo = ({ time, avatar, name, icon, repuScore, gold, silver, bronze, goldImg, silverImg, bronzeImg }) => {
    return (
        <div className={styles.user-info}>
            <div className={styles["time"]}>
                <a href="" className={styles["blue-text"]}>{time}</a>
            </div>

            <img src={avatar}></img>

            <div className={styles["author-info"]}>
                <div className={styles["author"]}>
                    <a href="">{name}</a>
                    <span>{icon}</span> ♦
                </div>
                <div className={styles["repu-score"]}>
                    <p>{repuScore}</p>
                    <img src={goldImg}></img> /*hard code gold img*/
                    <p>{gold}</p>
                    <img src={silverImg}></img>
                    <p>{silver}</p>
                    <img src={bronzeImg}></img>
                    <p>{bronze}</p>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;