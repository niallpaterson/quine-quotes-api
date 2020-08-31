import fs from 'fs';

const db = './db/quotes.json';

const read = () => JSON.parse(fs.readFileSync(db, 'utf8'));
const data = {
  read,
}

export default data;
