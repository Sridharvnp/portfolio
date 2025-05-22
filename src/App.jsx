import React from 'react';
import Navrouter from './assets/Navbar/navbar.jsx';
import About from './assets/pages/About.jsx';
import Home from './assets/pages/Home.jsx';
import Projects from './assets/pages/Projects.jsx';
import Contact from './assets/pages/Contact.jsx';
import Skillset from './assets/pages/Skillset.jsx';

function App() {
  return (
    <>
      <Navrouter />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skillset"><Skillset /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}

export default App;
