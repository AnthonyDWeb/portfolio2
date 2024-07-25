// LIBRARY //
import React, { useContext } from 'react';
// STYLE //
import "./nav-style.css"
import { ThemeContext } from '../../contexts/theme';
import Glasscard from '../cards/glasscard';
import Toggle from '../toggle';
// CONTEXT //
// PAGE //
// COMPONENT //
// OTHER //

export default function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`navBg ${theme}`}>
      <Glasscard addClass="navbar">
        {/* <div className="logo">
          <h2 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Anthony <span className='surname'>Delforge</span></h2>
        </div> */}
        <div className="navlinks">
          <ul>
            <a href="#homepage">Acceuil</a>
            <a href="#project">Projets</a>
            <a href="#tools">Outils</a>
            <a href="#about_me">À propos de moi</a>
            <a href="#contact">Contact</a>
          </ul>
        </div>
        <Toggle/>
      </Glasscard>
    </div>
  )
}
