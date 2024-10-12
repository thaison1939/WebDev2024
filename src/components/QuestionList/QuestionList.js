import React, {useState} from 'react';
import Question from '../Question/Question';
import styles from './QuestionList.module.scss'

const QuestionList = ({ questions }) => {
    const [sortBy, setSortBy] = useState('hot');

    const sortedQuestions = [...questions].sort((a, b) => {
        if (sortBy === 'hot') {
            return b.answer - a.answer;
        } else {
            return new Date(b.created_time) - new Date(a.created_time);
        }
    });

    return (
        <div className={styles.container}>
            <div className={styles["question-tab"]}>
                <div className={styles["tabs"]}>
                    <a 
                        onClick={() => setSortBy('hot')} 
                        className={`${sortBy === 'hot' ? styles.active : ''}`}
                    >
                        hot
                    </a>
                    <a 
                        onClick={() => setSortBy('real-time')} 
                        className={`${sortBy === 'real-time' ? styles.active : ''}`}
                    >
                        real-time
                    </a>
                </div>
            </div>
            <div className={styles["list-line"]}></div>
            <ul className={styles["question-list"]}>
                {sortedQuestions.map((question, index) => (
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
