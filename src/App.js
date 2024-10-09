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
    // Put the Navbar at the top of the App component
    // Put the Header component below the Navbar
    // Put the TopNetworkSites component below the FeaturedSite component
    // Put the Footer component at the bottom of the App component
    <div className={styles.container}>
      <Navbar />
      <Header />
      <div className={styles["content-container"]}>
        <QuestionList questions={questions} />
        <TodayFeaturedSite
          image={siteData.image}
          title={siteData.title}
          paragraph={siteData.paragraph}
          questions={siteData.questions}
          answers={siteData.answers}
          answered={siteData.answered}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
