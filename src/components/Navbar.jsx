import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    // { name: 'Experience', path: '#experience' },
    // { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Resume', path: 'https://drive.google.com/file/d/1vhreGv1FomimCEWrwvKZPIEP8FFatQdM/view?usp=sharing' },
    { name: 'Contact', path: '#contact' },
  ];

  const isButterflyProject = location.pathname.includes('butterfly-project');
  const isLibraryProject = location.pathname.includes('library-project');
  const isMerlinProject = location.pathname.includes('merlin');

  const handleNavClick = (e, path) => {
    if (path.startsWith('#') && location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    } else if (path.startsWith('#')) {
      setMobileMenuOpen(false);
      window.location.href = '/' + path;
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isButterflyProject ? 'navbar-dark-theme' : ''} ${isLibraryProject ? 'navbar-library-theme' : ''} ${isMerlinProject ? 'navbar-merlin-theme' : ''}`}>
      <div className="container nav-container">
        <Link 
          to="/" 
          className="logo" 
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          onClick={(e) => {
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <div className="logo-tk-interactive">
            <AnimatePresence>
              {!logoHovered && (
                <motion.div 
                  key="initials"
                  initial={{ opacity: 0, scale: 0.95, filter: 'blur(2px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(2px)' }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="logo-initials-view"
                >
                  <div className="logo-initials-badge-svg">
                    <svg viewBox="0 0 100 100" className="logo-badge-svg">
                      <circle cx="50" cy="50" r="50" className="logo-svg-circle" />
                      <g transform="translate(0, 95) scale(1, -1)">
                        <path 
                          d="M62.60 77.48Q88.20 77.48 89.32 77.64Q90.44 77.80 91.20 77.80Q91.96 77.80 91.96 77.48Q91.96 77.16 91.12 76.48Q90.28 75.80 88.24 75.12Q86.20 74.44 83.64 74.44L60.04 74.52Q49.72 74.36 40.32 71.72Q30.92 69.08 24.92 65.40Q18.92 61.72 15.40 57.88Q11.88 54.04 11.88 51.32Q11.88 48.04 16.76 48.04Q21.64 48.04 29.44 52.24Q37.24 56.44 42.68 62.28Q43.56 63.16 43.88 63.16Q44.04 63.16 44.04 62.92Q44.04 62.68 43.96 62.52Q41.64 57.08 33 51.04Q24.36 45 16.44 45Q8.52 45 8.52 49.56Q8.52 53 13 57.72Q17.48 62.44 24.60 66.88Q31.72 71.32 42 74.40Q52.28 77.48 62.60 77.48M58.60 71.96L59 71.64Q59 71.40 53.40 61Q38.12 32.60 32.44 21.80Q31.96 20.76 30.68 20.20Q29.40 19.64 28.72 19.64Q28.04 19.64 28.04 20Q28.04 20.36 34.84 32.84Q41.64 45.32 48.40 57.68Q55.16 70.04 55 70.12Q55.48 70.92 56.60 71.32L58.60 71.96M65.24 26.12L71.80 29.96Q71.88 29.80 71.88 29.32Q71.88 28.84 71.16 28.52Q60.28 21.24 55.64 21.24Q51.64 21.24 51.64 26.52Q51.64 28.68 52.36 30.48Q53.08 32.28 54.68 32.28Q60.20 32.28 63.28 33.96Q66.36 35.64 66.36 37.44Q66.36 39.24 63.80 39.24Q58.04 39.24 49.16 28.84Q46.44 23.72 45.08 21Q44.68 20.28 43.96 20.28Q42.36 20.28 42.36 21.40Q42.36 21.88 42.68 22.52L49.80 35Q56.60 47 63.72 56.60Q70.84 66.20 74.44 66.20Q75.64 66.20 76.12 65.08Q76.36 64.68 76.36 64.12Q76.36 61.24 71.40 55.08Q66.44 48.92 62.12 44.68Q57.80 40.44 53.32 36.44L51.08 32.44Q59.72 41.24 66.12 41.24Q69.80 41.24 69.80 38.84Q69.80 36.20 65.68 33.56Q61.56 30.92 55.40 30.92Q54.52 29.64 54.52 28.04Q54.52 23.56 58.04 23.56Q60.60 23.56 65 25.96Q65.16 26.12 65.24 26.12M73.72 63.24Q73.72 64.04 73.32 64.04Q68.92 64.04 55 39.56Q62.04 46.04 67.88 52.80Q73.72 59.56 73.72 63.24" 
                          fill="currentColor"
                          className="logo-svg-text"
                        />
                      </g>
                    </svg>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {logoHovered && (
                <motion.span 
                  key="full"
                  initial={{ opacity: 0, y: "-50%", clipPath: "inset(-20% 100% -20% -20%)" }}
                  animate={{ opacity: 1, y: "-50%", clipPath: "inset(-20% -20% -20% -20%)" }}
                  exit={{ opacity: 0, y: "-50%", clipPath: "inset(-20% 100% -20% -20%)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="logo-full-view"
                >
                  Tushita Kaul
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </Link>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="nav-link"
              target={link.path.startsWith('http') ? "_blank" : undefined}
              rel={link.path.startsWith('http') ? "noopener noreferrer" : undefined}
              onClick={(e) => handleNavClick(e, link.path)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="mobile-nav glass-card"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="mobile-nav-link"
              target={link.path.startsWith('http') ? "_blank" : undefined}
              rel={link.path.startsWith('http') ? "noopener noreferrer" : undefined}
              onClick={(e) => handleNavClick(e, link.path)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
