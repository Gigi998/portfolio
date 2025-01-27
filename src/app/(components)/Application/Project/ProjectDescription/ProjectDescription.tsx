import React from "react";

interface Props {
  title: string;
  description: string;
}

const ProjectDescription = ({ title, description }: Props) => {
  return (
    <div className='flex flex-col text-body-2'>
      <span className='font-bold'>{title}</span>
      <span className='text-secondary'>{description}</span>
    </div>
  );
};

export default ProjectDescription;
