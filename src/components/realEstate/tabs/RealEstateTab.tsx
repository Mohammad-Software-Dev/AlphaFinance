import React from "react";
import VerticalDivider from "../../common/VerticalDivider";
import RealEstateRightSection from "../RealEstate/RealEstateRightSection";
import RealEstateLeftSection from "../RealEstate/RealEstateLeftSection";
import HorizontalDivider from "../../common/HorizontalDivider";

const RealEstateTab: React.FC = () => (
  <div className="flex flex-col lg:flex-row w-full">
    <div className="w-full lg:w-[55%]">
      <RealEstateLeftSection />
    </div>
    <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />
    <HorizontalDivider className="block border-light-silver md:hidden  my-8  self-stretch" />

    <div className="w-full lg:w-[45%] md:mt-8 lg:mt-0">
      <RealEstateRightSection />
    </div>
  </div>
);

export default RealEstateTab;
