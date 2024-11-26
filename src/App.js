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


  useEffect(() => {

  }, [activeSection]);

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
