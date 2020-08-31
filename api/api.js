import express from 'express';
import quotes from './route/quotes.js';

const api = express();

api.use(express.json());

api.use("/quotes", quotes);
api.all("*", (req, res) => res.status(404).send('This route has no content.'));

export default api;
