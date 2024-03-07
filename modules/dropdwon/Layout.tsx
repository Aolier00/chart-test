import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  open: boolean
};

const Layout = ({ children, open }: Props) => {
  return (
    <div
      className={`${
        open ? "bg-white rounded-lg shadow-lg absolute bottom-auto top- z-50 overflow-auto" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default Layout;
