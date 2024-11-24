const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pacienteRoutes = require('./routes/pacienteRoutes');
const dbProvider = require('./providers/dbProvider');
const app = express();
const PORT = 3308; // Your server port

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/pacientes', pacienteRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
