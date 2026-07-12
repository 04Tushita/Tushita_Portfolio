import IntroVideo from '../assets/projects/merlin/Videos/Intro_video.mov';
import pro2Video from '../Project2/Butterfly project/Videos/pro2.mp4';

export const projects = [
  {
    id: "merlin",
    title: "Designing Merlin –",
    subtitle: "An AI-Assisted Workspace for Tiered Intelligence Reporting",
    shortDescription: "An AI-Assisted Workspace for Tiered Intelligence Reporting",
    tags: ["Studio Project", "Enterprise UX", "Human-AI Collaboration"],
    image: IntroVideo,
    role: "UX Research • UX Design • UI Design",
    duration: "February 2026 – April 2026",
    problem: "Intelligence analysts work in environments where every reporting decision has operational consequences. A single report may need to be rewritten multiple times for different audiences, each with its own security clearance, mission requirements, and level of technical detail.",
    solution: "We designed Merlin – an AI-augmented workspace that combines a traditional document-based editor with a node-based relationship visualization, built in partnership with the Laboratory of Analytical Sciences (LAS).",
    features: [
      "Node-Based Traceability",
      "Customer Group Management",
      "Cross-Tier Highlight Synchronization",
      "Multi-tier Viewing",
      "Release Checklist"
    ]
  },
  {
    id: "butterfly-project",
    title: "Reviving the Silent Wings",
    subtitle: "Transforming Preserved Butterfly Specimens into an Immersive Conservation Experience",
    shortDescription: "Transforming Preserved Butterfly Specimens into an Immersive Conservation Experience",
    tags: ["Studio Project", "Immersive Experience Design", "Interactive Museum Experience"],
    image: pro2Video,
    role: "Research • UI Design • 3D Design",
    duration: "September 2025 – December 2025",
    problem: "Museums rely on static displays and labels that visitors glance at briefly. Preserved specimens fail to engage visitors or prompt deep reflection on butterfly conservation.",
    solution: "An immersive spatial experience combining projection mapping, gesture interaction, motion tracking, and interactive digital interfaces.",
    features: [
      "Digital specimen augmentation",
      "Large-scale projection mapping",
      "Motion-responsive floor projections",
      "Interactive scientific overlays"
    ]
  },
  {
    id: "eco-ecommerce",
    title: "Lumina Eco-Store",
    shortDescription: "A sustainable e-commerce platform designed to promote eco-friendly products with a minimal footprint.",
    tags: ["E-commerce", "UX Research", "Web"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    role: "UX Researcher & Designer",
    duration: "Mar 2023 - Jul 2023",
    problem: "Consumers find it hard to verify the sustainability claims of products while shopping online.",
    solution: "Lumina introduces an 'Eco-Score' system seamlessly integrated into the shopping experience, accompanied by a clean, earthy aesthetic.",
    features: [
      "Transparent product lifecycle tracking.",
      "Minimalist checkout process to reduce cognitive load.",
      "Engaging micro-interactions for adding items to cart."
    ]
  }
];

export const experience = [
  {
    id: 1,
    type: 'education',
    title: "Master's in Graphic & Experience Design",
    company: "North Carolina State University",
    duration: "Aug' 2025 - Present",
  },
  {
    id: 2,
    type: 'work',
    title: "Lead Social Media Content Creator for MGXD Department",
    company: "North Carolina State University",
    duration: "Sep' 2025  - Apr' 2026",

    ///description: "Designed responsive websites and mobile applications for diverse clients. Conducted user research, wireframing, and interactive prototyping."
  },
  {
    id: 3,
    type: 'work',
    title: "Associate Software Engineer",
    company: "Tech Mahindra",
    duration: "Dec' 2024 - May' 2025",
    //description: "Focused on user-centered design, cognitive psychology, and the integration of AI in user interfaces."
  },
  {
    id: 4,
    type: 'education',
    title: "Bachelor of Technology in Computer Science with Specialization in AI & ML",
    company: "Vellore Institute of Technology, Bhopal",
    duration: "Jul' 2020 - May' 2024",
    //description: "Developed strong foundational skills in visual design, typography, and color theory."
  }
];

export const skills = [
  { name: "Figma", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", category: "Design" },
  { name: "Adobe XD", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg", category: "Design" },
  { name: "Illustrator", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg", category: "Design" },
  { name: "Framer", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framer/framer-original.svg", category: "Design" },
  { name: "Webflow", logoUrl: "https://cdn.simpleicons.org/webflow/4353FF", category: "Design" },
  { name: "Miro", logoUrl: "https://cdn.simpleicons.org/miro/050038", category: "Research" },
  { name: "Notion", logoUrl: "https://cdn.simpleicons.org/notion/000000", category: "Research" },
  { name: "HTML5", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", category: "Development" },
  { name: "CSS3", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", category: "Development" },
  { name: "React.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", category: "Development" }
];
