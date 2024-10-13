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

    const post = questionData.questions.find((question) => question.id === id);
    const voting = votingData.votings.find((voting) => voting.questionId === id);
    const userInfo = userInfoData.users.find((userInfo) => userInfo.questionId === id);
    const relatedQuestion = relatedQuestionData.questions.find((relatedQuestion) => relatedQuestion.questionId === id);
    const widget = widgetData.widgets.find((widget) => widget.questionId === id);


    if (questionData && questionData.questions) {
        console.log("Finding question in questions array...");
        const post = questionData.questions.find((question) => question.id === id);
        console.log("Post found:", post);
      } else {
        console.error("Question data or questions array is missing.");
      }
      
      if (votingData && votingData.votings) {
        console.log("Finding voting data...");
        const voting = votingData.votings.find((voting) => voting.questionId === id);
        console.log("Voting data found:", voting);
      } else {
        console.error("Voting data or votings array is missing.");
      }
      
      if (userInfoData && userInfoData.users) {
        console.log("Finding user info data...");
        const userInfo = userInfoData.users.find((userInfo) => userInfo.questionId === id);
        console.log("User info data found:", userInfo);
      } else {
        console.error("User info data or users array is missing.");
      }

    if (!post) {
        return <h1>Sorry! Page was not found!</h1>
    }

    const { title, body, asked, modified, viewed} = post;
    
    return (
        <div className={styles.ThreadPost}>
            <div className={styles.leftSidebar}><LeftSideBar /></div>
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
                    <SideBarWidget widget={widget}/>
                    <Related relatedQuestions={relatedQuestion}/>
                </div>

            </div>
        </div>
    );
};

export default ThreadPost;