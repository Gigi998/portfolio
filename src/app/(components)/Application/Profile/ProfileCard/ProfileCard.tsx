import React from "react";
import ProfilePicture from "@/assets/images/profile.png";
import Image from "next/image";
import LinkedInIcon from "@/assets/icons/logo-linkedin.svg";
import EmailIcon from "@/assets/icons/logo-mail.svg";
import GithubIcon from "@/assets/icons/logo-github.svg";
import ProfileSocialLinks from "../ProfileSocialLinks/ProfileSocialLinks";

const ProfileCard = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <LinkedInIcon className='w-5' />,
      href: "https://www.linkedin.com/in/luigi-drnasin-29766223a/",
    },
    {
      id: 2,
      icon: <EmailIcon className='w-5' />,
      href: "mailto:luigicode2@gmail.com",
    },
    {
      id: 3,
      icon: <GithubIcon className='w-5' />,
      href: "https://github.com/Gigi998",
    },
  ];

  return (
    <div className='bg-primary w-[300px] max-h-[600px] rounded-xl text-invert p-4 flex flex-col items-center  gap-y-5 lg:mt-0 mt-4'>
      <Image
        src={ProfilePicture}
        alt='profile'
        className='rounded-xl object-cover'
      />
      <span className='text-sm-heading font-medium whitespace-nowrap'>
        Luigi Drnasin
      </span>
      <span className='text-body-1 font-thin'>Software Developer</span>
      <ProfileSocialLinks socialLinks={socialLinks} />
    </div>
  );
};

export default ProfileCard;
