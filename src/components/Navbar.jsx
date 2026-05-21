import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Experience', path: '#experience' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
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
      // If we are on Project Detail page and clicking an anchor, go to home with hash
      setMobileMenuOpen(false);
      window.location.href = '/' + path;
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          Tushita Kaul.
        </Link>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="nav-link"
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
