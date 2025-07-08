import React, { useMemo } from "react";
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

  const options: ApexCharts.ApexOptions = {
    chart: { type: "pie", toolbar: { show: false } },
    labels: pieLabels,
    legend: { show: false },
    stroke: { width: 3 },
    colors: pieColors,
    dataLabels: { enabled: false },
  };

  return (
    <div className="">
      <ReactApexChart
        height={height}
        options={options}
        series={pieData}
        type="pie"
      />
    </div>
  );
};

export default PortfolioPieChart;
