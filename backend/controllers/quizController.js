import Quiz from '../models/Quiz.js';

export const createQuiz = async (req, res) => {
  const { title, questions, createdBy } = req.body;
  const quiz = new Quiz({ title, questions, createdBy });
  await quiz.save();
  res.status(201).send(quiz);
  // controller logic here
};

export const getAllQuizzes = async (req, res) => {
  const quizzes = await Quiz.find();
  res.status(200).send(quizzes);
};

export const getQuizById = async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  res.status(200).send(quiz);
};
