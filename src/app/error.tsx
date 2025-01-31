"use client";

import React from "react";
import Link from "next/link";
import PageWrapper from "./(components)/Wrapper/PageWrapper/PageWrapper";
import Button from "./(components)/Basic/Button/Button";

const ErrorPage = () => {
  return (
    <PageWrapper className='items-center'>
      <span className='text-3xl font-semibold'>
        Sorry, something went wrong.
      </span>
      <Button className='mt-10'>
        <Link href='/'>Return to home</Link>
      </Button>
    </PageWrapper>
  );
};

export default ErrorPage;
