import React from "react";
import styles from './UserInfo.module.scss';

const UserInfo = ({ time, avatar, name, icon, repuScore, badges, badgesImages }) => {
    return (
        <div className={styles["user-info"]}>
            <div className={styles["time"]}>
                <a href="" className={styles["blue-text"]}>{time}</a>
            </div>

            <img src={avatar} alt={`${name}'s avatar`} className={styles.avatar}></img>

            <div className={styles["author-info"]}>
                <div className={styles["author"]}>
                    <a href="">{name}</a>
                    <span>{icon}</span> ♦
                </div>

                <div className={styles["repu-score"]}>
                    <p>{repuScore}</p>

                    {badges && badgesImages && (
                        <div className={styles["badges"]}>
                            {badges.gold > 0 && (
                                <>
                                    <img src={badgesImages.gold} alt="gold badge" />
                                    <p>{badges.gold}</p>
                                </>
                            )}

                            {badges.silver > 0 && (
                                <>
                                    <img src={badgesImages.silver} alt="silver badge" />
                                    <p>{badges.silver}</p>
                                </>
                            )}

                            {badges.bronze > 0 && (
                                <>
                                    <img src={badgesImages.bronze} alt="bronze badge" />
                                    <p>{badges.bronze}</p>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserInfo;