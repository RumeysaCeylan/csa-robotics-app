import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const className = isActive ? 'link-button active-link' : 'button';

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

const ToolBar = () => {
  return (
    <nav className="nav-links" style={{ float: 'left', marginRight: '50px', marginTop: '150px' }}>
      <ul style={{ listStyleType: 'none', padding: '30px', width: '100px' }}>
        <li><NavLink to="/">Kontrol Paneli</NavLink></li>
        <li><NavLink to="/logs">Log Sayfası</NavLink></li>
        <li><NavLink to="/mapping">Haritalama</NavLink></li>
        <li><NavLink to="/settings">Ayarlar</NavLink></li>
      </ul>
    </nav>
  );
};

export default ToolBar;
