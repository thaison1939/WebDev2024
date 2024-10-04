import React from 'react';
import './Question.css';

const Question = ({ image, title, description, link }) => {
    return (
        <div className="question-title">
            <img src={image} alt={title} className="question-image" />
            <div className="question-details">
                <a href={link} className="question-link">
                    <div className="question-title-text">{title}</div>
                </a>
                <div className="question-description">{description}</div>
            </div>
        </div>
    );
};

export default Question;
