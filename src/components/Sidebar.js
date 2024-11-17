import React from 'react';
import './Sidebar.css';
import bellIcon from '../Images/bell-icon.png';
import bookmarkIcon from '../Images/bookmark-icon.png';
import comunicadosIcon from '../Images/comunicados-icon.png';
import configuracoesIcon from '../Images/configuracoes-icon.png';
import consultasIcon from '../Images/consultas-icon.png';
import dashboardIcon from '../Images/dashboard-icon.png';
import pacientesIcon from '../Images/pacientes-icon.png';
import prontuarioIcon from '../Images/prontuario-icon.png';
import relatoriosIcon from '../Images/relatorios-icon.png';
import unicuLogo from '../Images/unicu.png';

function Sidebar({ setActiveSection, activeSection }) {
  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="sidebar">
      <img src={unicuLogo} alt="Logo Unicuritiba" className="logo" />
      <ul>
        <li>
          <a
            onClick={() => handleClick('home')}
            className={activeSection === 'home' ? 'selected' : ''}
          >
            <img src={dashboardIcon} alt="Início Icon" /> Início
          </a>
        </li>
        <li>
          <a
            onClick={() => handleClick('dashboard')}
            className={activeSection === 'dashboard' ? 'selected' : ''}
          >
            <img src={dashboardIcon} alt="Dashboard Icon" /> Dashboard
          </a>
        </li>
        <li>
          <a
            onClick={() => handleClick('consultas')}
            className={activeSection === 'consultas' ? 'selected' : ''}
          >
            <img src={consultasIcon} alt="Consultas Icon" /> Consultas
          </a>
        </li>
        <li>
          <a
            onClick={() => handleClick('prontuario')}
            className={activeSection === 'prontuario' ? 'selected' : ''}
          >
            <img src={prontuarioIcon} alt="Prontuário Icon" /> Prontuário
          </a>
        </li>
        <li>
          <a
            onClick={() => handleClick('relatorios')}
            className={activeSection === 'relatorios' ? 'selected' : ''}
          >
            <img src={relatoriosIcon} alt="Relatórios Icon" /> Relatórios
          </a>
        </li>
        <li>
          <a
            onClick={() => handleClick('pacientes')}
            className={activeSection === 'pacientes' ? 'selected' : ''}
          >
            <img src={pacientesIcon} alt="Pacientes Icon" /> Pacientes
          </a>
        </li>
        <li>
          <a
            onClick={() => handleClick('configuracoes')}
            className={activeSection === 'configuracoes' ? 'selected' : ''}
          >
            <img src={configuracoesIcon} alt="Configurações Icon" /> Configurações
          </a>
        </li>
        <li>
          <a
            onClick={() => handleClick('comunicados')}
            className={activeSection === 'comunicados' ? 'selected' : ''}
          >
            <img src={comunicadosIcon} alt="Comunicados Icon" /> Comunicados
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
