import React from "react";
import VerticalDivider from "../../common/VerticalDivider";
import RealEstateRightSection from "../RealEstate/RealEstateRightSection";
import RealEstateLeftSection from "../RealEstate/RealEstateLeftSection";
import HorizontalDivider from "../../common/HorizontalDivider";
import { useParams } from "react-router-dom";
import { usePropertyDetails } from "../../../hooks/usePropertyDetails";

const RealEstateTab: React.FC = () => {
  const { assetId } = useParams();
  const { loading, error, leftVM, overviewVM, statCards } =
    usePropertyDetails(assetId);

  if (loading) return <div>Loading…</div>;
  if (error) return <div className="text-red-600">{error.message}</div>;
  if (!leftVM || !overviewVM) return <div>Property not found</div>;

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-[55%]">
        <RealEstateLeftSection vm={leftVM} />
      </div>

      <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />
      <HorizontalDivider className="block border-light-silver md:hidden my-8 self-stretch" />

      <div className="w-full lg:w-[45%] md:mt-8 lg:mt-0">
        <RealEstateRightSection statCards={statCards} overviewVM={overviewVM} />
      </div>
    </div>
  );
};

export default RealEstateTab;
