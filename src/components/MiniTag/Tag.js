import React from "react";
import './Tag.css';

const Tag = ({name_tag}) => {
    return (
        <div className="name-tag">
            {name_tag}
        </div>
    );
};
export default Tag;