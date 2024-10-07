import React, { useEffect, useState } from 'react';
import QuestionList from './components/QuestionList/QuestionList';
import questionsData from './_SAMPLE_DATA/questions.json';
import Navbar from './components/Navbar/Navbar';


import styles from './App.module.scss'

import TodayFeaturedSite from './components/TodayFeaturedSite/TodayFeaturedSite';
import siteData from './_SAMPLE_DATA/todayfeaturedsite.json';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import TopNetworkSites from './components/TopNetworkSites/TopNetworkSites';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
      const questionArray = Object.values(questionsData);
      setQuestions(questionArray);
  }, []);

  
  return (
      <div className={styles.container}>
        <div><Header/></div>
        <QuestionList questions={questions} />
        <TodayFeaturedSite
          image={siteData.image}
          title={siteData.title}
          paragraph={siteData.paragraph}
          questions={siteData.questions}
          answers={siteData.answers}
          answered={siteData.answered}
        />
        <TopNetworkSites/>
      </div>
  );
}

export default App;
