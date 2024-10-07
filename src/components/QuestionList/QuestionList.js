import React from 'react';
import Question from '../Question/Question';
import styles from './QuestionList.module.scss'

const QuestionList = ({ questions }) => {
    return (
        <div className={styles.container}>
            <div className={styles["question-tab"]}>hot real-time</div>
            <div className={styles["list-line"]}></div>
            <ul className={styles["question-list"]}>
                {questions.map((question, index) => (
                    <li key={index} className={styles["question-list-item"]}>
                        <Question
                            image={question.image}
                            title={question.title}
                            description={question.description}
                            link={question.link}
                        />
                    </li>
                ))}
            </ul>
            <div className={styles["list-line"]}></div>
        </div>
    );
};

export default QuestionList;
