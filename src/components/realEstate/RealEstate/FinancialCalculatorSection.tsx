import { Suspense } from "react";
import InvestmentChart from "./InvestmentChart";
import SemiRadialInput from "./SemiRadialInput";

const FinancialCalculatorSection: React.FC = () => (
  <div>
    <h4 className="font-normal text-black mb-3">Financial Calculator</h4>
    <div>
      <p>
        Considering The Token Price
        <span className="text-dark-orange font-semibold"> 8 AED</span> And Token{" "}
        <span className="text-teal font-semibold"> ROI 11.6%</span> And...
      </p>
    </div>
    <div className="flex py-8">
      <SemiRadialInput value={1520} min={1000} max={10000} />
      <SemiRadialInput value={4520} min={1000} max={10000} />
      <SemiRadialInput value={6520} min={1000} max={10000} />
    </div>

    <div className="w-full hidden md:block">
      <Suspense fallback={<div>Loading chart…</div>}>
        <InvestmentChart height={360} />
      </Suspense>
    </div>
    <div className="w-full  md:hidden">
      <Suspense fallback={<div>Loading chart…</div>}>
        <InvestmentChart height={180} />
      </Suspense>
    </div>
  </div>
);

export default FinancialCalculatorSection;
