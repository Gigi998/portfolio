import ProjectItem from "../ProjectItem/ProjectItem";

const ProjectsContainer = async () => {
  const projects = [
    {
      id: 1,
      name: "Endemic NFT Marketplace",
      siteLink: "https://endemic.app",
      codeLink: "somelink",
    },
    {
      id: 2,
      name: "SBScanner",
      siteLink: "somelink",
      codeLink: "somelink",
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsContainer;
