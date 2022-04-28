import React from 'react';
import logo from '../../images/logo.jpg';
import './Header.css';

const Header = () => {
  return(
    <div className='header-container'>
      <div>
        <img src={logo} alt='Logo' className='logo' />
      </div>
      <div>
        <ul className='menu'>
          <li>Inicio</li>
          <li>Reservas</li>
          <li>Contacto</li>
        </ul>
      </div>
    </div>
  )
};

export default Header;
