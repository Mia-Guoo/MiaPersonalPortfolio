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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  timhortons,
  xty,
  mealDiary,
  incident,
  easyVotes,
  threejs,
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
    title: "Java & C#",
    icon: web,
  },
  {
    title: "JavaScript & React & Angular",
    icon: mobile,
  },
  {
    title: "HTML & CSS",
    icon: backend,
  },
  {
    title: "Agile Software Development",
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
    name: "TypeScript",
    icon: typescript,
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
];

const experiences = [
  {
    title: "Customer Service (Part-time)",
    company_name: "Tim Hortons",
    icon: timhortons,
    iconBg: "#9a919e",
    date: "November 2021 - Current",
    points: [
      "Provide customer service, take orders, and process transactions in a fast-paced environment. ",
    ],
  },
  {
    title: "Acountant",
    company_name: "Xtayang Mechanical & Electrical Installation CO",
    icon: xty,
    iconBg: "#E6DEDD",
    date: "July 2014 - February 2021",
    points: [
      "Responsible for recording all monthly bank transactions and financial expenditures of various departments into the financial system. Responsible for making financial statements.",
      "Responsible for part of the company's administrative work. Responsible for part of the company's human resources.",
    ],
  },
];
const projects = [
  {
    name: "MealDiary",
    description:
      "Web-based platform that manages users’ dietary needs and restrictions by helping them plan meals.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: mealDiary,
    source_code_link: "https://github.com/COMP231-MealDiary/MealDiary",
  },
  {
    name: "Incident Management",
    description:
      "Web application that provides a way to interact with users through user reports to determine when something goes wrong.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: incident,
    source_code_link:
      "https://github.com/Mia-Guoo/COMP229-WebGroupProject-Group16",
  },
  {
    name: "EasyVotes",
    description:
      "A Java web application that allows users to vote to decide which facilities the government will build in the city.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring boot",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: easyVotes,
    source_code_link: "https://github.com/Mia-Guoo/EasyVotes",
  },
];

export { services, technologies, experiences, projects };
