import quotes from '../model/quotes.js';

const findAll = (req, res) => {
  const quoteList = quotes.findAll();
  res.status(200).type('json').send(quoteList);
}


const controller = {
  findAll,

export default controller;
