import React, { Dispatch, SetStateAction } from "react";
import Layout from "./Layout";
import { DropdownInterface } from "@/domains/Dropdown";
import UseDropdownCheck from "@/logic/UseDropdownCheck";

type Props = {
  data: DropdownInterface[];
  setData: Dispatch<SetStateAction<DropdownInterface[]>>;
  open: boolean;
};

const DropdownCheck = ({ data, setData, open }: Props) => {
  const { selectItem } = UseDropdownCheck({ setData, data });
  
  return (
    <Layout open={open}>
      <div className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
        {data.map((item, i) => (
          <button
            className="flex h-fit w-[220px] bg-white hover:bg-neutral-200 p-2"
            onClick={() => selectItem(i)}
            key={item.id}
          >
            <input
              id="checkbox-item-1"
              type="checkbox"
              checked={item.checked}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <span className="ms-2 text-sm font-medium text-gray-900">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </Layout>
  );
};

export default DropdownCheck;
