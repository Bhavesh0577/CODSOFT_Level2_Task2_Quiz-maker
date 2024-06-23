import express from 'express';
import { createQuiz } from '../controllers/quizController.js'; // Adjust the path if needed

const router = express.Router();

router.post('/', createQuiz);

export default router;
