import {
  mobile,
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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  angular,
  nextjs,
  rezrva,
  springboard,
  reactIcon,
  fullstack,
  link,
  mike,
  ai,
  habana,
  recipe,
  netflix,
  duy,
  taperk,
  insta,
  toy,
  skinet,
  chat,
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
    id: "projects",
    title: "Projects",
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
    icon: reactIcon,
  },
  {
    title: "Full-stack Developer",
    icon: fullstack,
  },
  {
    title: "Angular Developer",
    icon: angular,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "NextJs",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Front-end Developer",
    company_name: "Taperk",
    icon: taperk,
    iconBg: "#fff",
    date: "September 2023 - June 2024",
    points: [
      "Developed and deployed a Reward Management MVP using Next.js, Tailwind CSS, and TypeScript, contributing to a 20% increase in funding acquisition by improving user engagement and system efficiency.",
      "Collaborated with developers to identify, troubleshoot, and resolve software bugs, enhancing application stability and performance",
      "Designed and implemented a Content Management System (CMS) to streamline client interactions, improving content management efficiency and user experience.",
      "Developed dynamic and user-friendly web forms with real-time validation and error handling, reducing submission errors and improving customer satisfaction. ",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Rezrva",
    icon: rezrva,
    iconBg: "#fff",
    date: "March 2023 - September 2023",
    points: [
      "Led front-end development using Angular and TypeScript, improving the booking platform's UI and contributing to a 50% increase in user satisfaction through enhanced usability and performance.",
      "Collaborated with senior developers to design and implement an onboarding component, boosting trial signups and conversions by 50% through a more intuitive user experience.",
      "Worked with software engineers to develop and optimize application procedures, improving system efficiency and performance.",
      "Diagnosed and resolved application functionality issues, enhancing system reliability and user experience.",
    ],
  },
  {
    title: "Student",
    company_name: "Springboard",
    icon: springboard,
    iconBg: "#DCFBDB",
    date: "June 2022 - August 2023",
    points: [
      "An 800-hour course covers key aspects of front-end web development, back-end web development, databases, and data structures and algorithms. Modules include learning resources, practice exercises, projects, and career-related coursework.",
      "Web Development, JavaScript, DOM Manipulation, Event Driven Programming, Git/Terminal/Github, Modern JavaScript and Testing, AJAX, jQuery, ReactJS, Redux, SQL, PostgresQL, Flask, Node, Express, Data Structures and Algorithms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Duy who has been an exceptional addition to our team. His strong work ethic and problem-solving skills have consistently impressed us. He tackles challenges with enthusiasm, proactively seeks solutions, and delivers high-quality results. His ability to adapt and learn quickly makes him a valuable asset to any organization. I have no doubt he will excel in his future endeavors as a software developer.",
    name: "Michael Liwanag",
    designation: "Senior Software Engineer",
    company: "LA Fitness",
    image: mike,
  },
];

const projects = [
  {
    name: "Full-stack Dating Web Application",
    description:
      "Full-stack dating application built using .NET 8 with Web API for the backend and Angular 17 for the front end with Bootstrap for styling. Utilizes Entity Framework to connect to an SQL Server Database for storing user data and photos. Implements SignalR for real-time chat functionality between users. User features include: account registration using AspNetCore.Identity, profile editing, adding a main display photo, liking other users, and real-time chat.",
    tags: [
      {
        name: ".NET",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Azure",
        color: "green-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/Duybo007/DatingApp",
    demo_link: "https://dating-app-project.azurewebsites.net/",
  },
  {
    name: "Full-stack E-Commerce Platform",
    description:
      "Full-stack e-commerce application built using .NET with Web API for the backend and Angular for the frontend, styled with Tailwind CSS. Utilizes Entity Framework to connect to an SQL Server database for managing products, orders, and user data. Implements Stripe for secure payment processing. Features include user authentication with ASP.NET Core Identity, a shopping cart system, order management, and a seamless checkout experience. Deployed on Azure with a CI/CD pipeline for automated deployment and updates.",
    tags: [
      {
        name: ".NET",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Azure",
        color: "green-text-gradient",
      },
    ],
    image: skinet,
    source_code_link: "https://github.com/Duybo007/skinet",
    demo_link:
      "https://skinet-03-2025-ggh4ezgydnbehhe4.westus-01.azurewebsites.net",
  },
  {
    name: "Full-stack Ecommerce Toy Store",
    description:
      "A high-performance e-commerce website with Next.js for server-side rendering and a seamless user experience. Implemented Tailwind CSS for a responsive and aesthetically pleasing design. Integrated Sanity CMS for flexible content management. Securely processes payments using the Stripe API.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "Stripe API",
        color: "green-text-gradient",
      },
    ],
    image: toy,
    source_code_link: "https://github.com/Duybo007/toy",
    demo_link: "https://toy-theta.vercel.app/",
  },
  {
    name: "Instagram Clone",
    description:
      "An Instagram clone featuring infinite scroll for seamless browsing. Enjoy posting, liking, and saving moments in a user-friendly interface that captures the essence of social connection.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
      {
        name: "React Query",
        color: "green-text-gradient",
      },
    ],
    image: insta,
    source_code_link: "https://github.com/Duybo007/insta-clone",
    demo_link: "https://insta-clone-blond-two.vercel.app",
  },

  {
    name: "Restaurant Landing Page",
    description:
      "A refreshed version of the website for a restaurant that includes the ability for users to easily make reservations online. This can help streamline the reservation process and improve the customer experience, making it more convenient for diners to plan their meals at the restaurant.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: habana,
    source_code_link: "https://github.com/Duybo007/habana",
    demo_link: "https://habana-phi.vercel.app/",
  },
  {
    name: "Recipe Manager & Planner",
    description:
      "A dynamic Recipe PWA, built with Next.js, Tailwind CSS, and Firebase. Featuring infinite scroll, personalized recipe saving, and pantry management, all complemented by sleek animations with Framer Motion.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "Spoonacular API",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://github.com/Duybo007/recipe-tiktok",
    demo_link: "https://recipe-tiktok-9je5zlele-duybo007.vercel.app/",
  },
  // {
  //   name: "AI Chatbot",
  //   description:
  //     "Explore a world of endless conversations with our diverse array of AI bots. Whether you're seeking practical assistance, engaging in friendly banter, or delving into the imaginative realm of fictional characters, our platform has it all. Connect with real people, unleash your creativity, or simply find the perfect chat partner for any occasion.",
  //   tags: [
  //     {
  //       name: "nextjs 13",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "OpenAI",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Prisma",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: ai,
  //   source_code_link: "https://github.com/Duybo007/ai-companion",
  //   demo_link:"https://ai-companion-eta.vercel.app/"
  // },
  {
    name: "Portfolio Ver 1",
    description:
      "My old portfolio website represents a significant milestone in my web development journey. Designed and developed as a testament to my skills and creativity at the time, this project showcases the evolution of my abilities and design sensibilities.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: duy,
    source_code_link: "https://github.com/Duybo007/portfolio",
    demo_link: "https://portfolio-eta-six-71.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
