import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome-title">Bem-Vindo</h1>
      <p className="greeting">Bom Dia, <strong className="username">Lucas Filipak</strong></p>
      <div className="button-group">
        <button className="main-button">Pacientes</button>
        <button className="main-button">Comunicados</button>
      </div>
    </div>
  );
}

export default Home;
