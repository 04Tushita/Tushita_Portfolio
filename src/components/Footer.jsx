import React from 'react';
import SectionDivider from './SectionDivider';
import './Footer.css';

const Footer = () => {
  return (
    <>
      {/* Wave transition from Contact (Peach) to Footer (Cream) */}
      <SectionDivider type="wave" bgFill="var(--bg-secondary)" colorFill="var(--bg-main)" />

      <footer className="footer bg-cream">
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
