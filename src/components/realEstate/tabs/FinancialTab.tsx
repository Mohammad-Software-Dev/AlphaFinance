import React from "react";
import FinancialUpperPart from "../Financial/FinancialUpperPart";
import FinancialLowerPart from "../Financial/FinancialLowerPart";
import HorizontalDivider from "../../common/HorizontalDivider";

const FinancialTab: React.FC = () => {
  return (
    <div className="flex flex-col  w-full min-h-screen">
      <FinancialUpperPart />
      <HorizontalDivider className=" border-light-silver hidden  md:block my-8  self-stretch" />
      <FinancialLowerPart />
    </div>
  );
};

export default FinancialTab;
