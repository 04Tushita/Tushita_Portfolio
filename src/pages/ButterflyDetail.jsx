import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  User, 
  Users, 
  Calendar, 
  Building, 
  BookOpen, 
  Wrench,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ArrowRight,
  VolumeX
} from 'lucide-react';
import './ButterflyDetail.css';

// Import Assets
import coverImg from '../Project2/Butterfly project/cover.png';

import img1 from '../Project2/Butterfly project/Space/img1.jpeg';
import img2 from '../Project2/Butterfly project/Space/img2.jpeg';
import img3 from '../Project2/Butterfly project/Space/img3.jpeg';
import img4 from '../Project2/Butterfly project/Space/img4.jpeg';
import img5 from '../Project2/Butterfly project/Space/img5.jpeg';
import img6 from '../Project2/Butterfly project/Space/img6.jpg';
import img7 from '../Project2/Butterfly project/Space/img7.jpg';

import mood1 from '../Project2/Butterfly project/Moodboards/mood1.png';
import mood2 from '../Project2/Butterfly project/Moodboards/mood2.png';
import mood3 from '../Project2/Butterfly project/Moodboards/mood3.png';
import mood4 from '../Project2/Butterfly project/Moodboards/mood4.png';

import s1 from '../Project2/Butterfly project/Storyboard/s1.png';
import s2 from '../Project2/Butterfly project/Storyboard/s2.png';
import s3 from '../Project2/Butterfly project/Storyboard/s3.png';
import s4 from '../Project2/Butterfly project/Storyboard/s4.png';
import s5 from '../Project2/Butterfly project/Storyboard/s5.png';
import s6 from '../Project2/Butterfly project/Storyboard/s6.png';

import step1 from '../Project2/Butterfly project/UI Screens/step1.png';
import step2 from '../Project2/Butterfly project/UI Screens/step2.png';
import step3 from '../Project2/Butterfly project/UI Screens/step3.png';

import wallGif from '../Project2/Butterfly project/Gifs/wall.gif';
import leg1Gif from '../Project2/Butterfly project/Gifs/leg1.gif';
import leg2Gif from '../Project2/Butterfly project/Gifs/leg2.gif';
import altGif from '../Project2/Butterfly project/Gifs/alt.gif';
import newGif from '../Project2/Butterfly project/Gifs/new.gif';
import touchGif from '../Project2/Butterfly project/Gifs/touch.gif';

import mo1 from '../Project2/Butterfly project/3d model/mo1.png';
import mo2 from '../Project2/Butterfly project/3d model/mo2.png';
import mo3 from '../Project2/Butterfly project/3d model/mo3.png';
import mo4 from '../Project2/Butterfly project/3d model/mo4.png';
import mo5 from '../Project2/Butterfly project/3d model/mo5.png';

import vid3d from '../Project2/Butterfly project/Videos/3dvid.mov';
import prototypeVid from '../Project2/Butterfly project/Videos/prototype.mov';
import pro2Video from '../Project2/Butterfly project/Videos/pro2.1.mp4';

const ButterflyDetail = () => {
  // Navigation scrolls to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. Hover focus state for space gallery
  const [hoveredGalleryIndex, setHoveredGalleryIndex] = useState(null);
  const spaceImages = [
    { src: img1, alt: "Specimen corridor view 1" },
    { src: img2, alt: "Specimen corridor view 2" },
    { src: img3, alt: "Specimen corridor view 3" },
    { src: img4, alt: "Specimen corridor view 4" },
    { src: img5, alt: "Specimen corridor view 5" },
    { src: img6, alt: "Specimen corridor view 6" },
    { src: img7, alt: "Specimen corridor view 7" }
  ];

  // 2. Moodboard Carousel state
  const [moodIndex, setMoodIndex] = useState(0);
  const moodboards = [mood1, mood2, mood3, mood4];
  const nextMood = () => {
    setMoodIndex((prev) => (prev + 1) % moodboards.length);
  };
  const prevMood = () => {
    setMoodIndex((prev) => (prev - 1 + moodboards.length) % moodboards.length);
  };

  // Auto scroll moodboards
  useEffect(() => {
    const timer = setInterval(nextMood, 5000);
    return () => clearInterval(timer);
  }, []);

  // 3. UI Steps Widget State
  const [uiState, setUiState] = useState('stack'); // 'stack', 'horizontal'
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);
  const [stackOrder, setStackOrder] = useState([0, 1, 2]);
  const sectionRef = useRef(null);

  const uiScreens = [
    { img: step1, caption: "Home Page" },
    { img: step2, caption: "Stories of Fragility" },
    { img: step3, caption: "Magic Sliders" }
  ];

  // Auto shuffling for 3D card stack (only when in stack mode)
  useEffect(() => {
    if (uiState !== 'stack') return;
    const timer = setInterval(() => {
      setStackOrder((prev) => [prev[1], prev[2], prev[0]]);
    }, 3000);
    return () => clearInterval(timer);
  }, [uiState]);

  // Reset to stack mode when section scrolls out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setUiState('stack');
          setActiveLightboxImage(null);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="butterfly-detail-page">
      {/* Dynamic Background Glowing Blobs for speculative atmosphere */}
      <div className="glow-blob blob-1"></div>
      <div className="glow-blob blob-2"></div>
      <div className="glow-blob blob-3"></div>

      {/* Hero Section */}
      <div className="butterfly-hero-banner" style={{ backgroundImage: `url(${coverImg})` }}>
        <div className="butterfly-hero-overlay"></div>
        <div className="container butterfly-hero-content">
          <Link to="/#projects" className="back-link-custom">
            <ArrowLeft size={20} /> Back to Projects
          </Link>
          
          <div className="butterfly-hero-grid">
            <div className="butterfly-hero-text">
              <h1 className="butterfly-title-serif">Reviving the Silent Wings</h1>
              <p className="butterfly-subtitle-italic">Transforming Preserved Butterfly Specimens into an Immersive Conservation Experience</p>
              
              <div className="butterfly-pills-row">
                <span className="butterfly-pill">Studio Project</span>
                <span className="butterfly-pill">Immersive Experience Design</span>
                <span className="butterfly-pill">Interactive Museum Experience</span>
              </div>
            </div>

            {/* Right Side Sidebar Metadata Panel */}
            <div className="butterfly-meta-panel glass-card-dark">
              <h3 className="meta-panel-title">Project Information</h3>
              <div className="meta-panel-list">
                <div className="meta-list-item">
                  <span className="meta-label"><User size={16} /> Role</span>
                  <span className="meta-val">Research • UI Design • 3D Design</span>
                </div>
                <div className="meta-list-item">
                  <span className="meta-label"><Users size={16} /> Team</span>
                  <span className="meta-val">2 Designers</span>
                </div>
                <div className="meta-list-item">
                  <span className="meta-label"><Calendar size={16} /> Duration</span>
                  <span className="meta-val">September 2025 – December 2025</span>
                </div>
                <div className="meta-list-item">
                  <span className="meta-label"><Building size={16} /> Partner</span>
                  <span className="meta-val">Durham Museum of life & Science</span>
                </div>
                <div className="meta-list-item">
                  <span className="meta-label"><BookOpen size={16} /> Course</span>
                  <span className="meta-val">MGXD Design Studio I</span>
                </div>
                <div className="meta-list-item items-align-center">
                  <span className="meta-label"><Wrench size={16} /> Tools</span>
                  <span className="meta-val tools-grid-butterfly">
                    {/* Figma */}
                    <span className="btfly-tool-badge" data-tooltip="Figma">
                      <svg viewBox="0 0 38 38" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9.5C19 6.46 16.54 4 13.5 4S8 6.46 8 9.5 10.46 15 13.5 15c3.04 0 5.5-2.46 5.5-5.5Z" fill="#F24E1E"/>
                        <path d="M19 9.5c0 3.04 2.46 5.5 5.5 5.5S30 12.54 30 9.5 27.54 4 24.5 4 19 6.46 19 9.5Z" fill="#FF7262"/>
                        <path d="M19 19c0-3.04-2.46-5.5-5.5-5.5S8 15.96 8 19s2.46 5.5 5.5 5.5c3.04 0 5.5-2.46 5.5-5.5Z" fill="#A259FF"/>
                        <path d="M19 28.5c0-3.04-2.46-5.5-5.5-5.5S8 25.46 8 28.5 10.46 34 13.5 34c3.04 0 5.5-2.46 5.5-5.5Z" fill="#1ABCFE"/>
                        <path d="M19 19c0 3.04 2.46 5.5 5.5 5.5S30 22.04 30 19s-2.46-5.5-5.5-5.5S19 15.96 19 19Z" fill="#0ACF83"/>
                      </svg>
                    </span>
                    {/* Adobe AE */}
                    <span className="btfly-tool-badge tool-ae" data-tooltip="Adobe After Effects">Ae</span>
                    {/* Spline */}
                    <span className="btfly-tool-badge tool-spline" data-tooltip="Spline">Sp</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container butterfly-case-container">
        
        {/* SECTION 1: Overview */}
        <section className="case-section">
          <h2 className="case-title-serif text-glow-gold">Overview</h2>
          <div className="case-body-text mt-4">
            <p>
              Museums are filled with remarkable stories, yet many exhibits still rely on static displays and information panels that visitors often glance at for only a few moments. During a visit to the Durham Museum of Life & Science Butterfly Conservatory, we observed visitors pausing briefly at preserved butterfly specimens before continuing toward the conservatory itself. Although children frequently pointed at the butterflies and asked questions, the interaction rarely extended beyond reading a small information label. This observation inspired us to rethink the transition space leading into the conservatory.
            </p>
            <p className="mt-4">
              The final idea is an immersive spatial experience that combines projection mapping, gesture interaction, motion tracking, and interactive digital interfaces to transform passive observation into active exploration.
            </p>
          </div>
        </section>

        {/* SECTION 2: The Challenge & Interactive Space Gallery */}
        <section className="case-section mt-16">
          <h2 className="case-title-serif">The Challenge</h2>
          <div className="case-body-text mt-4 mb-8">
            <p>
              Our challenge was not to redesign the conservatory itself, but to transform this overlooked transition space into an experience that would spark curiosity before visitors entered the living butterfly habitat.
            </p>
          </div>

          {/* Interactive Specimen Gallery */}
          <div className="space-gallery-wrapper">
            <div className="space-gallery-grid">
              {spaceImages.map((img, index) => {
                let hoverState = "";
                if (hoveredGalleryIndex !== null) {
                  hoverState = hoveredGalleryIndex === index ? "gallery-focused" : "gallery-dimmed";
                }
                return (
                  <div 
                    key={index} 
                    className={`gallery-item-container ${hoverState}`}
                    onMouseEnter={() => setHoveredGalleryIndex(index)}
                    onMouseLeave={() => setHoveredGalleryIndex(null)}
                  >
                    <img src={img.src} alt={img.alt} className="gallery-item-img" />
                  </div>
                );
              })}
            </div>
            <p className="gallery-caption mt-4">
              “The entrance corridor contained preserved butterfly specimens displayed inside glass cases with static information labels.”
            </p>
          </div>
        </section>

        {/* SECTION 3: Question Pondered */}
        <section className="case-section mt-16 text-center">
          <h2 className="case-title-serif text-glow-gold">Question Pondered!</h2>
          <div className="case-body-text mt-4">
            <p className="question-text-normal">
              How might we transform preserved butterfly specimens into an interactive experience that inspires curiosity while encouraging visitors to understand the importance of butterfly conservation?
            </p>
          </div>
        </section>

        {/* SECTION 4: Research & Inspiration with Carousel */}
        <section className="case-section mt-16">
          <h2 className="case-title-serif">Research & Inspiration</h2>
          <div className="case-body-text mt-4 mb-8">
            <p>
              We independently collected references before combining our ideas into a shared design direction.
            </p>
          </div>

          {/* Moodboard Carousel */}
          <div className="moodboard-carousel-container">
            <div className="moodboard-carousel-viewport">
              <button className="carousel-control prev" onClick={prevMood}>
                <ChevronLeft size={24} />
              </button>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={moodIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="carousel-slide"
                >
                  <img src={moodboards[moodIndex]} alt={`Moodboard ${moodIndex + 1}`} className="carousel-img" />
                </motion.div>
              </AnimatePresence>

              <button className="carousel-control next" onClick={nextMood}>
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Carousel Dot Indicators */}
            <div className="carousel-dots mt-4">
              {moodboards.map((_, i) => (
                <button 
                  key={i} 
                  className={`carousel-dot ${moodIndex === i ? 'active' : ''}`}
                  onClick={() => setMoodIndex(i)}
                ></button>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: Understanding the Space */}
        <section className="case-section mt-16">
          <h2 className="case-title-serif">Understanding the Space</h2>
          
          <h4 className="why-this-space-title mt-4">Why this space?</h4>
          
          <div className="case-body-text mt-2 mb-8">
            <p>
              we focused on the entrance corridor because it naturally functions as a transition between the outside world and the living habitat.
            </p>
            <p className="mt-4">
              During our observations, we identified several opportunities that could enrich the visitor experience.
            </p>
          </div>

          {/* Opportunities in transparent cards */}
          <div className="opportunities-grid">
            <div className="opportunity-card glass-card-hover text-left">
              <div className="card-indicator-dot green-glow"></div>
              <p>Bringing preserved butterfly specimens to life through digital augmentation.</p>
            </div>
            <div className="opportunity-card glass-card-hover text-left">
              <div className="card-indicator-dot gold-glow"></div>
              <p>Transforming static information panels into interactive learning experiences.</p>
            </div>
            <div className="opportunity-card glass-card-hover text-left">
              <div className="card-indicator-dot green-glow"></div>
              <p>Activating the unused wall through large-scale projection mapping.</p>
            </div>
            <div className="opportunity-card glass-card-hover text-left">
              <div className="card-indicator-dot gold-glow"></div>
              <p>Extending interaction onto the floor using motion-responsive projections that encourage exploration beyond the displays themselves.</p>
            </div>
          </div>
        </section>

        {/* SECTION 6: Design Vision Storyboard */}
        <section className="case-section mt-16 pinboard-section-wrapper">
          <h2 className="case-title-serif text-glow-green">DESIGN VISION</h2>
          <p className="storyboard-intro mt-4 mb-8">
            Here is a storyboard of sketches showing how our interactive concept will unfold and look in practice:
          </p>

          {/* Storyboard pinboard */}
          <div className="storyboard-pinboard-grid">
            <div className="story-pin-card rotated-left">
              <span className="pin">📌</span>
              <div className="pin-card-img-wrapper">
                <img src={s1} alt="Storyboard Sketch 1" />
              </div>
              <div className="pin-card-footer">
                <span className="scene-number">Scene 01</span>
              </div>
            </div>

            <div className="story-pin-card rotated-right">
              <span className="pin">📌</span>
              <div className="pin-card-img-wrapper">
                <img src={s2} alt="Storyboard Sketch 2" />
              </div>
              <div className="pin-card-footer">
                <span className="scene-number">Scene 02</span>
              </div>
            </div>

            <div className="story-pin-card rotated-left">
              <span className="pin">📌</span>
              <div className="pin-card-img-wrapper">
                <img src={s3} alt="Storyboard Sketch 3" />
              </div>
              <div className="pin-card-footer">
                <span className="scene-number">Scene 03</span>
              </div>
            </div>

            <div className="story-pin-card rotated-right">
              <span className="pin">📌</span>
              <div className="pin-card-img-wrapper">
                <img src={s4} alt="Storyboard Sketch 4" />
              </div>
              <div className="pin-card-footer">
                <span className="scene-number">Scene 04</span>
              </div>
            </div>

            <div className="story-pin-card rotated-left">
              <span className="pin">📌</span>
              <div className="pin-card-img-wrapper">
                <img src={s5} alt="Storyboard Sketch 5" />
              </div>
              <div className="pin-card-footer">
                <span className="scene-number">Scene 05</span>
              </div>
            </div>

            <div className="story-pin-card rotated-right">
              <span className="pin">📌</span>
              <div className="pin-card-img-wrapper">
                <img src={s6} alt="Storyboard Sketch 6" />
              </div>
              <div className="pin-card-footer">
                <span className="scene-number">Scene 06</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Designing the Interface with Interactive Slideshow/Grid Widget */}
        <section className="case-section mt-16" ref={sectionRef}>
          <h2 className="case-title-serif">Designing the Interface</h2>
          
          <div className="case-body-text mt-4 mb-8">
            <p>
              I led the design of the interactive interface that accompanies each preserved butterfly specimen. My goal was to create an interface that felt immersive and futuristic without distracting from the specimen itself.
            </p>
            <p className="mt-4">
              After exploring visual references from museums, science exhibits, and futuristic interfaces, I developed a visual language that balanced scientific information with engaging interactions. The interface uses subtle motion, layered information, and clear navigation to encourage exploration while maintaining focus on the butterfly.
            </p>
            <p className="mt-4">
              Rather than overwhelming visitors with lengthy descriptions, information is revealed gradually through interaction, allowing visitors to explore topics that interest them at their own pace.
            </p>
          </div>

          {/* Interactive UI Screen Widget */}
          <div className="ui-widget-interactive-box">
            {uiState === 'stack' && (
              <div className="ui-card-stack-view" onClick={() => setUiState('horizontal')}>
                <div className="stack-hover-instructions">
                  <span>Click to expand</span>
                  <Maximize2 size={16} />
                </div>
                <div className="ui-cards-deck">
                  {uiScreens.map((screen, idx) => {
                    const pos = stackOrder.indexOf(idx);
                    return (
                      <div
                        key={idx}
                        className={`ui-stacked-card pos-${pos}`}
                      >
                        <div className="card-glass-glow-border">
                          <img src={screen.img} alt={screen.caption} className="stacked-card-img" />
                          <div className="stacked-card-overlay">
                            <span className="stacked-card-title">{screen.caption}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {uiState === 'horizontal' && (
              <div className="ui-horizontal-grid-view">
                <div className="horizontal-grid-instructions">
                  <span>Click any screen to view fullscreen</span>
                </div>
                <div className="ui-horizontal-grid">
                  {uiScreens.map((screen, idx) => (
                    <div 
                      key={idx}
                      className="horizontal-card-item"
                      onClick={() => setActiveLightboxImage(screen.img)}
                    >
                      <div className="horizontal-card-inner">
                        <img src={screen.img} alt={screen.caption} />
                      </div>
                      <div className="horizontal-card-caption">
                        {screen.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 8: Beyond the Screen (Projection Mapping & Motion Tracking) */}
        <section className="case-section mt-16">
          <h2 className="case-title-serif">Beyond the Screen</h2>

          {/* Subheading: Projection Mapping */}
          <div className="sub-case-block mt-6">
            <h3 className="case-sub-title text-glow-gold">Projection Mapping</h3>
            <p className="case-body-text mt-2">
              Projection mapping transforms the walls into an ambient visual landscape, extending the experience beyond the digital interface and surrounding visitors with subtle butterfly movement and atmospheric visuals.
            </p>
            <div className="wall-gif-container mt-6">
              <img src={wallGif} alt="Projection mapped wall visual" className="wall-gif-img" />
            </div>
          </div>

          {/* Subheading: Motion Tracking */}
          <div className="sub-case-block mt-12">
            <h3 className="case-sub-title text-glow-green">Motion Tracking</h3>
            <p className="case-body-text mt-2 mb-8">
              To encourage visitors to slow down and spend more time exploring, we designed an ambient motion-tracking interaction that responds to prolonged engagement.
            </p>

            {/* Side-by-side motion tracking columns */}
            <div className="motion-tracking-layout">
              <div className="motion-column">
                <div className="motion-text-box">
                  <p>When a visitor remains in one place while interacting with the exhibit, a gentle projection of butterflies gradually forms a circle around their feet.</p>
                </div>
                <div className="motion-gif-wrapper mt-4">
                  <img src={leg1Gif} alt="Motion tracking feet step 1" className="motion-gif-img" />
                </div>
              </div>

              <div className="motion-column">
                <div className="motion-text-box">
                  <p>As soon as they begin walking again, the butterflies disperse and continue flying through the corridor.</p>
                </div>
                <div className="motion-gif-wrapper mt-4">
                  <img src={leg2Gif} alt="Motion tracking feet step 2" className="motion-gif-img" />
                </div>
              </div>
            </div>
          </div>

          {/* Subheading: Gesture Tracking */}
          <div className="sub-case-block mt-12">
            <h3 className="case-sub-title text-glow-cyan">Gesture Tracking</h3>
            <p className="case-body-text mt-2">
              Gesture-based interaction through pointing towards a butterfly triggers projection mapping that causes the selected butterfly specimen to softly glow and gently flap its wings, symbolically bringing the preserved specimen back to life.
            </p>
            <div className="wall-gif-container mt-6">
              <img src={touchGif} alt="Gesture tracking touch interaction" className="wall-gif-img" />
            </div>
          </div>
        </section>

        {/* SECTION 9: Bringing the Space to Life (3D Model Panel) */}
        <section className="case-section mt-16">
          <h2 className="case-title-serif">Bringing the Space to Life</h2>
          
          <div className="space-3d-layout mt-8">
            {/* Loop Video */}
            <div className="video-panel glass-card-dark">
              <video 
                src={vid3d} 
                className="walkthrough-video"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            {/* 3D Model collage of angles */}
            <div className="collage-panel">
              <div className="collage-row top-row">
                <div className="collage-img-box angle-1" onClick={() => setActiveLightboxImage(mo1)}>
                   <img src={mo1} alt="3D Model Angle 1" />
                </div>
                <div className="collage-img-box angle-2" onClick={() => setActiveLightboxImage(mo2)}>
                   <img src={mo2} alt="3D Model Angle 2" />
                </div>
              </div>
              <div className="collage-row bottom-row">
                <div className="collage-img-box angle-3" onClick={() => setActiveLightboxImage(mo3)}>
                   <img src={mo3} alt="3D Model Angle 3" />
                </div>
                <div className="collage-img-box angle-4" onClick={() => setActiveLightboxImage(mo4)}>
                   <img src={mo4} alt="3D Model Angle 4" />
                </div>
                <div className="collage-img-box angle-5" onClick={() => setActiveLightboxImage(mo5)}>
                   <img src={mo5} alt="3D Model Angle 5" />
                </div>
              </div>
            </div>
          </div>
          <p className="gallery-caption text-center mt-6">
            Corridor 3D Model
          </p>
        </section>

        {/* SECTION 10: Prototype of Screens */}
        <section className="case-section mt-16 text-center">
          <h2 className="case-title-serif">Prototype of Screens</h2>
          
          {/* Wall display kiosk frames */}
          <div className="museum-display-kiosk portrait mt-8">
            <div className="kiosk-bezel">
              <div className="kiosk-reflection"></div>
              <div className="kiosk-lens">
                <video 
                  src={pro2Video} 
                  className="kiosk-screen-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                />
              </div>
              <div className="kiosk-led-indicator"></div>
            </div>
            <div className="kiosk-wall-mount-shadow"></div>
          </div>
          <p className="gallery-caption mt-6">
            As the butterfly responds to the visitor's pointing gesture, the adjacent interactive display activates, presenting species-specific information and conservation stories through an immersive digital interface.
          </p>
        </section>

        {/* SECTION 11: Exploring an Alternative Narrative Experience */}
        <section className="case-section mt-16">
          <h2 className="case-title-serif">Exploring an Alternative Narrative Experience</h2>
          
          <div className="case-body-text mt-4">
            <p>
              Before arriving at the final ambient projection, I explored a more narrative-driven concept for the corridor. Rather than using the opposite wall as a decorative projection surface, I envisioned it as an evolving ecosystem that slowly awakened as visitors walked through the space.
            </p>
            <p className="mt-4">
              The animation would begin with subtle glowing trails weaving through the corridor before gradually revealing butterflies, illuminated flowers, and vibrant foliage. As the experience unfolded, visitors would witness symbolic moments in the butterfly's lifecycle—from a glowing chrysalis emerging among the branches to butterflies taking flight and filling the surrounding environment.
            </p>
          </div>

          <div className="alternative-gif-wrapper mt-6">
            <img src={altGif} alt="Alternative narrative ecosystem simulation" className="ecosystem-gif" />
          </div>

          {/* Nested Subsection */}
          <div className="why-refined-block mt-12 p-6 glass-card-dark">
            <h3 className="case-sub-title text-glow-gold">Why We Refined the Direction</h3>
            <p className="case-body-text mt-4">
              During critiques and design discussions, we evaluated how this cinematic storytelling would fit within the museum environment. While the narrative projection created a memorable visual experience, we recognized that it could compete with the interactive specimen displays and shift visitors' attention away from the preserved butterflies themselves.
            </p>
            <p className="case-body-text mt-4">
              We therefore refined the final concept into a calmer ambient projection that complemented the interactive displays rather than leading the entire experience.
            </p>
            
            <div className="alternative-gif-wrapper mt-6">
              <img src={newGif} alt="Refined ambient projection direction" className="ecosystem-gif" />
            </div>
          </div>
        </section>

        {/* Small Conservatory-themed Credits Footer */}
        <div className="conservatory-credits text-center mt-20">
          <div className="flower-icon-divider">✿  ❀  ✿</div>
          <p className="credits-text">
            A project designed in collaboration with the Durham Museum of Life & Science, exploring speculative and immersive digital exhibition space models.
          </p>
        </div>

      </div>

      {/* LIGHTBOX OVERLAY: Full Screen Expand */}
      <AnimatePresence>
        {activeLightboxImage !== null && (
          <motion.div 
            className="ui-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxImage(null)}
          >
            <button className="lightbox-close-btn" onClick={() => setActiveLightboxImage(null)}>×</button>
            <motion.div 
              className="ui-lightbox-content"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activeLightboxImage} alt="Expanded interface design detail" className="lightbox-img-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ButterflyDetail;
