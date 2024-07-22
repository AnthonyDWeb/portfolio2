import { useContext } from 'react';
import "../App.css";
import { ThemeContext } from '../contexts/theme';
import NavBar from '../components/navigation/navbar';
import Homepage from './homepage';
import Projets from './projets';
import Tools from './tools';
import AboutMe from './about_me';
import Contact from './contact';

export default function Pages() {
    const { theme } = useContext(ThemeContext);


    return (
        <div className={`App ${theme}`}>
            <header className="App-header">
                <NavBar />
            </header>
            <main className="App-main">
                <Homepage />
                <Projets />
                <Tools />
                <AboutMe />
            </main>
            <footer className="App-footer">
                <Contact />
            </footer>
        </div>
    )
}
