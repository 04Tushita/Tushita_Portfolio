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
    id: "health-app",
    title: "VitalSync Healthcare App",
    shortDescription: "An AI-powered patient monitoring mobile application focusing on accessibility and seamless UX.",
    tags: ["UI/UX Design", "Mobile App", "HealthTech"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    role: "Lead Product Designer",
    duration: "Jan 2024 - Apr 2024",
    problem: "Patients often struggle to keep track of their vital signs and medication schedules, leading to decreased health outcomes and increased anxiety.",
    solution: "VitalSync offers a simplified, calming interface that uses AI to predict health trends and gently remind users of their routines without overwhelming them.",
    features: [
      "Intuitive daily dashboard with predictive health insights.",
      "Accessible typography and high-contrast color modes.",
      "Seamless integration with wearable health devices."
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
    title: "Senior Product Designer",
    company: "TechNova Solutions",
    duration: "2022 - Present",
    description: "Leading the design of enterprise SaaS products. Integrated AI-driven features into the core user workflow, improving task efficiency by 40%."
  },
  {
    id: 2,
    type: 'work',
    title: "UI/UX Designer",
    company: "Creative Pulse Agency",
    duration: "2020 - 2022",
    description: "Designed responsive websites and mobile applications for diverse clients. Conducted user research, wireframing, and interactive prototyping."
  },
  {
    id: 3,
    type: 'education',
    title: "Master's in Human-Computer Interaction",
    company: "Design Institute of Technology",
    duration: "2018 - 2020",
    description: "Focused on user-centered design, cognitive psychology, and the integration of AI in user interfaces."
  },
  {
    id: 4,
    type: 'education',
    title: "Bachelor of Fine Arts in Graphic Design",
    company: "State University",
    duration: "2014 - 2018",
    description: "Developed strong foundational skills in visual design, typography, and color theory."
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
