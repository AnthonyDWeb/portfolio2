// LIBRARY //
import React, { useContext } from 'react';
// STYLE //
import "./nav-style.css"
import { ThemeContext } from '../../contexts/theme';
// CONTEXT //
// PAGE //
// COMPONENT //
// OTHER //

export default function NavBar() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`navBg ${theme}`}>
      <div className='navbar'>
        <div className="logo">
          <h2>Anthony Delforge</h2>
        </div>
        <div className="navlinks">
          <ul>
            <a href="#homepage">Acceuil</a>
            <a href="#project">Projets</a>
            <a href="#tools">Outils</a>
            <a href="#about">À propos de moi</a>
            <a href="#contact">Contact</a>
          </ul>
        </div>
      </div>
    </div>
  )
}
