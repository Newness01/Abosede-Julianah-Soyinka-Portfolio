import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/realestate.jpeg';
import projectImg3 from '../assets/todoapp.png';
import projectImg4 from '../assets/portfolio.png';
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
    description: 'Building responsive and interactive user interfaces with React.js, Vue.js, and modern JavaScript (ES6+).',
    tags: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
  },
  {
    title: 'UI/UX Design',
    icon: FaPaintBrush,
    description: 'Designing visually appealing layouts and seamless user experiences with Figma and Tailwind CSS.',
    tags: ['Figma', 'Tailwind CSS', 'CSS3', 'Responsive Design']
  },
  {
    title: 'State Management',
    icon: FaCode,
    description: 'Managing application state efficiently using Redux, Context API, and React Toolkit.',
    tags: ['Redux', 'Context API', 'React Toolkit']
  },
  {
    title: 'Testing & Debugging',
    icon: FaTools,
    description: 'Ensuring code quality with Jest and browser developer tools.',
    tags: ['Jest', 'Testing Library', 'DevTools']
  },
  {
    title: 'Version Control',
    icon: FaTools,
    description: 'Collaborating and managing code with Git & GitHub.',
    tags: ['Git', 'GitHub']
  },
  {
    title: 'Performance Optimization',
    icon: FaLightbulb,
    description: 'Enhancing speed and accessibility for web applications.',
    tags: ['Performance', 'Accessibility', 'SEO']
  },
  {
    title: 'Build Tools',
    icon: FaTools,
    description: 'Streamlining development with Webpack and Vite.',
    tags: ['Webpack', 'Vite']
  }
];



export const projects = [
  {
    title: "Cryptocurrency Dashboard",
    description: "Built an interactive dashboard with React to track real-time crypto prices, visualize trends, and provide users with insightful analytics through dynamic charts and a responsive UI.",
    image: projectImg1,
    tech: ["React", "React Router", "Recharts", "Fetch API"],
    icons: [FaReact, FaLightbulb, FaCode],
    demo: "#",
    code: "#",
  },
  {
    title: "Real Estate Website",
    description: "Developed a modern, mobile-friendly real estate platform featuring smooth UI animations, property listings, testimonials, and a contact form, all styled with Tailwind CSS and React.",
    image: projectImg2,
    tech: ["React", "TailwindCSS", "Framer Motion", "React Toastify", "API Integration"],
    icons: [FaReact, FaPaintBrush, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Todo App",
    description: "Created a task management app using React and Redux, enabling users to efficiently add, view, and organize tasks with a clean interface and robust state management.",
    image: projectImg3,
    tech: ["React", "React Redux", "React Toolkit", "CSS"],
    icons: [FaReact, FaCode],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "Designed and built a personal portfolio to showcase projects, skills, and blogs, with support for dark/light mode and a focus on clean, accessible design.",
    image: projectImg4,
    tech: ["HTML", "CSS", "JavaScript", "API Integration"],
    icons: [FaPaintBrush, FaReact],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat App",
    description: "Engineered a real-time chat application with React, supporting group messaging, emojis, and file sharing, delivering a seamless and interactive user experience.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaLightbulb],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description: "Implemented an AI-powered tool that generates images from user prompts using DALL·E and Cloudinary, with a modern React interface and Tailwind CSS styling.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaReact, FaRobot],
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
