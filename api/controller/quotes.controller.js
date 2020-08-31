import quotes from '../model/quotes.js';

const findAll = (req, res) => {
  const quoteList = quotes.findAll();
  res.status(200).type('json').send(quoteList);
}

const findRandom = (req, res) => {
  const randomQuote = quotes.findRandom();
  res.status(200).type('json').send(randomQuote);
}

const save = (req, res) => {
  quotes.create(req.body);
  res.status(201).send('Quote successfully created');
}

const destroy = (req, res) => {
  quotes.destroy(req.params.id);
  res.status(202).send();
}

const controller = {
  findAll,
  findRandom,
  save,
  destroy,
}

export default controller;
