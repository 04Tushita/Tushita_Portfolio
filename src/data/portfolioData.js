import {
  Figma,
  PenTool,
  Layout,
  Code2,
  MonitorSmartphone,
  Smartphone,
  Palette,
  Eye
} from 'lucide-react';

export const projects = [
  {
    id: "merlin",
    title: "Designing Merlin –",
    subtitle: "An AI-Assisted Workspace for Tiered Intelligence Reporting",
    shortDescription: "An AI-Assisted Workspace for Tiered Intelligence Reporting",
    tags: ["Studio Project", "Enterprise UX", "Human-AI Collaboration"],
    image: "/projects/merlin/Videos/Intro_video.mov",
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
    id: "fintech-dashboard",
    title: "Aura Fintech Dashboard",
    shortDescription: "A modern, high-end web dashboard for personal finance management with data visualization.",
    tags: ["Web Design", "Dashboard", "FinTech"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    role: "UI/UX Designer",
    duration: "Aug 2023 - Dec 2023",
    problem: "Personal finance tools are often cluttered with complex charts that intimidate everyday users.",
    solution: "Aura breaks down financial data into easily digestible, interactive visual components using a clean, glassmorphic design system.",
    features: [
      "Customizable widgets for tracking expenses and goals.",
      "Interactive data visualizations with Framer Motion.",
      "Smart categorization of transactions using ML."
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
    type: 'work',
    title: "Lead Social Media Content Creator for MGXD Departementr",
    company: "North Carolina State University",
    duration: "Sep' 2025  - Apr' 2026",
  },
  {
    id: 2,
    type: 'education',
    title: "Master's in Graphic & Experience Design",
    company: "North Carolina State University",
    duration: "Aug' 2025 - Present",

    ///description: "Designed responsive websites and mobile applications for diverse clients. Conducted user research, wireframing, and interactive prototyping."
  },
  {
    id: 3,
    type: 'work',
    title: "Associate Software Engineerr",
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
  { name: "Figma", icon: Figma, category: "Design" },
  { name: "Adobe XD", icon: Layout, category: "Design" },
  { name: "Prototyping", icon: Smartphone, category: "Design" },
  { name: "UI Design", icon: Palette, category: "Design" },
  { name: "UX Research", icon: Eye, category: "Research" },
  { name: "Wireframing", icon: PenTool, category: "Design" },
  { name: "HTML/CSS", icon: Code2, category: "Development" },
  { name: "React.js", icon: MonitorSmartphone, category: "Development" }
];
