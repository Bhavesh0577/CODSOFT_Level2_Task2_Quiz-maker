

import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema({
  title: String,
  questions: [
    {
      questionText: String,
      options: [String],
      correctAnswer: String
    }
  ],
  createdBy: String
  // schema definition here
});

const Quiz = mongoose.model('Quiz', QuizSchema);

export default Quiz;
