import React from "react";
import { UseClickOutside, useDropdownSingle } from "@/logic";
import { DropdownInterface } from "@/domains/Dropdown";


type Props = {
  data: DropdownInterface[];
  setSelectedItem: React.Dispatch<
    React.SetStateAction<DropdownInterface | null>
  >;
  itemSelected: DropdownInterface | null;
  title: string;
  disabled?: boolean;
  width?: string;
};
export default function DropdownSingle({
  setSelectedItem,
  data,
  itemSelected,
  title,
  disabled,
  width,
}: Props) {
  const { handleOpen, handleSelectItem, open, setOpen } = useDropdownSingle({
    setSelectedItem,
  });
  const { inputRef } = UseClickOutside({ setClick: setOpen });
  return (
    <div className="flex flex-col relative" ref={inputRef}>
      <div>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-neutro-500 bg-white border border-neutro-300 hover:bg-neutro-200 focus:ring-2 focus:outline-none focus:ring-neutro-300 font-medium rounded-lg text-sm text-center flex justify-between items-center  h-[42px] p-2 disabled:opacity-75"
          style={{
            width: width ? width : "156px",
          }}
          type="button"
          disabled={disabled}
          onClick={() => handleOpen()}
        >
          <span className="w-9/12 text-left truncate ...">
            {itemSelected ? itemSelected.name : title}
          </span>
          <svg
            className="w-2.5 h-2.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
      </div>
      <div className="relative">
        <div
          id="dropdown"
          className={`absolute z-50 w-full ${
            open ? "block mt-2" : "hidden"
          } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 transition-all duration-300 ease-in-out`}
          style={{ maxHeight: open ? "300px" : "0px", overflow: "hidden" }}
        >
          <ul
            className="py-2 text-sm text-gray-700 w-full space-y-2"
            aria-labelledby="dropdownDefaultButton"
          >
            {data.length
              ? data.map((item) => (
                  <li key={item.id} className="w-full text-left">
                    <button
                      onClick={() => handleSelectItem(item)}
                      className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
}