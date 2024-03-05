import Filter from "@/icons/IconFilter";

const ButtonFilter = () => {
  return (
    <button className="flex md:gap-4 lg:gap-4 h-[70px] justify-center items-center border-r w-1/3">
      <Filter />
      <span className="text-sm font-semibold">Filtros</span>
    </button>
  );
};

export default ButtonFilter;
