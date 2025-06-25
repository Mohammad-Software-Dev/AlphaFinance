import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { resolveColor } from "../../../utils/colors";

const total = 15000;

const expensesData = [
  { label: "Alphased fees", color: "brand", value: (15 * total) / 100 },
  { label: "SPV maintenance", color: "dark-orange", value: (20 * total) / 100 },
  { label: "Property management", color: "sand", value: (13 * total) / 100 },
  { label: "Facility management", color: "teal", value: (32 * total) / 100 },
  {
    label: "Services charges",
    color: "light-orange",
    value: (20 * total) / 100,
  },
];

const Expenses: React.FC = () => {
  const resolvedColors = useMemo(
    () => expensesData.map((item) => resolveColor(item.color)),
    []
  );
  const [state] = React.useState<{
    series: number[];
    options: ApexOptions;
  }>({
    series: expensesData.map((item) => item.value),
    options: {
      chart: {
        type: "donut",
        sparkline: { enabled: true },
      },
      labels: expensesData.map((item) => item.label),
      colors: resolvedColors,
      dataLabels: {
        enabled: false,
      },

      plotOptions: {
        pie: {
          donut: {
            size: "90%",
            labels: {
              show: true,
              name: { show: true, offsetY: 22 },
              value: {
                show: true,
                fontSize: "28px",
                fontWeight: 600,
                color: "#465166",
                offsetY: -18,
              },
              total: {
                show: true,
                label: "Utility Bill",
                fontSize: "16px",
                color: "#8A94A6",
                fontWeight: 500,
              },
            },
          },
        },
      },
      stroke: { width: 3, colors: ["#fff"] },
      tooltip: { enabled: false },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: { position: "bottom" },
          },
        },
      ],
    },
  });

  return (
    <div className="w-full">
      <h4 className="font-normal text-black mb-3">Expenses</h4>
      <div className="flex flex-col items-center mb-6 py-3 w-full">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
        />
      </div>
      {/* Legend */}
      <div className="flex flex-col w-full md:w-11/12 gap-2 mt-2">
        {expensesData.map((item, idx) => (
          <div
            key={item.label}
            className="flex gap-2 justify-between items-center border-b-[1px] border-light-silver py-1"
          >
            <span
              className="inline-block w-6 h-6 rounded-[8px]"
              style={{ backgroundColor: resolvedColors[idx] }}
            />
            <span className="text-sm md:text-base flex-1">{item.label}</span>
            <span className="text-sm md:text-base text-dark-silver font-normal ">
              {(item.value * 100) / total}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expenses;
