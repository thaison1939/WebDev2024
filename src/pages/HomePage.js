import React, { useEffect, useState } from 'react';
import QuestionList from '../components/QuestionList/QuestionList';
import questionsData from '../_SAMPLE_DATA/questions.json';
import askersData from '../_SAMPLE_DATA/topAskerList.json';
import sitesData from '../_SAMPLE_DATA/topNetworkSites.json';
import Navbar from '../components/Navbar/Navbar';
import styles from '../App.module.scss'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';

const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
      const questionArray = Object.values(questionsData["questions"]);
      setQuestions(questionArray);
  }, []);

  const [askers, setAskers] = useState([]);

  useEffect(() => {
      const askerArray = Object.values(askersData);
      setAskers(askerArray);
  }, []);

  const [sites, setSites] = useState([]);

  useEffect(() => {
    const siteArray = Object.values(sitesData["sites"]);
    setSites(siteArray);
  }, []);
  
    return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["header"]}>
        <div className={styles["wrapper"]}>
          <Header />
        </div>
      </div>
      <div className={styles["wrapper"]}>
        <div className={styles["content"]}>
          <QuestionList questions={questions} />
          <SideBar askers={askers}/>
          <SideBar sites={sites}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}; 

export default HomePage;