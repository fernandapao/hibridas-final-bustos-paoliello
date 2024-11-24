
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout, getCurrentUser } from '../../services/auth';


function Navbar() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav>
      <img src="img/aero-asist-02.png" alt="Logo AeroAsist" className="logo-navbar" />
      <ul>
        <li><Link to="/">Inicio</Link></li>
        {user ? (
          <>
            <li><Link to="/dashboard">Admin</Link></li>
            <li><Link onClick={handleLogout}>Cerrar Sesión</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/register">Registrar</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
