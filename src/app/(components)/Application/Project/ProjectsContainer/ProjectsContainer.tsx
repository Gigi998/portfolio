import ProjectItem from "../ProjectItem/ProjectItem";
import { projects } from "@/data";

const ProjectsContainer = async () => {
  return (
    <div className='flex flex-col justify-center gap-x-10 mt-10'>
      <div className='text-secondary text-body-1 lg:px-56 text-center'>
        {`
          I've worked on many smaller projects that are visible on my GitHub.
          However, these two projects were particularly impactful in expanding
          my knowledge and sharpening my skills as a developer. They had the
          greatest influence on my growth.
          `}
      </div>
      {projects.map((project) => {
        return <ProjectItem key={project.id} {...project} />;
      })}
      <hr className='w-full my-10 bg-secondary' />
    </div>
  );
};

export default ProjectsContainer;
