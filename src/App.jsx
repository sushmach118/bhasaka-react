 import React, { useState } from 'react';
 import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
 
 import Contact from './components/Contact/Contact';

function App() {
  
  return (
    <>

      <Navbar />
      <Home  />
     <About  />
     <Projects />
     <Contact />
    </>
  );
}

export default App;
