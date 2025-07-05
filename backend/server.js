const express = require('express');
const cors = require('cors');
const { db, init } = require('./database');

const app = express();
const PORT = 3001;

app.use(cors());

// Initialize DB and seed data
init();

app.get('/api/ngos', (req, res) => {
  db.all('SELECT * FROM ngos', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 