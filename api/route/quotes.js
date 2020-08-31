import express from 'express';
import quotes from '../controller/quotes.controller.js';

const { Router } = express;
const router = Router();

router.get("/", quotes.findAll);

router.get("/random", quotes.findRandom);

router.post("/", quotes.save);

router.delete("/:id", quotes.destroy);

export default router;
