import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send } from 'lucide-react';
import SectionDivider from './SectionDivider';
import './Contact.css';

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

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, error: null });

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      setIsSubmitting(false);
      setSubmitStatus({
        success: false,
        error: 'Please configure your Web3Forms Access Key in the .env file (VITE_WEB3FORMS_ACCESS_KEY) at the root of the project.'
      });
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: 'New Portfolio Message from ' + formState.name
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus({ success: true, error: null });
        setFormState({ name: '', email: '', message: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus({ success: false, error: null }), 5000);
      } else {
        setSubmitStatus({
          success: false,
          error: result.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (err) {
      setSubmitStatus({
        success: false,
        error: 'An error occurred. Please check your internet connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Scoop wave from Projects (Cream) to Contact (Peach) */}
      <SectionDivider type="scoop" bgFill="var(--bg-main)" colorFill="var(--bg-secondary)" />

      <section className="section contact-section bg-peach" id="contact">

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
                <a href="mailto:tushitakaul04@gmail.com" className="contact-link">
                  <Mail className="contact-icon" /> tushitakaul04@gmail.com
                </a>
                <a href="http://www.linkedin.com/in/tushita-kaul-2151a1209" target="_blank" rel="noreferrer" className="contact-link">
                  <Linkedin className="contact-icon" /> LinkedIn
                </a>
                <a href="https://www.behance.net/tushitakaul" target="_blank" rel="noreferrer" className="contact-link">
                  <BehanceIcon className="contact-icon" /> Behance
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
                    placeholder="Type in your message..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
                
                {submitStatus.success && (
                  <p className="success-msg">Message sent successfully!</p>
                )}
                {submitStatus.error && (
                  <p className="error-msg" style={{ color: 'var(--accent-primary)', marginTop: '1rem', fontWeight: '600' }}>
                    {submitStatus.error}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
