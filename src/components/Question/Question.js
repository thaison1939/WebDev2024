import React from 'react';
import styles from './Question.module.scss';
import Tag from '../Tag/Tag';

const Question = ({ image, title, link, tags, answer, created_time, author, field}) => {
    return (
        <div className={styles.container}>
            <img src={image} alt={title} className={styles["question-image"]} />
            <div className={styles["question-content"]}>
                <a href={link} className={styles["question-link"]}>
                    <div className={styles["question-title"]}>{title}</div>
                </a>
                <div className={styles["question-details"]}>
                    <div className={styles["tags"]}>
                        {tags.map((tag, index) => (
                            <Tag key={index} name_tag={tag} />
                        ))}
                    </div>
                    <div className={styles["details"]}>
                        {answer} answers | asked {new Date(created_time).toLocaleDateString()} by {author} in {field}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
