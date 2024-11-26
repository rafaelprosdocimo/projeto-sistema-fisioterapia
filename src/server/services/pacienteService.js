const db = require('../providers/dbProvider');

const getAllPacientes = (req, res) => {
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

const getPacienteById = (req, res) => {
    const { id } = req.params;
    
    db.query('SELECT * FROM paciente WHERE id = ?', [id], (err, results) => {
        if (err) {
        console.error('Error fetching patient:', err.message);
        res.status(500).json({ error: 'Failed to fetch patient.' });
        } else if (results.length === 0) {
        res.status(404).json({ error: 'Patient not found.' });
        } else {
        res.json(results[0]);
        }
    });
    };

const updatePaciente = (req, res) => {  
    const { id } = req.params;
    const { nome, endereco, telefone } = req.body;
    
    if (!nome) {
        return res.status(400).json({ error: 'Nome is required.' });
    }
    
    const sql = 'UPDATE paciente SET nome = ?, endereco = ?, telefone = ? WHERE id = ?';
    db.query(sql, [nome, endereco, telefone, id], (err, results) => {
        if (err) {
        console.error('Error updating patient:', err.message);
        res.status(500).json({ error: 'Failed to update patient.' });
        } else if (results.affectedRows === 0) {
        res.status(404).json({ error: 'Patient not found.' });
        } else {
        res.json({ id, nome, endereco, telefone });
        }
    });
    };

const deletePaciente = (req, res) => {
    const { id } = req.params;
    
    db.query('DELETE FROM paciente WHERE id = ?', [id], (err, results) => {
        if (err) {
        console.error('Error deleting patient:', err.message);
        res.status(500).json({ error: 'Failed to delete patient.' });
        } else if (results.affectedRows === 0) {
        res.status(404).json({ error: 'Patient not found.' });
        } else {
        res.json({ id });
        }
    });
    };

module.exports = { getAllPacientes, addPaciente, getPacienteById, updatePaciente, deletePaciente };