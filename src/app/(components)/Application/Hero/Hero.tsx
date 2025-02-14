import React from "react";
import ComputerIcon from "@/assets/icons/computer.svg";
import PriceGraphIcon from "@/assets/icons/price-graph.svg";
import RocketIcon from "@/assets/icons/rocket.svg";
import ChainIcon from "@/assets/icons/chain.svg";

const Hero = () => {
  return (
    <div className='sm:text-left text-center'>
      <div className='flex flex-col sm:text-heading text-sm-heading'>
        <span className='text-body-1 text-secondary'>Hi,</span>
        <span>
          I am <span className='text-blue'>Luigi</span>
        </span>
        Full Stack Developer
      </div>
      <p className='text-body-1 text-secondary sm:mt-5 mt-2 max-w-[400px] sm:max-w-[90%]'>
        I'm really passionate about software development{" "}
        <ComputerIcon className='w-4 h-4 inline-block' /> and finance/investing
        <PriceGraphIcon className='w-5 h-4 inline-block' />.
        <br />
        I love building full-stack apps with tools like React, Next.js, Node.js,
        and NestJS <RocketIcon className='w-4 h-4 inline-block' />.
        <br />
        Lately, I’ve been diving into blockchain and Web3{" "}
        <ChainIcon className='w-4 h-4 inline-block' />, exploring how
        decentralized tech can shape the future.
      </p>
    </div>
  );
};

export default Hero;
