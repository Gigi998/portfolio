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
    },
    {
      id: 2,
      name: "SBScanner",
      siteLink: "somelink",
      codeLink: "somelink",
      imageSrc: EndemicAppImage,
      description:
        "SBScanner is platform, where users can put their own crypto projects, rate projects, talk with community etc.",
    },
  ];

  return (
    <div className='text-center'>
      <span className='text-7xl'>Projects</span>
      <div className='flex justify-center gap-x-10 mt-10'>
        {projects.map((project) => {
          return <ProjectItem key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsContainer;
