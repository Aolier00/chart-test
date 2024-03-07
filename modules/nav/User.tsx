"use client";
import { IconDropdownClose } from "@/icons";
import React, { useState } from "react";
import { Layout } from "../dropdwon";
import { UseClickOutside } from "@/logic";

const User = () => {
  const [open, setOpen] = useState<boolean>(true);
  const { inputRef } = UseClickOutside({ setClick: setOpen });
  return (
    <div className="flex gap-4">
      <div className="w-[39px] h-[39px] rounded-full bg-[#b0b0b0] grid place-content-center">
        <span className="font-normal text-xs text-white">JL</span>
      </div>
      <div className="flex gap-6 items-center">
        <div>
          <h4 className="text[#404040] text-sm font-bold">John Doe</h4>
          <p className="text-[#565656] text-xs font-semibold">Admin</p>
        </div>
        <div className="space-y-11 flex justify-center" ref={inputRef}>
          <button
            className="border-[0.2px] border-[#5C5C5C] rounded-full w-[18px] h-[18px] grid place-content-center"
            onClick={() => setOpen((prev) => !prev)}
          >
            <IconDropdownClose
              width={6}
              height={4}
              bg="#565656"
            ></IconDropdownClose>
          </button>
          <Layout open={open}>
            <ul
              className="overflow-auto text-sm text-gray-700 "
              aria-labelledby="dropdownDividerButton"
            >
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </a>
              </li>
            </ul>
            <div className="">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default User;
