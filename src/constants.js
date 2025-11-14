// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import emailLogo from './assets/work_logo/email.jpeg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 1,
      role: "java program Intern",
      company: "Syntecxhub",
      date: "october 2025 - november 2022",
      desc: "Worked as a java Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "java",
      ],
    },
  ];
  
  export const education = [
    {
      id: 1,
      school: "College of Engineering and Rural Technology",
      date: "Sept 2022 - Aug 2026",
      grade: "75%",
      desc: "I am pursuing my Bachelor of Technology  (B.Tech) from CERT College, Meerut. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at CERT College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.tech (Computer Science and Engineering)",
    },
    {
      id: 2,
      school: "K.S.M Inter College",
      date: "Apr 2018 - March 2019",
      grade: "57%",
      desc: "I completed my class 12 education from K.S.M Public School, Modinagar Ghaziabad, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "UP(XII) - PCM ",
    },
    {
      id: 3,
      school: "K.S.M Inter College",
      date: "Apr 2016 - March 2017",
      grade: "64%",
      desc: "I completed my class 10 education from K.S.M Public School, Modinagar Ghaziabad , under the CBSE board, where I studied Science with Computer.",
      degree: "UP(X), PCM",
    },
  ];
  


  export const projects = [
  {
    id: 1,
    title: "AI Email Reply Generator",
    description: "Automatically generates email replies using AI.",
    image: emailLogo,
    github: "https://github.com/Shivani332/Email-Reply-Generator",
    webapp: "https://v0-zip-email-s5.vercel.app/",
    tags: ["React", "Spring boot", "AI", "Chrome Extension", "Gemini API"]
  },
  // more projects...
];