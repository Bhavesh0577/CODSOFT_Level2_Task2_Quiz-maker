// QuizList.js
import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import './QuizList.css';

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('/quizzes');
        setQuizzes(response.data);
      } catch (error) {
        setError('Failed to fetch quizzes. Please try again later.');
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="quiz-list">
      <h2>Available Quizzes</h2>
      {error && <p className="error-message">{error}</p>}
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>{quiz.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuizList;
