"use client";
import { Product } from "@/domains/Product";
import { useFetchData } from "@/logic";
import { dataCategories } from "@/logic/utils/data";
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
  const { data, error, isLoading } = useFetchData<Product[], any>(
    "https://fakestoreapi.com/products"
  );

  const { filterProducts } = UseFilterTable({ dataProducts: data });

  useEffect(() => {
    if (!data) return;
    setDataCategory(dataCategories(data));
  }, [data]);

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
            {data &&
              filterProducts?.map((item) => (
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
            {isLoading && (
              <tr className="bg-gray-100 border-b animate-pulse">
                <th scope="row" className="w-3/12 bg-white p-2">
                  <div className="w-10/12 bg-gray-200 h-6"></div>
                </th>
                <td className="w-5/12 bg-white p-2">
                  <div className="w-10/12 bg-gray-200 h-6"></div>
                </td>
                <td className="w-4/12 bg-white p-2">
                  <div className="w-10/12 bg-gray-200 h-6"></div>
                </td>
              </tr>
            )}
          </tbody>
          {error && (
            <div className="h-28 grid place-content-center">
              <h3 className="text-base font-semibold">
                Error Connection. <span className="font-bold">Reload Page</span>
              </h3>
            </div>
          )}
        </table>
      </div>
    </CardWhite>
  );
};

export default Table;
