import { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { resolveColor } from "../../../utils/colors";

const months = [
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
];

const data = [90, 78, 82, 98, 85, 105, 99, 87, 92, 79, 88, 68];

const series = [
  {
    name: "Dividends",
    data,
  },
];

const DividendsChart = () => {
  const barColors = useMemo(
    () =>
      data.map((_, idx) =>
        idx === 5 ? resolveColor("brand") : resolveColor("brand-light")
      ),
    []
  );

  const labelColor = useMemo(() => resolveColor("light-silver"), []);
  const gridColor = useMemo(() => resolveColor("light-silver"), []);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      animations: { enabled: true },
      fontFamily: "Inter, sans-serif",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "8px",
        distributed: true,
        dataLabels: { position: "top" },
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: barColors,
    legend: { show: false },
    xaxis: {
      categories: months,
      labels: {
        style: {
          fontSize: "10px",
          fontWeight: 600,
          colors: labelColor,
        },
      },
    },
    yaxis: {
      min: 40,
      max: 110,
      tickAmount: 5,
      labels: {
        style: { fontSize: "10px", fontWeight: 700, colors: labelColor },
      },
    },
    grid: {
      borderColor: gridColor,
      strokeDashArray: 8,
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } },
    },
    tooltip: {
      enabled: true,
      theme: "light",
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height={180} />
  );
};

export default DividendsChart;
