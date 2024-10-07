import React from "react";
import styles from './Tag.module.scss';

const Tag = ({name_tag}) => {
    return (
        <div className={styles["name-tag"]}>
            {name_tag}
        </div>
    );
};
export default Tag;