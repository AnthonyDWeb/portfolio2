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
// import star from "../../assets/images/star.svg"

export default function NavBar() {
  const { theme, currentPage } = useContext(ThemeContext);
  // const [currentTheme, setCurrentTheme] = useState();

  // const handleSpecialMode = () => {
  //   setCurrentTheme(theme === "special" ? undefined : theme);
  //   setTheme(theme === "special" ? currentTheme : "special");
  // }


  // const Star = () => {
  //   return (
  //     <div className="star-container" onClick={handleSpecialMode}>
  //       <svg className={`star-icon ${theme}`} xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
  //     </div>
  //   )
  // }

  return (
    <div className={`navBg ${theme}`}>
      <Glasscard addClass="navbar">
        <div className="navlinks">
          <ul>
            <a id='nav-homepage' href="#homepage" className={currentPage === "#nav-homepage" ? "active" : "inactive"}>Acceuil</a>
            <a id='nav-project' href="#project" className={currentPage === "#nav-project" ? "active" : "inactive"}>Projets</a>
            <a id='nav-tools' href="#tools" className={currentPage === "#nav-tools" ? "active" : "inactive"}>Outils</a>
            <a id='nav-about_me' href="#about_me" className={currentPage === "#nav-about_me" ? "active" : "inactive"}>À propos de moi</a>
            <a id='nav-contact' href="#contact" className={currentPage === "#nav-contact" ? "active" : "inactive"}>Contact</a>
            <a href='.'>{theme}</a>
          </ul>
        </div>
        <Toggle />
        {/* <Star/> */}
      </Glasscard>
    </div>
  )
}
