import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured <span className="heading-gradient">Projects</span>
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-img-container">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <Link to={`/project/${project.id}`} className="project-link-btn">
                    View Case Study <ArrowUpRight size={20} />
                  </Link>
                </div>
              </div>
              
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">
                  <Link to={`/project/${project.id}`}>{project.title}</Link>
                </h3>
                <p className="project-desc">{project.shortDescription}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
