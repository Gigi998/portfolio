import Image, { StaticImageData } from "next/image";

interface Props {
  src: string | StaticImageData;
  name: string;
  link?: string;
}

const ProjectImage = ({ src, name, link }: Props) => {
  return (
    <a
      className='border-1 w-[300px]  h-[200px] rounded-xl relative block'
      href={link}
      target='blank'
    >
      <Image src={src} alt={name} className='w-[300px] h-full rounded-xl' />
      <div className='md:flex md:justify-end md:flex-col rounded-xl w-full h-full absolute top-0  md:bg-gradient-to-b md:from-[rgba(0,0,0,0)] md:to-[rgba(0,0,0,0.6)]  md:transition-opacity md:opacity-0 md:hover:opacity-100 cursor-pointer text-secondary'>
        <span className='mb-3 text-primary'>{name}</span>
      </div>
    </a>
  );
};

export default ProjectImage;
