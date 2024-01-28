import React from 'react';
import logo from  '../logo/Logo-Beyaz.png'; // Logo dosyanızın yolu

function LogoBar() {
  return (
    <nav className="logobar">
      <div className="logo-container">
           <img src={logo} alt="Logo" />
      </div>{/* Diğer içerikler */}
 </nav>
  );
}

export default LogoBar;