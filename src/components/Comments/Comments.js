import React from "react";
import styles from './Comments.module.scss';

const Comment = ({ upvote, comment, author, time}) => {
    return (
        <div className={styles.comment}>
            <div className={styles.upvote}><span>{upvote}</span></div>
            <div className={styles.comment-section}>
                <span>{comment}</span>
                <span className={styles.blue-text}>{author}</span>
                <span>{time}</span>
            </div> 
            <span>Add a comment</span>
        </div>
    );
};

export default Comment;