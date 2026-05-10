import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tools & <span className="heading-gradient">Technologies</span>
        </motion.h2>

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
                className="skill-card glass-card"
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              >
                <div className="skill-icon-wrapper">
                  <Icon size={32} className="skill-icon" />
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <span className="skill-category">{skill.category}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
