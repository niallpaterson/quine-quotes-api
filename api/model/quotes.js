import data from '../../db/db.js';
const findAll = () => data.read();

const quotes = {
  findAll,
};

export default quotes;
