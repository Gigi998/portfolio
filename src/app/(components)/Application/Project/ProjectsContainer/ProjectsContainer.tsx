import ProjectItem from "../ProjectItem/ProjectItem";
import EndemicAppImage from "@/assets/images/endemicHome.png";

const ProjectsContainer = async () => {
  const projects = [
    {
      id: 1,
      name: "Endemic NFT Marketplace",
      siteLink: "https://endemic.app",
      imageSrc: EndemicAppImage,
      description:
        "Endemic is a decentralized marketplace for digital assets on the Ethereum blockchain but, with a twist. Besides usual buying and selling art, through this artistic platform we encourage all users to connect and interact.",
      technologyDescription:
        "On the frontend, we used Next.js for server-side rendering (SSR), styled with Tailwind CSS and CSS Modules, and managed forms with Formik and Yup for validation. The backend was built using NestJS and a PostgreSQL database.",
      notes:
        "Entire code is private and it is not available, I am very glad to speak about logic and patterns we used.      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsa excepturi beatae suscipit eveniet quae velit voluptatibus, inventore expedita. Impedit accusantium sed dolores pariatur necessitatibus obcaecati rerum tenetur recusandae quidem ipsa deserunt quos cumque eveniet nihil ducimus, praesentium repellat dicta odio harum nulla unde laboriosam atque incidunt reprehenderit. Cum iste minus vero eveniet nisi. Consequuntur facilis facere nesciunt dolorum voluptate suscipit excepturi cum, non temporibus voluptas corrupti quaerat ratione maiores ullam sunt delectus similique doloribus vero aperiam consequatur! Repellat libero, molestias eius sed autem amet delectus cumque aspernatur voluptatum, quaerat quibusdam quo cum, harum officiis possimus quae distinctio ipsam impedit.",
    },
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

  return (
    <div className='text-center'>
      <span className='text-7xl'>Projects</span>
      <div className='flex flex-col justify-center gap-x-10 mt-10'>
        {projects.map((project) => {
          return <ProjectItem key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsContainer;
