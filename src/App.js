import React from 'react';
import HomePage from './pages/HomePage';
import Tour from './pages/Tour';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/tour" element={<Tour />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
