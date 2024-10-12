import React, {useState, useEffect} from 'react';
import AskQuestion from '../components/TourAnimation/AskQuestion/AskQuestion.js';
import TourComponentList from '../components/TourAnimation/TourList/TourComponentList.js';
import toursData from '../_SAMPLE_DATA/toursData.json';

const Tour = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const toursArray = Object.values(toursData); 
        setTours(toursArray); 
    }, []); 

    return (
        <>
            <h1>Due on Saturday!</h1>
            <AskQuestion/>
            <TourComponentList tours = {tours}/>
        </>
    );
};

export default Tour;
 