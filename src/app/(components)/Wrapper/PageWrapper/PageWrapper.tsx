import React from "react";

interface Props {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: Props) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      {children}
    </div>
  );
};

export default PageWrapper;
