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
  calc,
  crowns,
  tripguide,
  gitView,
  huddle,
  metabnb,
  threejs,
  phonie,
  python,
  photo
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
    title: "Graphics Design",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "VR Designs",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "photoshop",
    icon: photo,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Lead Tech Support",
    company_name: "SOJ Concepts",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2013 - Dec 2015",
    points: [
      "Organized the day to day activities",
      "Teach interns the basic skills needed for the job like; Word processing, Excel, Graphics design etc.",
      "Supervised and serviced the needs of clients",
    ],
  },
  {
    title: "Frontend Development/ VR",
    company_name: "Perfcreg",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Feb 2021",
    points: [
      "Convert product design prototypes to live codes",
      "Collaborate with team members on ideas to make application meet customer needs.",
      "Work on Virtual Reality Projects catching the eyes of about 5+ investors",
      "Helped in creating a visual and brand image for the company.",
      "Leveraged mastery of HTML, CSS and JavaScript to build top-quality code for diverse projects.",
      "Verified front-end code functionality across browsers and platforms.",
    ],
  },
  {
    title: "Tech Support",
    company_name: "JAMB",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - MAR 2022",
    points: [
      "Supervised 19 staff members and aided them in carrying out their roles",
      "Ensure smooth registration process of eight Thousand plus candidates",
      "Troubleshoot and resolved system hardware and software problems twice weekly",
      "Conferred with the 19 users, and conducted computer diagnostics to investigate and resolve problems and to provide technical assistance and support for all available 300 systems.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Deetechy.Inc (Freelance)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Dan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Dan does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Dan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dee Calc",
    description:
      "Dee-Calc is a web app that allows users to perform basic arithmetic operations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: calc,
    source_code_link: "hhttps://github.com/dansiecrown/dee-calc",
  },
  {
    name: "Crowns",
    description:
      "Crowns is a dummy web app that allows users to view different kinds of wears/ signup and signin.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: crowns,
    source_code_link: "https://github.com/dansiecrown/crowns",
  },
  {
    name: "Git View",
    description:
      "Git Viewer is a web app that allows users to view the repos of a github user and navigate to the github repository",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "github api",
        color: "pink-text-gradient",
      },
    ],
    image: gitView,
    source_code_link: "https://github.com/dansiecrown/GitView-cli",
  },
  {
    name: "Huddle",
    description:
      "Huddle is a static web page implementing the design of a landing page.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: huddle,
    source_code_link: "https://github.com/dansiecrown/huddle",
  },
  {
    name: "Meta BnB",
    description:
      "A website for the Meta BnB app; shows you the various packages.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: metabnb,
    source_code_link: "https://github.com/dansiecrown/metabnb",
  },
  {
    name: "Phonie App",
    description:
      "Check your Nigerian network provider by entering your phone Number.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
    ],
    image: phonie,
    source_code_link: "https://github.com/dansiecrown/phonie-app",
  },
];

export { services, technologies, experiences, testimonials, projects };