import React, { useState, useRef } from "react";
import styles from './UnlockBadges.module.scss';
import badgeData from '../../_SAMPLE_DATA/tourBadge.json';

function UnlockBadges() {
    const [badges] = useState(badgeData);
    const container = useRef(null); // Define the container here

    return (
        <div ref={container} className={styles.badges-container}> {/* Use ref here */}
            <h2 className={styles["badges-title"]}>Unlock badges for special achievements</h2>
            <div className={styles["badges-left-col"]}>
                <p>Badges are special achievements you earn for participating on the site. They come in three levels: bronze, silver, and gold.</p>
            </div>
            <div className={styles["badges-right-col"]}>
                <div className={styles["badges-block"]}>
                    <table className={styles["badges-page"]}>
                        <tbody>
                            {badges.map(badge => (
                                <tr key={badge.title}> {/* Add a unique key for each badge */}
                                    <td className={styles["badges-cell"]}>
                                        <a title={badge.title} className={"badge"}>
                                            <span className={styles["badge3"]}></span>
                                            "&nbsp;{badge.text}"
                                        </a>
                                    </td>
                                    <td>{badge.td_context}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UnlockBadges;
