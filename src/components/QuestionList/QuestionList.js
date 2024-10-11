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
                            link={question.link}
                            tags={question.tags}
                            answer={question.answer}
                            created_time={question.created_time}
                            author={question.author}
                            field={question.field}
                        />
                    </li>
                ))}
            </ul>
            <div className={styles["list-line"]}></div>
        </div>
    );
};

export default QuestionList;
