import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header-right" >
      <div className="profile-section">
        <div className="notification-icon">
          <span className="notification-dot"></span>
          <img src="/Images/bell-icon.png" alt="Notificação" style={{ height: '25px', width: '20px' }} />
        </div>
        <div className="user-info">
          <img src="/Images/user-photo.png" alt="Foto do usuário" />
          <span>Lucas</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
