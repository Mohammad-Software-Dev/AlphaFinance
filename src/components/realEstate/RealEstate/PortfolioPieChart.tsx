import React, { useMemo, useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const pieData = [32, 15, 20, 13];
const pieLabels = [
  "Starting amount",
  "Dividends earned",
  "Total contributions",
  "Token value growth",
];
const pieColorVars = [
  "--color-brand",
  "--color-teal",
  "--color-dark-orange",
  "--color-light-orange",
];
const getCssVar = (name: string): string => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value;
};

type PortfolioPieChartProps = {
  height?: number | string;
};

const PortfolioPieChart: React.FC<PortfolioPieChartProps> = ({
  height = 320,
}) => {
  const pieColors = useMemo(
    () => pieColorVars.map((name) => getCssVar(name)),
    []
  );

  // useState for options and series
  const [state, setState] = useState<{
    options: ApexCharts.ApexOptions;
    series: number[];
  }>({
    options: {
      chart: { type: "pie", toolbar: { show: false } },
      labels: pieLabels,
      legend: { show: false },
      stroke: { width: 3 },
      colors: pieColors,
      dataLabels: { enabled: false },
    },
    series: pieData,
  });

  // If you want to react to changes in pieColors, update options
  useEffect(() => {
    setState((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        colors: pieColors,
      },
    }));
  }, [pieColors]);

  // Example: if you want to change series data dynamically, you can do so here

  return (
    <div>
      <ReactApexChart
        height={height}
        options={state.options}
        series={state.series}
        type="pie"
      />
    </div>
  );
};

export default PortfolioPieChart;
