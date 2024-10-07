import React, { useEffect, useState } from 'react';
import QuestionList from './components/QuestionList/QuestionList';
import questionsData from './_SAMPLE_DATA/questions.json';
import Navbar from './components/Navbar/Navbar';


import Tag from './components/MiniTag/Tag';
import tagData from './_SAMPLE_DATA/tagName.json';

import TodayFeaturedSite from './components/TodayFeaturedSite/TodayFeaturedSite';
import siteData from './_SAMPLE_DATA/todayfeaturedsite.json';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
      const questionArray = Object.values(questionsData);
      setQuestions(questionArray);
  }, []);

  
  return (
      <div>
        <div>
            <Navbar/>
            <QuestionList questions={questions} />
        </div>

        <div> {tagData.tags.map((tag, index) => (
            <Tag key={index} name_tag={tag}/> 
        ))}
        </div>

        <div>
            <TodayFeaturedSite
              image={siteData.image}
              title={siteData.title}
              paragraph={siteData.paragraph}
              questions={siteData.questions}
              answers={siteData.answers}
              answered={siteData.answered}
            />
        </div>
      </div>
  );
}

export default App;
