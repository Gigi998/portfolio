import React from "react";

interface Props {
  title: string;
  description: string;
}

const ProjectDescription = ({ title, description }: Props) => {
  return (
    <div className='text-secondary flex flex-col'>
      <span className='font-bold text-primary text-left'>{title}</span>
      <span className='text-left text-secondary'>{description}</span>
    </div>
  );
};

export default ProjectDescription;
