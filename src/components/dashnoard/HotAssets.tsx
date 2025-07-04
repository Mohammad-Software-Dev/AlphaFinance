import React from "react";
import RealEstateCard from "../realEstateAssets/RealEstateCard";

const properties = Array.from({ length: 8 }).map(() => ({
  code: "DXBDIFC007",
  title: "Lorem ipsum dolor sit amet consectetur.",
  roi: "11.6%",
  price: "8 AED",
  investors: 790,
  foundedPercent: 40,
  available: 4000,
  views: 2400,
  status: "DXB",
  comingSoon: true,
}));

const HotAssets: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h4 className="font-medium md:font-normal mb-6">Hot Assets (Trending)</h4>

      <div className="flex gap-6 max-w-screen overflow-auto  mb-3 pb-8">
        {properties.map((property, idx) => (
          <div className="min-w-1/5">
            <RealEstateCard key={idx} {...property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotAssets;
