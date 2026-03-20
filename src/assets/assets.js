import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import myimage1 from '../assets/myimage1.jpeg';



export const assets = {
    myimage1,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Vue.js', 'Angular', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django', 'Laravel']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'Figma', 'Jest']
  }
];



export const projects = [
  {
    title: "Cryptocurrency Dashboard",
    description: "A cryptocurrency dashboard built with React and Vite. It fetches real-time data from the CoinGecko API, allowing users to view market trends, coin details, and perform calculations. The app features interactive charts, responsive UI, and modern development tools for code quality and performance.",
    image: projectImg1,
    tech: ["React", "React Router", "Recharts", "Fetch API"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Real Estate Website",
    description: "A modern, responsive real estate website built with React and Vite. The project features a clean UI styled with TailwindCSS, animated transitions using Framer Motion, and interactive toast notifications via React Toastify. Users can browse completed projects, view testimonials, and contact the company through a functional form integrated with Web3Forms API. The site is fully responsive, utilizes component-based architecture, and demonstrates best practices in frontend development, asset management, and API integration.",
    image: projectImg2,
    tech: ["React", "TailwindCSS", "Framer Motion", "React Toastify", "API Integration"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Todo App",
    description: "This project is a Todo List application built with React and Redux, allowing users to add, view, and manage tasks efficiently. It features a modern UI, state management with Redux, and uses Vite for fast development and build processes. The app demonstrates best practices in component-based architecture and state handling for scalable web applications.",
    image: projectImg3,
    tech: ["React", "React Redux", "React Toolkit", "CSS"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["HTML", "CSS", "JavaScript", "API Integration"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Frontend Developer",
    company: "Freelancer.",
    duration: " July 2025 - Present",
    description:
      "Build responsive web apps with React.js, Tailwind CSS, HTML, and JavaScript. Collaborate with teams to deliver optimized, accessible solutions, including a finance tracker, real estate website, and portfolio.",
    color: "purple"
  },
  {
    role: "Frontend Developer Intern",
    company: "Brandville Technologies",
    duration: "January 2026 - March 2026",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Product Manager Intern",
    company: "Decode Analytical",
    duration: "April 2024 - December 2024",
    description:
      "Drove user research, design, and product planning. Launched a course platform (+20% engagement) and improved team efficiency by 15%.",
    color: "blue"
  }
];
