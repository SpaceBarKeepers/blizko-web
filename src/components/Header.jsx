import React from 'react';
import logo from '../images/logo.png';
import './header.scss';
import Navbar from './Navbar';

function Header() {
  return (
    <header>
      <div className="logoWrapper">
        <img src={logo} alt="" />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
