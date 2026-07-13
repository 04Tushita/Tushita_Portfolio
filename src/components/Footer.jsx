import React from 'react';
import { useLocation } from 'react-router-dom';
import SectionDivider from './SectionDivider';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const isButterflyProject = location.pathname.includes('butterfly-project');

  return (
    <>
      {/* Wave transition from Contact (Peach) to Footer (Cream) */}
      {!isButterflyProject && (
        <SectionDivider type="wave" bgFill="var(--bg-secondary)" colorFill="var(--bg-main)" />
      )}

      <footer className={`footer ${isButterflyProject ? 'footer-dark-theme' : 'bg-cream'}`}>
        <div className="container footer-container">
          <div className="footer-content">
            <h2 className="footer-logo">Tushita Kaul.</h2>
            <p className="footer-tagline italic-serif">Designing for the future, today.</p>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Tushita Kaul. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
