import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ children, className }: Props) => {
  return <div className={twMerge("my-20", className)}>{children}</div>;
};

export default SectionWrapper;
