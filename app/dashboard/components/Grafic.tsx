"use client";
import React, { useContext } from "react";
import CardWhite from "@/modules/card/CardWhite";
import { useFetchData } from "@/logic";
import { Product } from "@/domains/Product";
import {
  DashboardContext,
  DashboardContextType,
} from "../context/DashboardContext";
import UseGrafic from "@/logic/UseGrafic";

const Grafic = () => {
  const { data, error, isLoading } = useFetchData<Product[], any>(
    "https://fakestoreapi.com/products"
  );

  const { selectCategory } = useContext(
    DashboardContext
  ) as DashboardContextType;

  const { chartRef } = UseGrafic({ dataProducts: data, selectCategory });

  return (
    <CardWhite title="Quantity of product by category">
      <div
        style={{
          width: "100%",
          height: 250,
        }}
      >
        {isLoading && (
          <div className="animate-pulse flex">
            <div className="shadow bg-neutral-200 h-28 rounded-md w-full"></div>
          </div>
        )}
        {data && <canvas ref={chartRef} />}
        {error && (
          <div className="h-28 grid place-content-center">
            <h3 className="text-base font-semibold text-neutral-600">
              Error Connection. <span className="font-bold">Reload Page</span>
            </h3>
          </div>
        )}
      </div>
    </CardWhite>
  );
};

export default Grafic;
