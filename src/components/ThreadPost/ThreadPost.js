import React from 'react';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import Related from '../Related/Related';
import Voting from '../Voting/Voting';
import UserInfo from '../UserInfo/UserInfo';
import { useParams } from 'react-router-dom';
import styles from './ThreadPost.module.scss';

import Tag from '../Tag/Tag';
import questionData from '../../_SAMPLE_DATA/questions.json';
import votingData from '../../_SAMPLE_DATA/voting.json';
import userInfoData from '../../_SAMPLE_DATA/userInfo.json';
import postData from '../../_SAMPLE_DATA/threadPost.json';
import tagData from '../../_SAMPLE_DATA/tagName.json';

const ThreadPost = ()  => {

    const { id } = useParams();

    const question = questionData.questions.find((question) => question.id === id);
    const voting = votingData.votings.find((voting) => voting.questionId === id);
    const userInfo = userInfoData.users.find((userInfo) => userInfo.questionId === id);
    const post = postData.posts.find((post) => post.id === id);

    if (!post && !question) {
        return <h1>Sorry! Page was not found!</h1>
    }

    const { title, body, asked, modified, viewed } = post;

    const user = userInfo ? {
        time: userInfo.time,
        username: userInfo.username,
        avatar: userInfo.avatar,
        reputation: userInfo.reputation,
        badges: userInfo.badges,
        icon: userInfo.icon,
    } : {};

    const vote = voting ? {
        upvote: voting.upvote
    } : {};


    return (
        <div className={styles.ThreadPost}>
            { title && (
                <div className={styles["threadHeader"]}>
                    <h1>{title}</h1>
                </div>
            )}

            { asked && modified && viewed && (
                <div className={styles.time}>
                    <p>Asked<span>{asked}</span></p>
                    <p>Modified<span>{modified}</span></p>
                    <p>Viewed<span>{viewed}</span></p>
                </div>
            )}
            
            <div className={styles.threadBody}>
                {voting && <Voting {...vote}/>}
                
                <div className={styles.content}>
                    <p>{body}</p>

                    { tagData.tags && (
                        <div className={styles.startingLine}>
                            <div className={styles.tag}>
                                {tagData.tags && tagData.tags.map((tag, index) => (
                                    <Tag key={index} nameTag={tag}/> 
                                ))}
                            </div>
                        </div> 
                    )}
                
                    <div className={styles["tags-user"]}>
                        {userInfo && <UserInfo {...user} />} 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreadPost;