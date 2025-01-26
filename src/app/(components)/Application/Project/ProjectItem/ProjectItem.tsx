import { StaticImageData } from "next/image";
import ProjectDescription from "../ProjectDescription/ProjectDescription";
import ProjectImage from "../ProjectImage/ProjectImage";
import Button from "@/app/(components)/Basic/Button/Button";
import { Type } from "@/app/(components)/Basic/Button/constants";

interface Props {
  name: string;
  description: string;
  technologyDescription: string;
  imageSrc: string | StaticImageData;
  siteLink?: string;
  codeLink?: string;
  notes?: string;
}

const ProjectItem = ({
  name,
  imageSrc,
  description,
  technologyDescription,
  siteLink,
  codeLink,
  notes,
}: Props) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col w-full'>
        <hr className='w-full my-10 bg-secondary' />
        <div className='flex gap-x-24'>
          <div className='my-auto'>
            <div className='text-primary text-3xl mb-10'>{name}</div>
            <ProjectImage name={name} src={imageSrc} link={siteLink} />
          </div>
          <div className='flex flex-col gap-y-4'>
            <ProjectDescription title='About' description={description} />
            <ProjectDescription
              title='Techstack'
              description={technologyDescription}
            />
            {notes ? (
              <ProjectDescription title='*' description={notes} />
            ) : null}
          </div>
        </div>
      </div>
      {codeLink && (
        <Button
          element={Type.Link}
          href={codeLink}
          className='border-primary text-primary w-40 mt-10'
        >
          <div>Jump to Code</div>
        </Button>
      )}
    </div>
  );
};

export default ProjectItem;
