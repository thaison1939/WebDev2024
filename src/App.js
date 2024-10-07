import React, { useEffect, useState } from 'react';
import QuestionList from './components/QuestionList/QuestionList';
import questionsData from './_SAMPLE_DATA/questions.json';
import Navbar from './components/Navbar/Navbar';


function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
      const questionArray = Object.values(questionsData);
      setQuestions(questionArray);
  }, []);

  return (
      <div>
            <Navbar/>
            <QuestionList questions={questions} />
      </div>
  );
}

export default App;
