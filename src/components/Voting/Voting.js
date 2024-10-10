import React from "react";
import styles from './Voting.module.scss';

const Voting = ({ upvote }) => {
    return (
        <div className={styles.voting-container}>
            <img src=""></img>
            <span>{upvote}</span>
            <img src=""></img>
            <img src=""></img>
            <img src=""></img>
        </div>
    );
};

export default Voting;