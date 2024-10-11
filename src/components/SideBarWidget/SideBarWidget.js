import React from "react";
import styles from './SidebarWidget.module.scss';
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import widgetData from "../../_SAMPLE_DATA/widgetData.json"

const Widget = ({ title, widget_content }) => {
    return (
        <div className={styles.widget}>
            <div className={styles["title"]}><span>{title}</span></div>
                {widget_content.map((content, index) => (
                    <div key={index} className={styles["widget-container"]}>
                        <img src={content.img} className={styles["icon"]}></img>
                        <span className={styles["text"]}>{content.description}</span>
                    </div>
                ))}
        </div>
    );
};

export default Widget;