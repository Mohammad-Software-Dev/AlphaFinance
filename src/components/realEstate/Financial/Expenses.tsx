import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { resolveColor } from "../../../utils/colors";
import type { ExpensesModel } from "../../../models/propertyFinancials";

/**
 * Map backend category --> theme color token
 */
const CATEGORY_COLOR: Record<
  ExpensesModel["categories"][number]["type"],
  string
> = {
  "Alphased fees": "brand",
  "SPV maintenance": "dark-orange",
  "Property management": "sand",
  "Facility management": "teal",
  "Services charges": "light-orange",
};

const Expenses: React.FC<{ data: ExpensesModel }> = ({ data }) => {
  const total = data.total;

  const labels = data.categories.map((c) => c.type);
  const series = data.categories.map((c) => c.value);
  const colors = useMemo(
    () => data.categories.map((c) => resolveColor(CATEGORY_COLOR[c.type])),
    [data.categories]
  );

  const options: ApexOptions = {
    chart: { type: "donut", sparkline: { enabled: true } },
    labels,
    colors,
    dataLabels: { enabled: false },
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
              // shows the total in the center instead of slice value
              formatter: () => total.toLocaleString(),
            },
            total: {
              show: true,
              label: data.label,
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
      { breakpoint: 480, options: { legend: { position: "bottom" } } },
    ],
  };

  return (
    <div className="w-full">
      <h4 className="font-normal text-black mb-3">Expenses</h4>

      <div className="flex flex-col items-center mb-6 py-3 w-full">
        <ReactApexChart options={options} series={series} type="donut" />
      </div>

      {/* Legend */}
      <div className="flex flex-col w-full md:w-11/12 gap-2 mt-2">
        {data.categories.map((c, idx) => {
          const percentage =
            total > 0 ? Math.round((c.value / total) * 100) : 0;
          return (
            <div
              key={c.type}
              className="flex gap-2 justify-between items-center border-b-[1px] border-light-silver py-1"
            >
              <span
                className="inline-block w-6 h-6 rounded-sm"
                style={{ backgroundColor: colors[idx] }}
              />
              <span className="text-sm md:text-base flex-1">{c.type}</span>
              <span className="text-sm md:text-base text-dark-silver font-normal ">
                {percentage}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expenses;
