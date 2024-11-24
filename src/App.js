import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Consultas from './components/Consultas/Consultas';
import Prontuario from './components/Prontuario/Prontuario';
import Relatorios from './components/Relatorios/Relatorios';
import Pacientes from './components/Pacientes/Pacientes';
import Configuracoes from './components/Configuracoes/Configuracoes';
import Comunicados from './components/Comunicados/Comunicados';

function App() {


  const [activeSection, setActiveSection] = useState('home');
  const [pacientes, setPacientes] = useState([]);

  // Fetch data on load or whenever needed
  useEffect(() => {
    if (activeSection === 'home') {
      fetch('http://localhost:3308/api/pacientes') // Your backend endpoint
        .then((response) => response.json())
        .then((data) => {
          console.log('Fetched pacientes:', data); // Log the fetched data
          setPacientes(data);
        })
        .catch((error) => console.error('Error fetching pacientes:', error));
    }
  }, [activeSection]); // Trigger when activeSection changes

  return (
    <div className="app-container" style={{ display: 'flex' }}>
      <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      <div className="content" style={{ flex: 1, padding: '20px' }}>
        {activeSection !== 'home' && <Header />}
        {activeSection === 'home' && <Home />}
        {activeSection === 'dashboard' && <Dashboard />}
        {activeSection === 'consultas' && <Consultas />}
        {activeSection === 'prontuario' && <Prontuario />}
        {activeSection === 'relatorios' && <Relatorios />}
        {activeSection === 'pacientes' && <Pacientes />}
        {activeSection === 'configuracoes' && <Configuracoes />}
        {activeSection === 'comunicados' && <Comunicados />}
        <ul>
          <li>wrada</li>
        {pacientes.map((paciente) => (
          <li key={paciente.id}>
            {paciente.nome} - {paciente.telefone} {/* Adjust based on your database schema */}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
