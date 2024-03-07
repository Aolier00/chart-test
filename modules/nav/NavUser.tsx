import { Logo } from "@/icons";
import React from "react";
import User from "./User";

type Props = {
  name: string;
};

export default function NavUser({ name }: Props) {
  return (
    <nav className="fixed w-full flex justify-between items-center h-[6.54vh] px-28 bg-white">
      <div className="w-fit">
        <Logo />
      </div>
      <User />
    </nav>
  );
}
