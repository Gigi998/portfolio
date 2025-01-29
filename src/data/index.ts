import EndemicAppImage from "@/assets/images/endemicHome.png";
import SbscannerAppImage from "@/assets/images/sbscannerHome.png";
import { Experience } from "./types";

const endemic = {
  id: 1,
  name: "Endemic NFT Marketplace",
  siteLink: "https://endemic.app",
  imageSrc: EndemicAppImage,
  description: `Endemic is a decentralized marketplace for digital assets on the Ethereum blockchain but, with a twist. Besides usual buying and selling art, 
    through this artistic platform it encourages all users to connect and interact. With various integration such as likes, comments, blogging, feed, quests,
    etc., artists benefit from deeper connections with their supporters while collectors and buyers can experience the art much better before the purchase decision.
    Also, social interaction between users makes the platform a place truly full of life.`,
  technologyDescription: `On the frontend, we used Next.js for server-side rendering (SSR), TanStack Query for state management, and styled the application with Tailwind CSS and CSS Modules. Forms were managed with Formik, and validation was handled using Yup.
The backend was built with NestJS and a PostgreSQL database. Authentication was implemented using JWT, managed via the Passport library. We utilized Prisma for efficient database querying.`,
  notes:
    "The entire code is currently private and not publicly available, but the application is live and running. I’d be happy to discuss the logic and design patterns we implemented!",
};

const sbscanner = {
  id: 2,
  name: "SBScanner",
  codeLink: "https://github.com/orgs/Stoneblock-Scanner-local/repositories",
  imageSrc: SbscannerAppImage,
  description: `
    The Stoneblock Scanner was a full-stack application I developed while working at Endemic. The app's primary functionality allowed users to post cryptocurrency projects,
    or "nominations," which the community could then engage with by voting, rating, and commenting. Once a nomination was created, it could be approved based on the community's
    ratings and votes. The platform aimed to foster engagement and provide valuable insights into various crypto projects through collective participation.`,
  technologyDescription: `
    The frontend was built using React, Next.js, and Tailwind CSS, while the backend was powered by Node.js with Express.
    We used PostgreSQL as the database, managed through Prisma, and implemented session-based authentication to ensure secure user access.
    `,
  notes:
    "The application is not currently live, but feel free to explore the code. I’m always excited to discuss it and share insights about the project!",
};

export const projects = [endemic, sbscanner];

export const experiencesStart: Experience[] = [
  {
    id: 1,
    title: "Starting My Coding Journey",
    about: `After realizing that a career as an electrician wasn't the right fit for me, 
    I decided to pursue my passion for coding. I began my journey with Python as my first programming language.
    I also had some prior coding experience from college, where I was introduced to the C++ programming language.`,
    date: "October, 2021",
  },
  {
    id: 2,
    title: "Venturing into Web Development",
    about: `After spending a few months learning Python, I transitioned to web development, starting with HTML, CSS, and JavaScript.
     Shortly after, I delved into React and began building basic websites to apply my skills.`,
    date: "February, 2022",
  },
  {
    id: 3,
    title: "Overcoming Job Search Challenges",
    about: `About a year and a half after writing my first line of code, I began applying for jobs in the tech industry. 
    The process was tough, and I faced many rejections, which made me question my skills and the path I had chosen. Despite the setbacks, I didn’t give up. `,
    date: "February, 2023",
  },
  {
    id: 4,
    title: "Backend Here We Go:Expanding My Skillset",
    about: `After struggling to find a job, I decided to learn backend development, which had initially felt overwhelming. During this process, 
    I began to grasp how real-world applications are built and how everything fits together.
    I also built my first full-stack application, putting my newfound knowledge into practice.
    `,
    date: "February, 2023",
  },
];

export const experienceCurrent: Experience[] = [
  {
    id: 1,
    title: "First job",
    about: `
     I landed my first job as a frontend developer at Endemic NFT Marketplace, where I had the privilege of working alongside amazing senior engineers.
     This environment accelerated my learning curve significantly. I quickly picked up Next.js and Tailwind CSS, as they were part of the project's tech stack.
     After a few months, I began taking on backend tasks as well, which was incredibly exciting. It was rewarding to see my knowledge paying off in real-world scenarios.
    `,
    date: "June, 2023",
  },
  {
    id: 2,
    title: "Web3",
    about: `
    Web3 wasn’t entirely new to me—I had done some reading and taken a few courses a few months earlier.
    After working at Endemic for a few months, I began to develop a deeper understanding of how Web3 and blockchain technologies function.
    While working, I gained a solid understanding of ERC-20, ERC-721 standards, NFTs, and the minting process. In my free time,
    I started learning Solidity and exploring the broader Web3 infrastructure.
      `,
    date: "October, 2023",
  },
  {
    id: 3,
    title: "Stoneblock scanner",
    about: `
    The Stoneblock Scanner was highly challenging, with its core functionality allowing users to post crypto projects (nominations),
    which the community could then vote on, rate, and comment on. I handled a large part of the project on my own, and all the knowledge
    I had gained at Endemic fit perfectly into this endeavor. Throughout the process, I learned a tremendous amount, including session authentication,
    backend architecture in Express, Cloudinary integration, Nodemailer, and more.
    `,
    date: "December, 2023",
  },
  {
    id: 4,
    title: "Taking on Greater Challenges and Responsibility",
    about: `
    As I continued to improve, my tasks became more complex. They typically involved both backend and frontend,
    where I had to make decisions on extending the database, adding new tables, and defining the infrastructure.
    I also got to know the NestJS framework, learned how to work with Bull jobs, and wrote complex SQL queries to handle various tasks.
    I was responsible for designing and implementing the entire logic on my own.
    `,
    date: "March, 2024",
  },
  {
    id: 5,
    title: "Mastering Advanced Features and Design Patterns",
    about: `
   As I progressed in my development career, I delved deeper into backend patterns, learning concepts like Abstract Factory to create more scalable and maintainable code.
   I also developed advanced backend features, including quest and notification systems. On the frontend, I tackled complex challenges,
   such as building a multi-select dropdown that required a strong grasp of UI/UX principles and interactivity. These tasks further expanded my knowledge.
    `,
    date: "June, 2024",
  },
];
