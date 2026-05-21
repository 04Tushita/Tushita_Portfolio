import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, ArrowUpRight, Github, Linkedin, Star } from 'lucide-react';
import './Hero.css';

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
    <path d="M22 7.5h-6.5V9H22V7.5zM9 6c2.2 0 3.5 1.1 3.5 2.9 0 1.4-1.1 2.3-2.6 2.5 1.8.3 3.1 1.4 3.1 3.4 0 2.2-1.8 3.2-4 3.2H2V6h7zm-3.5 4.5h3c1 0 1.5-.5 1.5-1.3 0-.7-.5-1.2-1.5-1.2h-3v2.5zm0 5.5h3c1 0 1.7-.5 1.7-1.3 0-.8-.7-1.2-1.7-1.2h-3V16zm13-6c-3 0-4.7 2.1-4.7 4.8 0 2.7 1.7 4.7 4.7 4.7 2.5 0 3.8-1.7 3.8-3h-2.3c0 .5-.6 1.2-1.5 1.2-1.4 0-2.2-1.2-2.2-2.9h6.2c0-2.6-1.5-4.8-4-4.8zm-2.2 3.2c0-1.4.8-1.7 2-1.7 1.2 0 1.8.3 1.8 1.7h-3.8z"/>
  </svg>
);

const Hero = () => {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      {/* Decorative Floating Stars (Ref 1) */}
      <div className="star-deco hero-star-1" style={{ top: '20%', left: '10%' }}>★</div>
      <div className="star-deco hero-star-2" style={{ top: '15%', right: '15%', color: 'var(--accent-primary)' }}>★</div>
      <div className="star-deco hero-star-3" style={{ bottom: '25%', left: '45%' }}>★</div>

      <div className="container hero-container">
        {/* Left Column: Title & Text */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-intro-badge">
            <span className="italic-serif">Hey there, I'm</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-stroke">UX/UI</span>
            <span className="hero-filled">Designer</span>
          </h1>
          
          <p className="hero-tagline">
            I craft clean, user-focused interfaces that make digital experiences effortless. My approach combines thoughtful design with practical functionality.
          </p>

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
        
        {/* Right Column: Peachy Card with Portrait */}
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="hero-image-container">
            {/* Organic Peach backdrop (Ref 2) */}
            <div className="hero-blob-card">
              <img 
                src="./Public/Pic_2.png" 
                alt="Tushita Kaul portrait" 
                className="hero-portrait" 
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
