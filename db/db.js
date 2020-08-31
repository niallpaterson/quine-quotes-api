import fs from 'fs';

const db = './db/quotes.json';

const read = () => JSON.parse(fs.readFileSync(db, 'utf8'));
const write = (data) => fs.writeFileSync(db, JSON.stringify(data, null, 1), 'utf8');
const append = (quote) => write([...read(), quote]);
const destroy = (id) => write(read().filter((quote) => quote.id !== id));

const data = {
  read,
  write,
  append,
  destroy
}

export default data;
