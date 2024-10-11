import React from "react";
import styles from './Voting.module.scss';

const Voting = ({ upvote, upvoteImg, downvoteImg, saveImg, historyImg }) => {
    return (
        <div className={styles["voting-container"]}>
            <img src={upvoteImg} alt="Upvote" className={styles["voting-icon"]} />
            <span className={styles["upvote-count"]}>{upvote}</span>
            <img src={downvoteImg} alt="Downvote" className={styles["voting-icon"]} />
            <img src={saveImg} alt="Save" className={styles["voting-icon"]} />
            <img src={historyImg} alt="History" className={styles["voting-icon"]} />
        </div>
    );
};

export default Voting;