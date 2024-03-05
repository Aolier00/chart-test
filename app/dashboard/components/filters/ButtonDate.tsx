import { IconDropdown } from "@/icons";

const ButtonDate = () => {
  return (
    <button className="flex md:gap-4 lg:gap-4 h-[70px] justify-center items-center w-1/3 border-r">
      <span className="text-sm font-semibold">04 Marzo 2024</span>
      <IconDropdown />
    </button>
  );
};

export default ButtonDate;
