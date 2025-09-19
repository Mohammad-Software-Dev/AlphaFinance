import { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { resolveColor } from "../../../utils/colors";
import type { ChartSeriesModel } from "../../../models/propertyFinancials";

const fallbackMonths = [
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
const fallbackValues = [90, 78, 82, 98, 85, 105, 99, 87, 92, 79, 88, 68];

const DividendsChart: React.FC<{
  series?: ChartSeriesModel;
  height?: number;
}> = ({ series, height = 180 }) => {
  const categories = series?.labels?.length ? series.labels : fallbackMonths;
  const values = series?.values?.length ? series.values : fallbackValues;

  const barColors = useMemo(
    () =>
      values.map((_, idx) =>
        idx === 5 ? resolveColor("brand") : resolveColor("brand-light")
      ),
    [values]
  );

  const labelColor = useMemo(() => resolveColor("light-silver"), []);
  const gridColor = useMemo(() => resolveColor("light-silver"), []);

  const options: ApexOptions = {
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
    dataLabels: { enabled: false },
    colors: barColors,
    legend: { show: false },
    xaxis: {
      categories,
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
    tooltip: { enabled: true, theme: "light" },
  };

  const seriesForApex = [{ name: "Dividends", data: values }];

  return (
    <ReactApexChart
      options={options}
      series={seriesForApex}
      type="bar"
      height={height}
    />
  );
};

export default DividendsChart;
