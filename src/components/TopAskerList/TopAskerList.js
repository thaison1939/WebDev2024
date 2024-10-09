import React from 'react';
import Asker from '../Asker/Asker.js';
import style from './TopAskerList.module.scss'

const TopAskerList = ({ askers }) => {
    return (
        <div>
            <div className={style["heading"]}>Top Network Askers</div>
            <div className={style["asker-list-container"]}>
                <ul>
                    {askers.map((asker, index) => (
                        <li key={index} className={style["asker-list-item"]}>
                            <Asker
                                image={asker.image}
                                name={asker.name}
                                field={asker.field}
                                link={asker.link}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TopAskerList;
