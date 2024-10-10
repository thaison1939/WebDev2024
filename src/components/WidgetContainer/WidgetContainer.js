import React from 'react'
import styles from './WidgetContainer.module.scss'

const WidgetContainer = ({ img, content }) => {
    return (
        <div className={styles.widget-container}>
            <div className={styles.img-container}>
                <img src={img}></img>
            </div>
            <div className={styles.a-container}>
                <a href="">{content}</a>
            </div>
        </div>
    );
};

export default WidgetContainer;