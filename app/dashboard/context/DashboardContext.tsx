'use client'
import { DropdownInterface } from "@/domains/Dropdown";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export type DashboardContextType = {
  dataCategory: DropdownInterface[];
  setDataCategory: Dispatch<SetStateAction<DropdownInterface[]>>;
  selectCategory: DropdownInterface | null;
  setSelectCategory: Dispatch<SetStateAction<DropdownInterface | null>>;
};

export const DashboardContext = createContext<DashboardContextType | null>(
  null
);
type Props = {
  children: React.ReactNode;
};

export const DashboardProvider = ({ children }: Props) => {
  const [dataCategory, setDataCategory] = useState<DropdownInterface[]>([]);
  const [selectCategory, setSelectCategory] =
    useState<DropdownInterface | null>(null);

  return (
    <DashboardContext.Provider
      value={{
        dataCategory,
        setDataCategory,
        selectCategory,
        setSelectCategory,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
