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
    date: "September 2023 - Present",
    points: [
      "Directed the development of a new Reward Management application using Next.js, Tailwind CSS, and TypeScript, resulting in the successful completion of an MVP for investor presentation and subsequent funding acquisition.",
      "Collaborated with backend developers to integrate password changing APIs and ensure data is fetched and displayed efficiently on the front end.",
      "Led the design and development of the user interface for the reward redeem page, ensuring an intuitive and engaging user experience.",
      "Successfully implemented a user data collection form, leading to a 30% improvement in data accuracy, and seamlessly integrated it with backend APIs, reducing data processing time by 40% for reward redemption.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Rezrva",
    icon: rezrva,
    iconBg: "#fff",
    date: "March 2023 - September 2023",
    points: [
      "Led the frontend development of a new booking service web application tailored for the Latin American market, employing Angular, Bootstrap, and TypeScript, resulting in a remarkable 50% boost in user satisfaction.",
      "Develop new components and enhance existing features of the B2B SaaS application using Angular, Bootstrap, and TypeScript.",
      "Collaborated with senior developers to develop a new onboarding component resulting in a 50% increase in conversions and trial signups.",

      "Enhanced the user interface by developing a new calendar view component using the FullCalendar library, resulting in a 25% increase in user engagement and improved usability.",
      "Implemented best practices for front-end development while maintaining a focus on optimization and performance using Angular and TypeScript.",
      "Applied advanced form validation techniques and robust error handling as a front-end developer, enabling precise data submission and fortifying the system's reliability.",
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
    name: "Instagram Clone",
    description:
      "An Instagram clone featuring infinite scroll for seamless browsing. Enjoy posting, liking, and saving moments in a user-friendly interface that captures the essence of social connection.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
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
    name: "Netflix Clone",
    description:
      "A Netflix clone website is a streaming platform that offers a similar user experience and content selection as Netflix. Users can sign up for an account, browse and find movies and TV shows, and create personal watchlists.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "TMDB API",
        color: "green-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/Duybo007/netflix-clone",
    demo_link: "https://netflix-clone-chi-rouge.vercel.app/",
  },
  {
    name: "Restaurant Landing Page",
    description:
      "A refreshed version of the website for a restaurant that includes the ability for users to easily make reservations online. This can help streamline the reservation process and improve the customer experience, making it more convenient for diners to plan their meals at the restaurant.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
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
        name: "nextjs",
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
