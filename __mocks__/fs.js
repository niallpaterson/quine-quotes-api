import db from './db.js';
const fs = jest.createMockFromModule('fs');

fs.readFileSync = () => db.quotes;
fs.writeFileSync = (path, quotes, encoding) => db.set(quotes);

export default fs;
