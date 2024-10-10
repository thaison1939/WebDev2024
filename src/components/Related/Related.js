import React from "react";
import styles from './Related.module.scss';

const Related = ({ upvote, title }) => {
    return (
        <div className={styles.sidebar-related}>
            <h4>Related</h4>
            <div className={styles["question"]}>
                <div className={styles["votes"]}>{upvote}</div>
                <a href="" className={styles["blue-text"]}>{title}</a>
            </div>
        </div>
    );
};

export default Related;