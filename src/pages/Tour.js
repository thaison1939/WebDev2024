import React, {useState, useEffect} from 'react';
import styles from './Tour.module.scss';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AskQuestion from '../components/TourAnimation/AskQuestion/AskQuestion.js';
import TourIntro from '../components/TourIntro/TourIntro.js';
import TourOutro from '../components/TourOutro/TourOutro.js';
import TourComponentList from '../components/TourAnimation/TourList/TourComponentList.js';
import IntroData from '../_SAMPLE_DATA/TourIntro.json';
import OutroData from '../_SAMPLE_DATA/TourOutro.json';
import toursData from '../_SAMPLE_DATA/toursData.json';
import NewUser from '../components/NewUser/NewUser.js';

const Tour = () => {
    const [intro, setIntro] = useState([]);

    useEffect(() => {
        const introArray = Object.values(IntroData); 
        setIntro(introArray); 
    }, []); 

    const [outro, setOutro] = useState([]);

    useEffect(() => {
        const outroArray = Object.values(OutroData); 
        setOutro(outroArray); 
    }, []); 

    const [tours, setTours] = useState([]);

    useEffect(() => {
        const toursArray = Object.values(toursData); 
        setTours(toursArray); 
    }, []); 

    return (
        <div className={styles.container}>
            <Navbar />
            <div className= {styles["header"]}>
                <div className={styles["wrapper"]}>
                    <Header />
                </div>  
            </div>
            <div className={styles["content"]}>
                <div className={styles["wrapper"]}> 
                    {/*Intro*/}
                    {intro.map((intro, index) => (
                        <TourIntro
                            key={index}
                            title={intro.title}
                            image={intro.image}
                            additional_info={intro.additional_info}
                        />
                    ))}
                    <AskQuestion/>
                    <TourComponentList tours = {tours}/>
                    <NewUser/>
                    {/*Outro*/}
                    {outro.map((outro, index) => (
                        <TourOutro
                            key={index}
                            title={outro.title}
                            image={outro.image}
                            additional_info={outro.additional_info}
                        />
                        ))}
                </div>                    
            </div>
            
            <Footer />
        </div>
        );

};

export default Tour;
 