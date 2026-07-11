import React from 'react';

/**
 * SectionDivider renders a full-width organic wavy divider using SVG.
 * It helps create curvy line partitions between sections, matching Ref 1.png.
 * 
 * @param {string} type - "scoop" | "wave" | "drip" | "hill"
 * @param {string} bgFill - The color of the section ABOVE the divider (translates to the SVG background or path color)
 * @param {string} colorFill - The color of the section BELOW the divider (or the filled path)
 * @param {boolean} inverted - If true, flips the SVG vertically
 */
const SectionDivider = ({ type = "wave", bgFill = "var(--bg-secondary)", colorFill = "var(--bg-main)", inverted = false }) => {
  const getSvgPath = () => {
    switch (type) {
      case "scoop":
        // A deep organic dip
        return (
          <path 
            d="M0,0 C360,80 1080,80 1440,0 L1440,100 L0,100 Z" 
            fill={colorFill} 
          />
        );
      case "hill":
        // A smooth curved hill rising up
        return (
          <path 
            d="M0,100 C360,20 1080,20 1440,100 Z" 
            fill={colorFill} 
          />
        );
      case "drip":
        // A stylish multi-curve wavy pattern
        return (
          <path 
            d="M0,20 C180,60 360,0 540,40 C720,80 900,10 1080,40 C1260,70 1350,30 1440,20 L1440,100 L0,100 Z" 
            fill={colorFill} 
          />
        );
      case "wave":
      default:
        // A classic smooth, elegant S-curve wave divider (as seen in Ref 1)
        return (
          <path 
            d="M0,30 C240,75 480,15 720,45 C960,75 1200,15 1440,45 L1440,100 L0,100 Z" 
            fill={colorFill} 
          />
        );
    }
  };

  const style = {
    width: '100%',
    height: '60px',
    display: 'block',
    backgroundColor: bgFill,
    transform: inverted ? 'rotateX(180deg)' : 'none',
    margin: '0',
    padding: '0',
    overflow: 'hidden'
  };

  return (
    <div className="section-divider-container" style={{ overflow: 'hidden', width: '100%', lineHeight: '0' }}>
      <svg 
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none" 
        style={style}
        aria-hidden="true"
      >
        {getSvgPath()}
      </svg>
    </div>
  );
};

export default SectionDivider;
