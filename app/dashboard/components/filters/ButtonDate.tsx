"use client";
import { IconDropdownClose } from "@/icons";
import Button from "./Button";
import { Calendar } from "react-multi-date-picker";
import { Layout } from "@/modules/dropdwon";
import { useState } from "react";
import { UseClickOutside } from "@/logic";

const ButtonDate = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { inputRef } = UseClickOutside({ setClick: setOpen });

  return (
    <div className="w-1/3 space-y-2" ref={inputRef}>
      <Button style="border-r" handleClick={() => setOpen((prev) => !prev)}>
        <span className="text-sm font-semibold">04 March 2024</span>
        <IconDropdownClose bg="black" width={12} height={8} />
      </Button>
      <Layout open={open}>
        <Calendar range></Calendar>
      </Layout>
    </div>
  );
};

export default ButtonDate;
