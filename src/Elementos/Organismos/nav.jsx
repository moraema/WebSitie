import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../Moleculas/buscar';
import Logo from '../Atomos/logo';
import logo from '../imagenes/logo.jpg';
import RegisterButton from '../Atomos/registro';
import '../css/styles.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Logo src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/tecnologia">Tecnología</Link></li>
        <li><Link to="/modas">Modas</Link></li>
        <li><Link to="/calzados">Hogar y muebles</Link></li>
      </ul>
      <SearchBar />
      <RegisterButton /> 
    </nav>
  );
}

export default Nav;
