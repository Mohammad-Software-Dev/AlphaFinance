import React from "react";
import VerticalDivider from "../../common/VerticalDivider";
import HorizontalDivider from "../../common/HorizontalDivider";
import TokenTransactions from "./TokenTransactions";
import Investors from "./Investors";
import type { PropertyFinancialsModel } from "../../../models/propertyFinancials";

const FinancialLowerPart: React.FC<{ financials: PropertyFinancialsModel }> = ({
  financials,
}) => {
  const { tokenTransactions, investors } = financials;

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-fit">
      <HorizontalDivider className="block border-light-silver md:hidden my-8 self-stretch" />

      <section className="flex flex-col w-full lg:w-[42%]">
        <TokenTransactions items={tokenTransactions} />
      </section>

      <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />

      <HorizontalDivider className="block border-light-silver md:hidden my-8 self-stretch" />

      {/* Right Section (Investors) */}
      <section className="w-full lg:w-[58%] flex flex-col">
        <Investors items={investors} />
      </section>
    </div>
  );
};

export default FinancialLowerPart;
