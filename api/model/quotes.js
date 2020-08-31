import data from '../../db/db.js';
import getRandom from '../../utility/getRandom.js';

const findAll = () => data.read();
const findRandom = () => getRandom(data.read());

const quotes = {
  findRandom,
  findAll,
};

export default quotes;
