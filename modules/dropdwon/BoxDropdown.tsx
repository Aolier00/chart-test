import React, { useContext } from "react";
import Layout from "./Layout";
import DropdownSingle from "./DrodownSingle";
import {
  DashboardContext,
  DashboardContextType,
} from "@/app/dashboard/context/DashboardContext";

type Props = {
  open: boolean;
};

const BoxDropdown = ({ open }: Props) => {
  const { dataCategory, selectCategory, setSelectCategory } = useContext(
    DashboardContext
  ) as DashboardContextType;

  return (
    <Layout open={open}>
      <div className="p-4">
        <DropdownSingle
          data={dataCategory}
          itemSelected={selectCategory}
          setSelectedItem={setSelectCategory}
          title="Select Category"
        />
      </div>
    </Layout>
  );
};

export default BoxDropdown;
