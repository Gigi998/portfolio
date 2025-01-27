import ExperienceItem from "../ExperienceItem/ExperienceItem";
import { Experience } from "@/data/types";

interface Props {
  experiences: Experience[];
}

const ExperienceContainer = ({ experiences }: Props) => {
  return (
    <div className='flex flex-col justify-center mt-10'>
      {experiences.map((experience) => {
        return <ExperienceItem key={experience.id} {...experience} />;
      })}
    </div>
  );
};

export default ExperienceContainer;
