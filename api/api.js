import express from 'express';

const api = express();

api.use(express.json());

api.all("*", (req, res) => res.status(404).send('This route has no content.'));

export default api;
