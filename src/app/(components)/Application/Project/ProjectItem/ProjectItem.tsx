import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  name: string;
  siteLink: string;
  codeLink: string;
  imageSrc: string | StaticImageData;
}

const ProjectItem = ({ name, siteLink, codeLink, imageSrc }: Props) => {
  return (
    <div className='border-2 w-[300px]  h-[200px] rounded-xl relative'>
      <Image
        src={imageSrc}
        alt={name}
        className='w-[300px] h-full rounded-xl'
      />
      <div className='w-full h-full absolute top-0  md:bg-gradient-to-b md:from-[rgba(0,0,0,0)] md:to-[rgba(0,0,0,0.6)]  md:transition-opacity md:opacity-0 md:hover:opacity-100 cursor-pointer text-secondary'>
        {name}
      </div>
    </div>
  );
};

export default ProjectItem;
