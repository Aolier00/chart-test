import { useEffect, useRef, useState } from "react";
import { InterfaceChart } from "@/domains/Chart";
import { DropdownInterface } from "@/domains/Dropdown";
import { Product } from "@/domains/Product";
import Chart from "chart.js/auto";
import { cantProductForCategory } from "./utils/data";

type Props = {
  dataProducts: Product[];
  selectCategory: DropdownInterface;
};

const UseGrafic = ({ dataProducts, selectCategory }: Props) => {
  const [chartInstance, setChartInstance] = useState<Chart<"line"> | null>(
    null
  );
  const [chartData, setChartData] = useState<InterfaceChart | null>(null);
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!dataProducts) return;
    const data = cantProductForCategory(
      selectCategory ? selectCategory.value : "",
      dataProducts
    );
    const chartData = {
      labels: data.map((item) => item.category),
      datasets: [
        {
          label: "Quantity of product by category",
          data: data.map((item) => item.quantity),
          backgroundColor: "rgba(149, 164, 252, 0.5)",
          borderColor: "rgba(149, 164, 252, 1)",
          borderWidth: 1,
          fill: true,
          tension: 0.4,
        },
      ],
    };
    setChartData(chartData);
  }, [dataProducts, selectCategory]);

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

  return { chartRef };
};

export default UseGrafic;
