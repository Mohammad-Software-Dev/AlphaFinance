import React from "react";
import Expenses from "./Expenses.tsx";
import Invoices from "./Invoices.tsx";
import DividendsCard from "./DividendsCard.tsx";
import FinancialStatsRow from "./FinancialStatsRow.tsx.tsx";
import Transactions from "./Transaction.tsx";
import HorizontalDivider from "../../common/HorizontalDivider.tsx";

const FinancialUpperPart: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-fit">
      {/* Main Left Section */}
      <section className="flex flex-col w-full lg:w-3/4 border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-light-silver">
        {/* Top Stats Row */}
        <FinancialStatsRow />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row flex-1 min-h-[360px] mt-6">
          {/* Left: Expenses + Invoices */}
          <div className="flex flex-col flex-2 border-b-[1px] mb-3 lg:mb-0 lg:border-b-0 lg:border-r border-light-silver">
            <div className="flex flex-col md:flex-row flex-1 gap-5">
              {/* Expenses (left) */}
              <div className="w-full md:w-2/5 flex items-start justify-center">
                <Expenses />
              </div>
              {/* Invoices (right) */}
              <HorizontalDivider className="block border-light-silver md:hidden  my-3  self-stretch" />
              <div className="w-full md:w-3/5 flex items-start justify-center">
                <Invoices />
              </div>
            </div>
          </div>

          {/* Right: Dividends */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-start">
              <DividendsCard />
            </div>
          </div>
        </div>
      </section>

      {/* Right Section (Transactions) */}
      <section className="w-full lg:w-1/4 flex flex-col  sm:px-6 md:px-8 border-t-[1px] lg:border-t-0 lg:border-l-[1px] border-light-silver">
        <Transactions />
      </section>
    </div>
  );
};

export default FinancialUpperPart;
