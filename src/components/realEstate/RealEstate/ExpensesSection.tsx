import { Suspense } from "react";
import PortfolioPieChart from "./PortfolioPieChart";
import Legend from "./Legend";
import AssetOverview from "../AssetOverview";

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
    <AssetOverview />
  </div>
);

export default ExpensesSection;
