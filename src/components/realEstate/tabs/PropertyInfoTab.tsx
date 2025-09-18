import React from "react";
import { useParams } from "react-router-dom";
import { usePropertyDetails } from "../../../hooks/usePropertyDetails";
import PropertyDetails from "../PropertyInfo/PropertyDetails";
import PropertyFeatures from "../PropertyInfo/PropertyFeatures";
import PropertyDescription from "../PropertyInfo/PropertyDescription";
import AboutCommunity from "../PropertyInfo/AboutCommunity";
import AmenitiesCard from "../PropertyInfo/AmenitiesCard";
import PropertyManagement from "../PropertyInfo/PropertyManagement";
import VerticalDivider from "../../common/VerticalDivider";
import HorizontalDivider from "../../common/HorizontalDivider";

const PropertyInfoTab: React.FC = () => {
  const { assetId } = useParams();
  const { loading, error, model } = usePropertyDetails(assetId);

  if (loading) return <div>Loading…</div>;
  if (error) return <div className="text-red-600">{error.message}</div>;
  if (!model) return <div>Property not found</div>;

  const info = model.info;

  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* Left Column */}
      <div className="space-y-8 ">
        <PropertyDetails features={info.features} />

        <PropertyFeatures paragraphs={info.details} />

        <PropertyDescription text={info.description ?? ""} />
      </div>

      <VerticalDivider className="hidden border-light-silver lg:block mx-6 h-auto self-stretch min-h-[600px]" />
      <HorizontalDivider className="block border-light-silver md:hidden  my-8  self-stretch" />

      {/* Right Column */}
      <div className="space-y-8">
        <AboutCommunity
          community={{
            text: info.community.text ?? "",
            mapCoords: info.community.map,
          }}
        />

        <AmenitiesCard items={info.amenities} />

        <PropertyManagement mgmt={info.management} />
      </div>
    </div>
  );
};

export default PropertyInfoTab;
