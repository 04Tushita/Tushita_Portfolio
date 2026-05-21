import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { Briefcase, GraduationCap } from 'lucide-react';
import SectionDivider from './SectionDivider';
import './ExperienceTimeline.css';

const ExperienceTimeline = () => {
  return (
    <>
      {/* Wave transition from About (Peach) to Experience (Cream) */}
      <SectionDivider type="wave" bgFill="var(--bg-secondary)" colorFill="var(--bg-main)" />

      <section className="section experience-section bg-cream" id="experience">
        {/* Floating background star */}
        <div className="star-deco exp-star-1" style={{ top: '8%', left: '15%' }}>★</div>

        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My <span className="italic-serif text-accent">Journey</span>
          </motion.h2>
          <p className="section-subtitle">
            My professional experiences and educational background that shaped my design thinking.
          </p>

          <div className="timeline">
            {experience.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="timeline-item"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Outlined Icon Circle */}
                <div className="timeline-icon">
                  {item.type === 'work' ? 
                    <Briefcase size={22} className="icon-work" /> : 
                    <GraduationCap size={22} className="icon-education" />
                  }
                </div>
                
                {/* Outlined Content Card */}
                <div className="timeline-content organic-card">
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
    </>
  );
};

export default ExperienceTimeline;
