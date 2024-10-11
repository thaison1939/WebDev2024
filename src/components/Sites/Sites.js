import React from "react";
import styles from './Sites.module.scss';

const Sites = ({name,image,link,content}) => {
    return (
    <a href = {link}>
        <img className={styles["topnetworksites-logo"]} src={image} alt = {name}/>
        {content}
    </a>
    )  
}

export default Sites;