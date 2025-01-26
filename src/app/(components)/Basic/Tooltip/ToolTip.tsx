"use client";

import React, { ReactNode, useState } from "react";

export interface Props {
  children: ReactNode;
  text: string | ReactNode;
  className?: string;
  position?: ["left" | "center" | "right", "top" | "middle" | "bottom"];
}

const Tooltip = ({
  children,
  text,
  className,
  position = ["center", "middle"],
}: Props) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const positionX = {
    left: "-100%",
    center: "-50%",
    right: "100%",
  };
  const positionY = {
    top: "-100%",
    middle: "-50%",
    bottom: "100%",
  };

  const style = {
    transform: `translate(${positionX[position[0]]}, ${
      positionY[position[1]]
    })`,
  };

  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div className='relative'>
        {showTooltip && (
          <div
            className='absolute z-10 p-2 bg-primary text-invert rounded-md w-fit max-w-[200px]'
            style={style}
          >
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
