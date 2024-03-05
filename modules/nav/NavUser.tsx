import { Logo } from "@/icons";
import React from "react";

type Props = {
  name: string;
};

export default function NavUser({ name }: Props) {
  return (
    <nav className="fixed w-full flex justify-between items-center h-[6.54vh] px-28 bg-white">
      <div className="w-fit">
        <Logo />
      </div>
      <div>{name}</div>
    </nav>
  );
}
