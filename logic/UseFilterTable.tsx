import { useContext, useEffect, useState } from "react";
import { Product } from "@/domains/Product";
import {
  DashboardContext,
  DashboardContextType,
} from "@/app/dashboard/context/DashboardContext";

type Props = {
  dataProducts: Product[];
};

const UseFilterTable = ({ dataProducts }: Props) => {
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);

  const { selectCategory } = useContext(
    DashboardContext
  ) as DashboardContextType;

  useEffect(() => {
    const data = selectCategory
      ? dataProducts?.filter((item) =>
          item.category.includes(selectCategory ? selectCategory.name : "")
        )
      : dataProducts;
    setFilterProducts(data);
  }, [selectCategory, dataProducts]);

  return {
    filterProducts,
  };
};

export default UseFilterTable;
