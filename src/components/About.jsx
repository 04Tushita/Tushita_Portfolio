import React from 'react';
import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';
import './About.css';
import aboutImg from '../assets/image-copy.png';

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
            A little bit about who I am and how I approach my craft.
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
                    src={aboutImg}
                    alt="Tushita Kaul"
                    className="about-img"
                  />
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
                Hello there! I'm Tushita Kaul, a UI/UX Designer with a passion for solving critical problems and creating functional, user-centric digital experiences. I am currently pursuing my Masters in Graphic and Experience Design at North Carolina State University to further refine my craft.
              </motion.p>
              <motion.p className="about-text" variants={itemVariants}>
                With a Bachelor's in Computer Science specializing in AI, I have a strong foundation in software development. My unique background allows me to bridge the gap between design and technology, and I'm deeply interested in exploring how AI can be leveraged within UI/UX design to create smarter, more intuitive interfaces.
              </motion.p>
              <motion.p className="about-text" variants={itemVariants}>
                Beyond academics, music is my greatest inspiration. Singing teaches me discipline, perseverance, and the value of collaboration—qualities I apply directly to my design process.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
