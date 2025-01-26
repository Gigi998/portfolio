import { experiences } from "@/data";
import ExperienceItem from "../ExperienceItem/ExperienceItem";

const ExperienceContainer = () => {
  return (
    <div className='flex flex-col justify-center gap-x-10 mt-10'>
      {experiences.map((experience) => {
        return <ExperienceItem key={experience.id} {...experience} />;
      })}
    </div>
  );
};

export default ExperienceContainer;
