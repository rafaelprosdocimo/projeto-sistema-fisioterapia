const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

// Define routes
router.get('/', pacienteController.getAllPacientes);
router.post('/', pacienteController.addPaciente);
router.get('/:id', pacienteController.getPacienteById);
router.put('/:id', pacienteController.updatePaciente);
router.delete('/:id', pacienteController.deletePaciente);


module.exports = router;
