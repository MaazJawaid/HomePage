import { useState } from 'react'
import './App.css'

import '@fontsource/poppins/400.css'; // Regular
import '@fontsource/poppins/600.css'; // Semi-bold
import '@fontsource/poppins/700.css'; // Bold

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {

  return (
    <>
      <Navbar />
      <HeroSection/>
    </>
  )
}

export default App
