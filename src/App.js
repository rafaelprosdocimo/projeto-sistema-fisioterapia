import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Consultas from './components/Consultas';
import Prontuario from './components/Prontuario';
import Relatorios from './components/Relatorios';
import Pacientes from './components/Pacientes';
import Configuracoes from './components/Configuracoes';
import Comunicados from './components/Comunicados';

function App() {
  const [activeSection, setActiveSection] = useState('home');

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
      </div>
    </div>
  );
}

export default App;
