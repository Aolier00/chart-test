import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  style: string;
  handleClick: () => void;
};

const Button = ({ children, style, handleClick }: Props) => {
  return (
    <button
      className={`flex md:gap-4 lg:gap-4 h-[70px] justify-center items-center w-full hover:bg-neutral-100 focus:bg-slate-100 ${style}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
