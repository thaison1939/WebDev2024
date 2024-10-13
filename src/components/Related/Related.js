import React from "react";
import styles from './Related.module.scss';

const Related = ({ related_questions }) => {
    const questions = related_questions.questions;

    return (
        <div className={styles["sidebar-related"]}>
            <h4>Related</h4>
            {questions.map((question, index) => (  
                <div key={index}>
                    <div className={styles["question"]}>
                        <a href={`/questions/${question.id}`} className={styles["votes"]}>{question.upvote}</a>
                        <a href={`/questions/${question.id}`} className={styles["blue-text"]}>{question.title}</a>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Related;