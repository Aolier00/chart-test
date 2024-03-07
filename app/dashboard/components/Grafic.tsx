"use client";
import React, { useEffect, useRef, useState } from "react";
import CardWhite from "@/modules/card/CardWhite";
import Chart from "chart.js/auto";

const Grafic = () => {
  const [chartInstance, setChartInstance] = useState<Chart<"line"> | null>(
    null
  );
  const chartData = {
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        label: "Temperatura Promedio (°C)",
        data: [2, 3, 6, 10, 15, 20, 23, 22, 18, 12, 7, 3],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  };
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef || !chartRef.current) return;

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
        // scales: {
        //   y: {
        //     beginAtZero: true,
        //   },
        // },
      },
    });
    setChartInstance(newChartInstance);
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, []);

  return (
    <CardWhite title="Ganancias">
      <div
        style={{
          width: "100%",
        }}
      >
        <canvas ref={chartRef} />
      </div>
    </CardWhite>
  );
};

export default Grafic;
