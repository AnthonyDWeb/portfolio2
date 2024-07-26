// LIBRARY //
import React from 'react';
import HighlighText from '../components/HighlighText';
// STYLE //
// CONTEXT //
// PAGE //
// COMPONENT //
// OTHER //

export default function Homepage() {

  return (
    <div id='homepage' className='page'>
      <section className="profil-photo">
          <div className="img-profil" />
      </section>
      <section className="home-page">
        <div className="highlight-container">
          <HighlighText text={"Anthony Delforge"} />
          <HighlighText text={"Développeur Web et Mobile FullStack"} />
        </div>
        <div className="subtitle-container">
          <h3 className='animate-subtitle'>Une idée ? Un projet ?</h3>
          <h3 className='animate-subtitle'>La création d'un site web ou d'une application mobile ?</h3>
          <h3 className='animate-subtitle'>Donnez vie à tous vos projets !</h3>
        </div>
      </section>

    </div>
  )
}
