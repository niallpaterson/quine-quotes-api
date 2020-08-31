import quotes from '../model/quotes.js';

const findAll = (req, res) => {
  const quoteList = quotes.findAll();
  res.status(200).type('json').send(quoteList);
}

const findRandom = (req, res) => {
  const randomQuote = quotes.findRandom();
  res.status(200).type('json').send(randomQuote);
}


const controller = {
  findAll,

export default controller;
