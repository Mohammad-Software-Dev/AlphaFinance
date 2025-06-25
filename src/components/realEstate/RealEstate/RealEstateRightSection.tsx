import React from "react";
import AssetOverview from "../AssetOverview";
import FinancialCalculator from "./FinancialCalculator";
import HorizontalDivider from "../../common/HorizontalDivider";

const RealEstateRightSection: React.FC = () => (
  <div className="flex flex-col gap-8 ">
    <AssetOverview />
    <HorizontalDivider className=" border-4 rounded-full  self-stretch" />
    <FinancialCalculator />
  </div>
);

export default RealEstateRightSection;
