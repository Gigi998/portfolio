import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const SectionWrapper = ({ children, className, title }: Props) => {
  return (
    <div className={twMerge("my-20", className)}>
      {title ? <div className='text-7xl text-center'>{title}</div> : null}
      {children}
    </div>
  );
};

export default SectionWrapper;
