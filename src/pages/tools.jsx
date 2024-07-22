// LIBRARY //
import React, { useEffect, useRef } from 'react';
import Intersection from '../components/Insersection/intersection';
// STYLE //
// CONTEXT //
// PAGE //
// COMPONENT //
// OTHER //

export default function Tools() {
  const refs = useRef([]);

  const toolsArr = [
    { imgFileName: "html.png", imgLabel: "HTML" },
    { imgFileName: "css.png", imgLabel: "CSS" },
    { imgFileName: "bootstrap.png", imgLabel: "Bootstrap" },
    { imgFileName: "javascript.png", imgLabel: "Javascript" },
    { imgFileName: "jquery.png", imgLabel: "Jquery" },
    { imgFileName: "typescript.png", imgLabel: "Typescript" },
    { imgFileName: "react.png", imgLabel: "React/Native" },
    { imgFileName: "expressJS.webp", imgLabel: "ExpressJs" },
    { imgFileName: "nodejs.png", imgLabel: "NodeJs" },
    { imgFileName: "nestjs.png", imgLabel: "NestJs" },
    { imgFileName: "mongoDB.svg", imgLabel: "MongoDB" },
    { imgFileName: "mysql.png", imgLabel: "Mysql" },
    { imgFileName: "postgreSQL.png", imgLabel: "PostgreSQL" },
    { imgFileName: "java.png", imgLabel: "Java" },
    { imgFileName: "swiftui.png", imgLabel: "SwiftUI" },
    { imgFileName: "androidstudio.png", imgLabel: "AndroidStudio" },
    { imgFileName: "github.svg", imgLabel: "Github" },
    { imgFileName: "gitlab.png", imgLabel: "Gitlab" },
    { imgFileName: "figma.png", imgLabel: "Figma" },
    { imgFileName: "trello.png", imgLabel: "Trello" },
    { imgFileName: "slack.png", imgLabel: "Slack" },
    { imgFileName: "notion.png", imgLabel: "Notion" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(el =>
      el.isIntersecting ? el.target.classList.add("active") : el.target.classList.remove("active")
    ));
    toolsArr.forEach((t,i) => observer.observe(refs.current[i]))
  })


  return (
    <div id='tools' className='page'>
      <h2>Tools</h2>
      <section className='tools-section'>
        {toolsArr.map((t,index) => {
          return (
            <Intersection key={t.imgLabel}  refObserver={(element) => {refs.current[index] = element}} animation={"fadein"} addStyle={{transitionDelay: "0.2s"}}>
              <div className='tools-container glasscard'>
                <img className='tools-icon' src={require(`../assets/toolsIcone/${t.imgFileName}`)} alt={t.imgLabel} />
                <p className='tools-label'>{t.imgLabel}</p>
              </div>
            </Intersection>
          )
        })}
      </section>
    </div>
  )
}
