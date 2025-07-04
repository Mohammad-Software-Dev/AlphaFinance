import React from "react";
import RealEstateCard from "../realEstateAssets/RealEstateCard";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className="flex flex-col mt-2 lg:mt-0">
      <h4 className="font-medium md:font-normal mb-2">Hot Assets (Trending)</h4>
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        style={{ paddingRight: "8px", width: "100%" }}
        watchSlidesProgress={true}
      >
        {properties.map((property, idx) => (
          <SwiperSlide
            key={idx}
            className="max-w-[80vw] lg:max-w-[20vw] 4xl:max-w-[10vw]"
          >
            <RealEstateCard {...property} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotAssets;
