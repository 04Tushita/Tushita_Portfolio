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
        {/* Floating background star */}
        <div className="star-deco skills-star-1" style={{ top: '12%', right: '18%' }}>★</div>

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
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div 
                  key={index} 
                  className="skill-card organic-card"
                  variants={itemVariants}
                >
                  <div className="skill-icon-wrapper">
                    <Icon size={26} className="skill-icon" />
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-category">{skill.category}</span>
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
