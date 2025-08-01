import React from "react";
import AssetOverview from "../AssetOverview";
import StatCard from "../../dashnoard/StatCard";
import { Swiper, SwiperSlide } from "swiper/react";
import HorizontalDivider from "../../common/HorizontalDivider";
import type { PropertyType } from "../../../data/properties";
import { getStats } from "../../../helper/getStats";

const RealEstateRightSection: React.FC<{ property: PropertyType }> = ({
  property,
}) => {
  const stats = getStats(property);
  return (
    <div className="flex flex-col gap-8 ">
      <div className="hidden md:grid grid-cols-2 gap-6">
        {stats.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </div>
      <div className="block md:hidden py-6 w-full">
        <Swiper
          slidesPerView={1.15}
          spaceBetween={16}
          style={{ paddingRight: 8 }}
        >
          {stats.map((s) => (
            <SwiperSlide key={s.title}>
              <div className="pr-1">
                <StatCard {...s} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <HorizontalDivider className=" border-light-silver my-2  self-stretch" />
        <AssetOverview property={property} investClassName="md:mt-35" />
      </div>
    </div>
  );
};

export default RealEstateRightSection;
