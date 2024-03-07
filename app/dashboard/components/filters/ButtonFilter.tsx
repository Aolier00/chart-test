"use client";
import { useState } from "react";
import Filter from "@/icons/IconFilter";
import Button from "./Button";
import { DropdownCheck } from "@/modules/dropdwon";
import { UseClickOutside } from "@/logic";
import { DropdownInterface } from "@/domains/Dropdown";
const data = [{ id: "a", name: "Todos", value: "Todos", checked: true }];
const ButtonFilter = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [dataOptions, setDataOptions] = useState<DropdownInterface[]>(data);
  const { inputRef } = UseClickOutside({ setClick: setOpen });
  return (
    <div className="w-1/3 space-y-2" ref={inputRef}>
      <Button style="border-r" handleClick={() => setOpen((prev) => !prev)}>
        <Filter />
        <span className="text-sm font-semibold">Filtros</span>
      </Button>
      <DropdownCheck open={open} data={dataOptions} setData={setDataOptions} />
    </div>
  );
};

export default ButtonFilter;
