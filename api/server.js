import api from './api.js';

const port = process.env.port || 3001;

api.listen(port, () => console.log(`Listening live on port ${port}`));
