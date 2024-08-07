// LIBRARY //
import React from 'react';
import HighlighText from '../components/HighlighText';
// STYLE //
// CONTEXT //
// PAGE //
// COMPONENT //
// OTHER //

export default function Homepage() {

  const ProfileImage = () => {
    return (
      <div className="img-container">
        <div className="img-profil" />
      </div>
    )
  };
  const MainTitle = () => {
    return (
      <h1 className="main-title">
        <HighlighText text={"Anthony Delforge"} />
        <HighlighText text={"Développeur Web et Mobile FullStack"} />
      </h1>
    )
  }
  const SubTitles = () => {
    return (
      <div className="subtitle-container">
        <h3 className='animate-subtitle'>Une idée ? Un projet ?</h3>
        <h3 className='animate-subtitle'>La création d'un site web ou d'une application mobile ?</h3>
        <h3 className='animate-subtitle'>Donnez vie à tous vos projets !</h3>
      </div>
    )
  }

  return (
    <section id='homepage' className='page'>
      <ProfileImage />
      <div className='title-container'>
        <MainTitle />
        <SubTitles />
      </div>
    </section>
  )
}