const db = require('../providers/dbProvider');

const getPacientes = (req, res) => {
  db.query('SELECT * FROM paciente', (err, results) => {
    if (err) {
      console.error('Error fetching patients:', err.message);
      res.status(500).json({ error: 'Failed to fetch patients.' });
    } else {
      console.log('Fetched patients:', results);
      res.json(results);
    }
  });
};

const addPaciente = (req, res) => {
  const { nome, endereco, telefone } = req.body;

  if (!nome) {
    return res.status(400).json({ error: 'Nome is required.' });
  }

  const sql = 'INSERT INTO paciente (nome, endereco, telefone) VALUES (?, ?, ?)';
  db.query(sql, [nome, endereco, telefone], (err, results) => {
    if (err) {
      console.error('Error adding patient:', err.message);
      res.status(500).json({ error: 'Failed to add patient.' });
    } else {
      res.status(201).json({ id: results.insertId, nome, endereco, telefone });
    }
  });
};

module.exports = { getPacientes, addPaciente };
