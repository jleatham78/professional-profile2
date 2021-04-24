import React from 'react';
import Hero from '../src/components/Header';
import Project from '../src/components/Project';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import Resume from '../src/components/Resume';
import './App.css';

function App() {
  return (
    <div>
      <Hero />
      <section id='about-me'>
      <About />
        </section>
        <section id='portfolio'>
      <Project />
      </section>
      <section id='resume'>
        <Resume />
      </section>
      <section id='contact-me'>
      <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
