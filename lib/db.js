import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync(process.env.DATA_DIR);
const db = low(adapter);
db.defaults({tweets: [], next: '', prevNext: '', count: 0}).write();

export default db;