import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('data/db.json');
const db = low(adapter);
db.defaults({tweets: [], next: '', prevNext: '', count: 0}).write();

export default db;