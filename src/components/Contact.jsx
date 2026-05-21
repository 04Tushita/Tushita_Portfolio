import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Dribbble, Send } from 'lucide-react';
import SectionDivider from './SectionDivider';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Scoop wave from Projects (Cream) to Contact (Peach) */}
      <SectionDivider type="scoop" bgFill="var(--bg-main)" colorFill="var(--bg-secondary)" />

      <section className="section contact-section bg-peach" id="contact">
        {/* Floating background star */}
        <div className="star-deco cont-star-1" style={{ top: '8%', left: '10%' }}>★</div>

        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's <span className="italic-serif text-accent">Connect</span>
          </motion.h2>
          <p className="section-subtitle">
            Have a project in mind, want to collaborate, or simply say hello? Drop me a message!
          </p>

          <div className="contact-container">
            {/* Left Column: Contact Info Card */}
            <motion.div 
              className="contact-info organic-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Get in Touch</h3>
              <p className="contact-desc">
                Whether you have a project in mind or just want to chat about design, I'd love to hear from you.
              </p>
              
              <div className="contact-links">
                <a href="mailto:hello@tushitakaul.com" className="contact-link">
                  <Mail className="contact-icon" /> hello@tushitakaul.com
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link">
                  <Linkedin className="contact-icon" /> LinkedIn Profile
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="contact-link">
                  <Dribbble className="contact-icon" /> Dribbble Portfolio
                </a>
              </div>
            </motion.div>

            {/* Right Column: Contact Form Card */}
            <motion.div 
              className="contact-form-wrapper organic-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formState.name}
                    onChange={handleChange}
                    required 
                    className="form-control"
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formState.email}
                    onChange={handleChange}
                    required 
                    className="form-control"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formState.message}
                    onChange={handleChange}
                    required 
                    className="form-control"
                    rows="4"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
                {isSubmitted && <p className="success-msg">Message sent successfully!</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
