import React from "react";
import styles from './Related.module.scss';

const Related = ({ related_questions }) => {
    return (
        <div className={styles.sidebar-related}>
            <h4>Related</h4>
                {related_questions.map(( question, index ))}
                    <div key={index}>
                        <div className={styles["question"]}>
                            <div className={styles["green-box"]}><a href="" className={styles["votes"]}>{question.upvote}</a></div>
                            <a href="" className={styles["blue-text"]}>{question.title}</a>
                        </div>
                    </div>
        </div>
    );
};

export default Related;