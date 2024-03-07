import { Logo } from "@/icons";
import React from "react";
import User from "./User";

type Props = {
  name: string;
};

export default function NavUser({ name }: Props) {
  return (
    <nav className="fixed w-full flex justify-between items-center h-[6.54vh] px-4 md:px-14 lg:px-28 xl:px-28  bg-white">
      <div className="w-fit">
        <Logo />
      </div>
      <User />
    </nav>
  );
}
