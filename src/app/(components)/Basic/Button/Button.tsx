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
        "text-primary px-4 py-3 flex items-center justify-center gap-x-2 border-2 border-invert rounded-full h-10 text-[18px] leading-[22px] shadow-[0_4px_0_0_transparent] shadow-invert",
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
