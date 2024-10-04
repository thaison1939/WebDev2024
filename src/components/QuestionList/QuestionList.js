import React from 'react';
import Question from '../Question/Question';
import './QuestionList.css'

const QuestionList = ({ questions }) => {
    return (
        <div className="question-list-container">
            <div className="list-line"></div>
            <ul className="question-list">
                {questions.map((question, index) => (
                    <li key={index} className="question-list-item">
                        <Question
                            image={question.image}
                            title={question.title}
                            description={question.description}
                            link={question.link}
                        />
                    </li>
                ))}
            </ul>
            <div className="list-line"></div>
        </div>
    );
};

export default QuestionList;
