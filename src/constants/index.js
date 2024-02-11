import javascript from "../assets/JavaScript-logo.png";
import react from "../assets/react-logo.png";
import adobexd from "../assets/adobexd-logo.png";
import css3 from "../assets/CSS3.png";
import bootstrap from "../assets/bootstrap-logo.png";
import html from "../assets/html5-logo.png";
import tailwindcss from "../assets/tailwindcss-logo.png";
import typescript from "../assets/typescript-logo.png";

import holidaze from "../assets/holidaze-screenshot.jpg";
import gagetsnstuff from "../assets/gadgets-&-stuff-screenshot.jpg";
import sociality from "../assets/sociality-screenshot.jpg";
import itemhunt from "../assets/itemhunt-screenshot.jpg";

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skills = [
  {
    name: "HTML 5",
    image: html,
  },
  {
    name: "CSS 3",
    image: css3,
  },
  {
    name: "JavaScript",
    image: javascript,
  },
  {
    name: "TypeScript",
    image: typescript,
  },
  {
    name: "React",
    image: react,
  },
  {
    name: "Bootstrap",
    image: bootstrap,
  },
  {
    name: "Tailwind CSS",
    image: tailwindcss,
  },
  {
    name: "Adobe XD",
    image: adobexd,
  },
];

const educations = [
  {
    title: "Front-end Development",
    school_name: "Noroff School of Technology and Digital Media",
    date: "Jan 2022 - Des 2023",
    descriptions: [
      "The program is designed to assist students in designing and implementing engaging and user friendly interfaces.",
      "Equips students with knowledge on how to use relevant tools for web development.",
    ],
  },
  {
    title: "Media studies",
    school_name: "NTNU Dragvoll",
    date: "Aug 2013 - June 2017",
    descriptions: [
      "The curriculum helps students have a understanding on what effects different types og media have on society.",
      "Using tools like IBM SPSS, students learned how to use statistical analysis to determine causation or/and correlation between variables.",
    ],
  },
];

const projects = [
  {
    name: "Holidaze",
    description:
      "A web-application that allows users to create and account, login, search, book and manage venues. Built with a provided API.",
    image: holidaze,
    source_code_link:
      "https://github.com/Nickenn/project-exam-2-nicholas-avery",
    hosted_demo_link: "https://dazzling-figolla-10eae8.netlify.app/",
  },
  {
    name: "Gadgets'n'Stuff",
    description:
      "A react-application where users may browse an assortment of items and add them to a cart.",
    image: gagetsnstuff,
    source_code_link:
      "https://github.com/Nickenn/js-frameworks-ca-nicholas-avery",
    hosted_demo_link: "https://comforting-smakager-6181da.netlify.app/",
  },
  {
    name: "Sociality",
    description:
      "A social networking site where users may veiw a feed of posts and add their own posts. ",
    image: sociality,
    source_code_link: "https://github.com/Nickenn/Sociality",
    hosted_demo_link: "https://warm-dasik-0b9422.netlify.app/index.html",
  },
  {
    name: "Itemhunt",
    description:
      "This project is an action site for bidding on items. As well as adding new items.",
    image: itemhunt,
    source_code_link: "https://github.com/Nickenn/semester-project-2",
    hosted_demo_link: "https://spectacular-mousse-1a00dd.netlify.app/",
  },
];

export { skills, educations, projects };
