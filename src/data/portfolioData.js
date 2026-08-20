import IntroVideo from '../assets/projects/merlin/Videos/Intro_video.mov';
import pro2Video from '../Project2/Butterfly project/Videos/pro2.mp4';
import thumbVideo from '../Library project/video/thumb.mp4';

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
    id: "library-project",
    title: "NC State Design Library Research",
    subtitle: "Understanding Student Collaboration: An analysis of Seating, Space and Study Behavior",
    shortDescription: "An analysis of how flexible and varied seating arrangements can foster connection and group work in the design library.",
    tags: ["Academic Project", "UX Research", "Spatial Behavior Analysis"],
    image: thumbVideo,
    role: "UX Research",
    duration: "August 2025 – November 2025",
    problem: "The current seating arrangements in the Design Library do not effectively support undergraduate students who wish to engage in flexible, planned group work. Students face challenges in finding appropriate collaborative spaces, which limits opportunities for connection and knowledge exchange.",
    solution: "A comprehensive UX research study utilizing Open Coding, Affinity Clustering, Fly-on-the-wall observations, Empathy Mapping, and Journey Mapping to understand user behaviors and propose collaborative space designs.",
    features: [
      "Identifying students' collaborative needs.",
      "Survey analysis through open coding and meta-themes.",
      "User modeling via poke mapping and dynamic selves.",
      "Design-driven recommendations for collaborative zones."
    ]
  }
];

export const experience = [
  {
    id: 1,
    type: 'education',
    title: "Bachelor of Technology in Computer Science with Specialization in AI & ML",
    company: "Vellore Institute of Technology, Bhopal",
    duration: "Jul' 2020 - May' 2024",
  },
  {
    id: 2,
    type: 'work',
    title: "Associate Software Engineer",
    company: "Tech Mahindra",
    duration: "Dec' 2024 - May' 2025"
    ///description: "Designed responsive websites and mobile applications for diverse clients. Conducted user research, wireframing, and interactive prototyping."
  },
  {
    id: 3,
    type: 'work',
    title: "Lead Social Media Content Creator for MGXD Department",
    company: "North Carolina State University",
    duration: "Sep' 2025  - Apr' 2026",
    //description: "Focused on user-centered design, cognitive psychology, and the integration of AI in user interfaces."
  },
  {
    id: 4,
    type: 'education',
    title: "Master's in Graphic & Experience Design",
    company: "North Carolina State University",
    duration: "Aug' 2025 - Present",
    //description: "Developed strong foundational skills in visual design, typography, and color theory."
  },
  {
    id: 5,
    type: 'part-time',
    title: "Teaching Assistant - GD 400_01 (Advanced Graphic Design Studio) ",
    company: "North Carolina State University",
    duration: "Aug' 2026 - Present",
    //description: "Developed strong foundational skills in visual design, typography, and color theory."
  }
];

export const skills = [
  { name: "Figma", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", category: "Design" },
  { name: "Adobe XD", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg", category: "Design" },
  { name: "Adobe After Effects", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg", category: "Design" },
  { name: "Java", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", category: "Code" },
  { name: "Spline", logoUrl: "https://cdn.brandfetch.io/spline.design/w/400/h/400", category: "Design" },
  { name: "Miro", logoUrl: "https://cdn.simpleicons.org/miro/050038", category: "Research" },
  { name: "Notion", logoUrl: "https://cdn.simpleicons.org/notion/000000", category: "Research" },
  { name: "HTML5", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", category: "Development" },
  { name: "CSS3", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", category: "Development" }
];
