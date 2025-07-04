import { useState } from "react";
import RealEstateCard from "../../common/RealEstateCard";
import { Button } from "../../common/Button";

const initialProperties = Array.from({ length: 10 }).map(() => ({
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

const Portfolio: React.FC = () => {
  const [properties, setProperties] = useState(initialProperties);

  const handleLoadMore = () => {
    setProperties((prev) => [...prev, ...initialProperties]);
  };

  return (
    <>
      <div
        className="
          grid gap-y-14 gap-x-4
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          [@media(min-width:1920px)]:grid-cols-5
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
    </>
  );
};

export default Portfolio;
