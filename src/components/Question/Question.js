import React from 'react';
import styles from './Question.module.scss';

const Question = ({ image, title, description, link }) => {
    return (
        <div className={styles.container}>
            <img src={image} alt={title} className={styles["question-image"]} />
            <div className={styles["question-details"]}>
                <a href={link} className={styles["question-link"]}>
                    <div className={styles["question-title"]}>{title}</div>
                </a>
                <div className={styles["question-description"]}>{description}</div>
            </div>
        </div>
    );
};

export default Question;
