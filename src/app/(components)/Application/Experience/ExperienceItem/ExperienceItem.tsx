import React from "react";
import Tooltip from "@/app/(components)/Basic/Tooltip/ToolTip";

interface Props {
  title: string;
  about: string;
  date: string;
}

const ExperienceItem = ({ title, about, date }: Props) => {
  return (
    <div className='border-l-2 border-secondary h-20'>
      <div className='relative w-0'>
        <Tooltip text={date}>
          <div className='rounded-full w-3 h-3 border-2 bg-secondary border-secondary absolute left-[-7px] top-[6px]' />
        </Tooltip>
      </div>
      <div className='ml-4 flex flex-col'>
        <span className='text-primary font-bold'>{title}</span>
        <span className='text-secondary mr-20'>{about}</span>
      </div>
    </div>
  );
};

export default ExperienceItem;
