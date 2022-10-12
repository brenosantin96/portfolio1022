import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { AboutMe } from './components/AboutMe';
import { HomeSection } from './components/HomeSection';
import { NavbarCustom } from './components/NavbarCustom';

function App() {

  return (
    <>
      <NavbarCustom />
      <HomeSection />
      <AboutMe />
    </>
  )
}

export default App
