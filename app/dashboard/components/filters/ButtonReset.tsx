import Reset from "@/icons/Reset";
import React from "react";

const ButtonReset = () => {
  return (
    <button className="flex md:gap-4 lg:gap-4 h-[70px] justify-center items-center w-1/3">
      <Reset></Reset>
      <span className="text-sm font-semibold text-[#EA0234]">
        Resetear filtro
      </span>
    </button>
  );
};

export default ButtonReset;
