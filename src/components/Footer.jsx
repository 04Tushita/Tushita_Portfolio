import React from 'react';
import { useLocation } from 'react-router-dom';
import SectionDivider from './SectionDivider';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const isButterflyProject = location.pathname.includes('butterfly-project');
  const isLibraryProject = location.pathname.includes('library-project');
  const isMerlinProject = location.pathname.includes('merlin');
  const isDarkFooter = isButterflyProject || isLibraryProject || isMerlinProject;

  const footerClass = isButterflyProject 
    ? 'footer-dark-theme' 
    : isLibraryProject 
      ? 'footer-library-theme' 
      : isMerlinProject
        ? 'footer-merlin-theme'
        : 'bg-cream';

  return (
    <>
      {/* Wave transition from Contact (Peach) to Footer (Cream) */}
      {!isDarkFooter && (
        <SectionDivider type="wave" bgFill="var(--bg-secondary)" colorFill="var(--bg-main)" />
      )}

      <footer className={`footer ${footerClass}`}>
        <div className="container footer-container">
          <div className="footer-content">
            <h2 className="footer-logo">Tushita Kaul.</h2>
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
