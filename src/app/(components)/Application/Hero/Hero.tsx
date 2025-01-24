import React from "react";

const Hero = () => {
  return (
    <div className=''>
      <div className='flex flex-col'>
        <span className='text-lg text-secondary'>Hello,</span>
        <span className='text-7xl'>
          I am <span className='text-blue-700'>Luigi</span>
        </span>
        <span className='text-7xl'>Full Stack Developer</span>
      </div>
      <p className='text-lg text-secondary mt-[20px]'>
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
