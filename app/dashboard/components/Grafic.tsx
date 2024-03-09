"use client";
import React, { useEffect, useRef, useState } from "react";
import CardWhite from "@/modules/card/CardWhite";
import Chart from "chart.js/auto";
import { Cart, CartsByMonth } from "@/domains/Cart";
import { useFetchData } from "@/logic";
import { formatData, formatDate } from "@/logic/utils/data";
import { InterfaceChart } from "@/domains/Chart";

const Grafic = () => {
  //carts
  const {
    data: dataCart,
    error: errorCart,
    isLoading: loadingCart,
  } = useFetchData<Cart[], any>("https://fakestoreapi.com/carts");

  const data: CartsByMonth[] = formatData(dataCart);
  const [chartInstance, setChartInstance] = useState<Chart<"line"> | null>(
    null
  );
  const [chartData, setChartData] = useState<InterfaceChart | null>(null);

  useEffect(() => {
    if (!dataCart && !data) return;
    const chartData = {
      labels: data.map((item) => formatDate(item.date)),
      datasets: [
        {
          label: "Number of sales",
          data: data.map((item) => item.carts.length),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          fill: true,
        },
      ],
    };
    setChartData(chartData);
    localStorage.setItem("grafic-data", JSON.stringify(dataCart));
  }, [dataCart]);
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
    <CardWhite title="Sales">
      <div
        style={{
          width: "100%",
        }}
      >
        {loadingCart && <p>Loading ...</p>}
        {dataCart && <canvas ref={chartRef} />}
      </div>
    </CardWhite>
  );
};

export default Grafic;
