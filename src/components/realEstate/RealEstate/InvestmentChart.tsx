import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { resolveColor } from "../../../utils/colors"; // adjust the path if needed

const years = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2031, 2032];
const starting = [40, 90, 330, 250, 510, 400, 350, 520, 590];
const dividends = [40, 90, 330, 250, 510, 400, 350, 520, 590];
const contributions = [60, 120, 180, 240, 300, 360, 420, 480, 540];
const tokenValueGrowth = [100, 160, 120, 320, 360, 470, 420, 410, 560];

const InvestmentChart: React.FC = () => {
  // Resolve theme colors with useMemo
  const colors = useMemo(
    () => ({
      brand: resolveColor("brand"),
      teal: resolveColor("teal"),
      darkOrange: resolveColor("dark-orange"),
      lightOrange: resolveColor("light-orange"),
    }),
    []
  );

  const options: ApexCharts.ApexOptions = {
    chart: {
      id: "investment-chart",
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: "Inter, sans-serif",
    },
    stroke: {
      width: [0, 2, 2, 2],
      curve: "monotoneCubic",
    },
    dataLabels: { enabled: false },
    fill: {
      type: ["gradient", "solid", "solid", "solid"],
      opacity: [1, 1, 1, 1],
      colors: [
        colors.brand,
        colors.teal,
        colors.darkOrange,
        colors.lightOrange,
      ],
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [0, 70],
      },
    },
    markers: {
      size: [0, 5, 0, 0],
      colors: [colors.brand],
      strokeColors: [
        colors.brand,
        colors.teal,
        colors.darkOrange,
        colors.lightOrange,
      ],
      strokeWidth: 0,
      hover: { size: 8 },
    },
    xaxis: {
      categories: years,
    },
    legend: { show: false },
    grid: { borderColor: resolveColor("light-silver") },
    tooltip: { theme: "light" },
    colors: [colors.brand, colors.teal, colors.darkOrange, colors.lightOrange],
  };

  const series = [
    {
      name: "Starting amount",
      type: "area",
      data: starting,
      color: colors.brand,
    },
    {
      name: "Dividends earned",
      type: "line",
      data: dividends,
      color: colors.teal,
    },
    {
      name: "Total contributions",
      type: "line",
      data: contributions,
      color: colors.darkOrange,
    },
    {
      name: "Token Value Growth",
      type: "line",
      data: tokenValueGrowth,
      color: colors.lightOrange,
    },
  ];

  return (
    <div>
      <ReactApexChart
        height={250}
        options={options}
        series={series}
        type="line"
      />
    </div>
  );
};

export default InvestmentChart;
