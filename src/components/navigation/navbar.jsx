// LIBRARY //
import React, { useContext, useRef } from 'react';
// STYLE //
import "./nav-style.css"
// CONTEXT //
import { ThemeContext } from '../../contexts/theme';
// PAGE //
// COMPONENT //
import Glasscard from '../cards/glasscard';
import Toggle from '../toggle';
// OTHER //


export default function NavBar() {
  const { theme } = useContext(ThemeContext);
  const showRef = useRef(false);

  // FUNCTIONS ------------------------------------------------

  const handle = () => {
    const display = showRef.current;
    display ? document.querySelector(".navbar").classList.remove("open") : document.querySelector(".navbar").classList.add("open");
    display ? document.querySelector(".hamburger").classList.remove("checked") : document.querySelector(".hamburger").classList.add("checked");
    showRef.current = !showRef.current;
  };
  const handleSpecialMode = () => {
    document.querySelector(".star-icon").classList.add("special");
    alert("special mode activé");
    handle();
  }


  // RENDERS --------------------------------------------------

  const Menu = () => {
    return (
      <div className="hamburger" onClick={handle}>
        <svg viewBox="0 0 32 32">
          <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
          <path className="line" d="M7 16 27 16"></path>
        </svg>
      </div>
    )
  }

  const NavLink = ({ to, label }) => <a id={`nav-${to}`} href={`#${to}`} onClick={handle}>{label}</a>

  const Star = () => {
    return (
      <div className="star-container" onClick={handleSpecialMode}>
        <svg className={`star-icon ${theme}`} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" /></svg>
      </div>
    )
  }

  return (
    <div className={`navBg ${theme}`}>
      <Glasscard addClass="navbar">
        <Menu />
        <div className="navlinks">
          <ul>
            <NavLink to={"homepage"} label={"Acceuil"} />
            <NavLink to={"project"} label={"Projets"} />
            <NavLink to={"tools"} label={"Outils"} />
            <NavLink to={"about_me"} label={"À propos de moi"} />
            <NavLink to={"contact"} label={"Contact"} />
          </ul>
        </div>
        <div className="theme-container">
          <Toggle />
          <Star />
        </div>
      </Glasscard>
    </div>
  )
}





