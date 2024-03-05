import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

const CardWhite = ({ children, title }: Props) => {
  return (
    <div className="w-full p-12 bg-white rounded-lg space-y-4 shadow-md">
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
    </div>
  );
};

export default CardWhite;
