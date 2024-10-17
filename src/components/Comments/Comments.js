import React from 'react';
import styles from './Comments.module.scss';

const Comments = ({ comments, threadId }) => {
    const postComments = comments.find(commentGroup => commentGroup.threadId === threadId)?.comments || [];

    return (
        <div className={styles.comments}>
            {postComments.map((comment) => (
                <div key={comment.id} className={styles.comment}>
                    <div className={styles.upvote}>{comment.upvote}</div>
                    <div className={styles.text}>
                        <p>{comment.text}</p>
                        <div className={styles.inline}>
                            <span className={styles.author}>{comment.author}</span> 
                            <span className={styles.date}>{comment.date}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Comments;
