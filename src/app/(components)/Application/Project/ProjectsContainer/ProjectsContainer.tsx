import ProjectItem from "../ProjectItem/ProjectItem";
import { projects } from "@/data";

const ProjectsContainer = async () => {
  return (
    <div className='flex flex-col justify-center gap-x-10 mt-10'>
      {projects.map((project) => {
        return <ProjectItem key={project.id} {...project} />;
      })}
    </div>
  );
};

export default ProjectsContainer;
