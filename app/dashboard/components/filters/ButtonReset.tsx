"use client";
import Reset from "@/icons/Reset";
import React, { useContext } from "react";
import Button from "./Button";
import { DashboardContext, DashboardContextType } from "../../context/DashboardContext";

const ButtonReset = () => {
  const { setSelectCategory, selectCategory } = useContext(
    DashboardContext
  ) as DashboardContextType;
  return (
    <div className="w-1/3">
      <Button style="" handleClick={() => setSelectCategory(null)} disabled={selectCategory == null}>
        <Reset></Reset>
        <span className="hidden md:block lg:block text-sm font-semibold text-[#EA0234]">
          Reset filters
        </span>
      </Button>
    </div>
  );
};

export default ButtonReset;
