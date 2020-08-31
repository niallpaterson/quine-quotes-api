import uniqid from 'uniqid';
import data from '../../db/db.js';
import getRandom from '../../utility/getRandom.js';

const findAll = () => data.read();
const findRandom = () => getRandom(data.read());
const create = ({ quote }) => data.append({ quote, id: uniqid(), dateCreated: new Date().toUTCString() });
const destroy = (id) => data.destroy(id);

const quotes = {
  create,
  findRandom,
  findAll,
  destroy,
};

export default quotes;
