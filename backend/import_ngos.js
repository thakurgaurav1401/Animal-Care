const fs = require('fs');
const path = require('path');
const { db, init } = require('./database');

const jsonPath = path.resolve(__dirname, 'ngo.json');

function importNGOs() {
  init();
  const ngos = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  db.serialize(() => {
    // Clear the table first
    db.run('DELETE FROM ngos');
    const stmt = db.prepare('INSERT INTO ngos (image, name, description, state, city, address, phone, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
    ngos.forEach(ngo => {
      stmt.run(
        ngo.image || '',
        ngo.title || '',
        ngo.description || '',
        ngo.state || '',
        ngo.city || '',
        ngo.address || '',
        ngo.contact?.phone || '',
        ngo.contact?.email || ''
      );
    });
    stmt.finalize(err => {
      if (err) {
        console.error('Error finalizing statement:', err);
      } else {
        console.log('NGO data imported successfully.');
      }
      db.close();
    });
  });
}

importNGOs(); 