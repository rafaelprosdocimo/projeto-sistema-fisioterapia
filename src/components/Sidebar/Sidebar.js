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
  const menuItems = [
    { id: 'home', label: 'Início', icon: dashboardIcon },
    { id: 'dashboard', label: 'Dashboard', icon: dashboardIcon },
    { id: 'consultas', label: 'Consultas', icon: consultasIcon },
    { id: 'prontuario', label: 'Prontuário', icon: prontuarioIcon },
    { id: 'relatorios', label: 'Relatórios', icon: relatoriosIcon },
    { id: 'pacientes', label: 'Pacientes', icon: pacientesIcon },
    { id: 'configuracoes', label: 'Configurações', icon: configuracoesIcon },
    { id: 'comunicados', label: 'Comunicados', icon: comunicadosIcon },
  ];

  const handleClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="sidebar">
      <img src={unicuLogo} alt="Logo Unicuritiba" className="logo" />
      <ul>
        {menuItems.map(({ id, label, icon }) => (
          <li key={id}>
            <a
              onClick={() => handleClick(id)}
              className={activeSection === id ? 'selected' : ''}
            >
              <img src={icon} alt={`${label} Icon`} /> {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
