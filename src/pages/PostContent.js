import React from 'react';
import ThreadPost from '../components/ThreadPost/ThreadPost';
import threadPostData from '../_SAMPLE_DATA/threadPost.json';
import PostHeader from '../components/PostHeader/postHeader';
import styles from '../PostContent.module.scss';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';  
import SideBarWidget from '../components/SideBarWidget/SideBarWidget'; 
import Related from '../components/Related/Related';  
import relatedQuestionsData from '../_SAMPLE_DATA/relatedQuestions.json';
import sideBarWidgetData from '../_SAMPLE_DATA/widget.json';
import leftSideBarData from '../_SAMPLE_DATA/leftSideBar.json';
import postHeaderData from '../_SAMPLE_DATA/postHeader.json';
import commentData from '../_SAMPLE_DATA/comments.json';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const PostContent = ({ threadId }) => {
    const { id } = useParams();

    if (!id) {
        return (
            <h1>Sorry! Page was not found!</h1>
        );
    };

    const relatedQuestionDetails = relatedQuestionsData.relatedQuestions.find((question) => question.id === id);
    const widgetDetails = sideBarWidgetData.widgets.find((widget) => widget.questionId === id);

    const lsbContent = leftSideBarData.sidebarContent[0];

    const widgetContent = widgetDetails ? {
        title: widgetDetails.title,
        widgetContent: widgetDetails.widgetContent.map((wc) => ({
           img: wc.img,
           text: wc.text 
        }))
    } : {};

    const relatedQuestions = relatedQuestionDetails ? {
        questions: relatedQuestionDetails.questions.map((question) => ({
            upvote: question.upvote,
            title: question.title
        }))
    } : {};

    const { post } = threadPostData;

    return (
        <div className={styles.postContent}>
            <Navbar className={styles.navbar}/>
            <PostHeader className={styles.postHeader}
                imageUrl={postHeaderData.postHeader.imageUrl} 
                altText={postHeaderData.postHeader.altText}
                addAltText={postHeaderData.postHeader.addAltText}
            />

            <div className={styles.wrapper}>
                <div className={styles.leftSidebar}>
                    <LeftSideBar content={lsbContent} />
                </div>

                <div className={styles.mainContent}>
                    <div className={styles.content}>
                        {threadPostData.posts.map((post) => (
                            <div key={post.id} className={styles.body}>
                                <ThreadPost  
                                    title={post.title}
                                    body={post.body}
                                />
                            </div>
                        ))}
                    </div>

                    <div className={styles.rightSidebar}>
                        <SideBarWidget widget={widgetContent} />
                        {relatedQuestions && <Related relatedQuestions={relatedQuestions} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostContent;
