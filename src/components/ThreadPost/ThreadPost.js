import React from 'react';
import styles from './ThreadPost.module.scss'
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import Related from '../Related/Related';
import Voting from '../Voting/Voting';
import userInfoData from '../../_SAMPLE_DATA/userInfoData.json';
import UserInfo from '../UserInfo/UserInfo';


const ThreadPost = ({ post, asked, modified, viewed }) => {
    const { title, body } = post.content;
    
    return (
        <div className={styles.ThreadPost}>
            <div className={styles.left-sidebar}><LeftSideBar /></div>
            <div className={styles.title}>
                <h1>{title}</h1>
                <button className={styles.button}>Ask Question</button>
            </div>

            <div className={styles.content}>
                <div className={styles.time}>
                    <p>Asked<span>{asked}</span></p>
                    <p>Modified<span>{modified}</span></p>
                    <p>Viewed<span>{viewed}</span></p>
                </div>

                <div>
                    <Voting />
                    <p>{body}</p>
                    <UserInfo />
                </div>

                <div className={styles.right-sidebar}>
                    <Related />
                </div>

            </div>
        </div>
    );
};

export default ThreadPost;