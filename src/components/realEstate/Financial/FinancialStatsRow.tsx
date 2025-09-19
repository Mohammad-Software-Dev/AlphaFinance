import React, { Suspense, useMemo } from "react";
const StatChart = React.lazy(() => import("./StatChart"));
import type { PropertyFinancialsModel } from "../../../models/propertyFinancials";

type Props = {
  charts: PropertyFinancialsModel["charts"];
};

const FinancialStatsRow: React.FC<Props> = ({ charts }) => {
  const blocks = useMemo(
    () => [
      {
        label: "Property Price",
        value: `AED ${charts.propertyPrice.amount.toLocaleString()}`,
        change: `${charts.propertyPrice.isPositive ? "+" : ""}${
          charts.propertyPrice.percentage
        }%`,
        color: "brand" as const,
        series: charts.propertyPrice.series,
        min: 40,
        max: 160,
        tickAmount: 4,
      },
      {
        label: "Total Revenue",
        value: `AED ${charts.totalRevenue.amount.toLocaleString()}`,
        change: `${charts.totalRevenue.isPositive ? "+" : ""}${
          charts.totalRevenue.percentage
        }%`,
        color: "dark-orange" as const,
        series: charts.totalRevenue.series,
        min: 40,
        max: 160,
        tickAmount: 4,
      },
      {
        label: "NET Income",
        value: `AED ${charts.netIncome.amount.toLocaleString()}`,
        change: `${charts.netIncome.isPositive ? "+" : ""}${
          charts.netIncome.percentage
        }%`,
        color: "black" as const,
        series: charts.netIncome.series,
        min: 40,
        max: 160,
        tickAmount: 4,
      },
    ],
    [charts]
  );

  return (
    <>
      <div className="hidden lg:flex flex-row h-fit border-b-[1px] border-light-silver w-full">
        {blocks.map((b) => (
          <section key={b.label} className="flex-1 flex flex-col gap-5 pr-4">
            <header>
              <h4 className="font-normal text-black mb-3">{b.label}</h4>
              <div className="flex items-end gap-2">
                <h6 className="font-semibold">{b.value}</h6>
                <span className="font-bold text-xs md:text-base text-verified-green">
                  {b.change}
                </span>
              </div>
            </header>
            <Suspense
              fallback={<div style={{ height: 180 }}>Loading chart…</div>}
            >
              <StatChart
                color={b.color}
                data={b.series.values}
                labels={b.series.labels}
                min={b.min}
                max={b.max}
                tickAmount={b.tickAmount}
              />
            </Suspense>
          </section>
        ))}
      </div>

      <div className="block lg:hidden w-full border-b-[1px] border-light-silver">
        {blocks.map((b) => (
          <section key={b.label} className="flex flex-col gap-3">
            <header>
              <h4 className="font-normal text-black mb-3">{b.label}</h4>
              <div className="flex items-end gap-2">
                <h6 className="font-semibold">{b.value}</h6>
                <span className="font-bold text-xs md:text-base text-verified-green">
                  {b.change}
                </span>
              </div>
            </header>
            <Suspense
              fallback={<div style={{ height: 180 }}>Loading chart…</div>}
            >
              <StatChart
                height={250}
                color={b.color}
                data={b.series.values}
                labels={b.series.labels}
                min={b.min}
                max={b.max}
                tickAmount={b.tickAmount}
              />
            </Suspense>
          </section>
        ))}
      </div>
    </>
  );
};

export default FinancialStatsRow;
