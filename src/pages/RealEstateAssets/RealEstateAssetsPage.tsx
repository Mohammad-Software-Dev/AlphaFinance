import { Button } from "../../components/common/Button";
import GeneralLayout from "../../components/layouts/GeneralLayout";
import RealEstateCard from "../../components/realEstateAssets/RealEstateCard";
import { useState } from "react";

const initialProperties = Array.from({ length: 8 }).map(() => ({
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

const RealEstateAssetsPage: React.FC = () => {
  const [properties, setProperties] = useState(initialProperties);

  const handleLoadMore = () => {
    setProperties((prev) => [...prev, ...initialProperties]);
  };

  return (
    <GeneralLayout>
      <div
        className="
          grid gap-y-14 gap-x-4
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          [@media(min-width:1920px)]:grid-cols-4
          [@media(min-width:2560px)]:grid-cols-5
          [@media(min-width:3840px)]:grid-cols-6
        "
      >
        {properties.map((property, idx) => (
          <RealEstateCard key={idx} {...property} />
        ))}
      </div>
      <div className="flex justify-start my-8">
        <Button variant="link" onClick={handleLoadMore}>
          Show more...
        </Button>
      </div>
    </GeneralLayout>
  );
};

export default RealEstateAssetsPage;
