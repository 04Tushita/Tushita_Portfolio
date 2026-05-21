import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Zap, Star } from 'lucide-react';
import SectionDivider from './SectionDivider';
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
    <>
      {/* Curvy partition from Hero (Cream) to About (Peach) */}
      <SectionDivider type="scoop" bgFill="var(--bg-main)" colorFill="var(--bg-secondary)" />

      <section className="section about bg-peach" id="about">
        {/* Floating Star Decors */}
        <div className="star-deco about-star-1" style={{ top: '10%', right: '12%' }}>★</div>
        <div className="star-deco about-star-2" style={{ bottom: '8%', left: '8%', color: 'var(--accent-secondary)' }}>★</div>

        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            welcome! <span className="italic-serif text-accent">Let's break the ice</span>
          </motion.h2>
          <p className="section-subtitle">
            A little bit about who I am, what I value, and how I approach my craft.
          </p>

          <div className="about-container">
            {/* Left Side: Polaroid Photo Effect (Ref 1) */}
            <motion.div 
              className="about-image-side"
              initial={{ opacity: 0, rotate: -6, x: -30 }}
              whileInView={{ opacity: 1, rotate: -2, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="about-polaroid-container">
                {/* Yellow offset card background */}
                <div className="about-img-bg-card"></div>
                
                {/* White Polaroid frame */}
                <div className="about-img-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Tushita Kaul working" 
                    className="about-img"
                  />
                  <div className="polaroid-caption italic-serif">
                    me in my creative zone ✨
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Narrative and Cards */}
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
                I believe that great design happens at the intersection of psychology, art, and technology. By leveraging user research and modern interactive elements, I craft web and mobile experiences that feel human and responsive.
              </motion.p>

              <motion.div className="about-cards" variants={containerVariants}>
                <motion.div className="about-card organic-card" variants={itemVariants}>
                  <Lightbulb size={30} className="about-icon icon-primary" />
                  <h3>HCI Focus</h3>
                  <p>Designing with cognitive psychology and accessibility in mind.</p>
                </motion.div>
                
                <motion.div className="about-card organic-card" variants={itemVariants}>
                  <Zap size={30} className="about-icon icon-secondary" />
                  <h3>AI/ML UX</h3>
                  <p>Seamlessly blending intelligent agent capabilities into flows.</p>
                </motion.div>

                <motion.div className="about-card organic-card" variants={itemVariants}>
                  <Users size={30} className="about-icon icon-tertiary" />
                  <h3>User-Centered</h3>
                  <p>Empathy-driven approach to solving real-world user problems.</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
