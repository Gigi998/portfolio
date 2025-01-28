import React from "react";

const Hero = () => {
  return (
    <div className='lg:mt-10 sm:text-left text-center'>
      <div className='flex flex-col sm:text-heading text-sm-heading'>
        <span className='text-body-1 text-secondary'>Hi,</span>
        <span>
          I am <span className='text-blue'>Luigi</span>
        </span>
        Full Stack Developer
      </div>
      <p className='text-body-1 text-secondary sm:mt-5 mt-2 max-w-[400px] sm:max-w-full'>
        I'm really passionate about software development 💻 and
        finance/investing 📈.
        <br /> I love building full-stack apps with tools like React, Next.js,
        Node.js, and NestJS 🚀.
        <br /> Lately, I’ve been diving into blockchain and Web3🔗, exploring
        how decentralized tech can shape the future.
      </p>
    </div>
  );
};

export default Hero;
