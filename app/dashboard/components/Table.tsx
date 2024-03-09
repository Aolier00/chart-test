"use client";
import { Product } from "@/domains/Product";
import { useFetchData } from "@/logic";
import { cantProductForCategory, dataCategories } from "@/logic/utils/data";
import CardWhite from "@/modules/card/CardWhite";
import React, { useContext, useEffect } from "react";
import {
  DashboardContext,
  DashboardContextType,
} from "../context/DashboardContext";
import UseFilterTable from "@/logic/UseFilterTable";

const Table = () => {
  // 1. mostrar los productos en la tabla, nombre, precio, categoria y cantidad vendida
  const { setDataCategory } = useContext(
    DashboardContext
  ) as DashboardContextType;

  //products
  const {
    data: dataProducts,
    // error: errorProduct,
    // isLoading: loadingProduct,
  } = useFetchData<Product[], any>("https://fakestoreapi.com/products");

  const { filterProducts } = UseFilterTable({ dataProducts });

  useEffect(() => {
    if (!dataProducts) return;
    setDataCategory(dataCategories(dataProducts));
    localStorage.setItem("data-products", JSON.stringify(dataProducts));
  }, [dataProducts]);

  return (
    <CardWhite title="Details">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-sm font-bold bg-[#F1F4F9] text-[#202224]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {filterProducts?.map((item) => (
              <tr className="bg-white border-b" key={item.id}>
                <th
                  scope="row"
                  className="w-3/12 truncate px-6 py-4 font-normal whitespace-normal "
                >
                  {item.title}
                </th>
                <td className="w-5/3 truncate px-6 py-4 font-normal whitespace-normal">
                  {item.description}
                </td>
                <td className="w-4/3 truncate px-6 py-4 font-normal whitespace-normal">
                  {item.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardWhite>
  );
};

export default Table;
