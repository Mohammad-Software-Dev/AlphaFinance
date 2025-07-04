import React from "react";
import VerticalDivider from "../../common/VerticalDivider";

import HorizontalDivider from "../../common/HorizontalDivider";
import ChartsRow from "../ChartsRow";
import PortfolioRow from "../PortfolioRow";
import TransactionsRow from "../TransactionsRow";
import TotalBalance from "../TotalBalance";

const Ballance: React.FC = () => (
  <div className="flex flex-col lg:flex-row w-full">
    <div className="w-full lg:w-1/4">
      <TotalBalance />
    </div>
    <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />
    <HorizontalDivider className="block border-light-silver md:hidden  my-8  self-stretch" />
    <div className="w-full lg:w-3/4 md:mt-8 lg:mt-0">
      <TransactionsRow />
      <HorizontalDivider className=" border-light-silver my-8  self-stretch" />
      <ChartsRow />
      <HorizontalDivider className=" border-light-silver  mb-4  self-stretch" />
      <PortfolioRow />
    </div>
  </div>
);

export default Ballance;
