import React from "react";
import AssetOverview from "../AssetOverview";
import HorizontalDivider from "../../common/HorizontalDivider";
import StatCard from "../../dashnoard/StatCard";
import { Swiper, SwiperSlide } from "swiper/react";
const stats = [
  {
    title: "Asset Value",
    value: "53.000",
    label: "Total",
    percent: "+53%",
    percentColor: "teal",
  },
  {
    title: "Total Dividends",
    value: "53.000",
    label: "Last",
    percent: "+53%",
    percentColor: "sand",
    secondLabel: "Quarter",
  },
  {
    title: "Capital Growth",
    value: "53.000",
    label: "Last",
    percent: "+53%",
    percentColor: "teal",
    secondLabel: "3 Months",
  },
  {
    title: "ROI",
    value: "53.000",
    label: "Total",
    percent: "+53%",
    percentColor: "orange",
    secondLabel: "ROI",
  },
] as const;
const RealEstateRightSection: React.FC = () => (
  <div className="flex flex-col gap-8 ">
    <AssetOverview />
    <HorizontalDivider className=" border-light-silver   my-2  self-stretch" />
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
  </div>
);

export default RealEstateRightSection;
