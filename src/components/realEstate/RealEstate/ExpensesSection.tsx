import { Suspense } from "react";
import PortfolioPieChart from "./PortfolioPieChart";
import Legend from "./Legend";
import AssetOverview from "../AssetOverview";
import { DEFAULT_PROPERTY } from "../../../data/properties";
import type { AssetOverviewVM } from "../../../models/propertyDetails";

const defaultOverview: AssetOverviewVM = {
  netYieldText: DEFAULT_PROPERTY.netYield ?? "N/A",
  grossYieldText: DEFAULT_PROPERTY.grossYield ?? "N/A",
  tokenRoiPct: DEFAULT_PROPERTY.tokenROI ?? 0,
  tokenPrice: DEFAULT_PROPERTY.tokenPrice ?? 0,
  investors: DEFAULT_PROPERTY.investors ?? 0,
  totalTokens: DEFAULT_PROPERTY.totalTokens ?? 0,
  availableTokens: DEFAULT_PROPERTY.availableTokens ?? 0,
};

const ExpensesSection: React.FC = () => (
  <div>
    <h4 className="font-normal text-black mb-3">Expenses to get net yield</h4>
    {/* Use a flex row for chart + legend */}
    <div className="md:flex md:flex-row md:gap-10 items-end my-8 ">
      <div className="hidden md:block ">
        <Suspense fallback={<div>Loading chart…</div>}>
          <PortfolioPieChart height={260} />
        </Suspense>
      </div>
      <div className="block md:hidden mb-3">
        <Suspense fallback={<div>Loading chart…</div>}>
          <PortfolioPieChart height={175} />
        </Suspense>
      </div>
      {/* Legend always visible */}
      <div className=" w-full ">
        <Legend />
      </div>
    </div>
    <AssetOverview property={defaultOverview} />
  </div>
);

export default ExpensesSection;
