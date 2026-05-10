import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  useEffect(() => {
    // If there's a hash in the URL, scroll to it on load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Hero />
      <About />
      <ExperienceTimeline />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
