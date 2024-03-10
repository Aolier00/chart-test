"use client";
import { IconDropdownClose } from "@/icons";
import Button from "./Button";
import { Calendar } from "react-multi-date-picker";
import { Layout } from "@/modules/dropdwon";
import { useState } from "react";
import { UseClickOutside } from "@/logic";
import { formatDate } from "@/logic/utils/data";

const ButtonDate = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [date, setDate] = useState<string>(formatDate(new Date().toString()));
  const { inputRef } = UseClickOutside({ setClick: setOpen });
  function handleChange(value: any): void {
    setDate(formatDate(`${value.year}/${value.month}/${value.day}`));
  }

  return (
    <div className="w-1/3 space-y-2" ref={inputRef}>
      <Button style="border-r" handleClick={() => setOpen((prev) => !prev)}>
        <span className="text-sm font-semibold">{date}</span>
        <IconDropdownClose bg="black" width={12} height={8} />
      </Button>
      <Layout open={open}>
        <Calendar onChange={handleChange}></Calendar>
      </Layout>
    </div>
  );
};

export default ButtonDate;
