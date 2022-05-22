import React, { useState } from 'react';
import hamburger from '../images/hamburger.svg';
import './navbar.scss';

function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(menuOpened === false ? true : false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="fa fa-bars" aria-hidden="true" onClick={toggleMenu}>
          <img src={hamburger} alt="ikona mobilniho menu" />
        </div>

        <ul className={`collapsed ${menuOpened ? 'is-expanded' : ''}`}>
          <li>
            <a href="#about">O aplikaci</a>
          </li>
          <li>
            <a href="#how">Jak funguje?</a>
          </li>
          <li>
            <a href="#personas">Pro koho je</a>
          </li>
          <li>
            <a href="#aboutUs">Kdo ji tvoří</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
