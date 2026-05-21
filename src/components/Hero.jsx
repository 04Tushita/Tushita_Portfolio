import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, ArrowUpRight, Github, Linkedin, Figma, Star } from 'lucide-react';
import './Hero.css';

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
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://figma.com" target="_blank" rel="noopener noreferrer" aria-label="Figma">
                <Figma size={20} />
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
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
