import React, { Suspense } from "react";
const DividendsChart = React.lazy(() => import("./DividendsChart"));
import type { ChartSeriesModel } from "../../../models/propertyFinancials";

const DividendsCard: React.FC<{
  title?: string;
  value?: string;
  percentage?: string;
  series?: ChartSeriesModel;
}> = ({ title = "Dividends", value = "0", percentage = "+0%", series }) => (
  <div className="w-full md:px-4">
    <header>
      <h4 className="font-normal text-black mb-3">{title}</h4>
      <div className="flex items-end gap-2">
        <h6 className="font-semibold">{value}</h6>
        <span className="font-bold text-xs md:text-base text-verified-green">
          {percentage}
        </span>
      </div>
    </header>
    <Suspense fallback={<div style={{ height: 180 }}>Loading chart…</div>}>
      <DividendsChart series={series} />
    </Suspense>
  </div>
);

export default DividendsCard;
