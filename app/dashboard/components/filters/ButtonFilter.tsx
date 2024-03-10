"use client";
import { useState } from "react";
import Filter from "@/icons/IconFilter";
import Button from "./Button";
import { BoxDropdown } from "@/modules/dropdwon";
import { UseClickOutside } from "@/logic";

const ButtonFilter = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { inputRef } = UseClickOutside({ setClick: setOpen });
  return (
    <div className="w-1/3 space-y-2" ref={inputRef}>
      <Button style="border-r" handleClick={() => setOpen((prev) => !prev)}>
        <Filter />
        <span className="hidden md:block lg:block text-sm font-semibold">
          Filters
        </span>
      </Button>
      <BoxDropdown open={open} />
    </div>
  );
};

export default ButtonFilter;
