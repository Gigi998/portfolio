"use client";

import { MouseEvent, ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import { Type } from "./constants";

export interface Props {
  children: React.ReactNode;
  element?: Type;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  disabled?: boolean;
  onClick?: (
    e: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement>
  ) => void;
  className?: string;
  href?: string;
  target?: string;
}

const Button = ({
  children,
  element = Type.Button,
  startIcon,
  endIcon,
  disabled,
  onClick,
  className,
  href,
  target = "blank",
}: Props) => {
  const generateButtonsBody = () => {
    return (
      <div>
        {startIcon && <span>{startIcon}</span>}
        {children}
        {endIcon && <span>{endIcon}</span>}
      </div>
    );
  };

  const generateButtonsAttributes = () => {
    return {
      onClick: (
        e: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement>
      ) => onClick?.(e),
      className: twMerge(
        "text-primary px-4 py-3 flex items-center justify-center gap-x-2 border-2 border-invert rounded-full h-10 text-[18px] leading-[22px] hover:bg-blue",
        className
      ),
      disabled: disabled,
      href,
      target,
    };
  };

  if (element === Type.Link) {
    return <a {...generateButtonsAttributes()}>{generateButtonsBody()}</a>;
  } else {
    return (
      <button {...generateButtonsAttributes()}>{generateButtonsBody()}</button>
    );
  }
};

export default Button;
