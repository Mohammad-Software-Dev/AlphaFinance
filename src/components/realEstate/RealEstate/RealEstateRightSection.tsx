import React from "react";
import AssetOverview from "../AssetOverview";
import HorizontalDivider from "../../common/HorizontalDivider";

const RealEstateRightSection: React.FC = () => (
  <div className="flex flex-col gap-8 ">
    <AssetOverview />
    <HorizontalDivider className=" border-light-silver   my-2  self-stretch" />
  </div>
);

export default RealEstateRightSection;
