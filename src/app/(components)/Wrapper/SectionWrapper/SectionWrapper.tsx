import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const SectionWrapper = ({ children, className, title }: Props) => {
  return (
    <div className={twMerge("lg:my-20 my-10", className)}>
      {title ? <div className='text-heading text-center'>{title}</div> : null}
      {children}
    </div>
  );
};

export default SectionWrapper;
