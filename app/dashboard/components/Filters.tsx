import React from "react";
import ButtonFilter from "./filters/ButtonFilter";
import ButtonDate from "./filters/ButtonDate";
import ButtonReset from "./filters/ButtonReset";

const Filters = () => {
  return (
    <div className="w-full lg:w-[50%] xl:w-[37%] h-fit overflow-auto border flex bg-white rounded-2xl mt-12">
      <ButtonFilter />
      <ButtonDate />
      <ButtonReset />
    </div>
  );
};

export default Filters;
