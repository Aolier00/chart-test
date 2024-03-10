import { Logo } from "@/icons";
import React from "react";
import User from "./User";

export default function NavUser() {
  return (
    <nav className="fixed z-50 w-full flex justify-between items-center h-[6.54vh] px-4 md:px-14 lg:px-28 xl:px-28 bg-white shadow-sm">
      <div className="w-fit">
        <Logo />
      </div>
      <User />
    </nav>
  );
}
