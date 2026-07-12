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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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
                  <div className="logo-badge-circle"></div>
                  <span className="logo-cursive-tk">Tk</span>
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
