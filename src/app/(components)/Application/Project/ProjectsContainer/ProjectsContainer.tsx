import ProjectItem from "../ProjectItem/ProjectItem";
import EndemicAppImage from "@/assets/images/endemicHome.png";

const ProjectsContainer = async () => {
  const projects = [
    {
      id: 1,
      name: "Endemic NFT Marketplace",
      siteLink: "https://endemic.ap",
      codeLink: "somelink",
      imageSrc: EndemicAppImage,
    },
    {
      id: 2,
      name: "SBScanner",
      siteLink: "somelink",
      codeLink: "somelink",
      imageSrc: EndemicAppImage,
    },
  ];

  return (
    <div className='text-center'>
      <span className='text-7xl'>Projects</span>
      <div className='flex justify-center gap-x-10 mt-10'>
        {projects.map((project) => {
          return (
            <ProjectItem
              key={project.id}
              name={project.name}
              codeLink={project.codeLink}
              siteLink={project.siteLink}
              imageSrc={project.imageSrc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsContainer;
