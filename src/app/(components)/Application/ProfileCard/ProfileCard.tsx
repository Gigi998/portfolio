import React from "react";
import Button from "../../Basic/Button/Button";
import ProfilePicture from "@/assets/images/profile.png";
import Image from "next/image";
import LinkedinIcon from "@/assets/icons/logo-linkedin.svg";

const ProfileCard = () => {
  return (
    <div className='bg-primary w-[300px] h-[500px] rounded-xl text-invert p-6'>
      <div className='flex flex-col items-center h-full'>
        <Image
          src={ProfilePicture}
          alt='profile'
          className='rounded-xl overflow-hidden box-border'
        />
        <span className='text-3xl'>Luigi Drnasin</span>
        <span className='mt-4 text-lg opacity-90'>Software Developer</span>
        <div>
          <LinkedinIcon className='w-4 h-4' />
        </div>
        <Button className='mt-auto bg-blue-700'>Let's talk</Button>
      </div>
    </div>
  );
};

export default ProfileCard;
