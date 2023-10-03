import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    html,
    css,
    reactjs,
    nextjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    cpp,
    figma,
    tesla,
    blog,
    shopify,
    carrent,
    jobit,
    tripguide,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Aspiring Software Developer",
      icon: creator,
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Next JS",
      icon: nextjs
    },
    {
      name: "C++",
      icon: cpp
    },
    {
      name: "Python",
      icon: python
    }
  ];
  
  const experiences = [
    {
      title: "FullStack Web Developer Intern",
      company_name: "NullClass",
      icon: shopify,
      iconBg: "#383E56",
      date: "Aug 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Creating high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Applying features like Chatbot and Payment Gateway Through Razorpay etc.",
      ],
    },
    {
      title: "FullStack Web Developer | Team Leader",
      company_name: "FixItWizards",
      icon: tesla,
      iconBg: "#383E56",
      date: "September 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Creating high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Applying features like Chatbot and Payment Gateway Through Razorpay etc.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "FixItWizards",
      description:
        "Web-based platform with features like Chat Application in which users can chat through texts and can also send Images and Videos.",
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
      image: carrent,
      source_code_link: "https://github.com/MKD2002/FixItWizards",
    },
    {
      name: "Nike",
      description:
        "A React.js based web application of a Nike Website with Tailwind CSS for styling and animations. It is a responsive web application",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/MKD2002/tailwind-nike",
    },
    {
      name: "Artistic-Essence-Blog-Website",
      description:
        "A Next.js based web application of a simple Blog Website. It has features like Light mode and Dark mode.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/MKD2002/Artistic-Essence-Blog-Website",
    },
    {
      name: "NewsMonkey-React",
      description:
        "A React based web application where we display News of different Category with the help of NewsAPI api.It contains features like top loading bar.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "NewsAPI",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/MKD2002/NewsMonkey-React",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };