import React from "react";
import SocialLink, {
  Props as SocialLinkType,
} from "@/app/(components)/Basic/SocialLink/SocialLink";

interface FullSocialLink extends SocialLinkType {
  id: number;
}

interface Props {
  socialLinks: FullSocialLink[];
}

const ProfileSocialLinks = ({ socialLinks }: Props) => {
  return (
    <div className='flex'>
      {socialLinks.map((link) => (
        <SocialLink icon={link.icon} href={link.href} key={link.id} />
      ))}
    </div>
  );
};

export default ProfileSocialLinks;
