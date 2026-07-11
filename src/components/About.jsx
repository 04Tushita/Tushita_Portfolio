import React from 'react';
import { motion } from 'framer-motion';
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
                    src="/tushita_about.jpg"
                    alt="Tushita Kaul"
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
                Hello there! I'm Tushita Kaul, a UI/UX Designer, with a passion for solving critical problems and as well as creating functional and user-centric digital experiernces. Having pursued my bachelor's in Computer Science with a specialization in AI, I have developed a liking towards it and the exciting advancements it brings to the world. My interest in the realms of both AI and UI/UX designing makes me want to explore that how can they be bought together and hence use AI in designing.To enhance my skills, I am currently pursuing my Masters in Graphic and Experience Design at North Carolina State University.
              </motion.p>
              <motion.p className="about-text" variants={itemVariants}>
                Throughout my academic journey, I've gained a strong foundation in software development, algorithms, and data structures. I actively engage in projects applying AI techniques to real-world problems. This experience sharpens my programming skills and nurtures my curiosity for tackling complex challenges. I have also undergone various online courses to develop my coding and designing skills as well. Such online course platforms helped me to learn new concepts and apply them in my projects.
              </motion.p>
              <motion.p className="about-text" variants={itemVariants}>
                Beyond academics, music is my inspiration and hobby. Singing teaches me discipline, perseverance, and the value of collaboration, qualities I apply to my work.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
