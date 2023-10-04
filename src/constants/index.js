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
    mayank,
    rishabh,
    mohit,
    parth,
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
      id: "experience",
      title: "Experience",
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
      title: "React Developer",
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
        "I had the pleasure of working with Mohit on a project, and I can wholeheartedly recommend him. His dedication, creativity, and collaborative spirit made our project a success. It was a fantastic teamwork experience.",
      name: "Ishan yadav",
      designation: "Software Engineer",
      company: "ICFDR",
      image: "data:image/jpeg;base64,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",
    },
    {
      testimonial:
        "Working with Mohit Kumar was a game-changer for one of my project. His knowledge in React.js helped me to resolve a error in my project  which made my website run once again.",
      name: "Mohit Kukreja",
      designation: "Frontend Engineer",
      company: "",
      image: mohit,
    },
    {
      testimonial:
        "While I was working on a project I got stuck somewhere and I asked for help from Mohit and he helped me resolve the problem with some kind of new method. His keen interest in learning new things always inspire me. I always learn something new from him.",
      name: "Mayank Agarwal",
      designation: " Full Stack Web Developer",
      company: "",
      image: mayank,
    },
    {
      testimonial:
        "Working with mohit was an amazing experience. As I face the problem he is always ready to help.He is a great team player and a great developer. He is always ready to learn new things and always ready to help others.",
      name: "Parth Bijpuriya",
      designation: "MERN Developer",
      company: "",
      image: parth,
    },
    {
      testimonial:
        "It was a pleasure collaborating with Mohit on a project. I wholeheartedly endorse him. His dedication, creativity, and teamwork ensured our project's success.",
      name: "Rishabh Verma",
      designation: "Frontend Developer",
      company: "",
      image: rishabh,
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