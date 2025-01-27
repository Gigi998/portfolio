import ProjectItem from "../ProjectItem/ProjectItem";
import { projects } from "@/data";

const ProjectsContainer = async () => {
  return (
    <div className='flex flex-col justify-center gap-x-10 mt-10'>
      {projects.map((project) => {
        return <ProjectItem key={project.id} {...project} />;
      })}
      <hr className='w-full my-10 bg-secondary' />
    </div>
  );
};

export default ProjectsContainer;
