import React from "react";
import styles from './Voting.module.scss';
import upvoteIcon from '../../../src/assets/upvote.png';
import downvoteIcon from '../../../src/assets/downvote.png';
import bookmarkIcon from '../../../src/assets/bookmark.png';
import historyIcon from '../../../src/assets/logHistory.png';


const Voting = ({ upvote, upvoteImg, downvoteImg, saveImg, historyImg }) => {
    return (
        <div className={styles["voting-container"]}>
            <img src={upvoteIcon} alt="Upvote" className={styles["voting-icon"]} />
            <span className={styles["upvote-count"]}>{upvote}</span>
            <img src={downvoteIcon} alt="Downvote" className={styles["voting-icon"]} />
            <img src={bookmarkIcon} alt="Save" className={styles["voting-icon"]} />
            <img src={historyIcon} alt="History" className={styles["voting-icon"]} />
        </div>
    );
};

export default Voting;