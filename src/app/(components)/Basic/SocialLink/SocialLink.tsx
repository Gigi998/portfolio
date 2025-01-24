import React, { ReactNode } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export interface Props {
  href: string;
  icon: ReactNode;
}

const SocialLink = ({ href, icon }: Props) => {
  return (
    <Link href={href} target='_blank' className='flex items-center gap-x-4'>
      <span
        className={twMerge(
          "w-10 h-10 rounded-full fill-[#151515] flex items-center justify-center"
        )}
      >
        {icon}
      </span>
    </Link>
  );
};

export default SocialLink;
