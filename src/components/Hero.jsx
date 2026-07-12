import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, FileText, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import './Hero.css';
import memojiMotion from '../assets/memojimotion.webm';

const BehanceIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className}
    style={props.style}
    width={props.size || 24}
    height={props.size || 24}
  >
    <path d="M22 7.5h-6.5V9H22V7.5zM9 6c2.2 0 3.5 1.1 3.5 2.9 0 1.4-1.1 2.3-2.6 2.5 1.8.3 3.1 1.4 3.1 3.4 0 2.2-1.8 3.2-4 3.2H2V6h7zm-3.5 4.5h3c1 0 1.5-.5 1.5-1.3 0-.7-.5-1.2-1.5-1.2h-3v2.5zm0 5.5h3c1 0 1.7-.5 1.7-1.3 0-.8-.7-1.2-1.7-1.2h-3V16zm13-6c-3 0-4.7 2.1-4.7 4.8 0 2.7 1.7 4.7 4.7 4.7 2.5 0 3.8-1.7 3.8-3h-2.3c0 .5-.6 1.2-1.5 1.2-1.4 0-2.2-1.2-2.2-2.9h6.2c0-2.6-1.5-4.8-4-4.8zm-2.2 3.2c0-1.4.8-1.7 2-1.7 1.2 0 1.8.3 1.8 1.7h-3.8z" />
  </svg>
);

const Hero = () => {
  const [currentWord, setCurrentWord] = useState("UI");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev === "UI" ? "UX" : "UI"));
    }, 2000); // Toggles between UI and UX every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">

      <div className="container hero-container">
        {/* Left Column: Title & Text */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-title">
            <span className="hero-greeting italic-serif">Hey there I'm</span>
            <span className="hero-name-main">Tushita Kaul</span>
          </h1>

          <h2 className="hero-subtitle">
            <span className="dynamic-word-container">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 15, filter: 'blur(2px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -15, filter: 'blur(2px)' }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="dynamic-word"
                >
                  {currentWord}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="fixed-word">Designer</span>
          </h2>


          <div className="hero-footer-actions">
            {/* Social Icons (Ref 2 bottom-left) */}
            <div className="hero-socials">
              <a href="https://github.com/04Tushita" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="http://www.linkedin.com/in/tushita-kaul-2151a1209" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.behance.net/tushitakaul" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                <BehanceIcon size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Interactive Memoji */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="hero-image-container" style={{ perspective: 1000 }}>
            {/* Animated Avatar */}
            <div className="hero-memoji-card">
              <video
                src={memojiMotion}
                autoPlay
                loop
                muted
                playsInline
                className="hero-memoji"
              />
            </div>

            {/* Overlapping circular action buttons (Ref 2) */}
            <div className="hero-floating-actions">
              <a href="#contact" className="hero-circle-btn btn-dark" aria-label="Send Email">
                <Mail size={22} />
              </a>
              <a href="#about" className="hero-circle-btn btn-dark" aria-label="View Resume/Info">
                <FileText size={22} />
              </a>
              <a href="#projects" onClick={handleScrollToProjects} className="hero-circle-btn btn-orange" aria-label="View Projects">
                <ArrowUpRight size={26} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full-width continuous scrolling ticker (Ref 2 bottom) */}
      <div className="hero-ticker-wrapper">
        <div className="hero-ticker-content">
          <span>UI/UX DESIGN &nbsp;▪&nbsp; WIREFRAMING &nbsp;▪&nbsp; PROTOTYPING &nbsp;▪&nbsp; USER RESEARCH &nbsp;▪&nbsp; INTERACTIVE TIMELINES &nbsp;▪&nbsp;&nbsp;</span>
          <span>UI/UX DESIGN &nbsp;▪&nbsp; WIREFRAMING &nbsp;▪&nbsp; PROTOTYPING &nbsp;▪&nbsp; USER RESEARCH &nbsp;▪&nbsp; INTERACTIVE TIMELINES &nbsp;▪&nbsp;&nbsp;</span>
          <span>UI/UX DESIGN &nbsp;▪&nbsp; WIREFRAMING &nbsp;▪&nbsp; PROTOTYPING &nbsp;▪&nbsp; USER RESEARCH &nbsp;▪&nbsp; INTERACTIVE TIMELINES &nbsp;▪&nbsp;&nbsp;</span>
          <span>UI/UX DESIGN &nbsp;▪&nbsp; WIREFRAMING &nbsp;▪&nbsp; PROTOTYPING &nbsp;▪&nbsp; USER RESEARCH &nbsp;▪&nbsp; INTERACTIVE TIMELINES &nbsp;▪&nbsp;&nbsp;</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
