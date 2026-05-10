import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <h2 className="footer-logo heading-gradient">Tushita Kaul.</h2>
          <p className="footer-tagline">Designing for the future, today.</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tushita Kaul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
