import { DropdownInterface } from "@/domains/Dropdown";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setData: Dispatch<SetStateAction<DropdownInterface[]>>;
  data: DropdownInterface[];
};

const UseDropdownCheck = ({ setData, data }: Props) => {
  
  const selectItem = (index: number): void => {
    setData((prev) => {
      const updatedData = prev.map((item, i) => {
        if (i === index) {
          return { ...item, checked: !item.checked }; // Invertir el valor de checked solo para el elemento específico
        }
        return item;
      });
      return updatedData; // Devolver el nuevo estado actualizado
    });
  };

  return {
    selectItem,
  };
};

export default UseDropdownCheck;
