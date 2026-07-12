import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import './ProjectDetail.css';
import MerlinDetail from './MerlinDetail';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="section container text-center" style={{ paddingTop: '150px' }}>
        <h2>Project not found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>Return Home</Link>
      </div>
    );
  }

  if (project.id === 'merlin') {
    return <MerlinDetail project={project} />;
  }

  return (
    <div className="project-detail">
      <div className="project-hero">
        <div className="project-hero-bg" style={{ backgroundImage: `url(${project.image})` }}></div>
        <div className="project-hero-overlay"></div>
        <div className="container project-hero-content">
          <Link to="/#projects" className="back-link">
            <ArrowLeft size={20} /> Back to Projects
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="project-tags mb-4">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-tag-large glass-card">{tag}</span>
              ))}
            </div>
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-role">Role: {project.role} | {project.duration}</p>
          </motion.div>
        </div>
      </div>

      <div className="container project-content">
        <div className="project-main">
          <motion.section 
            className="project-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>The Problem</h2>
            <div className="glass-card p-6 mt-4">
              <p>{project.problem}</p>
            </div>
          </motion.section>

          <motion.section 
            className="project-section mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>The Solution</h2>
            <div className="glass-card p-6 mt-4">
              <p>{project.solution}</p>
            </div>
          </motion.section>

          <motion.section 
            className="project-section mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Key Features</h2>
            <div className="features-list mt-4">
              {project.features.map((feature, i) => (
                <div key={i} className="feature-item glass-card">
                  <CheckCircle2 color="var(--accent-primary)" className="flex-shrink-0" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        <div className="project-sidebar">
          <div className="glass-card p-6 sticky-sidebar">
            <h3>Project Overview</h3>
            <div className="overview-item">
              <span className="overview-label">Role</span>
              <span className="overview-value">{project.role}</span>
            </div>
            <div className="overview-item">
              <span className="overview-label">Timeline</span>
              <span className="overview-value">{project.duration}</span>
            </div>
            <div className="overview-item mt-6">
              <a href="#" className="btn btn-primary w-full text-center">Live Preview</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
