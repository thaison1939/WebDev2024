import React from "react";
import styles from './UserInfo.module.scss';
import goldIcon from '../../assets/gold.png';
import silverIcon from '../../assets/silver.png';
import bronzeIcon from '../../assets/bronze.png';

const UserInfo = ({ time, avatar, username, icon, reputation, badges }) => {
    return (
        <div className={styles.userInfo}>
            <div className={styles.time}>
                <a href="#" className={styles.blueText}>{time}</a>
                <img src={avatar} alt={`${username}'s avatar`} className={styles.avatar}></img>
            </div>

            <div className={styles.authorInfo}>
                <div className={styles.author}>
                    <a href="">{username}</a>
                    <span>{icon}</span>
                </div>

                <div className={styles.repuScore}>
                    <p>{reputation}</p>

                    {badges && (
                        <div className={styles.badges}>
                            {badges.gold > 0 && (
                                <>
                                    <img src={goldIcon} alt="gold badge" />
                                    <p>{badges.gold}</p>
                                </>
                            )}

                            {badges.silver > 0 && (
                                <>
                                    <img src={silverIcon} alt="silver badge" />
                                    <p>{badges.silver}</p>
                                </>
                            )}

                            {badges.bronze > 0 && (
                                <>
                                    <img src={bronzeIcon} alt="bronze badge" />
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
