import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { resolveColor } from "../../../utils/colors";
interface StatChartProps {
  data: number[];
  color: string;
  showArea?: boolean;
  height?: number;
  labels?: string[];
  min?: number;
  max?: number;
  tickAmount?: number;
}

const StatChart: React.FC<StatChartProps> = ({
  data,
  color,
  height,
  showArea = false,
  labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  min,
  max,
  tickAmount,
}) => {
  const realColor = useMemo(() => resolveColor(color), [color]);
  const dimGray = useMemo(() => resolveColor("dark-silver"), []);
  const lightSilver = useMemo(() => resolveColor("light-silver"), []);
  const options: ApexOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      animations: { enabled: true },
      zoom: { enabled: false },
      fontFamily: "Inter, sans-serif",
    },
    stroke: {
      width: 3,
      curve: "smooth",
      colors: [realColor],
    },
    fill: {
      type: showArea ? "gradient" : "solid",
      colors: [realColor],
      gradient: showArea
        ? {
            type: "vertical",
            shadeIntensity: 0,
            opacityFrom: 0.7,
            opacityTo: 0.1,
            stops: [0, 100],
          }
        : undefined,
      opacity: 1,
    },
    markers: { size: 0 },
    yaxis: {
      show: true,
      min,
      max,
      tickAmount,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        offsetX: -10,
        show: true,
        style: { fontSize: "13px", colors: dimGray },
        formatter: (value: number) => `${value} $`,
      },
    },
    xaxis: {
      categories: labels,
      labels: {
        show: true,
        style: { fontSize: "13px", colors: dimGray },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
    },
    grid: {
      show: true,
      borderColor: lightSilver,
      strokeDashArray: 4,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: true } },
      padding: { left: 0, right: 0, top: 8, bottom: 0 },
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    legend: { show: false },
  };

  const series = [{ data }];

  return (
    <ReactApexChart
      height={height}
      options={options}
      series={series}
      type="line"
    />
  );
};

export default StatChart;
