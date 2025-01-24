"use client";

import { MouseEventHandler, ReactElement, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface Props {
  children: React.ReactNode;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  className?: string;
}

const Button = ({
  startIcon,
  endIcon,
  className,
  disabled,
  onClick,
  children,
}: Props) => {
  return (
    <button
      onClick={(e) => onClick?.(e)}
      className={twMerge(
        "text-primary rounded-md px-4 py-3 flex items-center justify-center gap-x-2",
        className
      )}
      disabled={disabled}
    >
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};

export default Button;
