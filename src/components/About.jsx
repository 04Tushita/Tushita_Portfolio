import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section className="section about" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About <span className="heading-gradient">Me</span>
        </motion.h2>

        <div className="about-container">
          <motion.div 
            className="about-image-side"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-img-wrapper glass-card">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Tushita Kaul working" 
                className="about-img"
              />
            </div>
          </motion.div>

          <motion.div 
            className="about-content-side"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p className="about-text" variants={itemVariants}>
              I am a passionate UI/UX Designer with a strong foundation in Human-Computer Interaction and AI-integrated design. My goal is to create digital products that are not only visually stunning but also profoundly accessible and intuitive.
            </motion.p>
            <motion.p className="about-text" variants={itemVariants}>
              I believe that great design happens at the intersection of psychology, art, and technology. By leveraging user research and modern design trends like glassmorphism and micro-interactions, I craft experiences that resonate with users.
            </motion.p>

            <motion.div className="about-cards" variants={containerVariants}>
              <motion.div className="about-card glass-card" variants={itemVariants}>
                <Lightbulb size={32} className="about-icon" color="var(--accent-primary)" />
                <h3>HCI Focus</h3>
                <p>Designing with cognitive psychology in mind.</p>
              </motion.div>
              
              <motion.div className="about-card glass-card" variants={itemVariants}>
                <Zap size={32} className="about-icon" color="var(--accent-secondary)" />
                <h3>AI/ML Integration</h3>
                <p>Seamlessly blending AI capabilities into UX.</p>
              </motion.div>

              <motion.div className="about-card glass-card" variants={itemVariants}>
                <Users size={32} className="about-icon" color="var(--accent-tertiary)" />
                <h3>User-Centered</h3>
                <p>Empathy-driven approach to solving problems.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
