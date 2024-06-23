import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to Quiz Maker</h1>
        <nav>
          <Link to="/create" className="nav-link">Create a Quiz</Link>
          <Link to="/quizzes" className="nav-link">Take a Quiz</Link>
        </nav>
      </header>
    </div>
  );
};

export default HomePage;
