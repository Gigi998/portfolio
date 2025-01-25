"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ProjectAboutModal from "../ProjectAboutModal/ProjectAboutModal";

interface Props {
  name: string;
  description: string;
  siteLink?: string;
  codeLink?: string;
  imageSrc: string | StaticImageData;
}

const ProjectItem = ({ name, imageSrc, ...props }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className='border-1 w-[300px]  h-[200px] rounded-xl relative'
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={imageSrc}
          alt={name}
          className='w-[300px] h-full rounded-xl'
        />
        <div className='md:flex md:justify-end md:flex-col rounded-xl w-full h-full absolute top-0  md:bg-gradient-to-b md:from-[rgba(0,0,0,0)] md:to-[rgba(0,0,0,0.6)]  md:transition-opacity md:opacity-0 md:hover:opacity-100 cursor-pointer text-secondary'>
          <span className='mb-3 text-primary'>{name}</span>
        </div>
      </div>
      <ProjectAboutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={name}
        {...props}
      />
    </>
  );
};

export default ProjectItem;
