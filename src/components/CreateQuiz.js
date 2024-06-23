import React, { useState } from 'react';
import axios from 'axios';
import './CreateQuiz.css'; // Import the CSS file

const CreateQuiz = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correctAnswer: '' }]);

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], correctAnswer: '' }]);
  };

  const handleInputChange = (index, event) => {
    const values = [...questions];
    if (event.target.name === 'question') {
      values[index].question = event.target.value;
    } else if (event.target.name === 'correctAnswer') {
      values[index].correctAnswer = event.target.value;
    } else {
      const optionIndex = parseInt(event.target.name.split('-')[1]);
      values[index].options[optionIndex] = event.target.value;
    }
    setQuestions(values);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const quiz = { title, questions };
    try {
      await createQuiz(quiz); // Call the createQuiz function with the quiz data
    } catch (error) {
      console.error('There was an error creating the quiz!', error);
    }
  };

  const createQuiz = async (quizData) => {
    try {
      // Using axios for the request
      const response = await axios.post('http://localhost:5000/api/quizzes', quizData);
      console.log('Quiz created successfully:', response.data);
      // Handle successful creation (e.g., redirect or display a success message)
    } catch (error) {
      console.error('There was an error creating the quiz:', error);
    }
  };

  return (
    <div className="create-quiz">
      <h2>Create Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        {questions.map((question, index) => (
          <div key={index} className="form-group">
            <label>Question {index + 1}:</label>
            <input
              type="text"
              name="question"
              value={question.question}
              onChange={(event) => handleInputChange(index, event)}
              required
            />
            {question.options.map((option, optionIndex) => (
              <input
                key={optionIndex}
                type="text"
                name={`option-${optionIndex}`}
                value={option}
                onChange={(event) => handleInputChange(index, event)}
                placeholder={`Option ${optionIndex + 1}`}
                required
              />
            ))}
            <input
              type="text"
              name="correctAnswer"
              value={question.correctAnswer}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Correct Answer"
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddQuestion} className="add-question">Add Question</button>
        <button type="submit" className="create-quiz">Create Quiz</button>
      </form>
    </div>
  );
};

export default CreateQuiz;