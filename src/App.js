import React from 'react';
import HomePage from './pages/HomePage';
import Tour from './pages/Tour';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import questions from '../src/_SAMPLE_DATA/questions.json';
import ThreadPost from './components/ThreadPost/ThreadPost';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/tour" element={<Tour />}></Route>
        <Route path="/questions/:id" element={<ThreadPost />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
