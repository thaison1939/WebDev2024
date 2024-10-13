import React from 'react';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import Related from '../Related/Related';
import Voting from '../Voting/Voting';
import UserInfo from '../UserInfo/UserInfo';
import { useParams } from 'react-router-dom';
import SideBarWidget from '../SideBarWidget/SideBarWidget';
import styles from './ThreadPost.module.scss';

import questionData from '../../_SAMPLE_DATA/questions.json';
import votingData from '../../_SAMPLE_DATA/voting.json';
import userInfoData from '../../_SAMPLE_DATA/userInfo.json';
import widgetData from '../../_SAMPLE_DATA/widget.json';
import relatedQuestionData from '../../_SAMPLE_DATA/relatedQuestions.json';

const ThreadPost = ()  => {

    const { id } = useParams();

    console.log("Post ID: ",id);

    const post = questionData?.questions?.find((question) => question.id === id);
    const voting = votingData?.votings?.find((voting) => voting.questionId === id);
    const userInfo = userInfoData?.users?.find((userInfo) => userInfo.questionId === id);
    const relatedQuestion = relatedQuestionData?.related_questions?.find((relatedQuestion) => relatedQuestion.questionId === id);
    const widget = widgetData?.widgets?.find((widget) => widget.questionId === id);
    console.log("Post: ", post);
    console.log("Voting: ", voting);
    console.log("User Info: ", userInfo);
    console.log("Related Question: ", relatedQuestion);
    console.log("Widget: ", widget);

    if (!post) {
        return <h1>Sorry! Page was not found!</h1>
    }

    const { title, body, asked, modified, viewed} = post;
    return (
        <div className={styles.ThreadPost}>
          {/* TODO: Fix params */}
            {/* <div className={styles.leftSidebar}><LeftSideBar /></div> */}
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
                    <Voting votes={voting}/>
                    <p>{body}</p>
                    <UserInfo info={userInfo}/>
                </div>
                
                <div className={styles.rightSidebar}>
                  {/* TODO: Fix params */}
                    {/* <SideBarWidget widget={widget}/> */}
                    <Related related_questions={relatedQuestion}/>
                </div>

            </div>
        </div>
    );
};

export default ThreadPost;