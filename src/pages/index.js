import { useContext, useEffect } from 'react';
import "../App.css";
import { ThemeContext } from '../contexts/theme';
import NavBar from '../components/navigation/navbar';
import Homepage from './homepage';
import Projets from './projets';
import Tools from './tools';
import AboutMe from './about_me';
import Contact from './contact';

export default function Pages() {
    const { theme, setPage } = useContext(ThemeContext);


    useEffect(() => {
        const homeSection = document.querySelector("#homepage");
        const projectSection = document.querySelector("#project");
        const toolsSection = document.querySelector("#tools");
        const aboutSection = document.querySelector("#about_me");
        const contactSection = document.querySelector("#contact");

        const handleIo = (entries) => {
            let currentId;
            entries.forEach(el => {
                if (el.isIntersecting) {
                    currentId = `#nav-${el.target.id}`;
                } else {
                    console.log(el.target.id, "is not visible");
                    document.querySelector(`#nav-${el.target.id}`).classList.remove("current");
                }
            });
            currentId && setPage(currentId);
        };
        const io = new IntersectionObserver(handleIo);

        io.observe(homeSection);
        io.observe(projectSection);
        io.observe(toolsSection);
        io.observe(aboutSection);
        io.observe(contactSection);
    }, [])





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
