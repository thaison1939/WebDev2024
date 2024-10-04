import React, { useEffect, useState } from 'react';
import QuestionList from './components/QuestionList/QuestionList';
import questionsData from './_SAMPLE_DATA/questions.json';
import Tag from './components/MiniTag/Tag';
import tagData from './_SAMPLE_DATA/tagName.json'

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
      const questionArray = Object.values(questionsData);
      setQuestions(questionArray);
  }, []);

  
  return (
      <div>
        <QuestionList questions={questions} />

        {/* Tags */}
        <div> {tagData.tags.map((tag, index) => (
            <Tag key={index} name_tag={tag}/> 
        ))}
        </div>

      </div>
  );
}

export default App;
