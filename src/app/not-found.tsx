import React from "react";
import Button from "./(components)/Basic/Button/Button";
import Link from "next/link";
import PageWrapper from "./(components)/Wrapper/PageWrapper/PageWrapper";

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <span className='text-sm-heading font-semibold text-center'>
        Sorry, the requested page cound not be found.
      </span>
      <Button className='mt-10'>
        <Link href='/'>Return to home</Link>
      </Button>
    </PageWrapper>
  );
};

export default NotFoundPage;
