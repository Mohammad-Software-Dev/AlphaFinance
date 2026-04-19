import React from "react";
import RealEstateCard from "../common/RealEstateCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useHotAssets } from "../../hooks/useHotAssets";

const HotAssets: React.FC = () => {
  const { loading, error, cards } = useHotAssets();

  if (loading) return <div>Loading…</div>;
  if (error) return <div className="text-red-600">{error.message}</div>;

  return (
    <div className="flex flex-col mt-2 lg:mt-0">
      <h4 className="font-medium md:font-normal mb-2">Hot Assets (Trending)</h4>
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        style={{ paddingRight: "8px", width: "100%" }}
        watchSlidesProgress={true}
      >
        {cards.map((property, idx) => (
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
