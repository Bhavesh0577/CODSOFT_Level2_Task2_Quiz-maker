import React from 'react';
import HomePage from './components/HomePage';
import CreateQuiz from './components/CreateQuiz';
import TakeQuiz from './components/TakeQuiz';
import QuizResults from './components/QuizResults';
import QuizList from './components/QuizList';
import './styles/main.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/quiz/:id" element={<TakeQuiz />} />
        <Route path="/results" element={<QuizResults />} />
        <Route path="/quizzes" element={<QuizList />} />
      </Routes>
    </Router>
  );
}

export default App;