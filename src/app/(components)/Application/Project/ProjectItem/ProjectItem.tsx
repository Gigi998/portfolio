import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  siteLink: string;
  codeLink: string;
}

const ProjectItem = ({ name, siteLink, codeLink }: Props) => {
  return (
    <div className='border-2 w-[300px]  h-52 rounded-xl'>
      <Image className='w-full h-[3/5]' src='' alt='image' fill />
    </div>
  );
};

export default ProjectItem;
