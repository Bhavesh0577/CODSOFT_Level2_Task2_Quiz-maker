// services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'mongodb://localhost:27017/quiz-maker', // Ensure this is the URL of your backend server
});

export default api;
