import React, { Suspense } from "react";
const Expenses = React.lazy(() => import("./Expenses"));
import Invoices from "../../common/Invoices";
import DividendsCard from "./DividendsCard";
import Transactions from "../../common/Transaction";
import HorizontalDivider from "../../common/HorizontalDivider";
import VerticalDivider from "../../common/VerticalDivider";
import type { PropertyFinancialsModel } from "../../../models/propertyFinancials";
import FinancialStatsRow from "./FinancialStatsRow";

const FinancialUpperPart: React.FC<{ financials: PropertyFinancialsModel }> = ({
  financials,
}) => {
  const { charts, expenses, invoices, dividends, financialTransactions } =
    financials;

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-fit">
      {/* LEFT */}
      <section className="flex flex-col w-full lg:w-3/4">
        {/* Top 3 charts */}
        <FinancialStatsRow charts={charts} />

        {/* Expenses + Invoices + Dividends */}
        <div className="flex flex-col lg:flex-row flex-1 min-h-[360px] mt-6">
          {/* Expenses + Invoices */}
          <div className="flex flex-col flex-2 border-b-[1px] mb-3 lg:mb-0 lg:border-b-0 lg:border-r border-light-silver">
            <div className="flex flex-col md:flex-row flex-1 gap-5">
              {/* Expenses */}
              <div className="w-full md:w-2/5 flex items-start justify-center">
                <Suspense
                  fallback={
                    <div style={{ height: 320 }}>Loading expenses…</div>
                  }
                >
                  <Expenses data={expenses} />
                </Suspense>
              </div>

              <HorizontalDivider className="block border-light-silver md:hidden my-3 self-stretch" />

              {/* Invoices */}
              <div className="w-full md:w-3/5 flex items-start justify-center">
                <Invoices
                  rows={invoices.map((i) => ({
                    id: i.invoiceId,
                    date: i.billingDate,
                    amount: `AED ${i.amount.toLocaleString()}`,
                    fileUrl: "#", // You can wire real files when available
                  }))}
                />
              </div>
            </div>
          </div>

          {/* Dividends */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-start">
              <DividendsCard
                title="Dividends"
                value={dividends.total.toLocaleString()}
                percentage={`${dividends.isPositive ? "+" : ""}${
                  dividends.percentage
                }%`}
                series={dividends.series}
              />
            </div>
          </div>
        </div>
      </section>

      <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />
      <HorizontalDivider className="block border-light-silver md:hidden my-8 self-stretch" />

      {/* RIGHT: Transactions */}
      <section className="w-full lg:w-1/4 flex flex-col">
        <Transactions
          items={financialTransactions.map((t, idx) => ({
            id: idx,
            description: t.label,
            time: t.time,
            amount: t.amount,
            type: t.type === "deposit" ? "credit" : "debit",
          }))}
        />
      </section>
    </div>
  );
};

export default FinancialUpperPart;
