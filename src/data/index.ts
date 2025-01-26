import EndemicAppImage from "@/assets/images/endemicHome.png";

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

export const experiences = [
  {
    id: 1,
    title: "First line of code",
    about:
      "After realising that electrican isn't the right job for me, started to learn how to code. Language was python.",
    date: "December, 2021",
  },
  {
    id: 2,
    title: "Small projects, big steps",
    about:
      "After spending couple of months in python, started learing web development, HTML, CSS, JS. Soon after React. Start building some basic websites.",
    date: "February, 2022",
  },
  {
    id: 3,
    title: "Failed Job applications",
    about:
      "About 1 and half after my first line of code, stared applying for jobs. Suck at it.",
    date: "February, 2023",
  },
  {
    id: 4,
    title: "Backend here we go",
    about:
      "After failing on finding a job, started to learn backend, didn't understand shit before that. During this process started to getting full picture how real world applications work.",
    date: "February, 2023",
  },
];
