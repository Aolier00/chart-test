import CardWhite from "@/modules/card/CardWhite";
import React from "react";

const Table = () => {
  return (
    <CardWhite title="Detalles">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-sm font-bold bg-[#F1F4F9] text-[#202224]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Producto
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Cant.
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-normal whitespace-nowrap"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </CardWhite>
  );
};

export default Table;
