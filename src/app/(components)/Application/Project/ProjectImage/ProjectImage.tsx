import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  src: string | StaticImageData;
  name: string;
  link?: string;
}

const ProjectImage = ({ src, name, link }: Props) => {
  const content = () => {
    return (
      <>
        <Image src={src} alt={name} className='object-cover rounded-xl' fill />
        <div
          className={twMerge(
            "md:flex md:justify-end md:flex-col rounded-xl w-full h-full absolute top-0  md:bg-gradient-to-b md:from-[rgba(0,0,0,0)] md:to-[rgba(0,0,0,0.6)]  md:transition-opacity md:opacity-0 md:hover:opacity-100 text-secondary",
            link ? "cursor-pointer:" : "cursor-default"
          )}
        >
          <span className='mb-3 ml-3 text-primary'>{name}</span>
        </div>
      </>
    );
  };

  const className =
    "border-1 sm:w-[300px] sm:h-[200px] w-[250px] h-[170px] rounded-xl relative block";

  return (
    <>
      {link ? (
        <a className={className} href={link} target='blank'>
          {content()}
        </a>
      ) : (
        <div className={className}>{content()}</div>
      )}
    </>
  );
};

export default ProjectImage;
