"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import CardWhite from "@/modules/card/CardWhite";
import Chart from "chart.js/auto";
import { useFetchData } from "@/logic";
import { cantProductForCategory } from "@/logic/utils/data";
import { InterfaceChart } from "@/domains/Chart";
import { Product } from "@/domains/Product";
import {
  DashboardContext,
  DashboardContextType,
} from "../context/DashboardContext";

const Grafic = () => {
  const {
    data: dataProducts,
    // error: errorProduct,
    isLoading: loadingProduct,
  } = useFetchData<Product[], any>("https://fakestoreapi.com/products");

  const [chartInstance, setChartInstance] = useState<Chart<"line"> | null>(
    null
  );
  const [chartData, setChartData] = useState<InterfaceChart | null>(null);
  const { selectCategory } = useContext(
    DashboardContext
  ) as DashboardContextType;
  
  useEffect(() => {
    if (!dataProducts) return;
    const data = cantProductForCategory(
      selectCategory ? selectCategory.value : ''
    );
    const chartData = {
      labels: data.map((item) => item.category),
      datasets: [
        {
          label: "Product Quantity",
          data: data.map((item) => item.quantity),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          fill: true,
        },
      ],
    };
    setChartData(chartData);
  }, [dataProducts, selectCategory]);

  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if ((chartData && !chartRef) || !chartRef.current) return;

    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    const newChartInstance = new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        aspectRatio: 0,
      },
    });
    setChartInstance(newChartInstance);
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [chartData]);

  return (
    <CardWhite title="Product of Quantity">
      <div
        style={{
          width: "100%",
        }}
      >
        {loadingProduct && <p>Loading ...</p>}
        {dataProducts && <canvas ref={chartRef} />}
      </div>
    </CardWhite>
  );
};

export default Grafic;
