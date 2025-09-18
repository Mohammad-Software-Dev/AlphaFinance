import React from "react";
import PropertyDetails from "../PropertyInfo/PropertyDetails";
import PropertyFeatures from "../PropertyInfo/PropertyFeatures";
import PropertyDescription from "../PropertyInfo/PropertyDescription";
import AboutCommunity from "../PropertyInfo/AboutCommunity";
import AmenitiesCard from "../PropertyInfo/AmenitiesCard";
import PropertyManagement from "../PropertyInfo/PropertyManagement";
import VerticalDivider from "../../common/VerticalDivider";
import HorizontalDivider from "../../common/HorizontalDivider";

const PropertyInfoTab: React.FC = () => (
  <div className="flex flex-col lg:flex-row w-full">
    {/* Left Column */}
    <div className="space-y-8 ">
      <PropertyDetails />
      <PropertyFeatures />
      <PropertyDescription />
    </div>
    <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />
    <HorizontalDivider className="block border-light-silver md:hidden  my-8  self-stretch" />
    {/* Right Column */}
    <div className="space-y-8">
      <AboutCommunity />
      <AmenitiesCard />
      <PropertyManagement />
    </div>
  </div>
);

export default PropertyInfoTab;
