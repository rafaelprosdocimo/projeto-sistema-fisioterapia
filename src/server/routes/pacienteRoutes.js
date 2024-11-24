const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

// Define routes
router.get('/', pacienteController.getPacientes);
router.post('/', pacienteController.addPaciente);

module.exports = router;
