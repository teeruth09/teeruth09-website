import { Cloud, Database, Layout, Server, Terminal, Wrench } from "lucide-react";

export const USER_INFO = {
  name: "I'm Teeruth Ieowsakulrat",
  role: "FullStack Developer / Software Engineer",
  bio: "A passionate fourth-year Computer Engineering student at KMITL with strong interests in full-stack development, DevOps, and software engineering.",
  email: "teeruth2546@gmail.com",
  github: "https://github.com/teeruth09",
  linkedin: "https://www.linkedin.com/in/teeruth-ieowsakulrat/",
  aboutDetail: "My name is Teeruth Ieowsakulrat. Most people call me Ruth. I am currently studying Computer Engineering at King Mongkut's Institute of Technology Ladkrabang (KMITL). I have a strong interest in web application development, with a focus on full-stack development, DevOps, and software engineering. In my free time, I enjoy watching series and YouTube, playing badminton, and improving my skills by working on personal projects or freelance work. Throughout my academic journey, I have gained solid knowledge in software, hardware, and networking under the guidance of experienced professors. I have applied this knowledge through hands-on projects and laboratory exercises, allowing me to continuously improve and strengthen my technical skills.",
};

export const SKILLS = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Firebase"] },
  { category: "Tools", items: ["Git", "VS Code", "Figma", "Vercel"] }
];

export const SKILLS_WITH_DETAILS = [
  { 
    category: "Frontend", 
    icon: <Layout className="w-6 h-6 text-blue-500" />,
    items: [
      { name: "HTML", level: 70, iconSrc: "/skillIcons/frontend/html.png" },
      { name: "CSS", level: 70, iconSrc: "/skillIcons/frontend/css.png" },
      { name: "Bootstrap", level: 50, iconSrc: "/skillIcons/frontend/bootstrap.png" },
      { name: "Tailwind CSS", level: 80, iconSrc: "/skillIcons/frontend/tailwind.png" },
      { name: "React", level: 70, iconSrc: "/skillIcons/frontend/react.png" },
      { name: "Next.js", level: 70, iconSrc: "/skillIcons/frontend/nextjs.png" },
    ] 
  },
  { 
    category: "Backend", 
    icon: <Server className="w-6 h-6 text-green-500" />,
    items: [
      { name: "Node.js", level: 70, iconSrc: "/skillIcons/backend/nodejs.png"},
      { name: "NestJS", level: 70, iconSrc: "/skillIcons/backend/nestjs.png" },
      { name: "Express.js", level: 70, iconSrc: "/skillIcons/backend/expressjs.png"},
      { name: "Kotlin Spring Boot", level: 60, iconSrc: "/skillIcons/backend/kotlin.png"},
      { name: "FastAPI", level: 40, iconSrc: "/skillIcons/backend/fastapi.png"},
    ] 
  },
  { 
    category: "DevOps", 
    icon: <Cloud className="w-6 h-6 text-sky-500" />, // เปลี่ยนเป็น Cloud
    items: [
      { name: "Docker", level: 50, iconSrc: "/skillIcons/devops/docker.png" },
      { name: "Google Cloud", level: 50, iconSrc: "/skillIcons/devops/google_cloud.png" },
      { name: "Vercel", level: 30, iconSrc: "/skillIcons/devops/vercel.png"  },
    ] 
  },
  { 
    category: "Database", 
    icon: <Database className="w-6 h-6 text-indigo-500" />,
    items: [
      { name: "MongoDB", level: 70, iconSrc: "/skillIcons/database/mongodb.png" },
      { name: "PostgreSQL", level: 70, iconSrc: "/skillIcons/database/postgresql.png"  },
      { name: "MySQL", level: 50, iconSrc: "/skillIcons/database/mysql.png"  },
    ] 
  },
  { 
    category: "Programming", 
    icon: <Terminal className="w-6 h-6 text-purple-500" />, // เปลี่ยนเป็น Terminal
    items: [
      { name: "Python", level: 70, iconSrc: "/skillIcons/programming/python.png" },
      { name: "JavaScript", level: 70, iconSrc: "/skillIcons/programming/javascript.png" },
      { name: "TypeScript", level: 70, iconSrc: "/skillIcons/programming/typescript.png" },
      { name: "C", level: 30, iconSrc: "/skillIcons/programming/c.png" },
    ] 
  },
  { 
    category: "Tools & Others", 
    icon: <Wrench className="w-6 h-6 text-orange-500" />,
    items: [
      { name: "Git", level: 70, iconSrc: "/skillIcons/tools/git.png" },
      { name: "Figma", level: 70, iconSrc: "/skillIcons/tools/figma.png" },
      { name: "Postman", level: 70, iconSrc: "/skillIcons/tools/postman.png" },
      { name: "Bruno", level: 60, iconSrc: "/skillIcons/tools/bruno.png" },
      { name: "Jira", level: 30, iconSrc: "/skillIcons/tools/jira.png" },
    ] 
  }
];


export const EXPERIENCES = [
  {
    id: 1,
    period: "April 2025 - July 2025",
    role: "Full Stack Developer (Internship / Part-time)",
    company: "Smart Shift Solutions – Mitrphol Group",
    description:
      "Developed the MP-CANEMIS system, focusing on backend development using Groovy and Grails for enterprise-level applications.",
  },
  {
    id: 2,
    period: "September 2025 - Present",
    role: "Full Stack Developer (Freelance / Part-time)",
    company: "Smart Shift Solutions – Supalai Public Company Limited",
    description:
      "Currently developing the SPALI-CRM system, integrating CRM features with internal Customer and ERP systems using Next.js and Kotlin (Spring Boot).",
  },
];
export const PROJECTS = [
  {
    id: 1,
    title: "Movie2free",
    period: "February 2024 - March 2024",
    //slug: "stock-dividend",
    shortDesc: "A platform for finding people to watch movies together.",
    fullDesc: "Movie2free was developed using the .NET Core MVC architecture with a PostgreSQL database. The platform was created to help users find people to watch movies together. Users can create movie rooms with a configurable maximum number of participants, similar to group-based movie meetups. Each room includes a built-in chat system that allows members to communicate and coordinate within the group.",
    image: "/projects/movie2free.png",
    role: "Frontend Developer",
    tech: ["HTML", "CSS", "JavaScript", "C#", "ASP.NET Core MVC", "PostgreSQL"],
    liveUrl: "https://www.canva.com/design/DAG-8j9lXE8/l7zpL5PXK2xOzUTMWdEmIA/view?utm_content=DAG-8j9lXE8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h03cd532ac3",
    githubUrls: [
      {
        label: "Movie2free",
        url: "https://github.com/Thanasak-Songsri/ASP.net_Movie_Webapp",
      },
    ]
  },
  {
    id: 2,
    title: "YevOps",
    period: "August 2024 - October 2024",
    slug: "yevops",
    shortDesc: "A platform that connects tailoring shops with customers.",
    fullDesc: "YevOps website was created as a platform to connect tailoring shops with customers seeking tailoring services using website development process. This includes Requirements, User Stories, BPMN, UI/UX, Backlog, Sprint Backlog, Test Cases, ERD, and UML, as well as various website presentation files.",
    image: "/projects/yevOps.png",
    role: "Full Stack Developer",
    tech: ["React", "Node.js", "Express.js","MongoDB","Software Development"],
    liveUrl: "https://www.canva.com/design/DAGVByJXRGI/Q8jrP6qLW57ftW5K7n8thw/edit",
    githubUrls: [
      {
        label: "YevOps",
        url: "https://github.com/teeruth09/YevOps",
      },
    ]
  },
  {
    id: 3,
    title: "Web App for Stock Investment and Tax Deduction from Dividend Tax Credit",
    period: "July 2025 - Present",
    slug: "stock-dividend",
    shortDesc: "A web application designed to help investors analyze dividend stocks and optimize tax benefits.",
    fullDesc: "Project in fouth-year Computer Engineering at KMITL.This project presents a Stock Investment Advisory System with Dividend Tax Credit, developed to support investors interested in dividend stock investing. The system helps users analyze dividend stocks by predicting dividend payment periods, recommending suitable stocks, simulating investment transactions, and calculating expected returns. Additionally, it assists investors in comparing tax outcomes when using dividend tax credits versus the Final Tax option. By integrating investment analysis and tax calculation, the system enables investors to plan more effective dividend investment strategies and maximize overall returns.",
    image: "/projects/stockDividend.png",
    role: "Full Stack Developer",
    tech: ["Next.js", "NestJS", "Machine Learning","Dividend Tax","Software Development"],
    liveUrl: "https://www.canva.com/design/DAG_EcHz220/PX2v7DnC241IAmsFKr_urw/view?utm_content=DAG_EcHz220&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h095d6fcb2d",
    githubUrl: "https://github.com/teeruth09/YevOps",
    githubUrls: [
      {
        label: "Frontend",
        url: "https://github.com/teeruth09/StockDividendInvestment-Frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/teeruth09/StockDividendInvestment-Backend",
      },
    ]
  },
];

export const ACTIVITIES = [
  {
    id: 1,
    title: "PRE ENGINEERING 2023",
    date: "June 10-12, 2023",
    description:
      "PRE ENGINEERING 2023 was a camp for first-year students in the Faculty of Engineering at KMITL. I was a staff member responsible for managing and handling participant data.",
    images: [
      "/activity/preengineering/preeng_1.png",
      "/activity/preengineering/preeng_2.png",
      "/activity/preengineering/preeng_3.png",
    ],
  },
  {
    id: 2,
    title: "CE BOOSTUP XI",
    date: "June 16-19, 2023",
    description:
      "CE BOOSTUP XI was a foundational camp for first-year students in Computer Engineering at KMITL. I served as the head of the data management team, overseeing student information and coordination.",
    images: [
      "/activity/ce_boostup/ce_boostup_1.png",
      "/activity/ce_boostup/ce_boostup_2.png",
      "/activity/ce_boostup/ce_boostup_3.png",
    ],
  },
  {
    id: 3,
    title: "PRE Robot",
    date: "July 22-23, 2023",
    description:
      "PRE Robot was an introductory robotics camp for freshmen organized by the KMITL Robot Club. I worked as a staff member, supporting students during programming workshop sessions.",
    images: [
      "/activity/prerobot/prerobot_1.png",
      "/activity/prerobot/prerobot_2.png",
    ],
  },
  {
    id: 4,
    title: "GEARLEAGUE",
    date: "April 20-21, 2024",
    description:
      "Gear League was a sports competition designed to strengthen relationships among engineering students from leading universities across Thailand. I represented my university as a men's doubles badminton player in the tournament.",
    images: [
      "/activity/gearleague/gearleague_1.png",
      "/activity/gearleague/gearleague_2.png",
      "/activity/gearleague/gearleague_3.png",
      "/activity/gearleague/gearleague_4.png",
    ],
  },
  
];
