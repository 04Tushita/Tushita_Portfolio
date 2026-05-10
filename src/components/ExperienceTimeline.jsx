import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { Briefcase, GraduationCap } from 'lucide-react';
import './ExperienceTimeline.css';

const ExperienceTimeline = () => {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span className="heading-gradient">Journey</span>
        </motion.h2>

        <div className="timeline">
          {experience.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-icon glass-card">
                {item.type === 'work' ? 
                  <Briefcase size={24} color="var(--accent-primary)" /> : 
                  <GraduationCap size={24} color="var(--accent-secondary)" />
                }
              </div>
              
              <div className="timeline-content glass-card">
                <span className="timeline-duration">{item.duration}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <p className="timeline-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
