import { title } from "framer-motion/client";
import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  blenderIcon,
  fullstackIcon,
  cppIcon,
  javaIcon,
  pythonIcon,
  webdeveloper,
  robot,
  deeplearning,
  ui,
} from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ML Developer",
      icon: creator,
    },
    {
      title: "3D Visual Creator",
      icon: blenderIcon,
    },
    {
      title: "MERN Stack Developer",
      icon: fullstackIcon,
    },
    {
      title: "C/C++ Programmer",
      icon: cppIcon,
    },
    {
      title: "Java Developer",
      icon: javaIcon,
    },
    {
      title: "Python Developer",
      icon: pythonIcon,
    },
  ];

  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "blender",
      icon: blenderIcon,
    }
  ];
  
  const experiences = [
    {
        title: "Web Developer",
        company_name: "NGO Website",
        icon: webdeveloper, // Replace with an appropriate icon for the NGO project
        iconBg: "#383E56",
        date: "Date Range", // Add the date range for this experience
        points: [
            "Developed a complete NGO website using the MERN stack, focusing on user experience and functionality.",
            "Collaborated with team members to integrate features like donation processing and project management.",
            "Ensured responsiveness and cross-browser compatibility across the site.",
            "Participated in code reviews to enhance code quality and maintainability.",
        ],
    },
    {
        title: "Chatbot Developer",
        company_name: "ChatBot Project",
        icon: robot, // Replace with an appropriate icon for the ChatBot project
        iconBg: "#E6DEDD",
        date: "Date Range", // Add the date range for this experience
        points: [
            "Created a chatbot integrating an on-demand API to enhance user interaction and support.",
            "Designed and implemented conversation flows that improved user engagement.",
            "Worked closely with clients to gather requirements and feedback for continuous improvement.",
            "Utilized machine learning algorithms to refine response accuracy.",
        ],
    },
    {
        title: "Deep Learning Developer",
        company_name: "Image Colorization Project",
        icon: deeplearning, // Replace with an appropriate icon for the deep learning project
        iconBg: "#383E56",
        date: "Date Range", // Add the date range for this experience
        points: [
            "Developed a deep learning model for the colorization of black and white images.",
            "Implemented neural network architectures to improve the quality of colorized outputs.",
            "Conducted experiments to fine-tune model parameters and optimize performance.",
            "Presented findings and results through visual demonstrations and reports.",
        ],
    },
    {
        title: "Front-End Developer",
        company_name: "Idea Point",
        icon: ui, // Replace with an appropriate icon for the Idea Point project
        iconBg: "#E6DEDD",
        date: "Date Range", // Add the date range for this experience
        points: [
            "Developed the front end of Idea Point, a platform where people with similar ideas connect.",
            "Implemented user-friendly interfaces and ensured a smooth user experience.",
            "Collaborated with designers and back-end developers to integrate functionalities.",
            "Focused on responsive design to ensure compatibility across devices.",
        ],
    },
];

  
const testimonials = [
  {
      testimonial:
          "Sandeep showed great dedication and enthusiasm while working on our NGO website. His efforts were invaluable in getting the project off the ground.",
      name: "Raj Kumar",
      designation: "Project Manager",
      company: "NGO Organization",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
      testimonial:
          "Sandeep's work on the chatbot was impressive for someone at his level. He was open to feedback and eager to improve.",
      name: "Shakthi Kumar",
      designation: "Team Lead",
      company: "University Project Team",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
      testimonial:
          "The colorization project Sandeep worked on was a great learning experience for him. He demonstrated a solid understanding of deep learning concepts.",
      name: "Ajay Kodthiwada",
      designation: "Classmate",
      company: "College of Engineering",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
      name: "Idea Point - Frontend Website",
      description:
          "A platform that connects people with similar ideas, allowing users to share and collaborate on innovative projects.",
      tags: [
          {
              name: "react",
              color: "blue-text-gradient",
          },
          {
              name: "mongodb",
              color: "green-text-gradient",
          },
          {
              name: "tailwind",
              color: "pink-text-gradient",
          },
      ],
      image: carrent, // Replace with the appropriate image for Idea Point
      source_code_link: "https://github.com/DANNE-SANDEEP/IdeaPoint.git", // Replace with your actual GitHub link
  },
  {
      name: "Image Colorization",
      description:
          "A deep learning project that colorizes black and white images, enhancing visual quality and appeal.",
      tags: [
          {
              name: "python",
              color: "blue-text-gradient",
          },
          {
              name: "tensorflow",
              color: "green-text-gradient",
          },
          {
              name: "deep-learning",
              color: "pink-text-gradient",
          },
      ],
      image: jobit, // Replace with the appropriate image for Image Colorization
      source_code_link: "https://github.com/DANNE-SANDEEP/Colorize-AI.git", // Replace with your actual GitHub link
  },
  {
      name: "Chatbot with On-Demand API",
      description:
          "An interactive chatbot that provides users with real-time responses and integrates with an on-demand API for enhanced functionality.",
      tags: [
          {
              name: "javascript",
              color: "blue-text-gradient",
          },
          {
              name: "nodejs",
              color: "green-text-gradient",
          },
          {
              name: "api",
              color: "pink-text-gradient",
          },
      ],
      image: tripguide, // Replace with the appropriate image for the Chatbot
      source_code_link: "https://github.com/DANNE-SANDEEP/On-demand-Chat-Bot.git", // Replace with your actual GitHub link
  },
];

  
  export { services, technologies, experiences, testimonials, projects };