import EndemicAppImage from "@/assets/images/endemicHome.png";
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
    "Entire code is currently private and it is not available, I am very glad to speak about logic and patterns we used.",
};

export const projects = [
  endemic,
  {
    id: 2,
    name: "SBScanner",
    siteLink: "somelink",
    codeLink: "somelink",
    imageSrc: EndemicAppImage,
    description:
      "SBScanner is platform, where users can put their own crypto projects, rate projects, talk with community etc.",
    technologyDescription:
      "On the frontend, we used Next.js for server-side rendering (SSR), styled with Tailwind CSS and CSS Modules, and managed forms with Formik and Yup for validation. The backend was built using NestJS and a PostgreSQL database.",
  },
];

export const experiencesStart: Experience[] = [
  {
    id: 1,
    title: "First line of code",
    about: `After realizing that a career as an electrician wasn't the right fit for me, I decided to pursue my passion for coding.
       I began my journey with Python as my first programming language.`,
    date: "October, 2021",
  },
  {
    id: 2,
    title: "Small projects, big steps",
    about: `After spending a few months learning Python, I transitioned to web development, starting with HTML, CSS, and JavaScript.
     Shortly after, I delved into React and began building basic websites to apply my skills.`,
    date: "February, 2022",
  },
  {
    id: 3,
    title: "Failed Job applications",
    about: `About a year and a half after writing my first line of code, 
    I started applying for jobs. It was challenging, and I struggled at first.`,
    date: "February, 2023",
  },
  {
    id: 4,
    title: "Backend here we go",
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
    While working at Endemic, my brother and I were tasked with developing a full-stack application called Stoneblock Scanner.
    The project was highly challenging, with the core functionality allowing users to post crypto projects (nominations), which the community could then vote on, rate, and comment on.
    We handled the entire project on our own, and all the knowledge I had gained at Endemic fit perfectly into this endeavor. Throughout the process, we learned a tremendous amount,
    including implementing session-based authentication, designing backend architecture in Express, uploading and storing data on Cloudinary, integrating Nodemailer for email functionality,
    building username-password login systems, and much more.
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
];
