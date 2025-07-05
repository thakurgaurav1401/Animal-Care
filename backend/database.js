const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'ngos.db');
const db = new sqlite3.Database(dbPath);

// Create NGOs table if it doesn't exist
const init = () => {
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS ngos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      image TEXT,
      state TEXT,
      city TEXT,
      address TEXT,
      phone TEXT,
      email TEXT
    )`);
  });
};

module.exports = { db, init }; 