import React from "react";
import styles from './SidebarWidget.module.scss';
import WidgetContainer from "../WidgetContainer/WidgetContainer";
import widgetData from "../../_SAMPLE_DATA/widgetData.json"

const Widget = ({ title, }) => {
    return (
        <div className={styles.widget}>
            <div className={styles.title}><span>{title}</span></div>
            <div className={styles.widget-container}>
                <WidgetContainer 
                     img = {widgetData.img}
                     content = {widgetData.content}
                />
            </div>
        </div>
    );
};

export default Widget;