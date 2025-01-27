import React from "react";

interface Props {
  title: string;
  about: string;
  date: string;
}

const ExperienceItem = ({ title, about, date }: Props) => {
  return (
    <div className='border-l-2 border-secondary h-auto'>
      <div className='relative w-0'>
        <div className='rounded-full w-3 h-3 border-2 bg-secondary border-secondary absolute left-[-7px] top-[6px]' />
      </div>
      <div className='ml-4 flex flex-col'>
        <span className='text-primary font-bold flex'>
          {title}
          <span className='ml-auto inline-block font-light text-sm'>
            {date}
          </span>
        </span>
        <span className='text-secondary mr-32 mb-6'>{about}</span>
      </div>
    </div>
  );
};

export default ExperienceItem;
