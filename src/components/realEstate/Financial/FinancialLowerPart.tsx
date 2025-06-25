import React from "react";
import VerticalDivider from "../../common/VerticalDivider";
import HorizontalDivider from "../../common/HorizontalDivider";
import TokenTransactions from "./TokenTransactions";
import Investors from "./Investors";

const FinancialLowerPart: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-fit">
      <HorizontalDivider className="block border-light-silver md:hidden  my-8  self-stretch" />
      <section className="flex flex-col w-full lg:w-[42%] ">
        <TokenTransactions />
      </section>
      <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />
      <HorizontalDivider className="block border-light-silver md:hidden  my-8  self-stretch" />

      {/* Right Section (Transactions) */}
      <section className="w-full lg:w-[58%] flex flex-col">
        <Investors />
      </section>
    </div>
  );
};

export default FinancialLowerPart;
