import React, { Suspense } from "react";

const Expenses = React.lazy(() => import("./Expenses"));
import Invoices from "../../common/Invoices.tsx";
import DividendsCard from "./DividendsCard.tsx";
import FinancialStatsRow from "./FinancialStatsRow.tsx.tsx";
import Transactions from "../../common/Transaction.tsx";
import HorizontalDivider from "../../common/HorizontalDivider.tsx";
import VerticalDivider from "../../common/VerticalDivider.tsx";

const FinancialUpperPart: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-fit">
      {/* Main Left Section */}
      <section className="flex flex-col w-full lg:w-3/4">
        {/* Top Stats Row */}
        <FinancialStatsRow />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row flex-1 min-h-[360px] mt-6">
          {/* Left: Expenses + Invoices */}
          <div className="flex flex-col flex-2 border-b-[1px] mb-3 lg:mb-0 lg:border-b-0 lg:border-r border-light-silver">
            <div className="flex flex-col md:flex-row flex-1 gap-5">
              {/* Expenses (left) */}
              <div className="w-full md:w-2/5 flex items-start justify-center">
                <Suspense
                  fallback={
                    <div style={{ height: 320 }}>Loading expenses…</div>
                  }
                >
                  <Expenses />
                </Suspense>
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
      <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />
      <HorizontalDivider className="block border-light-silver md:hidden  my-8  self-stretch" />
      {/* Right Section (Transactions) */}
      <section className="w-full lg:w-1/4 flex flex-col  ">
        <Transactions />
      </section>
    </div>
  );
};

export default FinancialUpperPart;
