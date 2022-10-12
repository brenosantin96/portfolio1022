import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { AboutMe } from './components/AboutMe';
import { Habilidades } from './components/Habilidades';
import { HomeSection } from './components/HomeSection';
import { NavbarCustom } from './components/NavbarCustom';

function App() {

  return (
    <>
      <NavbarCustom />
      <HomeSection />
      <AboutMe />
      <Habilidades />
    </>
  )
}

export default App
