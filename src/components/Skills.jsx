import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import SectionDivider from './SectionDivider';
import './Skills.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      {/* Scoop wave from Experience (Cream) to Skills (Peach) */}
      <SectionDivider type="scoop" bgFill="var(--bg-main)" colorFill="var(--bg-secondary)" />

      <section className="section skills-section bg-peach" id="skills">

        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tools & <span className="italic-serif text-accent">Technologies</span>
          </motion.h2>
          <p className="section-subtitle">
            The software, design tools, and development frameworks I leverage to bring ideas to life.
          </p>

          <motion.div 
            className="skills-pill-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {skills.map((skill, index) => {
              return (
                <motion.div 
                  key={index} 
                  className="skill-pill glass-pill"
                  variants={itemVariants}
                >
                  <div className="skill-pill-icon">
                    <img src={skill.logoUrl} alt={`${skill.name} logo`} />
                  </div>
                  <div className="skill-pill-text">
                    <h4 className="skill-pill-name">{skill.name}</h4>
                    <span className="skill-pill-category">{skill.category}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;
