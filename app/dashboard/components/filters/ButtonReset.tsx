"use client";
import Reset from "@/icons/Reset";
import React from "react";
import Button from "./Button";

const ButtonReset = () => {
  const handle = (): void => {
    console.log("clicked");
  };
  return (
    <div className="w-1/3">
      <Button style="" handleClick={() => handle()}>
        <Reset></Reset>
        <span className="hidden md:block lg:block text-sm font-semibold text-[#EA0234]">
          Resetear filtro
        </span>
      </Button>
    </div>
  );
};

export default ButtonReset;
