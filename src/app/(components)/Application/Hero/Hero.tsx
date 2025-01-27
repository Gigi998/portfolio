import React from "react";

const Hero = () => {
  return (
    <div className='mt-10'>
      <div className='flex flex-col'>
        <span className='text-body-1 text-secondary'>Hi,</span>
        <span className='text-heading'>
          I am <span className='text-blue'>Luigi</span>
        </span>
        <span className='text-heading'>Full Stack Developer</span>
      </div>
      <p className='text-body-1 text-secondary mt-[20px]'>
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
