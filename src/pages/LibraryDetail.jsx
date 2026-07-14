import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  User, 
  Users, 
  Calendar, 
  Building, 
  BookOpen, 
  Wrench,
  Search,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import './LibraryDetail.css';

// Import all images
import coverImg from '../Library project/pictures/cover.png';
import dataImg from '../Library project/pictures/data.png';
import timeImg from '../Library project/pictures/time.png';
import i1Img from '../Library project/pictures/i1.png';
import i2Img from '../Library project/pictures/i2.png';
import i3Img from '../Library project/pictures/i3.png';
import i4Img from '../Library project/pictures/i4.png';
import i5Img from '../Library project/pictures/i5.png';
import i6Img from '../Library project/pictures/i6.png';
import i7Img from '../Library project/pictures/i7.png';
import i8Img from '../Library project/pictures/i8.png';
import i9Img from '../Library project/pictures/i9.png';
import i10Img from '../Library project/pictures/i10.png';
import i11Img from '../Library project/pictures/i11.png';

const LibraryDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for interactive elements
  const [activeSelfCard, setActiveSelfCard] = useState(null);
  const [activeMetaTheme, setActiveMetaTheme] = useState('resources');

  const dynamicSelvesCards = [
    { id: 1, text: "Prefers bigger spaces", desc: "When working in groups, this student seeks large tables that allow spreading out sketches and model parts." },
    { id: 2, text: "Can’t work with distractions", desc: "For individual focus sessions, the same student retreats to high-walled carrels to block out visual noise." },
    { id: 3, text: "Studies privately", desc: "Prefers cozy, tucked-away corners for independent review sessions, avoiding the main pathways." }
  ];

  return (
    <div className="library-detail-page">
      {/* Background Glowing Blobs for library study atmosphere */}
      <div className="lib-glow-blob lib-blob-1"></div>
      <div className="lib-glow-blob lib-blob-2"></div>
      <div className="lib-glow-blob lib-blob-3"></div>

      {/* Hero Banner Section */}
      <div className="library-hero-banner" style={{ backgroundImage: `url(${coverImg})` }}>
        <div className="library-hero-overlay"></div>
        <div className="container library-hero-content">
          <Link to="/#projects" className="back-link-custom">
            <ArrowLeft size={20} /> Back to Projects
          </Link>
          
          <div className="library-hero-grid">
            <div className="library-hero-text">
              <h1 className="library-title-serif font-bold">NC State Design Library Research</h1>
              <p className="library-subtitle-italic">Understanding Student Collaboration: An analysis of Seating, Space and Study Behavior</p>
              
              <div className="library-pills-row">
                <span className="library-pill">Academic Project</span>
                <span className="library-pill">UX Research</span>
                <span className="library-pill">Spatial Behavior Analysis</span>
              </div>
            </div>

            {/* Right Side Metadata Panel */}
            <div className="library-meta-panel glass-card-dark">
              <h3 className="meta-panel-title font-bold">Project Information</h3>
              <div className="meta-panel-list">
                <div className="meta-list-item">
                  <span className="meta-label"><User size={16} /> Role</span>
                  <span className="meta-val">UX Research</span>
                </div>
                <div className="meta-list-item">
                  <span className="meta-label"><Users size={16} /> Team</span>
                  <span className="meta-val">4 Designers</span>
                </div>
                <div className="meta-list-item">
                  <span className="meta-label"><Calendar size={16} /> Duration</span>
                  <span className="meta-val">August 2025 – November 2025</span>
                </div>
                <div className="meta-list-item">
                  <span className="meta-label"><Building size={16} /> Partner</span>
                  <span className="meta-val">NC State Design Library</span>
                </div>
                <div className="meta-list-item">
                  <span className="meta-label"><BookOpen size={16} /> Course</span>
                  <span className="meta-val">Design Research Methods</span>
                </div>
                <div className="meta-list-item items-align-center">
                  <span className="meta-label"><Wrench size={16} /> Tools</span>
                  <span className="meta-val tools-icons-grid-library">
                    <span className="tool-tile figma-tile" data-tooltip="Figma">
                      <svg viewBox="0 0 38 38" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9.5C19 6.46 16.54 4 13.5 4S8 6.46 8 9.5 10.46 15 13.5 15c3.04 0 5.5-2.46 5.5-5.5Z" fill="#F24E1E"/>
                        <path d="M19 9.5c0 3.04 2.46 5.5 5.5 5.5S30 12.54 30 9.5 27.54 4 24.5 4 19 6.46 19 9.5Z" fill="#FF7262"/>
                        <path d="M19 19c0-3.04-2.46-5.5-5.5-5.5S8 15.96 8 19s2.46 5.5 5.5 5.5c3.04 0 5.5-2.46 5.5-5.5Z" fill="#A259FF"/>
                        <path d="M19 28.5c0-3.04-2.46-5.5-5.5-5.5S8 25.46 8 28.5 10.46 34 13.5 34c3.04 0 5.5-2.46 5.5-5.5Z" fill="#1ABCFE"/>
                        <path d="M19 19c0 3.04 2.46 5.5 5.5 5.5S30 22.04 30 19s-2.46-5.5-5.5-5.5S19 15.96 19 19Z" fill="#0ACF83"/>
                      </svg>
                    </span>
                    <span className="tool-tile figjam-tile" data-tooltip="FigJam">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" fill="#FF70A6"/>
                      </svg>
                    </span>
                    <span className="tool-tile sheets-tile" data-tooltip="Google Sheets">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" fill="#10b981"/>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container library-case-container">
        
        {/* SECTION 1: Executive Summary */}
        <section className="case-section mt-16">
          <h2 className="case-title-serif text-glow-gold font-bold">Executive Summary</h2>
          
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="glass-card-dark p-12 research-purpose-card">
              <h3 className="section-subheading-bold font-bold"><Search size={18} className="icon-gold" /> Research Purpose</h3>
              <p className="mt-4 text-muted text-justify">
                To investigate how the study lounge in the NC State Design Library can support students who need flexible, comfortable and collaborative seating options for group work.
              </p>
            </div>
          </div>

          {/* Key Findings Section */}
          <div className="mt-12">
            <h3 className="section-subheading-bold font-bold mb-6">Key Findings</h3>
            <div className="findings-scroll-container">
              <div className="findings-horizontal-line">
                <div className="finding-vertical-card glass-card-dark">
                  <div className="finding-num">01</div>
                  <p>The current library layout does not support flexible seating options for works involving collaboration.</p>
                </div>
                <div className="finding-vertical-card glass-card-dark">
                  <div className="finding-num">02</div>
                  <p>The central space is underutilized and gives a “Fishbowl effect”, hence creating a confusion and discouraging group use.</p>
                </div>
                <div className="finding-vertical-card glass-card-dark">
                  <div className="finding-num">03</div>
                  <p>Student responses repeatedly reported a lack of seating options during peak hours.</p>
                </div>
                <div className="finding-vertical-card glass-card-dark">
                  <div className="finding-num">04</div>
                  <p>Poor layout flow of the library undermines students’ willingness to use the space.</p>
                </div>
                <div className="finding-vertical-card glass-card-dark">
                  <div className="finding-num">05</div>
                  <p>Active need for a balance between quiet individual spaces and group-work areas.</p>
                </div>
                <div className="finding-vertical-card glass-card-dark">
                  <div className="finding-num">06</div>
                  <p>The comfort and ergonomics of the seating options currently present are insufficient. Couches are “too low”, chairs are “uncomfortable” and the lounge lacks long session support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actionable Recommendations */}
          <div className="mt-16">
            <h3 className="section-subheading-bold font-bold mb-6">Actionable Recommendations</h3>
            <div className="recommendations-grid">
              <div className="rec-card glass-card-dark">
                <div className="rec-icon-wrapper">01</div>
                <div>
                  <h4 className="font-bold text-gold">Redesign Study Lounge</h4>
                  <p className="mt-2 text-muted">Create distinct, multi-use zones tailored for group-work and quiet individual work.</p>
                </div>
              </div>
              <div className="rec-card glass-card-dark">
                <div className="rec-icon-wrapper">02</div>
                <div>
                  <h4 className="font-bold text-gold">Modular & Movable Furniture</h4>
                  <p className="mt-2 text-muted">Introduce flexible furniture to easily adapt to varying student group sizes and tasks.</p>
                </div>
              </div>
              <div className="rec-card glass-card-dark">
                <div className="rec-icon-wrapper">03</div>
                <div>
                  <h4 className="font-bold text-gold">Enhanced Spatial Cues</h4>
                  <p className="mt-2 text-muted">Improve library signage and layouts so students can easily find hidden or private seating areas.</p>
                </div>
              </div>
              <div className="rec-card glass-card-dark">
                <div className="rec-icon-wrapper">04</div>
                <div>
                  <h4 className="font-bold text-gold">Ergonomics & Seating Variety</h4>
                  <p className="mt-2 text-muted">Incorporate a wider variety of furniture types to optimize physical comfort during long work sessions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Introduction */}
        <section className="case-section mt-24">
          <h2 className="case-title-serif font-bold">Introduction</h2>
          
          <div className="intro-grid mt-8">
            <div className="intro-text-column">
              <div className="intro-block">
                <h4 className="font-bold text-gold">PROJECT CONTEXT</h4>
                <p className="mt-2 text-muted text-justify">
                  This project was conducted in collaboration with the NC State Design Library. The library is a central study space for design students but currently experiences uneven crowd flow and low engagement. The library committee collected student responses through online surveys and pop-up interviews to seek insights into what changes can be made in the space. The project focuses on analyzing the student feedback in detail and identifying opportunities to enhance the Design Library experience for students.
                </p>
              </div>
              <div className="intro-block mt-8">
                <h4 className="font-bold text-gold">TARGET USERS</h4>
                <p className="mt-2 text-muted text-justify">
                  Undergraduate design students, who want to use the library space for collaboration and group-work.
                </p>
              </div>
              <div className="intro-block mt-8">
                <h4 className="font-bold text-gold">MOTIVATION</h4>
                <p className="mt-2 text-muted text-justify">
                  Students reported difficulty and confusion in finding out spaces for collaboration and planned group-work. This study aims to uncover the obstacles in spatial needs and productivity of students.
                </p>
              </div>
            </div>

            <div className="intro-problem-column">
              {/* Problem Statement Callout */}
              <div className="problem-statement-card glass-card-dark">
                <h4 className="font-bold text-gold uppercase tracking-wider">Problem Statement</h4>
                <p className="mt-4 problem-text text-justify font-serif italic">
                  “The current seating arrangements in the Design Library do not effectively support undergraduate students who wish to engage in flexible, planned group work. Students face challenges in finding appropriate collaborative spaces, which limits opportunities for connection and knowledge exchange. There is a need to identify the barriers within the existing layout and social dynamics, and to determine how seating configurations can be redesigned to better facilitate connection-driven collaboration.”
                </p>
              </div>
            </div>
          </div>

          {/* Objectives Section - Added Space and New Custom Card Design */}
          <div className="mt-32 objectives-section">
            <h3 className="section-subheading-bold font-bold mb-8 text-gold uppercase tracking-wider">Objectives</h3>
            <div className="objectives-cards-grid">
              <div className="objective-card glass-card-dark">
                <div className="obj-header">
                  <span className="obj-number">01</span>
                  <span className="obj-line"></span>
                </div>
                <p className="obj-card-text">Identifying students’ needs related to collaborative study environments.</p>
              </div>
              <div className="objective-card glass-card-dark">
                <div className="obj-header">
                  <span className="obj-number">02</span>
                  <span className="obj-line"></span>
                </div>
                <p className="obj-card-text">Analysis of the existing survey data through open coding and thematic analysis.</p>
              </div>
              <div className="objective-card glass-card-dark">
                <div className="obj-header">
                  <span className="obj-number">03</span>
                  <span className="obj-line"></span>
                </div>
                <p className="obj-card-text">To get a deeper understanding of the user groups involved through different user modeling techniques.</p>
              </div>
              <div className="objective-card glass-card-dark">
                <div className="obj-header">
                  <span className="obj-number">04</span>
                  <span className="obj-line"></span>
                </div>
                <p className="obj-card-text">To provide design-driven recommendation insights that enhance student engagement, collaboration and comfort.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PHASE 1 SEPARATOR */}
        <div className="phase-transition-banner mt-32">
          <div className="phase-tag">PHASE 01</div>
          <h2 className="phase-title font-bold">DISCOVERY PHASE</h2>
          <div className="phase-accent-line"></div>
        </div>

        {/* SECTION 3: Discovery Phase Content */}
        <section className="case-section mt-2">
          <div className="text-center mb-10">
            <h3 className="discovery-main-title font-bold">RESEARCH FOUNDATION AND EARLY FINDINGS</h3>
            <p className="discovery-subheading text-muted mt-2">How we analyzed the survey responses and derived themes and user behavior.</p>
          </div>

          {/* Method 1: Open Coding & Affinity Clustering - Space added */}
          <div className="methodology-block methodology-block-first">
            <div className="methodology-header">
              <span className="methodology-pill">Method 01</span>
              <h3 className="methodology-title font-bold mt-2">Open Coding & Affinity Clustering</h3>
            </div>
            
            <div className="method-details-grid mt-6">
              <div>
                <h4 className="font-bold text-gold uppercase tracking-wider">Research Approach</h4>
                <p className="mt-2 text-muted text-justify">
                  This involved a qualitative analysis of the student survey responses provided by the Design Library Committee. The main emphasis was on discovering similar patterns and themes in the responses through Open Coding and Affinity Clustering.
                </p>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Methods</h4>
                <div className="round-process mt-4">
                  <div className="round-step">
                    <span className="round-badge">Round 1</span>
                    <p className="text-muted"><strong className="text-white">Group-wise Coding:</strong> Each group was assigned a particular set of questions to analyze from the survey. The responses were broken down and grouped into clusters with relatable labels for each. The clusters under our group included “Seating”, “Spaces”, “Collaborative area/Group Work”, “Layout” etc.</p>
                  </div>
                  
                  <div className="round-step mt-6">
                    <span className="round-badge">Round 2</span>
                    <p className="text-muted"><strong className="text-white">Whole-class Coding:</strong> This involved a collaborative thematic synthesis of the whole survey data. All the groups had to merge their respective themes and coding insights and create meta-themes and core-themes based on previous round output. Based on this analysis, 3 Meta-Themes and 6 Core-Themes were made.</p>
                  </div>
                </div>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Outcome</h4>
                <p className="mt-2 text-muted text-justify">
                  Looking into the outputs from each round, <strong className="text-white">“Space”</strong> held the highest number of responses, especially regarding limitations in seating and collaboration areas. This gave a clear direction and topic to formulate our final research question.
                </p>
              </div>

              {/* Stacked i1.png and i2.png together in the right column, captions removed */}
              <div className="method-image-column">
                <div className="image-frame glass-card-dark">
                  <img src={i1Img} alt="Affinity Clustering Round 1 Diagram" className="framed-img" />
                </div>
                <div className="image-frame glass-card-dark mt-6">
                  <img src={i2Img} alt="Whole Class Coding Meta-Themes" className="framed-img" />
                </div>
              </div>
            </div>

            {/* Custom Interactive Mapping Design for Meta-Themes and Core-Themes - Redesigned to Flowchart Widget */}
            <div className="mapping-board-wrapper mt-24 mb-24 p-8 glass-card-dark">
              <h4 className="font-bold text-center text-gold mb-2 uppercase tracking-widest">Meta-Themes & Core-Themes Mapping</h4>
              <p className="text-center text-muted text-sm mb-8">Click on any Meta-Theme card below to view its corresponding Core-Themes.</p>
              
              <div className="meta-themes-horizontal-row">
                <button 
                  className={`meta-theme-card-btn glass-card-dark ${activeMetaTheme === 'resources' ? 'active' : ''}`}
                  onClick={() => setActiveMetaTheme('resources')}
                >
                  <span className="meta-card-title">Learning Resources</span>
                </button>
                
                <button 
                  className={`meta-theme-card-btn glass-card-dark ${activeMetaTheme === 'environment' ? 'active' : ''}`}
                  onClick={() => setActiveMetaTheme('environment')}
                >
                  <span className="meta-card-title">Learning Environment</span>
                </button>
                
                <button 
                  className={`meta-theme-card-btn glass-card-dark ${activeMetaTheme === 'wellbeing' ? 'active' : ''}`}
                  onClick={() => setActiveMetaTheme('wellbeing')}
                >
                  <span className="meta-card-title">Wellbeing & Amenities</span>
                </button>
              </div>

              {/* Core Themes Flowchart mapping area */}
              <div className={`flowchart-core-container ${activeMetaTheme}-active mt-12`}>
                <div className="flowchart-input-line"></div>
                <div className="flowchart-horizontal-bridge"></div>
                <div className="core-themes-flow-row">
                  {activeMetaTheme === 'resources' && (
                    <>
                      <div className="core-theme-flow-node glass-card-dark">
                        <span className="node-badge">Core Theme</span>
                        <div className="node-text">Tools</div>
                      </div>
                      <div className="core-theme-flow-node glass-card-dark">
                        <span className="node-badge">Core Theme</span>
                        <div className="node-text">Library Collections</div>
                      </div>
                      <div className="core-theme-flow-node glass-card-dark">
                        <span className="node-badge">Core Theme</span>
                        <div className="node-text">Academic Support</div>
                      </div>
                    </>
                  )}
                  {activeMetaTheme === 'environment' && (
                    <>
                      <div className="core-theme-flow-node glass-card-dark">
                        <span className="node-badge">Core Theme</span>
                        <div className="node-text">Space</div>
                      </div>
                      <div className="core-theme-flow-node glass-card-dark">
                        <span className="node-badge">Core Theme</span>
                        <div className="node-text">Accessibility</div>
                      </div>
                    </>
                  )}
                  {activeMetaTheme === 'wellbeing' && (
                    <>
                      <div className="core-theme-flow-node glass-card-dark">
                        <span className="node-badge">Core Theme</span>
                        <div className="node-text">Refreshment</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Limitations Section - Red symbol and red color removed */}
            <div className="mt-16">
              <h4 className="font-bold text-gold uppercase tracking-wider">Limitations</h4>
              <ul className="custom-bullets mt-4 text-muted">
                <li>Vague survey responses may be coded differently based on individual’s perception and assumption.</li>
                <li>Few survey questions had weak insights as they were charts.</li>
                <li>There can be a chance of missed codes or merging of ideas as this is a manual and repetitive process.</li>
              </ul>
            </div>

            {/* Left-aligned research question inside a card box with question mark icon, formatted in the docx color palette */}
            <div className="research-question-container text-left">
              <div className="glass-card-dark p-12 border-gold-glow research-question-card">
                <h4 className="font-bold text-gold uppercase tracking-wider mb-6 flex items-center gap-2">
                  <HelpCircle size={18} className="icon-gold" /> Research Question
                </h4>
                <p className="research-question-text font-serif italic text-left">
                  “How can <span className="rq-purple">the study lounge</span>, <span className="rq-teal">through flexible and varied seating arrangements</span>, support <span className="rq-rust">undergraduate students</span> in <span className="rq-green">finding a space for planned group work</span>, thereby <span className="rq-pink">fostering connection that promotes the exchange of knowledge</span>?”
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider-line mt-24 mb-24"></div>

          {/* Method 2: Thematic Analysis - Space added */}
          <div className="methodology-block mt-32">
            <div className="methodology-header">
              <span className="methodology-pill">Method 02</span>
              <h3 className="methodology-title font-bold mt-2">Thematic Analysis</h3>
            </div>
            
            <div className="method-details-grid mt-6">
              <div>
                <h4 className="font-bold text-gold uppercase tracking-wider">Research Approach</h4>
                <p className="mt-2 text-muted text-justify">
                  Qualitative & Quantitative Analysis of each response code.
                </p>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Method</h4>
                <p className="mt-2 text-muted text-justify">
                  After setting up the final research question, we organized all the coded phrases in a spreadsheet. It included:
                </p>
                <div className="spreadsheet-pills-row mt-4">
                  <span className="spreadsheet-pill">Raw response text</span>
                  <span className="spreadsheet-pill">Assigned codes</span>
                  <span className="spreadsheet-pill">Code description</span>
                  <span className="spreadsheet-pill">Number of snippets</span>
                  <span className="spreadsheet-pill">Category of the theme</span>
                </div>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Outcome</h4>
                <p className="mt-2 text-muted text-justify">
                  Thematic analysis helped us in quantifying the frequency of the data and identifying the strong patterns in it.
                </p>

                {/* Limitations Section - Red symbol and red color removed */}
                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Limitations</h4>
                <ul className="custom-bullets mt-2 text-muted">
                  <li>Requires multiple readings and re-coding, especially difficult with large datasets.</li>
                  <li>There is a risk of forcing data to fit known ideas.</li>
                </ul>
              </div>

              <div className="method-image-column">
                <div className="image-frame glass-card-dark">
                  <img src={i3Img} alt="Thematic Analysis Spreadsheet Snippet" className="framed-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider-line mt-24 mb-24"></div>

          {/* Method 3: Fly-on-the-Wall Observation - Space added */}
          <div className="methodology-block mt-32">
            <div className="methodology-header">
              <span className="methodology-pill">Method 03</span>
              <h3 className="methodology-title font-bold mt-2">Fly-on-the-Wall Observation</h3>
            </div>
            
            <div className="method-details-grid mt-6">
              <div>
                <h4 className="font-bold text-gold uppercase tracking-wider">Research Approach</h4>
                <p className="mt-2 text-muted text-justify">
                  This observation is a non-intrusive qualitative analysis, where a researcher observes the behavior of the user in the actual environment without interacting with them or influencing their behavior.
                </p>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Method</h4>
                <p className="mt-2 text-muted">We followed user’s natural workflow, observing:</p>
                <div className="observation-bullets-grid mt-4">
                  <div className="obs-bullet"><span className="bullet-dot"></span> Where they were seated.</div>
                  <div className="obs-bullet"><span className="bullet-dot"></span> If there was any interaction with people.</div>
                  <div className="obs-bullet"><span className="bullet-dot"></span> How they navigated in the environment.</div>
                  <div className="obs-bullet"><span className="bullet-dot"></span> What kind of behavior was more prominent.</div>
                </div>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Execution Details</h4>
                <p className="mt-2 text-muted text-justify">
                  Observations were conducted in various library zones, including study carrels, study tables, and the book stack area, with a focus on identifying patterns of space usage, seating preferences, movements within zones, and levels of interaction among the participants. 
                </p>
                <p className="mt-2 text-muted text-justify">
                  Participants consisted of seven students (student status unknown), observed during regular library hours across two periods on the weekdays — 9/10/25 (Wednesday) and 10/2/25 (Thursday) and no identifying information was recorded to maintain anonymity and privacy. 
                </p>
                <p className="mt-2 text-muted text-justify">
                  Data were collected using detailed field notes and an observational coding chart, documenting behaviors such as seating selection, retrieval of resources, seating shifts, for how long they stayed, and whether they had any form of interaction with each other. The observations took place at 2 time periods between 12:00 pm - 12:20 pm and 10:05 am - 10:35 am the other day.
                </p>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Outcome</h4>
                <p className="mt-2 text-muted text-justify">
                  The goal of this method was to capture the authentic behavior and routine of the users and understand their pain points and decision-making patterns.
                </p>

                {/* Limitations Section - Red symbol and red color removed */}
                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Limitations</h4>
                <ul className="custom-bullets mt-2 text-muted">
                  <li>There can be cases where we do not quite get why someone behaves a certain way, as we are only observing and not interviewing.</li>
                  <li>Observations are time-bound and can miss certain rare behaviors and edge cases.</li>
                </ul>
              </div>

              <div className="method-image-column">
                <div className="image-frame glass-card-dark">
                  <img src={i4Img} alt="Fly on the wall observation sheet" className="framed-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider-line mt-24 mb-24"></div>

          {/* Method 4: Empathy Mapping - Space added */}
          <div className="methodology-block mt-32">
            <div className="methodology-header">
              <span className="methodology-pill">Method 04</span>
              <h3 className="methodology-title font-bold mt-2">Empathy Mapping</h3>
            </div>
            
            <div className="method-details-grid mt-6">
              <div>
                <h4 className="font-bold text-gold uppercase tracking-wider">Research Approach</h4>
                <p className="mt-2 text-muted text-justify">
                  This is qualitative UX method used to synthesize what we heard and observed from users into a deeper understanding of their emotions, behaviors, frustrations and expectations. This approach allows us to understand not just what users do but what they feel while doing it and helps in identifying emotional perspective of the user.
                </p>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Method</h4>
                <p className="mt-2 text-muted">We followed a structured Empathy mapping method, using the four quadrants:</p>
                <div className="empathy-quadrants-list mt-4">
                  <div className="eq-item"><span className="eq-label">Says:</span> Quotes reflecting explicit expressions.</div>
                  <div className="eq-item"><span className="eq-label">Thinks:</span> Inferred thoughts that might remain unsaid.</div>
                  <div className="eq-item"><span className="eq-label">Does:</span> Physical routines and spatial movements.</div>
                  <div className="eq-item"><span className="eq-label">Feels:</span> Emotional responses and frustrations.</div>
                </div>
                <p className="mt-4 text-muted">
                  We identified pain points (what annoys, confuses, or slows the user down) and gain points (what does the user hope for, enjoy, or value most).
                </p>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Outcome</h4>
                <p className="mt-2 text-muted text-justify">
                  This map gave us a structured view of the user’s internal and external experience and guided us for the later processes of the research.
                </p>

                {/* Limitations Section - Red symbol and red color removed */}
                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Limitations</h4>
                <ul className="custom-bullets mt-2 text-muted">
                  <li>There can be cases of researcher making assumptions on user’s feelings and thought process. So, this can leave out some edge cases.</li>
                </ul>
              </div>

              <div className="method-image-column">
                <div className="image-frame glass-card-dark">
                  <img src={i5Img} alt="Empathy map artifact" className="framed-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider-line mt-24 mb-24"></div>

          {/* Method 5: Journey Mapping - Space added */}
          <div className="methodology-block mt-32">
            <div className="methodology-header">
              <span className="methodology-pill">Method 05</span>
              <h3 className="methodology-title font-bold mt-2">Journey Mapping</h3>
            </div>
            
            <div className="method-details-grid mt-6">
              <div>
                <h4 className="font-bold text-gold uppercase tracking-wider">Research Approach</h4>
                <p className="mt-2 text-muted text-justify">
                  This is qualitative UX method used to visualize the user’s end-to-end experience across different stages of a task. It gives a deeper understanding into the user’s journey in performing a certain workflow.
                </p>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Method</h4>
                <p className="mt-2 text-muted text-justify">
                  For analyzing the user’s workflow we first created a User Archetype named <strong className="text-white">“CollaborativeLearner”</strong>. This represented a collaborative and comfort-seeking undergraduate design student, who regularly visits the Design Library hoping to work with peers but often leaves disappointed by the lack of group-friendly spaces and varied seating. 
                </p>
                <p className="mt-2 text-muted text-justify">
                  The journey included 4 different stages:
                </p>
                <div className="journey-stages-grid mt-4">
                  <div className="stage-pill">1. Space Identification</div>
                  <div className="stage-pill">2. Collaboration Attempt</div>
                  <div className="stage-pill">3. Adaptation</div>
                  <div className="stage-pill">4. Completion</div>
                </div>
                <p className="mt-4 text-muted text-justify">
                  For each of these stages, steps were documented, which included the Touchpoints, Thoughts, Experience, Pains and Gains, and Objectives.
                </p>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Outcome</h4>
                <p className="mt-2 text-muted text-justify">
                  This map helped us understand user’s overall experience and workflow and identify opportunities to design seating arrangements that fostered group work.
                </p>

                {/* Limitations Section - Red symbol and red color removed */}
                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Limitations</h4>
                <ul className="custom-bullets mt-2 text-muted">
                  <li>User experiences can be non-linear as well, but journey maps often force a structured timeline.</li>
                  <li>The map may not capture the different variations and rare behaviors.</li>
                </ul>
              </div>

              <div className="method-image-column">
                <div className="image-frame glass-card-dark">
                  <img src={i6Img} alt="User Journey Map" className="framed-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHASE 2 SEPARATOR */}
        <div className="phase-transition-banner mt-32">
          <div className="phase-tag">PHASE 02</div>
          <h2 className="phase-title font-bold">DEFINITION PHASE</h2>
          <div className="phase-accent-line"></div>
        </div>

        {/* SECTION 4: Definition Phase Content */}
        <section className="case-section mt-12">
          <div className="text-center mb-16">
            <h3 className="discovery-main-title font-bold">USER MODELING METHODS</h3>
            <p className="discovery-subheading text-muted mt-2">Analyzing user behavior and core problems through structured modeling methods.</p>
          </div>

          {/* Poke Mapping - Space added */}
          <div className="methodology-block mt-32">
            <div className="methodology-header">
              <span className="methodology-pill">Method 01</span>
              <h3 className="methodology-title font-bold mt-2">Poke Mapping</h3>
            </div>
            
            <div className="method-details-grid mt-6">
              <div>
                <h4 className="font-bold text-gold uppercase tracking-wider">Research Approach</h4>
                <p className="mt-2 text-muted text-justify">
                  This is a creative and qualitative user modeling method that assigns metaphorical “Character Types” to users based on their traits, behaviors and interaction patterns. Poke mapping helps you synthesize real user data into actionable user groups.
                </p>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Method</h4>
                <p className="mt-2 text-muted text-justify">
                  We defined our focus as our research question, i.e., how can flexible and varied seating arrangements help in fostering connection and group work in the library. And then from each of our data points, such as the surveys, interview results and our observations, we created user cards which summarized one distinct use case. Each card was named with a memorable tag, i.e. not a person’s name but something creative and fun.
                </p>
                <p className="mt-2 text-muted text-justify">
                  We grouped the cards into clusters based on emerging patterns (behaviors, goals and pain points) and repeated this process. Our clusters included:
                </p>
                <div className="cluster-pills-row mt-4">
                  <span className="cluster-pill">“Vibe Seeker”</span>
                  <span className="cluster-pill">“I Want It All”</span>
                  <span className="cluster-pill">“Design Library Avoiders”</span>
                  <span className="cluster-pill">“Princess and the Pea”</span>
                </div>
                <p className="mt-4 text-muted text-justify">
                  These clusters became our usable audience segments.
                </p>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Outcome</h4>
                <p className="mt-2 text-muted text-justify">
                  This method helped us easily understand user motivations and highlighted the behavioral archetypes. In a way it inspired us in giving a direction to our design for our research.
                </p>

                {/* Limitations Section - Red symbol and red color removed */}
                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Limitations</h4>
                <ul className="custom-bullets mt-2 text-muted">
                  <li>Conventional personas give out more detailed information in comparison to poke mapping, which is mostly about the context.</li>
                </ul>
              </div>

              <div className="method-image-column">
                <div className="image-frame glass-card-dark">
                  <img src={i7Img} alt="Poke mapping categorization board" className="framed-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider-line mt-24 mb-24"></div>

          {/* Dynamic Selves - Space added */}
          <div className="methodology-block mt-32">
            <div className="methodology-header">
              <span className="methodology-pill">Method 02</span>
              <h3 className="methodology-title font-bold mt-2">Dynamic Selves</h3>
            </div>
            
            <div className="method-details-grid mt-6">
              <div>
                <h4 className="font-bold text-gold uppercase tracking-wider">Research Approach</h4>
                <p className="mt-2 text-muted text-justify">
                  It is a qualitative method that helps you conceptualize how one student might act differently when performing different actions/tasks.
                </p>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Method</h4>
                <p className="mt-2 text-muted text-justify">
                  We picked up a transcript from the Pop-up interview and then sorted cards with respective photos that represented the same user under different contexts.
                </p>

                {/* Interactive Dynamic Selves Cards */}
                <h5 className="font-bold mt-6 text-white text-sm uppercase tracking-wider">Our Cards Included (Hover to interact):</h5>
                <div className="dynamic-selves-interactive-grid mt-4">
                  {dynamicSelvesCards.map((card) => (
                    <div 
                      key={card.id}
                      className={`selves-card-rect ${activeSelfCard === card.id ? 'active' : ''}`}
                      onMouseEnter={() => setActiveSelfCard(card.id)}
                      onMouseLeave={() => setActiveSelfCard(null)}
                    >
                      <div className="selves-card-inner">
                        <div className="selves-card-text font-bold">{card.text}</div>
                        <div className="selves-card-description mt-2 text-xs text-muted">{card.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Outcome</h4>
                <p className="mt-2 text-muted text-justify">
                  This helped us in identifying events and situations that support motivation behind someone’s behavior. By adding in photos of the context, it gives out a feeling of the situation without introducing stereotypes about people.
                </p>

                {/* Limitations Section - Red symbol and red color removed */}
                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Limitations</h4>
                <ul className="custom-bullets mt-2 text-muted">
                  <li>Can become a little complex if too many selves are identified.</li>
                </ul>
              </div>

              <div className="method-image-column">
                <div className="image-frame glass-card-dark">
                  <img src={i8Img} alt="Dynamic selves layout board" className="framed-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider-line mt-24 mb-24"></div>

          {/* 5 Whys - Space added */}
          <div className="methodology-block mt-32">
            <div className="methodology-header">
              <span className="methodology-pill">Method 03</span>
              <h3 className="methodology-title font-bold mt-2">5 Why’s</h3>
            </div>
            
            <div className="method-details-grid mt-6">
              <div>
                <h4 className="font-bold text-gold uppercase tracking-wider">Research Approach</h4>
                <p className="mt-2 text-muted text-justify">
                  It is a qualitative root-cause analysis method used to get to the root of a problem quickly. The main strategy is to drill down by asking “Why” or “What caused the problem” and it goes on depending on the previous “Why”.
                </p>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Method</h4>
                <p className="mt-2 text-muted text-justify">
                  We started with our primary research question and repeatedly asked “Why” to understand deeply the solution to a problem. This continued for 4-5 times until the root cause was clear. This analysis of the root cause directly informed our research question formation, analysis sentence and gave us insights for future design opportunities.
                </p>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Outcome</h4>
                <p className="mt-2 text-muted text-justify">
                  The method gave us a clear analysis on our problem and why this problem persisted and helped us frame more focused research moving forward.
                </p>

                {/* Limitations Section - Red symbol and red color removed */}
                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Limitations</h4>
                <ul className="custom-bullets mt-2 text-muted">
                  <li>Can unintentionally force a single root cause even if multiple exist.</li>
                  <li>Each problem/Why is highly dependable on the previous one, so it should be formulated clearly.</li>
                </ul>
              </div>

              <div className="method-image-column">
                <div className="image-frame glass-card-dark">
                  <img src={i9Img} alt="5 Whys root cause analysis tree" className="framed-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider-line mt-24 mb-24"></div>

          {/* Designing New User Modeling Method - Space added */}
          <div className="methodology-block mt-32">
            <div className="methodology-header">
              <span className="methodology-pill">Method 04</span>
              <h3 className="methodology-title font-bold mt-2">Designing New User Modeling Method: Thematic Archetype Mapping</h3>
            </div>
            
            <div className="method-details-grid mt-6">
              <div>
                <h4 className="font-bold text-gold uppercase tracking-wider">Research Approach</h4>
                <p className="mt-2 text-muted text-justify">
                  This is a qualitative user modeling method that clusters user data based on behavioral themes. Each behavioral theme is divided into a quadrant and the data is sorted into these quadrants accordingly.
                </p>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Method</h4>
                <ul className="custom-bullets mt-2 text-muted">
                  <li>We created and named user group archetypes based on user behavior.</li>
                  <li>Then we sorted the behaviors/responses into the quadrant that best represents them.</li>
                  <li>We analyzed each quadrant to understand which user group archetype has the most/least content and chose the quadrant(s) that best represent the data.</li>
                  <li>Lastly, we inferred most prominent behavior(s) and gave an overall result on them.</li>
                </ul>

                {/* Limitations Section - Red symbol and red color removed */}
                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Limitations</h4>
                <ul className="custom-bullets mt-2 text-muted">
                  <li>Different research may interpret user behaviors differently; there is no clear criteria here.</li>
                  <li>There can be cases of multiple prominent archetypes.</li>
                </ul>
              </div>

              <div className="method-image-column">
                <div className="image-frame glass-card-dark">
                  <img src={i10Img} alt="Thematic Archetype Mapping quadrants" className="framed-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider-line mt-24 mb-24"></div>

          {/* Epics & User Stories - Space added */}
          <div className="methodology-block mt-32">
            <div className="methodology-header">
              <span className="methodology-pill">Method 05</span>
              <h3 className="methodology-title font-bold mt-2">Epics & User Stories</h3>
            </div>
            
            <div className="method-details-grid mt-6">
              <div>
                <h4 className="font-bold text-gold uppercase tracking-wider">Research Approach</h4>
                <p className="mt-2 text-muted text-justify">
                  These are stories created by synthesizing qualitative insights on user behaviors, motivations and needs. It basically captures broad user goals, and the user stories describe the small tasks.
                </p>

                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Method</h4>
                <p className="mt-2 text-muted text-justify">
                  We reviewed the thematic analysis and identified recurring goals and pain points. Each of these main themes converted into an Epic. Then we broke each epic down into multiple small user stories representing user needs and actual tasks.
                </p>
                
                <h5 className="font-bold mt-6 text-white text-sm uppercase tracking-wider">We came up with two Broad Epics:</h5>
                <div className="epics-grid mt-4">
                  <div className="epic-box glass-card-dark">
                    <span className="epic-tag font-bold">Epic 1</span>
                    <p className="mt-2 text-gold font-bold">“I want a collaborative space to connect with others.”</p>
                  </div>
                  <div className="epic-box glass-card-dark">
                    <span className="epic-tag font-bold">Epic 2</span>
                    <p className="mt-2 text-gold font-bold">“I want a comfortable environment for learning.”</p>
                  </div>
                </div>

                {/* Limitations Section - Red symbol and red color removed */}
                <h4 className="font-bold text-gold uppercase tracking-wider mt-8">Limitations</h4>
                <ul className="custom-bullets mt-2 text-muted">
                  <li>Epics are too large and lack detail, while user stories can be misused as a complete replacement for conversations and can create a false sense of completeness.</li>
                </ul>
              </div>

              <div className="method-image-column">
                <div className="image-frame glass-card-dark">
                  <img src={i11Img} alt="User stories sticky board" className="framed-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider-line mt-24 mb-24"></div>

          {/* Research Timeframe */}
          <div className="timeframe-block mt-16 text-center">
            <h3 className="section-subheading-bold font-bold mb-8">Research Timeframe</h3>
            <div className="image-frame timeline-frame glass-card-dark max-w-4xl mx-auto">
              <img src={timeImg} alt="UX Research timeline graph" className="framed-img" />
            </div>
          </div>
        </section>

        {/* SECTION 5: Overall Limitations - Red symbol and red color removed */}
        <section className="case-section mt-24 p-12 glass-card-dark border-gold-glow overall-limitations-box">
          <h2 className="case-title-serif text-gold font-bold uppercase tracking-wider text-center mb-10">Overall Research Limitations</h2>
          
          <div className="limitations-grid-styled">
            <div className="limit-card">
              <div className="limit-badge font-bold">Short Timeline</div>
              <h4 className="font-bold text-white mt-4">Research Time Constraints</h4>
              <p className="mt-2 text-muted text-sm text-left">Different research methods had to be interpreted and completed quickly due to academic semester constraints, limiting deeper iterative analysis.</p>
            </div>
            
            <div className="limit-card">
              <div className="limit-badge font-bold">Observation Scope</div>
              <h4 className="font-bold text-white mt-4">Limited Contextual Observations</h4>
              <p className="mt-2 text-muted text-sm text-left">The observation (Fly-on-the-wall) could have missed certain user behaviors due to odd timings and specific spaces, meaning some collaborative interactions went unnoticed.</p>
            </div>

            <div className="limit-card">
              <div className="limit-badge font-bold">Subjective Bias</div>
              <h4 className="font-bold text-white mt-4">Researcher Interpretation Bias</h4>
              <p className="mt-2 text-muted text-sm text-left">Qualitative methods depend highly on researchers' assumptions, experience, and judgments, which can vary from coder to coder.</p>
            </div>
          </div>
        </section>

        {/* SECTION 6: Findings & Insights Data Visualisation */}
        <section className="case-section mt-24 text-center">
          <h2 className="case-title-serif text-glow-gold font-bold mb-10">Findings & Insights</h2>
          <div className="image-frame data-frame glass-card-dark max-w-3xl mx-auto">
            <img src={dataImg} alt="Findings and Data Visualisation Graphs" className="framed-img" />
          </div>
        </section>

        {/* SECTION 7: Design Recommendations */}
        <section className="case-section mt-24 mb-16">
          <h2 className="case-title-serif font-bold text-center mb-12">Design Recommendations</h2>
          
          <div className="recommendations-tier-grid">
            {/* High Priority */}
            <div className="recommendation-tier-card high-p">
              <div className="tier-header font-bold uppercase">High Priority</div>
              <div className="tier-content mt-6">
                <div className="tier-item">
                  <ChevronRight size={14} className="text-gold flex-shrink-0" style={{ marginTop: '0.25rem' }} />
                  <p>Designation of specific areas for collaborative work with multi-sized table setups.</p>
                </div>
                <div className="tier-item mt-4">
                  <ChevronRight size={14} className="text-gold flex-shrink-0" style={{ marginTop: '0.25rem' }} />
                  <p>Provide diverse seating types (Ergonomic Chairs, Soft seating, etc.) to encourage students to stay longer.</p>
                </div>
              </div>
            </div>

            {/* Medium Priority */}
            <div className="recommendation-tier-card medium-p">
              <div className="tier-header font-bold uppercase">Medium Priority</div>
              <div className="tier-content mt-6">
                <div className="tier-item">
                  <ChevronRight size={14} className="text-gold flex-shrink-0" style={{ marginTop: '0.25rem' }} />
                  <p>Provide movable tables and chairs that can be easily rearranged for group-work.</p>
                </div>
                <div className="tier-item mt-4">
                  <ChevronRight size={14} className="text-gold flex-shrink-0" style={{ marginTop: '0.25rem' }} />
                  <p>Include separate collaborative spaces with physical/visual dividers for focused group work.</p>
                </div>
              </div>
            </div>

            {/* Low Priority */}
            <div className="recommendation-tier-card low-p">
              <div className="tier-header font-bold uppercase">Low Priority</div>
              <div className="tier-content mt-6">
                <div className="tier-item">
                  <ChevronRight size={14} className="text-gold flex-shrink-0" style={{ marginTop: '0.25rem' }} />
                  <p>Using spatial cues and clear signage to help students quickly identify areas for group-work.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default LibraryDetail;
