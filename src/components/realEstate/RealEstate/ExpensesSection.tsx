import { Suspense } from "react";
import PortfolioPieChart from "./PortfolioPieChart";
import Legend from "./Legend";
import AssetOverview from "../AssetOverview";

const ExpensesSection: React.FC = () => (
  <div>
    <h4 className="font-normal text-black mb-3">Expenses to get net yield</h4>
    <div className="hidden md:flex justify-start mb-6">
      <Suspense fallback={<div>Loading chart…</div>}>
        <PortfolioPieChart height={300} />
      </Suspense>
    </div>
    <div className="md:hidden mb-3">
      <Suspense fallback={<div>Loading chart…</div>}>
        <PortfolioPieChart height={175} />
      </Suspense>
    </div>
    <Legend />
    <AssetOverview />
  </div>
);

export default ExpensesSection;
