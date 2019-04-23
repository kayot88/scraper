import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

// setap the DB

const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({ twitters: []}).write();

  export default db;